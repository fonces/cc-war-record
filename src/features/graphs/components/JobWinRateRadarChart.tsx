import styled from "styled-components";
import { useState } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from "recharts";
import { Select, MultiSelect } from "@/components/ui";
import type { History, MatchRecord, Job, Character } from "@/types";
import type { TFunction } from "i18next";
import { JOB_INFO, JOBS } from "@/types/jobs";
import { MAPS } from "@/types/maps";
import { getRadarChartJobs, saveRadarChartJobs } from "@/utils/localStorage";
import { getMapName } from "@/utils/maps";
import { useTranslation } from "@/hooks";

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

interface JobWinRateRadarChartProps {
  history: History;
  matchRecords: MatchRecord[];
  characters: Character[];
}

/**
 * マップごとのジョブ勝率データを集計する関数
 */
const aggregateJobWinRateByMap = (history: History, matchRecords: MatchRecord[], selectedCharacterUuid: string | null, selectedJobs: Job[], t: TFunction) => {
  // 該当シーズンの試合データをフィルタ
  const seasonMatches = matchRecords.filter((match) => {
    if (match.seasonUuid !== history.uuid) return false;
    if (selectedCharacterUuid && match.characterUuid !== selectedCharacterUuid) return false;
    if (selectedJobs.length > 0 && !selectedJobs.includes(match.job)) return false;
    return true;
  });

  // マップ × ジョブごとの勝敗を集計
  const mapJobStats = new Map<string, Map<Job, { wins: number; total: number }>>();

  seasonMatches.forEach((match) => {
    if (!mapJobStats.has(match.map)) {
      mapJobStats.set(match.map, new Map());
    }

    const jobStats = mapJobStats.get(match.map)!;
    if (!jobStats.has(match.job)) {
      jobStats.set(match.job, { wins: 0, total: 0 });
    }

    const stats = jobStats.get(match.job)!;
    stats.total++;
    if (match.isWin) {
      stats.wins++;
    }
  });

  // RadarChart用のデータ形式に変換
  return Object.values(MAPS).map((map) => {
    const mapData: Record<string, string | number> = {
      map: getMapName(map, t),
      fullMark: 100,
    };

    selectedJobs.forEach((job) => {
      const jobStat = mapJobStats.get(map)?.get(job);
      if (jobStat && jobStat.total > 0) {
        mapData[job] = Math.round((jobStat.wins / jobStat.total) * 100);
      } else {
        mapData[job] = 0;
      }
    });

    return mapData;
  });
};

/**
 * ジョブ別勝率レーダーチャートコンポーネント
 */
export const JobWinRateRadarChart = ({ history, matchRecords, characters }: JobWinRateRadarChartProps) => {
  const { t } = useTranslation();
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedJobs, setSelectedJobs] = useState<Job[]>(() => getRadarChartJobs());

  // ジョブ選択変更ハンドラー
  const handleJobsChange = (jobs: string[]) => {
    const jobList = jobs as Job[];
    setSelectedJobs(jobList);
    saveRadarChartJobs(jobList);
  };

  const radarData = aggregateJobWinRateByMap(history, matchRecords, selectedCharacterUuid, selectedJobs, t);

  return (
    <StyledChartContainer>
      <StyledChartHeader>
        <StyledChartTitle>{t("chart.titles.jobWinRateByMap")}</StyledChartTitle>
        <StyledFiltersWrapper>
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
        </StyledFiltersWrapper>
      </StyledChartHeader>
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="map" />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />
          {selectedJobs.map((job) => (
            <Radar key={job} name={`${t(`job.${job}`)} (${job})`} dataKey={job} stroke={JOB_INFO[job].color} fill={JOB_INFO[job].color} fillOpacity={0.6} />
          ))}
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </StyledChartContainer>
  );
};
