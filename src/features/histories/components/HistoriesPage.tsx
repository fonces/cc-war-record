import styled from "styled-components";
import { PageContainer, PageTitle, PageDescription, PageTitleContainer } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { usePageTitle } from "@/hooks/usePageTitle";
import { sendEvent } from "@/lib/analytics";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { fadeIn, slideDown } from "@/styles/animation";
import { HistoryTable } from "./HistoryTable";

const StyledStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  animation: ${fadeIn} 0.5s ease-out;
`;

const StyledStatCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[5]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradients.primary};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl}, ${({ theme }) => theme.shadows.glow};
  }
`;

const StyledStatLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const StyledStatValue = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`;

const StyledStatDescription = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

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

const StyledTableWrapper = styled.div`
  animation: ${fadeIn} 0.5s ease-out 0.1s both;
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
        <StyledStatsGrid>
          <StyledStatCard>
            <StyledStatLabel>{t("pages.histories.stats")}</StyledStatLabel>
            <StyledStatValue>{histories.length}</StyledStatValue>
            <StyledStatDescription>{t("pages.histories.totalSeasons", { count: histories.length })}</StyledStatDescription>
          </StyledStatCard>
          <StyledStatCard>
            <StyledStatLabel>{t("pages.histories.latestCreated")}</StyledStatLabel>
            <StyledStatValue>{new Date(sortedHistories[0]?.createdAt).toLocaleDateString(locale, { month: "numeric", day: "numeric" })}</StyledStatValue>
            <StyledStatDescription>{new Date(sortedHistories[0]?.createdAt).toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })}</StyledStatDescription>
          </StyledStatCard>
        </StyledStatsGrid>
      )}

      {/* 履歴テーブル */}
      <StyledTableWrapper>
        <HistoryTable histories={sortedHistories} isLoading={isLoading} onDelete={handleDelete} />
      </StyledTableWrapper>
    </PageContainer>
  );
};
