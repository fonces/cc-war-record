import { useNavigate } from "@tanstack/react-router";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { PageContainer, PageTitle, PageDescription, PageTitleContainer } from "@/components/ui";
import { usePageTitle } from "@/hooks/usePageTitle";
import { EmptyState } from "@/features/home/components/EmptyState";
import { DailyWinLossChart } from "./DailyWinLossChart";
import { JobWinRateRadarChart } from "./JobWinRateRadarChart";
import { HourlyWinLossChart } from "./HourlyWinLossChart";
import { WeeklyWinLossChart } from "./WeeklyWinLossChart";
import { JobUsageRatePieChart } from "./JobUsageRatePieChart";
import { useTranslation } from "@/hooks";

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
        <PageTitle>{t("pages.graphs.title")}</PageTitle>
      </PageTitleContainer>
      <PageDescription>{latestHistory ? t("pages.graphs.descriptionWithSeason", { seasonName: latestHistory.seasonName }) : t("pages.graphs.description")}</PageDescription>

      {latestHistory ? (
        <>
          <DailyWinLossChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <HourlyWinLossChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <WeeklyWinLossChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <JobUsageRatePieChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <JobWinRateRadarChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
        </>
      ) : (
        <EmptyState onCreateSeason={handleCreateSeason} />
      )}
    </PageContainer>
  );
};
