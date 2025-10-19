import { useParams, useNavigate } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import styled from "styled-components";
import { PageContainer, PageTitleContainer, PageTitle, PageDescription, Button, Icon, JobIcon, Dialog } from "@/components/ui";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { formatDateTable } from "@/utils/uuid";
import { JOB_INFO } from "@/types/jobs";
import type { MatchRecord } from "@/types";
import { useTranslation } from "@/hooks";

// テーブルコンテナ
const StyledTableContainer = styled.div`
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  height: calc(100dvh - 216px);
  display: flex;
  flex-direction: column;
`;

// テーブル
const StyledTable = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

// テーブルヘッダー
const StyledTableHeader = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StyledHeaderCell = styled.div<{ width?: string }>`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  white-space: nowrap;
  flex: ${({ width }) => (width ? "0 0 " + width : "1")};
  text-align: left;

  &:last-child {
    text-align: center;
  }
`;

// 仮想スクロールコンテナ
const StyledVirtualContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  min-height: 0;
`;

// テーブル行
const StyledTableRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

const StyledTableCell = styled.div<{ width?: string }>`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[900]};
  flex: ${({ width }) => (width ? "0 0 " + width : "1")};
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: center;
  }
`;

// キャラクター名セル
const StyledCharacterNameCell = styled(StyledTableCell)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

// 作成日時セル
const StyledDateCell = styled(StyledTableCell)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: "Courier New", monospace;
  white-space: nowrap;
`;

// ジョブセル
const StyledJobCell = styled(StyledTableCell)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledJobShortName = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-family: "Courier New", monospace;
`;

// 勝敗バッジ
const StyledWinBadge = styled.span<{ $isWin: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 0.75rem;
  background-color: ${({ theme, $isWin }) => ($isWin ? theme.colors.success[100] : theme.colors.error[100])};
  color: ${({ theme, $isWin }) => ($isWin ? theme.colors.success[700] : theme.colors.error[700])};
  width: 50px;
`;

// 削除ボタン
const StyledDeleteButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
`;

// 空状態表示
const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

// 戻るボタンコンテナ
const StyledBackButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
  display: flex;
  justify-content: space-between;
`;

/**
 * シーズン履歴詳細画面コンポーネント
 * 特定シーズンの詳細戦績を表示
 * `/histories/current`の場合は現在のマッチレコードを表示
 */
