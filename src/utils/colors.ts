import type { DefaultTheme } from "styled-components";

/**
 * 勝率に基づいて適切な色を返す
 * @param winRate - 勝率（0-100）
 * @param theme - styled-componentsのテーマ
 * @returns 勝率に応じた色
 */
export const getWinRateColor = (winRate: number, theme: DefaultTheme): string => {
  if (winRate >= 51) {
    return theme.colors.success[600];
  }
  if (winRate >= 40) {
    return theme.colors.warning[600];
  }
  return theme.colors.error[600];
};
