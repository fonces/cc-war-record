import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { Button, IconicButton, Icon, Dialog, VirtualTable, TableRow, TableCell, type VirtualTableColumn } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { fadeIn } from "@/styles/animation";
import { getScrollbarWidth } from "@/utils";
import { formatDateTable } from "@/utils/uuid";
import type { History } from "@/types";

type HistoryTableProps = {
  /** 履歴一覧 */
  histories: History[];
  /** ローディング状態 */
  isLoading?: boolean;
  /** 削除ハンドラー */
  onDelete: (historyUuid: string) => void;
};

// シーズン名セル
const StyledSeasonNameCell = styled(TableCell)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  padding-left: calc(${({ theme }) => theme.spacing[6]} + 8px);

  ${TableRow}:hover &::before {
    opacity: 1;
  }

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

// ボタングループ
const StyledButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: center;
  align-items: center;
`;

// モーダルコンテンツ
const StyledDialogContent = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
`;

const StyledDialogDescription = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.6;
`;

const StyledDialogActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  justify-content: flex-end;
`;

// 空状態表示
const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[6]};
  text-align: center;
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.base};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradients.primary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border};
  }

  animation: ${fadeIn} 0.5s ease-out;
`;

const StyledEmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[5]};
  box-shadow: 0 8px 24px rgba(38, 161, 223, 0.3);

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StyledEmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const StyledEmptyDescription = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 400px;
`;

/**
 * 履歴テーブルコンポーネント
 * テーブル形式でシーズン履歴一覧を表示
 */
export const HistoryTable = ({ histories, isLoading = false, onDelete }: HistoryTableProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [historyToDelete, setHistoryToDelete] = useState<{
    uuid: string;
    seasonName: string;
  } | null>(null);

  // カラム幅設定
  const columnWidths = useMemo(
    () => ({
      seasonName: undefined, // flex: 1
      date: "220px",
      actions: "160px",
    }),
    [],
  );

  // テーブルカラム定義
  const columns: VirtualTableColumn[] = useMemo(() => {
    const scrollBarWidth = getScrollbarWidth();
    return [
      { key: "seasonName", label: t("pages.historyDetail.columns.season"), width: undefined },
      { key: "date", label: t("pages.historyDetail.columns.date"), width: "220px" },
      { key: "actions", label: t("match.actions"), width: `${160 + scrollBarWidth}px` },
    ];
  }, [t]);

  // 履歴詳細へ遷移
  const handleNavigateToDetail = (historyUuid: string) => {
    navigate({ to: `/histories/${historyUuid}` });
  };

  // 削除ダイアログを開く
  const handleOpenDeleteDialog = (historyUuid: string, seasonName: string) => {
    setHistoryToDelete({ uuid: historyUuid, seasonName });
    setDeleteDialogOpen(true);
  };

  // 削除をキャンセル
  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
    setHistoryToDelete(null);
  };

  // 削除を確定
  const handleConfirmDelete = () => {
    if (historyToDelete) {
      onDelete(historyToDelete.uuid);
      setDeleteDialogOpen(false);
      setHistoryToDelete(null);
    }
  };

  // 履歴が0件の場合
  if (!isLoading && histories.length === 0) {
    return (
      <StyledEmptyState>
        <StyledEmptyIcon>
          <Icon name="history" size={24} />
        </StyledEmptyIcon>
        <StyledEmptyTitle>{t("pages.histories.emptyState")}</StyledEmptyTitle>
        <StyledEmptyDescription>{t("pages.histories.createFirstSeason")}</StyledEmptyDescription>
      </StyledEmptyState>
    );
  }

  // 履歴テーブル表示
  return (
    <>
      <VirtualTable
        data={histories}
        columns={columns}
        rowHeight={68}
        overscan={5}
        height="calc(100dvh - 320px)"
        isLoading={isLoading}
        loadingText={t("common.loading")}
        emptyText={t("pages.histories.emptyState")}
        getRowKey={(history: History) => history.uuid}
        renderRow={(history: History) => {
          const isLatestHistory = history.uuid === histories[0]?.uuid;

          return (
            <TableRow>
              <StyledSeasonNameCell width={columnWidths.seasonName}>{history.seasonName}</StyledSeasonNameCell>
              <StyledDateCell width={columnWidths.date}>{formatDateTable(history.createdAt)}</StyledDateCell>
              <TableCell width={columnWidths.actions}>
                <StyledButtonGroup>
                  <IconicButton
                    icon={<Icon name="detail" size={16} />}
                    onClick={() => handleNavigateToDetail(isLatestHistory ? "current" : history.uuid)}
                    title={t("pages.histories.detail")}
                  />
                  <IconicButton
                    $type="danger"
                    icon={<Icon name="delete" size={16} />}
                    onClick={() => handleOpenDeleteDialog(history.uuid, history.seasonName)}
                    title={t("pages.histories.delete")}
                    disabled={isLatestHistory}
                  />
                </StyledButtonGroup>
              </TableCell>
            </TableRow>
          );
        }}
      />

      {/* 削除確認ダイアログ */}
      <Dialog isOpen={deleteDialogOpen} onClose={handleCancelDelete} title={t("pages.histories.confirmDelete")}>
        <StyledDialogContent>
          <StyledDialogDescription>{t("pages.histories.deleteDescription", { seasonName: historyToDelete?.seasonName })}</StyledDialogDescription>
          <StyledDialogActions>
            <Button variant="outline" onClick={handleCancelDelete}>
              {t("common.cancel")}
            </Button>
            <Button variant="primary" onClick={handleConfirmDelete}>
              {t("character.confirmDelete")}
            </Button>
          </StyledDialogActions>
        </StyledDialogContent>
      </Dialog>
    </>
  );
};
