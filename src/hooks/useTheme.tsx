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

  // モード変更時にtheme-colorメタタグを更新
  useEffect(() => {
    const themeColor = mode === "dark" ? "#0a0a0b" : "#ffffff";
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themeColor);
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = themeColor;
      document.head.appendChild(meta);
    }
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
