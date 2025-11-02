import { useState, memo, useMemo } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from "recharts";
import { Select, MultiSelect } from "@/components/ui";
import { aggregateJobWinRateByMap } from "@/features/graphs/utils/aggregate";
import { useTranslation } from "@/hooks";
import { JOB_INFO, JOBS } from "@/types/jobs";
import { STORAGE_KEYS, getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";
import { ChartContainer, ChartHeader, ChartTitle, FiltersWrapper } from "./ChartContainer";
import { ChartTooltip, TooltipValue, Dot, TooltipLabel, TooltipText } from "./Tooltip";
import type { History, MatchRecord, Job, Character } from "@/types";

type JobWinRateRadarChartProps = {
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
    name: string;
    value: number;
    dataKey: string;
    stroke: string;
    fill: string;
  }>;
  label?: string;
};

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <ChartTooltip>
        <TooltipLabel>{label}</TooltipLabel>
        {payload.map((entry, index) => (
          <TooltipValue key={index}>
            <Dot type="win" color={entry.stroke} />
            <TooltipText>{`${entry.name}: ${entry.value}%`}</TooltipText>
          </TooltipValue>
        ))}
      </ChartTooltip>
    );
  }
  return null;
};

/**
 * マップ別ジョブ勝率レーダーチャートコンポーネント
 */
const JobWinRateRadarChartComponent = ({ history, matchRecords, characters }: JobWinRateRadarChartProps) => {
  const { t } = useTranslation();
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedJobs, setSelectedJobs] = useState<Job[]>(() => getFromLocalStorage(STORAGE_KEYS.RADAR_CHART_JOBS, [JOBS.PALADIN, JOBS.WHITE_MAGE]));

  // ジョブ選択変更ハンドラー
  const handleJobsChange = (jobs: string[]) => {
    const jobList = jobs as Job[];
    setSelectedJobs(jobList);
    saveToLocalStorage(STORAGE_KEYS.RADAR_CHART_JOBS, jobList);
  };

  const radarData = useMemo(
    () => aggregateJobWinRateByMap(history, matchRecords, selectedCharacterUuid, selectedJobs, t),
    [history, matchRecords, selectedCharacterUuid, selectedJobs, t],
  );

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle>{t("chart.titles.jobWinRateByMap")}</ChartTitle>
        <FiltersWrapper>
          <Select
            label={t("chart.labels.character")}
            id="character-filter-radar"
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
          <MultiSelect
            label={t("chart.labels.jobSelection")}
            value={selectedJobs}
            onChange={handleJobsChange}
            options={Object.values(JOBS).map((job) => ({
              value: job,
              label: `${t(`job.${job}`)} (${job})`,
            }))}
            placeholder={t("chart.labels.selectJob")}
            maxSelections={5}
            width="200px"
          />
        </FiltersWrapper>
      </ChartHeader>
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="map" />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />
          {selectedJobs.map((job) => (
            <Radar
              key={job}
              name={`${t(`job.${job}`)} (${job})`}
              dataKey={job}
              stroke={JOB_INFO[job].color}
              fill={JOB_INFO[job].color}
              fillOpacity={0.6}
              isAnimationActive={false}
            />
          ))}
          <Legend />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

/**
 * Shallow比較でメモ化されたJobWinRateRadarChart
 * history.uuid, matchRecords.length, characters.lengthで比較
 */
export const JobWinRateRadarChart = memo(
  JobWinRateRadarChartComponent,
  (prev, next) => prev.history.uuid === next.history.uuid && prev.matchRecords.length === next.matchRecords.length && prev.characters.length === next.characters.length,
);
