import styled from "styled-components";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
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

interface HourlyWinLossChartProps {
  history: History;
  matchRecords: MatchRecord[];
  characters: Character[];
}

/**
 * 時間別の勝敗データを集計する関数
 */
const aggregateHourlyWinLoss = (
  history: History,
  matchRecords: MatchRecord[],
  selectedCharacterUuid: string | null,
  selectedJob: Job | null,
  selectedMap: CrystalConflictMap | null,
) => {
  // 0-23時の時間範囲を生成
  const hourRange = Array.from({ length: 24 }, (_, i) => i);

  // 時間ごとのマップを作成
  const hourlyStats = new Map<number, { wins: number; losses: number; total: number }>();

  hourRange.forEach((hour) => {
    hourlyStats.set(hour, { wins: 0, losses: 0, total: 0 });
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
    // recordedAtから時間を抽出（ISO 8601形式: 2024-01-01T15:30:00.000Z）
    const matchHour = new Date(match.recordedAt).getHours();

    if (hourlyStats.has(matchHour)) {
      const hourStats = hourlyStats.get(matchHour)!;
      hourStats.total++;
      if (match.isWin) {
        hourStats.wins++;
      } else {
        hourStats.losses++;
      }
    }
  });

  // グラフ用のデータ形式に変換
  return hourRange.map((hour) => {
    const stats = hourlyStats.get(hour)!;
    const winRate = stats.total > 0 ? Math.round((stats.wins / stats.total) * 100) : 0;
    const lossRate = stats.total > 0 ? Math.round((stats.losses / stats.total) * 100) : 0;

    return {
      hour: `${hour}時`,
      winRate,
      lossRate,
      wins: stats.wins,
      losses: stats.losses,
      total: stats.total,
    };
  });
};

/**
 * カスタムツールチップコンポーネント
 */
interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      hour: string;
      winRate: number;
      lossRate: number;
      wins: number;
      losses: number;
      total: number;
    };
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
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
        <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>{`${label}`}</p>
        <p style={{ margin: "4px 0", color: "#10b981" }}>{`Win: ${data.wins}試合 (${data.winRate}%)`}</p>
        <p style={{ margin: "4px 0", color: "#ef4444" }}>{`Lose: ${data.losses}試合 (${data.lossRate}%)`}</p>
        <p style={{ margin: "4px 0 0 0", fontWeight: "bold" }}>{`合計: ${data.total}試合`}</p>
      </div>
    );
  }
  return null;
};

/**
 * 時間別勝敗数チャートコンポーネント
 */
export const HourlyWinLossChart = ({ history, matchRecords, characters }: HourlyWinLossChartProps) => {
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedMap, setSelectedMap] = useState<CrystalConflictMap | null>(null);

  const chartData = aggregateHourlyWinLoss(history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap);

  return (
    <StyledChartContainer>
      <StyledChartHeader>
        <StyledChartTitle>時間別勝敗率</StyledChartTitle>
        <StyledFiltersWrapper>
          <Select
            label="キャラクター"
            id="character-filter-hourly"
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
            id="job-filter-hourly"
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
            id="map-filter-hourly"
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
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
          <YAxis label={{ value: "勝率 (%)", angle: -90, position: "insideLeft" }} domain={[0, 100]} tick={{ fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="winRate" name="WinRate" fill="#10b981" radius={[2, 2, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.total === 0 ? "#d1d5db" : "#10b981"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </StyledChartContainer>
  );
};
