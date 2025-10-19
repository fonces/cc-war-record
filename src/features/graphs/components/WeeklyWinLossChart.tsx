import styled from "styled-components";
import { useState, memo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Select } from "@/components/ui";
import type { History, MatchRecord, Job, CrystalConflictMap, Character } from "@/types";
import { JOBS } from "@/types/jobs";
import { MAPS } from "@/types/maps";
import { getMapName } from "@/utils/maps";
import { useTranslation } from "@/hooks";
import { aggregateWeeklyWinLoss } from "@/features/graphs/utils/aggregate";

const StyledChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
`;

const StyledChartTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StyledChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const StyledFiltersWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface WeeklyWinLossChartProps {
  history: History;
  matchRecords: MatchRecord[];
  characters: Character[];
}

/**
 * カスタムツールチップコンポーネント
 */
interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      weekday: string;
      weekdayName: string;
      winRate: number | null;
      lossRate: number | null;
      wins: number;
      losses: number;
      total: number;
    };
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  const { t } = useTranslation();
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    // データがない場合の表示
    if (data.total === 0) {
      return (
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>{`${data.weekdayName} (${label})`}</p>
          <p style={{ margin: "4px 0", color: "#6b7280" }}>{t("chart.tooltip.noMatchData")}</p>
        </div>
      );
    }

    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>{`${data.weekdayName} (${label})`}</p>
        <p style={{ margin: "4px 0", color: "#10b981" }}>{`${t("chart.tooltip.win")}: ${data.wins}${t("chart.tooltip.matches")} (${data.winRate || 0}%)`}</p>
        <p style={{ margin: "4px 0", color: "#ef4444" }}>{`${t("chart.tooltip.lose")}: ${data.losses}${t("chart.tooltip.matches")} (${data.lossRate || 0}%)`}</p>
        <p style={{ margin: "4px 0 0 0", fontWeight: "bold" }}>{`${t("chart.tooltip.total")}: ${data.total}${t("chart.tooltip.matches")}`}</p>
      </div>
    );
  }
  return null;
};

/**
 * 曜日別勝率比較チャートコンポーネント
 */
const WeeklyWinLossChartComponent = ({ history, matchRecords, characters }: WeeklyWinLossChartProps) => {
  const { t } = useTranslation();
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedMap, setSelectedMap] = useState<CrystalConflictMap | null>(null);

  const chartData = aggregateWeeklyWinLoss(history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap);

  return (
    <StyledChartContainer>
      <StyledChartHeader>
        <StyledChartTitle>{t("chart.titles.weeklyWinRate")}</StyledChartTitle>
        <StyledFiltersWrapper>
          <Select
            label={t("chart.labels.character")}
            id="character-filter-weekly"
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
            id="job-filter-weekly"
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
            id="map-filter-weekly"
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
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="weekday" tick={{ fontSize: 12 }} />
          <YAxis label={{ value: t("chart.axes.winRatePercent"), angle: -90, position: "insideLeft" }} domain={[0, 100]} tick={{ fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="winRate" name="WinRate" stroke="#10b981" fill="#10b981" fillOpacity={0.3} connectNulls={true} isAnimationActive={false} />
          <Area type="monotone" dataKey="lossRate" name="LoseRate" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} connectNulls={false} isAnimationActive={false} />
        </AreaChart>
      </ResponsiveContainer>
    </StyledChartContainer>
  );
};

/**
 * Shallow比較でメモ化されたWeeklyWinLossChart
 * history.uuid, matchRecords.length, characters.lengthで比較
 */
export const WeeklyWinLossChart = memo(
  WeeklyWinLossChartComponent,
  (prev, next) => prev.history.uuid === next.history.uuid && prev.matchRecords.length === next.matchRecords.length && prev.characters.length === next.characters.length,
);
