import styled from "styled-components";
import { useTranslation } from "@/hooks";
import { useCurrentSeasonStats } from "../hooks/useCurrentSeasonStats";
import type { HudElement } from "../types";

type HudElementContentProps = {
  element: HudElement;
};

const Label = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Unit = styled.span`
  font-size: 1rem;
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const PlainTextContainer = styled.div<{ $color?: string }>`
  font-size: 1rem;
  color: ${({ $color, theme }) => $color || theme.colors.text};
  white-space: pre-wrap;
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
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const StatsComboValue = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

/**
 * HUD要素のコンテンツ表示コンポーネント
 */
export function HudElementContent({ element }: HudElementContentProps) {
  const { t } = useTranslation();
  const currentSeasonStats = useCurrentSeasonStats();

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
    return <PlainTextContainer $color={element.textColor}>{element.text || t("obs.plainText.placeholder")}</PlainTextContainer>;
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
