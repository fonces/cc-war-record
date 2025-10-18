import styled from "styled-components";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Select } from "@/components/ui";
import type { History, MatchRecord, Job, CrystalConflictMap, Character } from "@/types";
import { JOB_INFO } from "@/types/jobs";
import { MAPS } from "@/types/maps";
import { getMapName } from "@/utils/maps";
import { useTranslation } from "@/hooks";
import { aggregateJobUsageRate } from "@/features/graphs/utils/aggregate";

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

interface JobUsageRatePieChartProps {
  history: History;
  matchRecords: MatchRecord[];
  characters: Character[];
}

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
interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      job: Job;
      value: number;
      percentage: number;
    };
  }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  const { t } = useTranslation();
  if (active && payload && payload.length) {
    const data = payload[0].payload;
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
        <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>{`${data.name} (${data.job})`}</p>
        <p style={{ margin: "4px 0", color: JOB_INFO[data.job].color }}>{`${t("chart.tooltip.usageCount")}: ${data.value}${t("chart.matches")}`}</p>
        <p style={{ margin: "4px 0 0 0", fontWeight: "bold" }}>{`${t("chart.tooltip.usageRatePercent")}: ${data.percentage}%`}</p>
      </div>
    );
  }
  return null;
}; /**
 * ジョブ使用率円グラフコンポーネント
 */
export const JobUsageRatePieChart = ({ history, matchRecords, characters }: JobUsageRatePieChartProps) => {
  const { t } = useTranslation();
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedMap, setSelectedMap] = useState<CrystalConflictMap | null>(null);

  const chartData = aggregateJobUsageRate(history, matchRecords, selectedCharacterUuid, selectedMap, t);

  return (
    <StyledChartContainer>
      <StyledChartHeader>
        <StyledChartTitle>{t("chart.titles.jobUsageRate")}</StyledChartTitle>
        <StyledFiltersWrapper>
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
            width="200px"
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
            width="200px"
          />
        </StyledFiltersWrapper>
      </StyledChartHeader>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie data={chartData} cx="50%" cy="50%" labelLine={false} label={renderCustomizedLabel} outerRadius={150} fill="#8884d8" dataKey="value">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={JOB_INFO[entry.job].color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div style={{ textAlign: "center", padding: "3rem", color: "#6b7280" }}>{t("chart.noMatchData")}</div>
      )}
    </StyledChartContainer>
  );
};
