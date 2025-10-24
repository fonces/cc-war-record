import { useState, memo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styled, { useTheme } from "styled-components";
import { Select } from "@/components/ui";
import { aggregateWeeklyWinDefeat } from "@/features/graphs/utils/aggregate";
import { useTranslation } from "@/hooks";
import { JOBS } from "@/types/jobs";
import { MAPS } from "@/types/maps";
import { getMapName } from "@/utils/maps";
import { StyledChartContainer, StyledChartHeader, StyledChartTitle, StyledFiltersWrapper } from "./ChartContainer";
import type { History, MatchRecord, Job, CrystalConflictMap, Character } from "@/types";

const StyledTooltip = styled.div`
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => `${theme.blur.md} brightness(${theme.isDark ? "0%" : "100%"})`};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[3]};
  box-shadow:
    ${({ theme }) => theme.shadows.xl},
    0 0 0 1px rgba(38, 161, 223, 0.1);

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

  .dot-nodata {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

type WeeklyWinDefeatChartProps = {
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
      weekday: string;
      weekdayName: string;
      weekdayIndex: number;
      winRate: number | null;
      defeatRate: number | null;
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

    // 曜日名を多言語化
    const weekdayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const weekdayName = t(`chart.weekdays.${weekdayNames[data.weekdayIndex]}`);

    // データがない場合の表示
    if (data.total === 0) {
      return (
        <StyledTooltip>
          <div className="label">{`${weekdayName} (${label})`}</div>
          <div className="value">
            <div className="dot-nodata" />
            <span>{t("chart.tooltip.noMatchData")}</span>
          </div>
        </StyledTooltip>
      );
    }

    return (
      <StyledTooltip>
        <div className="label">{`${weekdayName} (${label})`}</div>
        <div className="value">
          <div className="dot-win" />
          <span>{`${t("chart.tooltip.win")}: ${data.wins} ${t("chart.tooltip.matches")} (${data.winRate || 0}%)`}</span>
        </div>
        <div className="value">
          <div className="dot-defeat" />
          <span>{`${t("chart.tooltip.lose")}: ${data.defeats} ${t("chart.tooltip.matches")} (${data.defeatRate || 0}%)`}</span>
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
 * 曜日別勝率比較チャートコンポーネント
 */
const WeeklyWinDefeatChartComponent = ({ history, matchRecords, characters }: WeeklyWinDefeatChartProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedMap, setSelectedMap] = useState<CrystalConflictMap | null>(null);

  const chartData = aggregateWeeklyWinDefeat(history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap);

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
          <defs>
            <linearGradient id="colorWeeklyWin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorWeeklyDefeat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
          <XAxis dataKey="weekday" tick={{ fontSize: 12, fill: theme.colors.gray[600] }} />
          <YAxis
            label={{ value: t("chart.axes.winRatePercent"), angle: -90, position: "insideLeft", fill: theme.colors.gray[700] }}
            domain={[0, 100]}
            tick={{ fontSize: 12, fill: theme.colors.gray[600] }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="winRate" name="WinRate" stroke="#10b981" strokeWidth={2} fill="url(#colorWeeklyWin)" connectNulls={true} isAnimationActive={false} />
          <Area
            type="monotone"
            dataKey="defeatRate"
            name="DefeatRate"
            stroke="#ef4444"
            strokeWidth={2}
            fill="url(#colorWeeklyDefeat)"
            connectNulls={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledChartContainer>
  );
};

/**
 * Shallow比較でメモ化されたWeeklyWinDefeatChart
 * history.uuid, matchRecords.length, characters.lengthで比較
 */
export const WeeklyWinDefeatChart = memo(
  WeeklyWinDefeatChartComponent,
  (prev, next) => prev.history.uuid === next.history.uuid && prev.matchRecords.length === next.matchRecords.length && prev.characters.length === next.characters.length,
);
