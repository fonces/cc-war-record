import styled from "styled-components";
import { PageContainer, PageTitle, PageDescription, PageTitleContainer, StatsGrid, StatCard, StatLabel, StatValue, StatDescription } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { usePageTitle } from "@/hooks/usePageTitle";
import { sendEvent } from "@/lib/analytics";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { slideDown } from "@/styles/animation";
import { HistoryTable } from "./HistoryTable";

// エラー表示
const StyledErrorMessage = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => (theme.isDark ? "rgba(239, 68, 68, 0.15)" : "rgba(239, 68, 68, 0.1)")};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.error[600]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  font-size: 0.875rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  animation: ${slideDown} 0.3s ease-out;

  button {
    margin-top: ${({ theme }) => theme.spacing[2]};
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.error[700]};
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    transition: color ${({ theme }) => theme.transitions.base};

    &:hover {
      color: ${({ theme }) => theme.colors.error[900]};
    }
  }
`;

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
        <StyledErrorMessage>
          <div>
            {t("common.error")}: {error}
          </div>
          <button onClick={clearError}>{t("common.close")}</button>
        </StyledErrorMessage>
      )}

      {/* 統計情報カード */}
      {histories.length > 0 && (
        <StatsGrid>
          <StatCard>
            <StatLabel>{t("pages.histories.stats")}</StatLabel>
            <StatValue>{histories.length}</StatValue>
            <StatDescription>{t("pages.histories.totalSeasons", { count: histories.length })}</StatDescription>
          </StatCard>
          <StatCard>
            <StatLabel>{t("pages.histories.latestCreated")}</StatLabel>
            <StatValue>{new Date(sortedHistories[0]?.createdAt).toLocaleDateString(locale, { month: "numeric", day: "numeric" })}</StatValue>
            <StatDescription>{new Date(sortedHistories[0]?.createdAt).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}</StatDescription>
          </StatCard>
        </StatsGrid>
      )}

      {/* 履歴テーブル */}
      <HistoryTable histories={sortedHistories} isLoading={isLoading} onDelete={handleDelete} />
    </PageContainer>
  );
};
