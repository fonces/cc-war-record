import { useState, memo, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styled, { useTheme } from "styled-components";
import { Select } from "@/components/ui";
import { aggregateTodayWinDefeatTrend, getAvailableDates } from "@/features/graphs/utils/aggregate";
import { useTranslation } from "@/hooks";
import { JOBS } from "@/types/jobs";
import { MAPS } from "@/types/maps";
import { getMapName } from "@/utils/maps";
import { StyledChartContainer, StyledChartHeader, StyledChartTitle, StyledFiltersWrapper } from "./ChartContainer";
import { StyledChartTooltip } from "./Tooltip";
import type { History, MatchRecord, Job, CrystalConflictMap, Character } from "@/types";

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: ${({ theme }) => theme.colors.gray[500]};
  font-size: 1rem;
  gap: ${({ theme }) => theme.spacing[3]};

  .icon {
    font-size: 3rem;
    opacity: 0.5;
  }
`;

type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    payload: {
      matchNumber: number;
      time: string;
      isWin: boolean;
      winRate: number;
      wins: number;
      actualWins: number;
      defeats: number;
      total: number;
      job: Job;
      map: CrystalConflictMap;
    };
  }>;
};

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  const { t } = useTranslation();

  if (!active || !payload || !payload[0]) return null;

  const data = payload[0].payload;

  return (
    <StyledChartTooltip>
      <div className="label">
        {t("chart.todayTrend.match", { number: data.matchNumber })} ({data.time})
        <span className={`result-badge ${data.isWin ? "win" : "defeat"}`}>{data.isWin ? t("common.win") : t("common.defeat")}</span>
      </div>
      <div className="value">
        {t("chart.todayTrend.winDifference")}: {data.wins}
      </div>
      <div className="value">
        {t("chart.todayTrend.record")}: {data.actualWins}
        {t("common.win")} {data.defeats}
        {t("common.defeat")} ({data.total}
        {t("chart.todayTrend.matches")})
      </div>
      <div className="value">
        {t("chart.labels.job")}: {t(`job.${data.job}`)}
      </div>
      <div className="value">
        {t("chart.labels.map")}: {getMapName(data.map, t)}
      </div>
    </StyledChartTooltip>
  );
};

type TodayWinDefeatTrendChartProps = {
  history: History;
  matchRecords: MatchRecord[];
  characters: Character[];
};

/**
 * その日の勝敗推移グラフコンポーネント
 */
const TodayWinDefeatTrendChartComponent = ({ history, matchRecords, characters }: TodayWinDefeatTrendChartProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedMap, setSelectedMap] = useState<CrystalConflictMap | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // 利用可能な日付リストを取得
  const availableDates = useMemo(
    () => getAvailableDates(history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap),
    [history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap],
  );

  // デフォルトで今日の日付を設定（利用可能な場合）
  const todayDateString = new Date().toISOString().split("T")[0];
  const defaultDate = availableDates.includes(todayDateString) ? todayDateString : availableDates[0] || null;
  const effectiveDate = selectedDate || defaultDate;

  const todayData = useMemo(
    () => aggregateTodayWinDefeatTrend(history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap, effectiveDate),
    [history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap, effectiveDate],
  );

  // 日付をM/D形式にフォーマット
  const formatDate = (dateString: string) => {
    const [, month, day] = dateString.split("-");
    return `${parseInt(month)}/${parseInt(day)}`;
  };

  // カスタムドットコンポーネント
  const CustomDot = (props: { cx?: number; cy?: number; payload?: { isWin: boolean } }) => {
    const { cx, cy, payload } = props;
    if (cx === undefined || cy === undefined || !payload) return null;

    return <circle cx={cx} cy={cy} r={6} fill={payload.isWin ? theme.colors.win[400] : theme.colors.defeat[400]} stroke="#fff" strokeWidth={2} />;
  };

  return (
    <StyledChartContainer>
      <StyledChartHeader>
        <StyledChartTitle>{t("chart.titles.todayWinDefeatTrend")}</StyledChartTitle>
        <StyledFiltersWrapper>
          <Select
            label={t("chart.labels.date")}
            id="today-date-filter"
            value={effectiveDate || ""}
            onChange={(e) => setSelectedDate(e.target.value || null)}
            options={availableDates.map((date) => ({
              value: date,
              label: formatDate(date),
            }))}
            width="200px"
            disabled={availableDates.length === 0}
          />
          <Select
            label={t("chart.labels.character")}
            id="today-character-filter"
            value={selectedCharacterUuid || ""}
            onChange={(e) => setSelectedCharacterUuid(e.target.value || null)}
            options={[
              { value: "", label: t("chart.labels.allCharacters") },
              ...characters.map((character) => ({
                value: character.uuid,
                label: character.name,
              })),
            ]}
            width="200px"
          />
          <Select
            label={t("chart.labels.job")}
            id="today-job-filter"
            value={selectedJob || ""}
            onChange={(e) => setSelectedJob((e.target.value as Job) || null)}
            options={[
              { value: "", label: t("chart.labels.allJobs") },
              ...Object.values(JOBS).map((job) => ({
                value: job,
                label: `${t(`job.${job}`)} (${job})`,
              })),
            ]}
            width="200px"
          />
          <Select
            label={t("chart.labels.map")}
            id="today-map-filter"
            value={selectedMap || ""}
            onChange={(e) => setSelectedMap((e.target.value as CrystalConflictMap) || null)}
            options={[
              { value: "", label: t("chart.labels.allMaps") },
              ...Object.values(MAPS).map((map) => ({
                value: map,
                label: getMapName(map, t),
              })),
            ]}
            width="200px"
          />
        </StyledFiltersWrapper>
      </StyledChartHeader>
      {todayData.length === 0 ? (
        <EmptyStateContainer>
          <div className="icon">📊</div>
          <div>{t("chart.todayTrend.noData")}</div>
        </EmptyStateContainer>
      ) : (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={todayData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="colorTodayWins" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#26A1DF" />
                <stop offset="100%" stopColor="#F36346" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
            <XAxis dataKey="matchNumber" tick={{ fontSize: 12, fill: theme.colors.gray[600] }} />
            <YAxis
              label={{ value: t("chart.todayTrend.winCount"), angle: -90, position: "insideLeft", fill: theme.colors.gray[700] }}
              allowDecimals={false}
              tick={{ fill: theme.colors.gray[600] }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="wins" stroke="url(#colorTodayWins)" strokeWidth={3} dot={<CustomDot />} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </StyledChartContainer>
  );
};

/**
 * Shallow比較でメモ化されたTodayWinDefeatTrendChart
 * history.uuid, matchRecords.length, characters.lengthで比較
 */
export const TodayWinDefeatTrendChart = memo(
  TodayWinDefeatTrendChartComponent,
  (prev, next) => prev.history.uuid === next.history.uuid && prev.matchRecords.length === next.matchRecords.length && prev.characters.length === next.characters.length,
);
