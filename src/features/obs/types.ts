/**
 * HUD要素の種類
 */
export type HudElementType = "winCount" | "loseCount" | "winRate" | "totalMatches" | "plainText" | "statsCombo";

/**
 * HUD要素の表示スタイル
 */
export type HudElementStyle = "default" | "compact" | "minimal";

/**
 * 統計コンボ要素で表示する項目
 */
export type StatsComboItem = "winCount" | "loseCount" | "winRate" | "totalMatches";

/**
 * HUD要素の位置情報
 */
export type Position = {
  x: number;
  y: number;
};

/**
 * HUD要素のサイズ情報
 */
export type Size = {
  width: number;
  height: number;
};

/**
 * HUD要素の設定
 */
export type HudElement = {
  id: string;
  type: HudElementType;
  position: Position;
  size?: Size;
  visible: boolean;
  /** プレーンテキストの内容 */
  text?: string;
  /** 統計コンボで表示する項目 */
  comboItems?: StatsComboItem[];
  /** 表示スタイル */
  style?: HudElementStyle;
  /** フォントサイズ（px） */
  fontSize?: number;
  /** 文字色（カスタム） */
  textColor?: string;
};

/**
 * HUD要素のラベル情報
 */
export type HudElementLabel = {
  ja: string;
  en: string;
  ko: string;
};
