import { memo } from "react";
import styled from "styled-components";

/**
 * Dotマーカーの種類
 */
export type DotType = "win" | "defeat" | "gradient" | "total" | "nodata";

type DotProps = {
  /** Dotの種類 */
  type: DotType;
  /** カスタム背景色（typeを指定しない場合に使用） */
  color?: string;
};

const StyledDot = styled.div<{ $color?: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;

  ${({ $color }) => $color && `background-color: ${$color};`}
`;

/**
 * Tooltipで使用するDotマーカーコンポーネント
 */
export const Dot = memo(({ type, color }: DotProps) => {
  if (color) {
    return <StyledDot $color={color} />;
  }
  return <StyledDot className={`dot-${type}`} />;
});

Dot.displayName = "Dot";

/**
 * チャート用の共通スタイル化Tooltipコンテナ
 */
export const StyledChartTooltip = styled.div`
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
    color: ${({ theme }) => theme.colors.text};
  }

  .result-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-left: ${({ theme }) => theme.spacing[1]};

    &.win {
      background-color: ${({ theme }) => theme.colors.win[400]};
      color: white;
    }

    &.defeat {
      background-color: ${({ theme }) => theme.colors.defeat[400]};
      color: white;
    }
  }
`;

/**
 * 値表示用のスタイル（dotマーカー付き）
 */
export const StyledTooltipValue = styled.div`
  font-size: 0.875rem;
  margin: ${({ theme }) => theme.spacing[1]} 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.text};

  [class^="dot-"] {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .dot-win {
    background-color: ${({ theme }) => theme.colors.win[400]};
  }

  .dot-defeat {
    background-color: ${({ theme }) => theme.colors.defeat[400]};
  }

  .dot-gradient {
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }

  .dot-total {
    background-color: ${({ theme }) => theme.colors.gray[600]};
  }

  .dot-nodata {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
