import type { DefaultTheme } from "styled-components";
import type { Theme } from "@/styles/theme";

/**
 * 勝率に基づいて適切な色を返す
 * @param winRate - 勝率（0-100）
 * @param theme - styled-componentsのテーマ
 * @returns 勝率に応じた色
 */
export const getWinRateColor = (winRate: number, theme: DefaultTheme, weight: keyof Theme["colors"]["success"] = 600): string => {
  if (winRate >= 51) {
    return theme.colors.success[weight];
  }
  if (winRate >= 40) {
    return theme.colors.warning[weight];
  }
  return theme.colors.error[weight];
};
