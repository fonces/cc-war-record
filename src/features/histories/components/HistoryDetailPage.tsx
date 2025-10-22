import { useParams, useNavigate } from "@tanstack/react-router";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { PageContainer, PageTitleContainer, PageTitle, PageDescription, Button, Icon, JobIcon, Dialog } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { JOB_INFO } from "@/types/jobs";
import { getScrollbarWidth, getWinRateColor } from "@/utils";
import { formatDateTable } from "@/utils/uuid";
import type { MatchRecord } from "@/types";

// アニメーション
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

// 統計グリッド
const StyledStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  animation: ${fadeIn} 0.6s ease-out;
`;

// 統計カード
const StyledStatCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid rgba(38, 161, 223, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 24px rgba(38, 161, 223, 0.15),
      0 0 0 1px rgba(38, 161, 223, 0.1);
  }
`;

const StyledStatLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[600]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const StyledStatValue = styled.div<{ $type?: "default" | "win" | "defeat" | "winRate"; $winRate?: number }>`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing[1]};

  ${({ theme, $type, $winRate }) => {
    if ($type === "win") {
      return `color: ${theme.colors.win[600]};`;
    }
    if ($type === "defeat") {
      return `color: ${theme.colors.defeat[600]};`;
    }
    if ($type === "winRate" && $winRate !== undefined) {
      return `color: ${getWinRateColor($winRate, theme)};`;
    }
    // デフォルトはグラデーション
    return `
      background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `;
  }}
`;

const StyledStatDescription = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

// テーブルコンテナ
const StyledTableContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid rgba(38, 161, 223, 0.1);
  margin-top: ${({ theme }) => theme.spacing[6]};
  height: calc(100dvh - 380px);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.6s ease-out 0.1s backwards;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }

  &:hover {
    box-shadow:
      0 12px 40px rgba(38, 161, 223, 0.12),
      0 0 0 1px rgba(38, 161, 223, 0.1);
  }
`;

// テーブル
const StyledTable = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`;

// テーブルヘッダー
const StyledTableHeader = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-bottom: 2px solid rgba(38, 161, 223, 0.1);
  position: sticky;
  top: 0;
  z-index: 2;
`;

const StyledHeaderCell = styled.div<{ width?: string }>`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  text-transform: uppercase;
  letter-spacing: 0.05em;
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
  border-bottom: 1px solid rgba(38, 161, 223, 0.05);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: rgba(38, 161, 223, 0.03);

    &::before {
      width: 4px;
    }
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
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  padding-left: calc(${({ theme }) => theme.spacing[6]} + 8px);

  ${StyledTableRow}:hover & {
    color: #26a1df;
  }
`;

// 作成日時セル
const StyledDateCell = styled(StyledTableCell)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: "Courier New", monospace;
  font-size: 0.8125rem;
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
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-family: "Courier New", monospace;
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

  ${StyledTableRow}:hover & {
    box-shadow: ${({ $isWin }) => ($isWin ? "0 4px 12px rgba(34, 197, 94, 0.2)" : "0 4px 12px rgba(239, 68, 68, 0.2)")};
  }
`;

// 削除ボタン
const StyledDeleteButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(239, 68, 68, 0.3);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.error[500]};
    border-color: ${({ theme }) => theme.colors.error[500]};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }
`;

// 空状態表示
const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 0.875rem;
  gap: ${({ theme }) => theme.spacing[4]};

  &::before {
    content: "📊";
    font-size: 4rem;
    opacity: 0.5;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const StyledEmptyStateText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

// 戻るボタンコンテナ
const StyledBackButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
  display: flex;
  justify-content: space-between;
  animation: ${fadeIn} 0.6s ease-out 0.2s backwards;
`;

const StyledBackButton = styled(Button)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(38, 161, 223, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(38, 161, 223, 0.1);
    border-color: rgba(38, 161, 223, 0.3);
    transform: translateX(-4px);
    box-shadow: 0 4px 12px rgba(38, 161, 223, 0.15);
  }
