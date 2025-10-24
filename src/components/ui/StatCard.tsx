import styled from "styled-components";
import { fadeIn } from "@/styles/animation";
import { getWinRateColor } from "@/utils/colors";

/**
 * 統計カードグリッドコンテナ
 */
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  animation: ${fadeIn} 0.6s ease-out;
`;

/**
 * 統計カード
 */
export const StatCard = styled.div`
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 24px rgba(38, 161, 223, 0.15),
      0 0 0 1px rgba(38, 161, 223, 0.1);
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

/**
 * 統計ラベル
 */
export const StatLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

/**
 * 統計値
 */
export const StatValue = styled.div<{ $type?: "default" | "win" | "defeat" | "winRate"; $winRate?: number }>`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing[1]};

  ${({ theme, $type, $winRate }) => {
    if ($type === "win") {
      return `color: ${theme.colors.win[400]};`;
    }
    if ($type === "defeat") {
      return `color: ${theme.colors.defeat[400]};`;
    }
    if ($type === "winRate" && $winRate !== undefined) {
      return `color: ${getWinRateColor($winRate, theme, 400)};`;
    }
    // デフォルトはグラデーション
    return `
      background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `;
  }}
`;

/**
 * 統計説明
 */
export const StatDescription = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
