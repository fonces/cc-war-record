import { useMemo, useState } from "react";
import styled from "styled-components";
import { VirtualTable, TableRow, TableCell, Icon, JobIcon, IconicButton, Dialog, type VirtualTableColumn } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { JOB_INFO } from "@/types/jobs";
import { getScrollbarWidth, formatDate } from "@/utils";
import type { MatchRecord } from "@/types";

// キャラクター名セル
const StyledCharacterNameCell = styled(TableCell)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  padding-left: calc(${({ theme }) => theme.spacing[6]} + 8px);

  ${TableRow}:hover & {
    color: #26a1df;
  }
`;

// 作成日時セル
const StyledDateCell = styled(TableCell)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8125rem;
  white-space: nowrap;
`;

// ジョブセル
const StyledJobCell = styled(TableCell)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledJobShortName = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// 勝敗バッジ
const StyledWinBadge = styled.span<{ $isWin: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: 60px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ $isWin }) =>
    $isWin
      ? "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.15) 100%)"
      : "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%)"};
  color: ${({ theme, $isWin }) => ($isWin ? theme.colors.win[700] : theme.colors.defeat[700])};
  border: 1px solid ${({ $isWin }) => ($isWin ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)")};

  ${TableRow}:hover & {
    box-shadow: ${({ $isWin }) => ($isWin ? "0 4px 12px rgba(34, 197, 94, 0.2)" : "0 4px 12px rgba(239, 68, 68, 0.2)")};
  }
`;

type HistoryDetailTableProps = {
  /** マッチレコード一覧（キャラクター名付き） */
  matches: (MatchRecord & { characterName: string })[];
  /** 現在のシーズンかどうか */
  isCurrent: boolean;
  /** マッチ削除ハンドラー */
  onDeleteMatch: (matchUuid: string) => void;
};

/**
 * 履歴詳細テーブルコンポーネント
 * シーズンの詳細マッチ記録を表示
 */
export const HistoryDetailTable = ({ matches, isCurrent, onDeleteMatch }: HistoryDetailTableProps) => {
  const { t } = useTranslation();

  // 削除ダイアログの状態管理
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [matchToDelete, setMatchToDelete] = useState<{
    uuid: string;
    characterName: string;
    date: string;
  } | null>(null);

  // 削除ダイアログを開く
  const handleOpenDeleteDialog = (matchUuid: string, characterName: string, date: string) => {
    setMatchToDelete({ uuid: matchUuid, characterName, date });
    setDeleteDialogOpen(true);
  };

  // 削除をキャンセル
  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
    setMatchToDelete(null);
  };

  // 削除を確定
  const handleConfirmDelete = () => {
    if (matchToDelete) {
      onDeleteMatch(matchToDelete.uuid);
      setDeleteDialogOpen(false);
      setMatchToDelete(null);
    }
  };

  // ヘッダーセルの幅設定
  const columnWidths = useMemo(
    () => ({
      character: undefined, // flex: 1
      job: "120px",
      date: "180px",
      result: "108px",
      actions: "84px",
    }),
    [],
  );

  // テーブルカラム定義
  const columns: VirtualTableColumn[] = useMemo(() => {
    const scrollbarWidth = getScrollbarWidth();
    const baseColumns: VirtualTableColumn[] = [
      { key: "character", label: t("pages.historyDetail.columns.character"), width: undefined },
      { key: "job", label: t("pages.historyDetail.columns.job"), width: "120px" },
      { key: "date", label: t("pages.historyDetail.columns.date"), width: "180px" },
      { key: "result", label: t("pages.historyDetail.columns.result"), width: !isCurrent ? `${108 + scrollbarWidth}px` : "108px" },
    ];

    if (isCurrent) {
      baseColumns.push({ key: "actions", label: t("match.actions"), width: isCurrent ? `${84 + scrollbarWidth}px` : "84px" });
    }

    return baseColumns;
  }, [t, isCurrent]);

  return (
    <>
      <VirtualTable
        data={matches}
        columns={columns}
        rowHeight={66}
        overscan={5}
        height="calc(100dvh - 380px)"
        emptyText={t("pages.historyDetail.emptyState")}
        getRowKey={(match: MatchRecord & { characterName: string }) => match.uuid}
        renderRow={(match: MatchRecord & { characterName: string }) => (
          <TableRow>
            <StyledCharacterNameCell width={columnWidths.character}>{match.characterName}</StyledCharacterNameCell>
            <StyledJobCell width={columnWidths.job}>
              <JobIcon job={match.job} size={24} />
              <StyledJobShortName>{JOB_INFO[match.job].shortName}</StyledJobShortName>
            </StyledJobCell>
            <StyledDateCell width={columnWidths.date}>{formatDate(match.recordedAt)}</StyledDateCell>
            <TableCell width={columnWidths.result}>
              <StyledWinBadge $isWin={match.isWin}>{match.isWin ? t("pages.historyDetail.results.win") : t("pages.historyDetail.results.defeat")}</StyledWinBadge>
            </TableCell>
            {isCurrent && (
              <TableCell width={columnWidths.actions}>
                <IconicButton
                  $type="danger"
                  icon={<Icon name="delete" size={16} />}
                  onClick={() => handleOpenDeleteDialog(match.uuid, match.characterName, formatDate(match.recordedAt))}
                  title={t("match.deleteMatch")}
                />
              </TableCell>
            )}
          </TableRow>
        )}
      />

      {/* 削除確認ダイアログ */}
      {isCurrent && (
        <Dialog
          isOpen={deleteDialogOpen}
          title={t("match.confirmDelete")}
          confirmText={t("match.confirmDeleteButton")}
          confirmType="danger"
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        >
          {t("match.deleteConfirmation", {
            characterName: matchToDelete?.characterName,
            date: matchToDelete?.date,
          })}
        </Dialog>
      )}
    </>
  );
};