`;

/**
 * シーズン履歴詳細画面コンポーネント
 * 特定シーズンの詳細戦績を表示
 * `/histories/current`の場合は現在のマッチレコードを表示
 */
export const HistoryDetailPage = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams({ from: "/histories/$id" });
  const navigate = useNavigate();
  const { getHistoryByUuid, getMatchRecordsForSeason, histories } = useHistoryStore();
  const { deleteMatchRecord } = useCharacterStore();
  const parentRef = useRef<HTMLDivElement>(null);

  // 現在の言語に応じたロケールを取得
  const locale = i18n.language === "ja" ? "ja-JP" : i18n.language === "ko" ? "ko-KR" : "en-US";

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

  // 統計情報を計算
  const stats = useMemo(() => {
    const totalMatches = allMatches.length;
    const wins = allMatches.filter((m) => m.isWin).length;
    const defeats = totalMatches - wins;
    const winRate = totalMatches > 0 ? (wins / totalMatches) * 100 : 0;

    return { totalMatches, wins, defeats, winRate };
  }, [allMatches]);

  // ヘッダーセルの幅設定
  const columnWidths = useMemo(() => {
    const scrollbarWidth = getScrollbarWidth();
    return {
      character: undefined, // flex: 1
      job: "120px",
      date: "180px",
      result: !isCurrent ? `${108 + scrollbarWidth}px` : "108px",
      actions: isCurrent ? `${84 + scrollbarWidth}px` : "84px",
    };
  }, [isCurrent]);

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
        {t("pages.historyDetail.createdDate")}: {new Date(history.createdAt).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}
      </PageDescription>

      {/* 統計カード */}
      <StyledStatsGrid>
        <StyledStatCard>
          <StyledStatLabel>{t("pages.historyDetail.matchesCount")}</StyledStatLabel>
          <StyledStatValue>{stats.totalMatches}</StyledStatValue>
          <StyledStatDescription>{t("pages.historyDetail.totalMatches", { count: stats.totalMatches })}</StyledStatDescription>
        </StyledStatCard>
        <StyledStatCard>
          <StyledStatLabel>{t("pages.historyDetail.results.win")}</StyledStatLabel>
          <StyledStatValue $type="win">{stats.wins}</StyledStatValue>
          <StyledStatDescription>{stats.totalMatches > 0 ? `${((stats.wins / stats.totalMatches) * 100).toFixed(1)}%` : "0%"}</StyledStatDescription>
        </StyledStatCard>
        <StyledStatCard>
          <StyledStatLabel>{t("pages.historyDetail.results.defeat")}</StyledStatLabel>
          <StyledStatValue $type="defeat">{stats.defeats}</StyledStatValue>
          <StyledStatDescription>{stats.totalMatches > 0 ? `${((stats.defeats / stats.totalMatches) * 100).toFixed(1)}%` : "0%"}</StyledStatDescription>
        </StyledStatCard>
        <StyledStatCard>
          <StyledStatLabel>{t("pages.historyDetail.winRate")}</StyledStatLabel>
          <StyledStatValue $type="winRate" $winRate={stats.winRate}>
            {stats.winRate.toFixed(1)}%
          </StyledStatValue>
          <StyledStatDescription>{t("pages.historyDetail.overall")}</StyledStatDescription>
        </StyledStatCard>
      </StyledStatsGrid>

      <StyledTableContainer>
        <StyledTable>
          {/* ヘッダー */}
          <StyledTableHeader>
            <StyledHeaderCell width={columnWidths.character}>{t("pages.historyDetail.columns.character")}</StyledHeaderCell>
            <StyledHeaderCell width={columnWidths.job}>{t("pages.historyDetail.columns.job")}</StyledHeaderCell>
            <StyledHeaderCell width={columnWidths.date}>{t("pages.historyDetail.columns.date")}</StyledHeaderCell>
            <StyledHeaderCell width={columnWidths.result}>{t("pages.historyDetail.columns.result")}</StyledHeaderCell>
            {isCurrent && <StyledHeaderCell width={columnWidths.actions}>{t("match.actions")}</StyledHeaderCell>}
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
                      <StyledTableCell width="108px">
                        <StyledWinBadge $isWin={match.isWin}>{match.isWin ? t("pages.historyDetail.results.win") : t("pages.historyDetail.results.defeat")}</StyledWinBadge>
                      </StyledTableCell>
                      {isCurrent && (
                        <StyledTableCell width="84px">
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
            <StyledEmptyState>
              <StyledEmptyStateText>{t("pages.historyDetail.emptyState")}</StyledEmptyStateText>
            </StyledEmptyState>
          )}
        </StyledTable>
      </StyledTableContainer>

      <StyledBackButtonContainer>
        <StyledBackButton variant="outline" size="sm" onClick={() => navigate({ to: "/histories" })}>
          <Icon name="back" size={16} />
          {t("pages.historyDetail.backToList")}
        </StyledBackButton>
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