export const HistoryDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams({ from: "/histories/$id" });
  const navigate = useNavigate();
  const { getHistoryByUuid, getMatchRecordsForSeason, histories } = useHistoryStore();
  const { deleteMatchRecord } = useCharacterStore();
  const parentRef = useRef<HTMLDivElement>(null);

  // 削除ダイアログの状態管理
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [matchToDelete, setMatchToDelete] = useState<{
    uuid: string;
    characterName: string;
    date: string;
  } | null>(null);

  // currentの場合は最新のhistoryを使用
  const isCurrent = id === "current";
  const latestHistory = useMemo(() => histories[0], [histories]);

  // 履歴データを取得
  const history = useMemo(() => {
    if (isCurrent) {
      return latestHistory;
    }
    return getHistoryByUuid(id);
  }, [isCurrent, latestHistory, id, getHistoryByUuid]);

  // ページタイトルを設定（履歴データが取得できたらシーズン名を表示）
  usePageTitle(history ? t("pages.historyDetail.title", { seasonName: history.seasonName }) : t("pages.historyDetail.title", { seasonName: "" }));

  // 過去のシーズンのマッチレコードを取得
  const archivedMatchRecords = useMemo(() => {
    if (isCurrent) {
      // currentの場合は現在のマッチレコードを取得
      const { matchRecords } = useCharacterStore.getState();
      return matchRecords;
    }
    return getMatchRecordsForSeason(id);
  }, [isCurrent, id, getMatchRecordsForSeason]);

  // 全戦績を収集（アーカイブされたマッチレコード + 履歴内の戦績）
  const allMatches = useMemo(() => {
    if (!history) return [];

    const matches: (MatchRecord & { characterName: string })[] = [];

    // アーカイブされたマッチレコードを追加
    archivedMatchRecords.forEach((match: MatchRecord) => {
      // キャラクター名を取得
      let characterName = "不明";

      if (isCurrent) {
        // currentの場合はcharacterStoreから取得
        const { characters } = useCharacterStore.getState();
        const character = characters.find((c) => c.uuid === match.characterUuid);
        characterName = character?.name || "不明";
      } else {
        // 過去のシーズンの場合はcharacterStatsから検索
        const characterStats = history.characterStats.find((stats) => stats.character.uuid === match.characterUuid);
        characterName = characterStats?.character.name || "不明";
      }

      matches.push({
        ...match,
        characterName,
      });
    });

    // currentでない場合は、履歴内の戦績も追加（念のため）
    if (!isCurrent) {
      history.characterStats.forEach((stats) => {
        stats.recentMatches.forEach((match) => {
          // 重複チェック（アーカイブと履歴で重複する可能性があるため）
          const isDuplicate = matches.some((m) => m.uuid === match.uuid);
          if (!isDuplicate) {
            matches.push({
              ...match,
              characterName: stats.character.name,
            });
          }
        });
      });
    }

    // 記録日時で降順ソート（新しい順）
    return matches.sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime());
  }, [history, archivedMatchRecords, isCurrent]);

  // 仮想化設定
  const rowVirtualizer = useVirtualizer({
    count: allMatches.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 56, // 行の高さ（px）
    overscan: 5, // 表示領域外にレンダリングする行数
  });

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
    if (matchToDelete && isCurrent) {
      deleteMatchRecord(matchToDelete.uuid);
      setDeleteDialogOpen(false);
      setMatchToDelete(null);
    }
  };

  if (!history) {
    return (
      <PageContainer>
        <PageTitle>{t("pages.historyDetail.notFound")}</PageTitle>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>{history.seasonName}</PageTitle>
      </PageTitleContainer>
      <PageDescription>
        {t("pages.historyDetail.totalMatches", { count: allMatches.length })} / {t("pages.historyDetail.createdDate")}: {new Date(history.createdAt).toLocaleDateString("ja-JP")}
      </PageDescription>

      <StyledTableContainer>
        <StyledTable>
          {/* ヘッダー */}
          <StyledTableHeader>
            <StyledHeaderCell>{t("pages.historyDetail.columns.character")}</StyledHeaderCell>
            <StyledHeaderCell width="120px">{t("pages.historyDetail.columns.job")}</StyledHeaderCell>
            <StyledHeaderCell width="180px">{t("pages.historyDetail.columns.date")}</StyledHeaderCell>
            <StyledHeaderCell width="100px">{t("pages.historyDetail.columns.result")}</StyledHeaderCell>
            {isCurrent && <StyledHeaderCell width="80px">{t("match.actions")}</StyledHeaderCell>}
          </StyledTableHeader>

          {/* 仮想スクロールリスト */}
          {allMatches.length > 0 ? (
            <StyledVirtualContainer ref={parentRef}>
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  position: "relative",
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow: { index: number; start: number; size: number }) => {
                  const match = allMatches[virtualRow.index];
                  return (
                    <StyledTableRow
                      key={match.uuid}
                      style={{
                        transform: `translateY(${virtualRow.start}px)`,
                        height: `${virtualRow.size}px`,
                      }}
                    >
                      <StyledCharacterNameCell>{match.characterName}</StyledCharacterNameCell>
                      <StyledJobCell width="120px">
                        <JobIcon job={match.job} size={24} />
                        <StyledJobShortName>{JOB_INFO[match.job].shortName}</StyledJobShortName>
                      </StyledJobCell>
                      <StyledDateCell width="180px">{formatDateTable(match.recordedAt)}</StyledDateCell>
                      <StyledTableCell width="100px">
                        <StyledWinBadge $isWin={match.isWin}>{match.isWin ? t("pages.historyDetail.results.win") : t("pages.historyDetail.results.loss")}</StyledWinBadge>
                      </StyledTableCell>
                      {isCurrent && (
                        <StyledTableCell width="80px">
                          <StyledDeleteButton
                            variant="outline"
                            icon={<Icon name="delete" size={16} />}
                            onClick={() => handleOpenDeleteDialog(match.uuid, match.characterName, formatDateTable(match.recordedAt))}
                            title={t("match.deleteMatch")}
                          />
                        </StyledTableCell>
                      )}
                    </StyledTableRow>
                  );
                })}
              </div>
            </StyledVirtualContainer>
          ) : (
            <StyledEmptyState>{t("pages.historyDetail.emptyState")}</StyledEmptyState>
          )}
        </StyledTable>
      </StyledTableContainer>

      <StyledBackButtonContainer>
        <Button variant="outline" size="sm" onClick={() => navigate({ to: "/histories" })}>
          <Icon name="back" size={16} />
          {t("pages.historyDetail.backToList")}
        </Button>
      </StyledBackButtonContainer>

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
    </PageContainer>
  );
};
