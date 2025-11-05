import { useState, memo, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { useTheme } from "styled-components";
import { Select } from "@/components/ui";
import { aggregateJobUsageRate } from "@/features/graphs/utils/aggregate";
import { useIsMobile, useTranslation } from "@/hooks";
import { JOB_INFO } from "@/types/jobs";
import { MAPS } from "@/types/maps";
import { getMapName } from "@/utils/maps";
import { ChartContainer, ChartHeader, ChartTitle, FiltersWrapper } from "./ChartContainer";
import { ChartTooltip, TooltipValue, Dot, TooltipLabel, TooltipText } from "./Tooltip";
import type { History, MatchRecord, Job, CrystalConflictMap, Character } from "@/types";

type JobUsageRatePieChartProps = {
  history: History;
  matchRecords: MatchRecord[];
  characters: Character[];
};

const RADIAN = Math.PI / 180;

/**
 * カスタムラベル描画関数
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // 5%未満は表示しない
  if (percent < 0.05) return null;

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" fontSize={14} fontWeight="bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

/**
 * カスタムツールチップコンポーネント
 */
type TooltipProps = {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      job: Job;
      value: number;
      percentage: number;
    };
  }>;
};

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  const { t } = useTranslation();
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const jobColor = JOB_INFO[data.job].color;
    return (
      <ChartTooltip>
        <TooltipLabel>{`${data.name} (${data.job})`}</TooltipLabel>
        <TooltipValue>
          <Dot type="win" color={jobColor} />
          <TooltipText>{`${t("chart.tooltip.usageCount")}: ${data.value} ${t("chart.matches")}`}</TooltipText>
        </TooltipValue>
        <TooltipValue>
          <Dot type="total" />
          <TooltipText>{`${t("chart.tooltip.usageRatePercent")}: ${data.percentage}%`}</TooltipText>
        </TooltipValue>
      </ChartTooltip>
    );
  }
  return null;
};

/**
 * ジョブ使用率円グラフコンポーネント
 */
const JobUsageRatePieChartComponent = ({ history, matchRecords, characters }: JobUsageRatePieChartProps) => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedMap, setSelectedMap] = useState<CrystalConflictMap | null>(null);

  const chartData = useMemo(
    () => aggregateJobUsageRate(history, matchRecords, selectedCharacterUuid, selectedMap, t),
    [history, matchRecords, selectedCharacterUuid, selectedMap, t],
  );

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle>{t("chart.titles.jobUsageRate")}</ChartTitle>
        <FiltersWrapper>
          <Select
            label={t("chart.labels.character")}
            id="character-filter-job-usage"
            value={selectedCharacterUuid || ""}
            onChange={(e) => setSelectedCharacterUuid(e.target.value || null)}
            options={[
              { value: "", label: t("chart.labels.allCharacters") },
              ...characters.map((character) => ({
                value: character.uuid,
                label: character.name,
              })),
            ]}
          />
          <Select
            label={t("chart.labels.map")}
            id="map-filter-job-usage"
            value={selectedMap || ""}
            onChange={(e) => setSelectedMap((e.target.value as CrystalConflictMap) || null)}
            options={[
              { value: "", label: t("chart.labels.allMaps") },
              ...Object.values(MAPS).map((map) => ({
                value: map,
                label: getMapName(map, t),
              })),
            ]}
          />
        </FiltersWrapper>
      </ChartHeader>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={isMobile ? 372 : 400}>
          <PieChart>
            <Pie data={chartData} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={150} fill="#8884d8" dataKey="value" isAnimationActive={false}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={JOB_INFO[entry.job].color} fillOpacity={theme.isDark ? 0.6 : 0.8} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div style={{ textAlign: "center", padding: "3rem", color: theme.colors.textSecondary }}>{t("chart.noMatchData")}</div>
      )}
    </ChartContainer>
  );
};

/**
 * Shallow比較でメモ化されたJobUsageRatePieChart
 * history.uuid, matchRecords.length, characters.lengthで比較
 */
export const JobUsageRatePieChart = memo(
  JobUsageRatePieChartComponent,
  (prev, next) => prev.history.uuid === next.history.uuid && prev.matchRecords.length === next.matchRecords.length && prev.characters.length === next.characters.length,
);
