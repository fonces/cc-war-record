import { useState, memo, useMemo } from "react";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from "styled-components";
import { Select } from "@/components/ui";
import { aggregateDailyWinDefeat } from "@/features/graphs/utils/aggregate";
import { useTranslation } from "@/hooks";
import { JOBS } from "@/types/jobs";
import { MAPS } from "@/types/maps";
import { getMapName } from "@/utils/maps";
import { ChartContainer, ChartHeader, ChartTitle, FiltersWrapper } from "./ChartContainer";
import { ChartTooltip, TooltipValue, Dot, TooltipLabel, TooltipText } from "./Tooltip";
import type { History, MatchRecord, Job, CrystalConflictMap, Character } from "@/types";

type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
  }>;
  label?: string;
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload) return null;

  return (
    <ChartTooltip>
      <TooltipLabel>{label}</TooltipLabel>
      {payload.map((entry, index) => {
        const dotType = entry.name === "Win" ? "win" : entry.name === "Defeat" ? "defeat" : entry.name === "WinRate" ? "gradient" : "total";
        return (
          <TooltipValue key={index}>
            <Dot type={dotType as "win" | "defeat" | "gradient" | "total"} />
            <TooltipText>
              {entry.name}: {typeof entry.value === "number" && entry.name === "WinRate" ? `${entry.value.toFixed(1)}%` : entry.value}
            </TooltipText>
          </TooltipValue>
        );
      })}
    </ChartTooltip>
  );
};

type DailyWinDefeatChartProps = {
  history: History;
  matchRecords: MatchRecord[];
  characters: Character[];
};

/**
 * 日別勝敗数グラフコンポーネント
 */
const DailyWinDefeatChartComponent = ({ history, matchRecords, characters }: DailyWinDefeatChartProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedMap, setSelectedMap] = useState<CrystalConflictMap | null>(null);

  const dailyData = useMemo(
    () => aggregateDailyWinDefeat(history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap),
    [history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap],
  );

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle>{t("chart.titles.dailyWinDefeat")}</ChartTitle>
        <FiltersWrapper>
          <Select
            label={t("chart.labels.character")}
            id="character-filter"
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
            id="job-filter"
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
            id="map-filter"
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
        </FiltersWrapper>
      </ChartHeader>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={dailyData} margin={{ top: 20, right: 20, left: 20, bottom: -28 }}>
          <defs>
            <linearGradient id="colorWin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={theme.colors.win[400]} stopOpacity={0.8} />
              <stop offset="95%" stopColor={theme.colors.win[400]} stopOpacity={0.4} />
            </linearGradient>
            <linearGradient id="colorDefeat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={theme.colors.defeat[400]} stopOpacity={0.8} />
              <stop offset="95%" stopColor={theme.colors.defeat[400]} stopOpacity={0.4} />
            </linearGradient>
            <linearGradient id="colorWinRate" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#26A1DF" />
              <stop offset="100%" stopColor="#F36346" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
          <XAxis dataKey="date" tick={{ fontSize: 12, fill: theme.colors.gray[600] }} angle={-45} textAnchor="end" height={80} />
          <YAxis
            yAxisId="left"
            label={{ value: t("chart.axes.matchCount"), angle: -90, position: "insideLeft", fill: theme.colors.gray[700] }}
            allowDecimals={false}
            tick={{ fill: theme.colors.gray[600] }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{ value: t("chart.axes.winRatePercent"), angle: 90, position: "insideRight", fill: theme.colors.gray[700] }}
            domain={[0, 100]}
            tick={{ fill: theme.colors.gray[600] }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar yAxisId="left" dataKey="Win" fill="url(#colorWin)" stackId="a" isAnimationActive={false} radius={[4, 4, 0, 0]} />
          <Bar yAxisId="left" dataKey="Defeat" fill="url(#colorDefeat)" stackId="a" isAnimationActive={false} radius={[4, 4, 0, 0]} />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="WinRate"
            stroke="url(#colorWinRate)"
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
            connectNulls={true}
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

/**
 * Shallow比較でメモ化されたDailyWinDefeatChart
 * history.uuid, matchRecords.length, characters.lengthで比較
 */
export const DailyWinDefeatChart = memo(
  DailyWinDefeatChartComponent,
  (prev, next) => prev.history.uuid === next.history.uuid && prev.matchRecords.length === next.matchRecords.length && prev.characters.length === next.characters.length,
);
