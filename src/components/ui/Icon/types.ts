export type IconName =
  | "hamburger"
  | "close"
  | "home"
  | "history"
  | "chart"
  | "edit"
  | "accept"
  | "add"
  | "delete"
  | "minus"
  | "revert"
  | "detail"
  | "back"
  | "language"
  | "arrowDropDown"
  | "arrowUp"
  | "arrowDown"
  | "download"
  | "upload"
  | "search"
  | "video";

export type IconProps = {
  /** アイコンの種類 */
  name: IconName;
  /** サイズ */
  size?: number;
  /** 色 */
  color?: string;
  /** クリックハンドラー */
  onClick?: () => void;
  /** クラス名 */
  className?: string;
};
