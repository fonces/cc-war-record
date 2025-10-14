import styled from "styled-components";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Select } from "@/components/ui";
import type { History, MatchRecord, Job, CrystalConflictMap, Character } from "@/types";
import { JOB_INFO, JOBS } from "@/types/jobs";
import { MAP_INFO, MAPS } from "@/types/maps";

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

interface DailyWinLossChartProps {
  history: History;
  matchRecords: MatchRecord[];
  characters: Character[];
}

/**
 * 日別の勝敗データを集計する関数
 */
const aggregateDailyWinLoss = (
  history: History,
  matchRecords: MatchRecord[],
  selectedCharacterUuid: string | null,
  selectedJob: Job | null,
  selectedMap: CrystalConflictMap | null,
) => {
  // シーズン作成日を取得
  const seasonStartDate = new Date(history.createdAt);

  // シーズン作成日から2ヶ月後の日付を計算
  const endDate = new Date(seasonStartDate);
  endDate.setMonth(endDate.getMonth() + 2);

  // 日付の範囲を生成（シーズン開始日から2ヶ月間）
  const dateRange: string[] = [];
  const currentDate = new Date(seasonStartDate);

  while (currentDate <= endDate) {
    dateRange.push(currentDate.toISOString().split("T")[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // 日付ごとのマップを作成
  const dailyStats = new Map<string, { wins: number; losses: number }>();

  dateRange.forEach((date) => {
    dailyStats.set(date, { wins: 0, losses: 0 });
  });

  // 該当シーズンの全試合データを集計（フィルタ適用）
  const seasonMatches = matchRecords.filter((match) => {
    if (match.seasonUuid !== history.uuid) return false;
    if (selectedCharacterUuid && match.characterUuid !== selectedCharacterUuid) return false;
    if (selectedJob && match.job !== selectedJob) return false;
    if (selectedMap && match.map !== selectedMap) return false;
    return true;
  });

  seasonMatches.forEach((match: MatchRecord) => {
    const matchDate = match.recordedAt.split("T")[0];

    if (dailyStats.has(matchDate)) {
      const dayStats = dailyStats.get(matchDate)!;
      if (match.isWin) {
        dayStats.wins++;
      } else {
        dayStats.losses++;
      }
    }
  });

  // グラフ用のデータ形式に変換
  return dateRange.map((date) => {
    const [, month, day] = date.split("-");
    const formattedDate = `${parseInt(month)}/${parseInt(day)}`;

    return {
      date: formattedDate,
      fullDate: date, // ツールチップ用に完全な日付も保持
      Win: dailyStats.get(date)?.wins || 0,
      Lose: dailyStats.get(date)?.losses || 0,
    };
  });
};

/**
 * 日別勝敗数グラフコンポーネント
 */
export const DailyWinLossChart = ({ history, matchRecords, characters }: DailyWinLossChartProps) => {
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedMap, setSelectedMap] = useState<CrystalConflictMap | null>(null);

  const dailyData = aggregateDailyWinLoss(history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap);

  return (
    <StyledChartContainer>
      <StyledChartHeader>
        <StyledChartTitle>日別勝敗数</StyledChartTitle>
        <StyledFiltersWrapper>
          <Select
            label="キャラクター"
            id="character-filter"
            value={selectedCharacterUuid || ""}
            onChange={(e) => setSelectedCharacterUuid(e.target.value || null)}
            options={[
              { value: "", label: "すべてのキャラクター" },
              ...characters.map((character) => ({
                value: character.uuid,
                label: character.name,
              })),
            ]}
            width="200px"
          />
          <Select
            label="ジョブ"
            id="job-filter"
            value={selectedJob || ""}
            onChange={(e) => setSelectedJob((e.target.value as Job) || null)}
            options={[
              { value: "", label: "すべてのジョブ" },
              ...Object.values(JOBS).map((job) => ({
                value: job,
                label: `${JOB_INFO[job].name} (${job})`,
              })),
            ]}
            width="200px"
          />
          <Select
            label="マップ"
            id="map-filter"
            value={selectedMap || ""}
            onChange={(e) => setSelectedMap((e.target.value as CrystalConflictMap) || null)}
            options={[
              { value: "", label: "すべてのマップ" },
              ...Object.values(MAPS).map((map) => ({
                value: map,
                label: MAP_INFO[map].name,
              })),
            ]}
            width="200px"
          />
        </StyledFiltersWrapper>
      </StyledChartHeader>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={dailyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
          <YAxis label={{ value: "対戦回数", angle: -90, position: "insideLeft" }} allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Win" fill="#4ade80" stackId="a" />
          <Bar dataKey="Lose" fill="#f87171" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </StyledChartContainer>
  );
};
