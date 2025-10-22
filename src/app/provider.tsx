import isPropValid from "@emotion/is-prop-valid";
import { useState, useEffect, useMemo } from "react";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import { ThemeToggle } from "@/components/ui";
import { ThemeModeContext, type ThemeMode } from "@/hooks";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { lightTheme, darkTheme } from "@/styles/theme";

type AppProviderProps = {
  children: React.ReactNode;
};

const THEME_STORAGE_KEY = "cc-war-record-theme";

/**
 * styled-components v6対応のためのshouldForwardProp関数
 * カスタムpropsがHTML属性として転送されるのを防ぐ
 */
const shouldForwardProp = (propName: string, target: unknown): boolean => {
  if (typeof target === "string") {
    // HTML要素の場合、有効なHTML属性のみ転送
    return isPropValid(propName);
  }
  // その他の要素の場合、すべてのpropsを転送
  return true;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  // LocalStorageから初期値を取得、デフォルトはライトモード
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "dark" || stored === "light" ? stored : "light";
  });

  // モード変更時にLocalStorageに保存
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleMode: () => setModeState((prev) => (prev === "light" ? "dark" : "light")),
      setMode: (newMode: ThemeMode) => setModeState(newMode),
    }),
    [mode],
  );

  const currentTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeModeContext.Provider value={contextValue}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <ThemeProvider theme={currentTheme as any}>
          <GlobalStyle />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </StyleSheetManager>
  );
};
