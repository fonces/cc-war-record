/**
 * HUD要素の種類
 */
export type HudElementType = "winCount" | "loseCount" | "winRate" | "totalMatches" | "plainText" | "variableText" | "statsCombo" | "line" | "todayTrendChart";

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
  /** レイヤー名（カスタム名称） */
  name?: string;
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
  /** 背景色（カスタム） */
  backgroundColor?: string;
  /** 線の向き（horizontal: 横, vertical: 縦） */
  lineOrientation?: "horizontal" | "vertical";
  /** 線の太さ（px） */
  lineThickness?: number;
  /** 線の色 */
  lineColor?: string;
  /** 拡大率（1.0が100%） */
  scale?: number;
  /** テキスト配置（left, center, right） */
  textAlign?: "left" | "center" | "right";
  /** ボックスシャドウ（CSS box-shadow形式） */
  boxShadow?: string;
  /** パディング（px） */
  padding?: number;
};

/**
 * HUD要素のラベル情報
 */
export type HudElementLabel = {
  ja: string;
  en: string;
  ko: string;
};
