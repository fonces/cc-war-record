import { useParams, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import styled from "styled-components";
import {
  PageContainer,
  PageTitleContainer,
  PageTitle,
  PageDescription,
  Button,
  Icon,
  JobIcon,
  Dialog,
  VirtualTable,
  TableRow,
  TableCell,
  StatsGrid,
  StatCard,
  StatLabel,
  StatValue,
  StatDescription,
  type VirtualTableColumn,
  IconicButton,
} from "@/components/ui";
import { useTranslation } from "@/hooks";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { fadeIn } from "@/styles/animation";
import { JOB_INFO } from "@/types/jobs";
import { getScrollbarWidth } from "@/utils";
import { formatDateTable } from "@/utils/uuid";
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

// 戻るボタンコンテナ
const StyledBackButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[6]};
  display: flex;
  justify-content: space-between;
  animation: ${fadeIn} 0.6s ease-out 0.2s backwards;
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
      <StatsGrid>
        <StatCard>
          <StatLabel>{t("pages.historyDetail.matchesCount")}</StatLabel>
          <StatValue>{stats.totalMatches}</StatValue>
          <StatDescription>{t("pages.historyDetail.totalMatches", { count: stats.totalMatches })}</StatDescription>
        </StatCard>
        <StatCard>
          <StatLabel>{t("pages.historyDetail.results.win")}</StatLabel>
          <StatValue $type="win">{stats.wins}</StatValue>
          <StatDescription>{stats.totalMatches > 0 ? `${((stats.wins / stats.totalMatches) * 100).toFixed(1)}%` : "0%"}</StatDescription>
        </StatCard>
        <StatCard>
          <StatLabel>{t("pages.historyDetail.results.defeat")}</StatLabel>
          <StatValue $type="defeat">{stats.defeats}</StatValue>
          <StatDescription>{stats.totalMatches > 0 ? `${((stats.defeats / stats.totalMatches) * 100).toFixed(1)}%` : "0%"}</StatDescription>
        </StatCard>
        <StatCard>
          <StatLabel>{t("pages.historyDetail.winRate")}</StatLabel>
          {0 < stats.totalMatches ? (
            <StatValue $type="winRate" $winRate={stats.winRate}>
              {stats.winRate.toFixed(1)}%
            </StatValue>
          ) : (
            <StatValue>--%</StatValue>
          )}
          <StatDescription>{t("pages.historyDetail.overall")}</StatDescription>
        </StatCard>
      </StatsGrid>

      {/* テーブル */}
      <VirtualTable
        data={allMatches}
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
            <StyledDateCell width={columnWidths.date}>{formatDateTable(match.recordedAt)}</StyledDateCell>
            <TableCell width={columnWidths.result}>
              <StyledWinBadge $isWin={match.isWin}>{match.isWin ? t("pages.historyDetail.results.win") : t("pages.historyDetail.results.defeat")}</StyledWinBadge>
            </TableCell>
            {isCurrent && (
              <TableCell width={columnWidths.actions}>
                <IconicButton
                  $type="danger"
                  icon={<Icon name="delete" size={16} />}
                  onClick={() => handleOpenDeleteDialog(match.uuid, match.characterName, formatDateTable(match.recordedAt))}
                  title={t("match.deleteMatch")}
                />
              </TableCell>
            )}
          </TableRow>
        )}
      />

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
