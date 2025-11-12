/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";
import { darkTheme, lightTheme } from "@/styles/theme";
import { STORAGE_KEYS, getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";

export type ThemeMode = "light" | "dark";

export interface ThemeModeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
  setMode: (mode: ThemeMode) => void;
  theme: typeof lightTheme | typeof darkTheme;
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

/**
 * テーマモードを管理するカスタムフック
 * @throws {Error} ThemeProviderの外で使用された場合
 */
export const useTheme = (): ThemeModeContextValue => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
};

/**
 * テーマモードを提供するプロバイダーコンポーネント
 * LocalStorageと連携してテーマの永続化を行う
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // LocalStorageから初期値を取得、デフォルトはライトモード
  const [mode, setModeState] = useState<ThemeMode>(() => {
    return getFromLocalStorage(STORAGE_KEYS.THEME, "light");
  });

  // モード変更時にLocalStorageに保存
  useEffect(() => {
    saveToLocalStorage(STORAGE_KEYS.THEME, mode);
  }, [mode]);

  // モード変更時にtheme-colorメタタグを更新（iOS 26対応 - グラスモフィー）
  useEffect(() => {
    const lightColor = "rgba(255, 255, 255, 0.7)";
    const darkColor = "rgba(10, 10, 11, 0.7)";

    // メディアクエリ対応のtheme-colorを更新
    const metaThemeColorLight = document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]');
    const metaThemeColorDark = document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]');

    if (metaThemeColorLight && metaThemeColorDark) {
      // 既存のメディアクエリ対応メタタグを更新
      metaThemeColorLight.setAttribute("content", lightColor);
      metaThemeColorDark.setAttribute("content", darkColor);
    } else {
      // 古い単一のtheme-colorメタタグを削除して新しいものを追加
      const oldMetaThemeColor = document.querySelector('meta[name="theme-color"]:not([media])');
      if (oldMetaThemeColor) {
        oldMetaThemeColor.remove();
      }

      // ライトモード用
      const metaLight = document.createElement("meta");
      metaLight.name = "theme-color";
      metaLight.content = lightColor;
      metaLight.media = "(prefers-color-scheme: light)";
      document.head.appendChild(metaLight);

      // ダークモード用
      const metaDark = document.createElement("meta");
      metaDark.name = "theme-color";
      metaDark.content = darkColor;
      metaDark.media = "(prefers-color-scheme: dark)";
      document.head.appendChild(metaDark);
    }

    // color-schemeメタタグを追加/更新
    let metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    if (!metaColorScheme) {
      metaColorScheme = document.createElement("meta");
      metaColorScheme.setAttribute("name", "color-scheme");
      document.head.appendChild(metaColorScheme);
    }
    metaColorScheme.setAttribute("content", "light dark");
  }, [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleMode: () => setModeState((prev) => (prev === "light" ? "dark" : "light")),
      setMode: (newMode: ThemeMode) => setModeState(newMode),
      theme: mode === "dark" ? darkTheme : lightTheme,
    }),
    [mode],
  );

  return <ThemeModeContext.Provider value={contextValue}>{children}</ThemeModeContext.Provider>;
};
