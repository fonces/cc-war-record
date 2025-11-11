/**
 * HUD要素の種類
 */
export type HudElementType = "winCount" | "loseCount" | "winRate" | "totalMatches";

/**
 * HUD要素の位置情報
 */
export type Position = {
  x: number;
  y: number;
};

/**
 * HUD要素の設定
 */
export type HudElement = {
  id: string;
  type: HudElementType;
  position: Position;
  visible: boolean;
};

/**
 * HUD要素のラベル情報
 */
export type HudElementLabel = {
  ja: string;
  en: string;
  ko: string;
};
