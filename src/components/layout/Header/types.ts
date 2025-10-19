export type NavigationItem = {
  /** ラベル */
  labelKey: string;
  /** パス */
  path: string;
  /** アイコン */
  icon: "home" | "history" | "chart" | "detail";
};

export const navigationItems: NavigationItem[] = [
  { labelKey: "navigation.home", path: "/", icon: "home" },
  { labelKey: "navigation.graphs", path: "/graphs", icon: "chart" },
  { labelKey: "navigation.histories", path: "/histories", icon: "history" },
  { labelKey: "navigation.faq", path: "/faq", icon: "detail" },
];
