import { useState, memo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import styled, { useTheme } from "styled-components";
import { Select } from "@/components/ui";
import { aggregateHourlyWinDefeat } from "@/features/graphs/utils/aggregate";
import { useTranslation } from "@/hooks";
import { JOBS } from "@/types/jobs";
import { MAPS } from "@/types/maps";
import { getWinRateColor } from "@/utils";
import { getMapName } from "@/utils/maps";
import { StyledChartContainer, StyledChartHeader, StyledChartTitle, StyledFiltersWrapper } from "./ChartContainer";
import type { History, MatchRecord, Job, CrystalConflictMap, Character } from "@/types";

const StyledTooltip = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[3]};
  box-shadow: ${({ theme }) => theme.shadows.xl};

  .label {
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.colors.text};
  }

  .value {
    font-size: 0.875rem;
    margin: ${({ theme }) => theme.spacing[1]} 0;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.colors.text};
  }

  .dot-win {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.win[400]};
  }

  .dot-defeat {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.defeat[400]};
  }

  .dot-total {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

const StyledChartWrapper = styled.div`
  .recharts-tooltip-cursor {
    fill: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)")};
  }
`;

type HourlyWinDefeatChartProps = {
  history: History;
  matchRecords: MatchRecord[];
  characters: Character[];
};

/**
 * カスタムツールチップコンポーネント
 */
type TooltipProps = {
  active?: boolean;
  payload?: Array<{
    payload: {
      hour: string;
      winRate: number;
      defeatRate: number;
      wins: number;
      defeats: number;
      total: number;
    };
  }>;
  label?: string;
};

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  const { t } = useTranslation();
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <StyledTooltip>
        <div className="label">{label}</div>
        <div className="value">
          <div className="dot-win" />
          <span>{`${t("chart.tooltip.win")}: ${data.wins} ${t("chart.tooltip.matches")} (${data.winRate}%)`}</span>
        </div>
        <div className="value">
          <div className="dot-defeat" />
          <span>{`${t("chart.tooltip.lose")}: ${data.defeats} ${t("chart.tooltip.matches")} (${data.defeatRate}%)`}</span>
        </div>
        <div className="value">
          <div className="dot-total" />
          <span>{`${t("chart.tooltip.total")}: ${data.total} ${t("chart.tooltip.matches")}`}</span>
        </div>
      </StyledTooltip>
    );
  }
  return null;
};

/**
 * 時間別勝敗数チャートコンポーネント
 */
const HourlyWinDefeatChartComponent = ({ history, matchRecords, characters }: HourlyWinDefeatChartProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedMap, setSelectedMap] = useState<CrystalConflictMap | null>(null);

  const chartData = aggregateHourlyWinDefeat(history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap, t);

  return (
    <StyledChartContainer>
      <StyledChartHeader>
        <StyledChartTitle>{t("chart.titles.hourlyWinRate")}</StyledChartTitle>
        <StyledFiltersWrapper>
          <Select
            label={t("chart.labels.character")}
            id="character-filter-hourly"
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
            id="job-filter-hourly"
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
            id="map-filter-hourly"
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
      <StyledChartWrapper>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorHourlyWin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
            <XAxis dataKey="hour" tick={{ fontSize: 12, fill: theme.colors.gray[600] }} />
            <YAxis
              label={{ value: t("chart.axes.winRatePercent"), angle: -90, position: "insideLeft", fill: theme.colors.gray[700] }}
              domain={[0, 100]}
              tick={{ fontSize: 12, fill: theme.colors.gray[600] }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="winRate" name="WinRate" radius={[8, 8, 0, 0]} isAnimationActive={false}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getWinRateColor(entry.winRate, theme, 400)} opacity={0.8} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </StyledChartWrapper>
    </StyledChartContainer>
  );
};

/**
 * Shallow比較でメモ化されたHourlyWinDefeatChart
 * history.uuid, matchRecords.length, characters.lengthで比較
 */
export const HourlyWinDefeatChart = memo(
  HourlyWinDefeatChartComponent,
  (prev, next) => prev.history.uuid === next.history.uuid && prev.matchRecords.length === next.matchRecords.length && prev.characters.length === next.characters.length,
);
