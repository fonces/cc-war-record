import { LineChart, Line as RechartLine, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styled, { useTheme } from "styled-components";
import { useTranslation } from "@/hooks";
import { useCharacterStore } from "@/stores";
import { useCurrentSeasonStats } from "../hooks/useCurrentSeasonStats";
import type { HudElement } from "../types";

type HudElementContentProps = {
  element: HudElement;
};

const Label = styled.div`
  font-size: 0.5em;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 1.25em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Unit = styled.span`
  font-size: 0.625em;
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const PlainTextContainer = styled.div<{ $color?: string; $textAlign?: string }>`
  color: ${({ $color, theme }) => $color || theme.colors.text};
  white-space: pre-wrap;
  text-align: ${({ $textAlign }) => $textAlign || "left"};
`;

const StatsComboContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatsComboItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
`;

const StatsComboLabel = styled.div`
  font-size: 0.75em;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const StatsComboValue = styled.div`
  font-size: 1em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Line = styled.div<{ $orientation: "horizontal" | "vertical"; $thickness: number; $color: string }>`
  background-color: ${({ $color }) => $color};
  ${({ $orientation, $thickness }) =>
    $orientation === "horizontal"
      ? `
    width: 100%;
    height: ${$thickness}px;
  `
      : `
    width: ${$thickness}px;
    height: 100%;
  `}
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * HUD要素のコンテンツ表示コンポーネント
 */
export function HudElementContent({ element }: HudElementContentProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const currentSeasonStats = useCurrentSeasonStats();

  // チャート用の戦績データを取得（Hooksは条件分岐の外で呼び出す）
  const matchRecords = useCharacterStore((state) => state.matchRecords);

  const getElementContent = () => {
    switch (element.type) {
      case "winCount":
        return {
          label: t("obs.winCount"),
          value: currentSeasonStats.wins.toString(),
          unit: t("obs.matches"),
        };
      case "loseCount":
        return {
          label: t("obs.loseCount"),
          value: currentSeasonStats.losses.toString(),
          unit: t("obs.matches"),
        };
      case "winRate":
        return {
          label: t("obs.winRate"),
          value: currentSeasonStats.winRate.toFixed(1),
          unit: "%",
        };
      case "totalMatches":
        return {
          label: t("obs.totalMatches"),
          value: currentSeasonStats.total.toString(),
          unit: t("obs.matches"),
        };
      default:
        return { label: "", value: "-", unit: "" };
    }
  };

  const getStatsValue = (item: string) => {
    switch (item) {
      case "winCount":
        return { label: t("obs.winCount"), value: currentSeasonStats.wins.toString(), unit: t("obs.matches") };
      case "loseCount":
        return { label: t("obs.loseCount"), value: currentSeasonStats.losses.toString(), unit: t("obs.matches") };
      case "winRate":
        return { label: t("obs.winRate"), value: currentSeasonStats.winRate.toFixed(1), unit: "%" };
      case "totalMatches":
        return { label: t("obs.totalMatches"), value: currentSeasonStats.total.toString(), unit: t("obs.matches") };
      default:
        return { label: "", value: "-", unit: "" };
    }
  };

  if (element.type === "plainText") {
    return (
      <PlainTextContainer $color={element.textColor} $textAlign={element.textAlign}>
        {element.text || t("obs.plainText.placeholder")}
      </PlainTextContainer>
    );
  }

  if (element.type === "variableText") {
    // 変数を実際の値に置き換える
    let displayText = element.text || "";

    // 変数マッピング
    const variables: Record<string, string> = {
      "{winCount}": currentSeasonStats.wins.toString(),
      "{loseCount}": currentSeasonStats.losses.toString(),
      "{winRate}": currentSeasonStats.winRate.toFixed(1),
      "{totalMatches}": currentSeasonStats.total.toString(),
      "{winStreak}": "0", // TODO: 連勝数の実装
      "{loseStreak}": "0", // TODO: 連敗数の実装
    };

    // すべての変数を置換
    Object.entries(variables).forEach(([variable, value]) => {
      displayText = displayText.replace(new RegExp(variable.replace(/[{}]/g, "\\$&"), "g"), value);
    });

    return (
      <PlainTextContainer $color={element.textColor} $textAlign={element.textAlign}>
        {displayText}
      </PlainTextContainer>
    );
  }

  if (element.type === "line") {
    return <Line $orientation={element.lineOrientation || "horizontal"} $thickness={element.lineThickness || 2} $color={element.lineColor || "#ffffff"} />;
  }

  if (element.type === "todayTrendChart") {
    // 今日の日付を取得（YYYY-MM-DD形式）
    const today = new Date().toISOString().split("T")[0];

    // 今日の戦績のみをフィルタリング
    const todayMatches = matchRecords.filter((record) => {
      const recordDate = new Date(record.createdAt).toISOString().split("T")[0];
      return recordDate === today;
    });

    // 日時でソート（古い順）
    const sortedMatches = [...todayMatches].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    // チャートデータを作成
    let cumulativeWins = 0;
    const todayData = sortedMatches.map((match, index) => {
      if (match.isWin) {
        cumulativeWins++;
      } else {
        cumulativeWins--;
      }

      return {
        matchNumber: index + 1,
        wins: cumulativeWins,
        isWin: match.isWin,
      };
    });

    // データが0件の場合は空のチャートを表示
    const chartData = todayData.length > 0 ? todayData : [{ matchNumber: 0, wins: 0, isWin: false }];

    // カスタムドットコンポーネント
    const CustomDot = (props: { cx?: number; cy?: number; payload?: { isWin: boolean; matchNumber: number } }) => {
      const { cx, cy, payload } = props;
      if (cx === undefined || cy === undefined || !payload || payload.matchNumber === 0) return null;
      return <circle cx={cx} cy={cy} r={6} fill={payload.isWin ? theme.colors.win[400] : theme.colors.defeat[400]} stroke="#fff" strokeWidth={2} />;
    };

    return (
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="colorTodayWins" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#26A1DF" />
                <stop offset="100%" stopColor="#F36346" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
            <XAxis dataKey="matchNumber" tick={{ fontSize: 12, fill: theme.colors.gray[600] }} />
            <YAxis allowDecimals={false} tick={{ fill: theme.colors.gray[600] }} width={40} />
            <Tooltip
              contentStyle={{
                background: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: "8px",
                padding: "8px 12px",
              }}
            />
            {/* 0の基準線 */}
            <RechartLine type="monotone" dataKey={() => 0} stroke={theme.colors.gray[400]} strokeWidth={2} strokeDasharray="5 5" dot={false} isAnimationActive={false} />
            <RechartLine type="monotone" dataKey="wins" stroke="url(#colorTodayWins)" strokeWidth={3} dot={<CustomDot />} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    );
  }

  if (element.type === "statsCombo") {
    const items = element.comboItems || ["winCount", "loseCount", "winRate"];
    return (
      <StatsComboContainer>
        {items.map((item) => {
          const { label, value, unit } = getStatsValue(item);
          return (
            <StatsComboItem key={item}>
              <StatsComboLabel>{label}</StatsComboLabel>
              <StatsComboValue>
                {value}
                {unit}
              </StatsComboValue>
            </StatsComboItem>
          );
        })}
      </StatsComboContainer>
    );
  }

  const { label, value, unit } = getElementContent();
  return (
    <>
      <Label>{label}</Label>
      <Value>
        {value}
        <Unit>{unit}</Unit>
      </Value>
    </>
  );
}
