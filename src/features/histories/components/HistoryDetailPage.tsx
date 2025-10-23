import { useParams, useNavigate } from "@tanstack/react-router";
import { useMemo, useEffect } from "react";
import styled from "styled-components";
import { PageContainer, PageTitleContainer, PageTitle, PageDescription, Button, Icon, StatsGrid, StatCard, StatLabel, StatValue, StatDescription } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { fadeIn } from "@/styles/animation";
import { HistoryDetailTable } from "./HistoryDetailTable";
import type { MatchRecord } from "@/types";

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

  // マッチを削除
  const handleDeleteMatch = (matchUuid: string) => {
    if (isCurrent) {
      deleteMatchRecord(matchUuid);
    }
  };

  // 履歴が見つからない場合は履歴ページに遷移
  useEffect(() => {
    if (!history) {
      navigate({ to: "/histories" });
    }
  }, [history, navigate]);

  if (!history) {
    return null;
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
      <HistoryDetailTable matches={allMatches} isCurrent={isCurrent} onDeleteMatch={handleDeleteMatch} />

      <StyledBackButtonContainer>
        <Button variant="outline" size="sm" onClick={() => navigate({ to: "/histories" })}>
          <Icon name="back" size={16} />
          {t("pages.historyDetail.backToList")}
        </Button>
      </StyledBackButtonContainer>
    </PageContainer>
  );
};
