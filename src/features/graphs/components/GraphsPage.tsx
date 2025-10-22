import { useNavigate } from "@tanstack/react-router";
import styled from "styled-components";
import { EmptyState } from "@/components/layout";
import { PageContainer, PageTitle, PageDescription, PageTitleContainer } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { DailyWinDefeatChart } from "./DailyWinDefeatChart";
import { HourlyWinDefeatChart } from "./HourlyWinDefeatChart";
import { JobUsageRatePieChart } from "./JobUsageRatePieChart";
import { JobWinRateRadarChart } from "./JobWinRateRadarChart";
import { WeeklyWinDefeatChart } from "./WeeklyWinDefeatChart";

const StyledGraphsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};
  animation: fadeIn 0.5s ease-out;
`;

const StyledSeasonBadge = styled.div`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing[2]};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

/**
 * グラフ画面コンポーネント
 * 現シーズンの戦績をチャート表示
 */
export const GraphsPage = () => {
  const { t } = useTranslation();
  usePageTitle(t("pages.graphs.title"));
  const navigate = useNavigate();
  const { histories } = useHistoryStore();
  const { characters, matchRecords } = useCharacterStore();

  const latestHistory = histories.length > 0 ? histories[histories.length - 1] : null;

  const handleCreateSeason = () => {
    navigate({ to: "/new" });
  };

  return (
    <PageContainer>
      <PageTitleContainer>
        <div>
          <PageTitle>{t("pages.graphs.title")}</PageTitle>
          {latestHistory && <StyledSeasonBadge>{latestHistory.seasonName}</StyledSeasonBadge>}
        </div>
      </PageTitleContainer>
      <PageDescription>{latestHistory ? t("pages.graphs.descriptionWithSeason", { seasonName: latestHistory.seasonName }) : t("pages.graphs.description")}</PageDescription>

      {latestHistory ? (
        <StyledGraphsGrid>
          <DailyWinDefeatChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <HourlyWinDefeatChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <WeeklyWinDefeatChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <JobUsageRatePieChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <JobWinRateRadarChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
        </StyledGraphsGrid>
      ) : (
        <EmptyState onCreateSeason={handleCreateSeason} />
      )}
    </PageContainer>
  );
};
