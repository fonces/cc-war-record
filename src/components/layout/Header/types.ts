export type NavigationItem = {
  /** ラベル */
  labelKey: string;
  /** パス */
  path: string;
  /** アイコン */
  icon: "home" | "history" | "chart" | "detail" | "video";
  /** デスクトップのみ表示 */
  desktopOnly?: boolean;
};

export const navigationItems: NavigationItem[] = [
  { labelKey: "navigation.home", path: "/", icon: "home" },
  { labelKey: "navigation.graphs", path: "/graphs", icon: "chart" },
  { labelKey: "navigation.histories", path: "/histories", icon: "history" },
  { labelKey: "navigation.obs", path: "/obs", icon: "video", desktopOnly: true },
  { labelKey: "navigation.faq", path: "/faq", icon: "detail" },
];
