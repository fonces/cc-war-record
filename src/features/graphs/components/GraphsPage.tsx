import { EmptyState } from "@/components/layout";
import { Page, PageTitle, PageDescription, PageTitleContainer, PageContainer } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { DailyWinDefeatChart } from "./DailyWinDefeatChart";
import { HourlyWinDefeatChart } from "./HourlyWinDefeatChart";
import { JobUsageRatePieChart } from "./JobUsageRatePieChart";
import { JobWinRateRadarChart } from "./JobWinRateRadarChart";
import { WeeklyWinDefeatChart } from "./WeeklyWinDefeatChart";

/**
 * グラフ画面コンポーネント
 * 現シーズンの戦績をチャート表示
 */
export const GraphsPage = () => {
  const { t } = useTranslation();
  usePageTitle(t("pages.graphs.title"));
  const { histories } = useHistoryStore();
  const { characters, matchRecords } = useCharacterStore();

  const latestHistory = histories.length > 0 ? histories[histories.length - 1] : null;

  return (
    <Page>
      <PageTitleContainer>
        <PageTitle>{t("pages.graphs.title")}</PageTitle>
      </PageTitleContainer>
      <PageDescription>{latestHistory ? t("pages.graphs.descriptionWithSeason", { seasonName: latestHistory.seasonName }) : t("pages.graphs.description")}</PageDescription>

      {latestHistory ? (
        <PageContainer>
          <DailyWinDefeatChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <HourlyWinDefeatChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <WeeklyWinDefeatChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <JobUsageRatePieChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
          <JobWinRateRadarChart history={latestHistory} matchRecords={matchRecords} characters={characters} />
        </PageContainer>
      ) : (
        <EmptyState icon="chart" />
      )}
    </Page>
  );
};
