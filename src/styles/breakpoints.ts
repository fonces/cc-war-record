/**
 * ブレークポイントの定義
 */
export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

/**
 * メディアクエリのヘルパー関数
 */
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile}px)`,
  tablet: `@media (max-width: ${breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,

  // カスタムブレークポイント用
  maxWidth: (width: number) => `@media (max-width: ${width}px)`,
  minWidth: (width: number) => `@media (min-width: ${width}px)`,
} as const;
