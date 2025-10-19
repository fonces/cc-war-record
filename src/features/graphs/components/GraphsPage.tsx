import { useNavigate } from "@tanstack/react-router";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { PageContainer, PageTitle, PageDescription, PageTitleContainer } from "@/components/ui";
import { usePageTitle } from "@/hooks/usePageTitle";
import { EmptyState } from "@/features/home/components/EmptyState";
import { DailyWinDefeatChart } from "./DailyWinDefeatChart";
import { JobWinRateRadarChart } from "./JobWinRateRadarChart";
import { HourlyWinDefeatChart } from "./HourlyWinDefeatChart";
import { WeeklyWinDefeatChart } from "./WeeklyWinDefeatChart";
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
          <DailyWinDefeatChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <HourlyWinDefeatChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <WeeklyWinDefeatChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <JobUsageRatePieChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <JobWinRateRadarChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
        </>
      ) : (
        <EmptyState onCreateSeason={handleCreateSeason} />
      )}
    </PageContainer>
  );
};
