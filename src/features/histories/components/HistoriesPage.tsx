import { EmptyState } from "@/components/layout";
import { PageContainer, PageTitle, PageDescription, PageTitleContainer, StatsGrid, StatCard, StatLabel, StatValue, StatDescription, Flush } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { usePageTitle } from "@/hooks/usePageTitle";
import { sendEvent } from "@/lib/analytics";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { formatShortDate, formatLongDate } from "@/utils";
import { HistoryTable } from "./HistoryTable";

/**
 * シーズン履歴一覧画面コンポーネント
 * シーズンの履歴一覧をテーブル形式で表示
 */
export const HistoriesPage = () => {
  const { t, i18n } = useTranslation();
  usePageTitle(t("pages.histories.title"));
  const { histories, isLoading, error, getSortedHistories, deleteHistory, clearError } = useHistoryStore();

  const { matchRecords } = useCharacterStore();

  // 日付順（新しい順）にソートされた履歴を取得
  const sortedHistories = getSortedHistories();

  // 現在の言語に応じたロケールを取得
  const locale = i18n.language === "ja" ? "ja-JP" : i18n.language === "ko" ? "ko-KR" : "en-US";

  /**
   * 履歴削除ハンドラー
   * 履歴と関連する全ての戦績記録を削除
   */
  const handleDelete = (historyUuid: string) => {
    // 関連する全ての戦績記録を削除
    const relatedMatchRecords = matchRecords.filter((m) => m.seasonUuid === historyUuid);

    // 各戦績記録を削除
    const { deleteMatchRecord } = useCharacterStore.getState();
    relatedMatchRecords.forEach((record) => {
      deleteMatchRecord(record.uuid);
    });

    // 履歴を削除
    deleteHistory(historyUuid);

    // 解析イベント送信
    sendEvent("histories", "delete");
  };

  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>{t("pages.histories.title")}</PageTitle>
      </PageTitleContainer>
      <PageDescription>{t("pages.histories.description")}</PageDescription>

      {/* エラー表示 */}
      {error && (
        <Flush type="error" onClose={clearError}>
          {error}
        </Flush>
      )}

      {/* 統計情報カード */}
      {0 < histories.length ? (
        <>
          <StatsGrid>
            <StatCard>
              <StatLabel>{t("pages.histories.stats")}</StatLabel>
              <StatValue>{histories.length}</StatValue>
              <StatDescription>{t("pages.histories.totalSeasons", { count: histories.length })}</StatDescription>
            </StatCard>
            <StatCard>
              <StatLabel>{t("pages.histories.latestCreated")}</StatLabel>
              <StatValue>{formatShortDate(sortedHistories[0]?.createdAt, locale)}</StatValue>
              <StatDescription>{formatLongDate(sortedHistories[0]?.createdAt, locale)}</StatDescription>
            </StatCard>
          </StatsGrid>

          {/* 履歴テーブル */}
          <HistoryTable histories={sortedHistories} isLoading={isLoading} onDelete={handleDelete} />
        </>
      ) : (
        <EmptyState icon="history" />
      )}
    </PageContainer>
  );
};
