import styled from "styled-components";
import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
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

interface WeeklyWinLossChartProps {
  history: History;
  matchRecords: MatchRecord[];
  characters: Character[];
}

// 曜日定義（日曜日=0, 月曜日=1, ..., 土曜日=6）
const WEEKDAYS = [
  { index: 0, short: "Sun", name: "日曜日" },
  { index: 1, short: "Mon", name: "月曜日" },
  { index: 2, short: "Tue", name: "火曜日" },
  { index: 3, short: "Wed", name: "水曜日" },
  { index: 4, short: "Thu", name: "木曜日" },
  { index: 5, short: "Fri", name: "金曜日" },
  { index: 6, short: "Sat", name: "土曜日" },
];

/**
 * 曜日別の勝敗データを集計する関数
 */
const aggregateWeeklyWinLoss = (
  history: History,
  matchRecords: MatchRecord[],
  selectedCharacterUuid: string | null,
  selectedJob: Job | null,
  selectedMap: CrystalConflictMap | null,
) => {
  // 曜日ごとのマップを作成
  const weeklyStats = new Map<number, { wins: number; losses: number; total: number }>();

  WEEKDAYS.forEach((weekday) => {
    weeklyStats.set(weekday.index, { wins: 0, losses: 0, total: 0 });
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
    // recordedAtから曜日を取得（0=日曜日, 1=月曜日, ..., 6=土曜日）
    const matchWeekday = new Date(match.recordedAt).getDay();

    if (weeklyStats.has(matchWeekday)) {
      const dayStats = weeklyStats.get(matchWeekday)!;
      dayStats.total++;
      if (match.isWin) {
        dayStats.wins++;
      } else {
        dayStats.losses++;
      }
    }
  });

  // グラフ用のデータ形式に変換
  return WEEKDAYS.map((weekday) => {
    const stats = weeklyStats.get(weekday.index)!;
    // 試合データがない場合はnullを返す（connectNullsで処理）
    const winRate = stats.total > 0 ? Math.round((stats.wins / stats.total) * 100) : null;
    const lossRate = stats.total > 0 ? Math.round((stats.losses / stats.total) * 100) : null;

    return {
      weekday: weekday.short,
      weekdayName: weekday.name,
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
          <p style={{ margin: "4px 0", color: "#6b7280" }}>試合データなし</p>
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
        <p style={{ margin: "4px 0", color: "#10b981" }}>{`Win: ${data.wins}試合 (${data.winRate || 0}%)`}</p>
        <p style={{ margin: "4px 0", color: "#ef4444" }}>{`Lose: ${data.losses}試合 (${data.lossRate || 0}%)`}</p>
        <p style={{ margin: "4px 0 0 0", fontWeight: "bold" }}>{`合計: ${data.total}試合`}</p>
      </div>
    );
  }
  return null;
};

/**
 * 曜日別勝率比較チャートコンポーネント
 */
export const WeeklyWinLossChart = ({ history, matchRecords, characters }: WeeklyWinLossChartProps) => {
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedMap, setSelectedMap] = useState<CrystalConflictMap | null>(null);

  const chartData = aggregateWeeklyWinLoss(history, matchRecords, selectedCharacterUuid, selectedJob, selectedMap);

  return (
    <StyledChartContainer>
      <StyledChartHeader>
        <StyledChartTitle>曜日別勝率比較</StyledChartTitle>
        <StyledFiltersWrapper>
          <Select
            label="キャラクター"
            id="character-filter-weekly"
            value={selectedCharacterUuid || ""}
            onChange={(e) => setSelectedCharacterUuid(e.target.value || null)}
            options={[
              { value: "", label: "すべてのキャラクター" },
              ...characters.map((character) => ({
                value: character.uuid,
                label: character.name,
              })),
            ]}
          />
          <Select
            label="ジョブ"
            id="job-filter-weekly"
            value={selectedJob || ""}
            onChange={(e) => setSelectedJob((e.target.value as Job) || null)}
            options={[
              { value: "", label: "すべてのジョブ" },
              ...Object.values(JOBS).map((job) => ({
                value: job,
                label: `${JOB_INFO[job].name} (${job})`,
              })),
            ]}
          />
          <Select
            label="マップ"
            id="map-filter-weekly"
            value={selectedMap || ""}
            onChange={(e) => setSelectedMap((e.target.value as CrystalConflictMap) || null)}
            options={[
              { value: "", label: "すべてのマップ" },
              ...Object.values(MAPS).map((map) => ({
                value: map,
                label: MAP_INFO[map].name,
              })),
            ]}
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
          <YAxis label={{ value: "勝率 (%)", angle: -90, position: "insideLeft" }} domain={[0, 100]} tick={{ fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area type="monotone" dataKey="winRate" name="WinRate" stroke="#10b981" fill="#10b981" fillOpacity={0.3} connectNulls={true} />
          <Area type="monotone" dataKey="lossRate" name="LoseRate" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} connectNulls={false} />
        </AreaChart>
      </ResponsiveContainer>
    </StyledChartContainer>
  );
};
