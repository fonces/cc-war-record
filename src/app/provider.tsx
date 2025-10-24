import isPropValid from "@emotion/is-prop-valid";
import { ThemeProvider as StyledThemeProvider, StyleSheetManager, type DefaultTheme } from "styled-components";
import { ThemeProvider, useTheme } from "@/hooks";
import { GlobalStyle } from "@/styles/GlobalStyle";

type AppProviderProps = {
  children: React.ReactNode;
};

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

/**
 * テーマを適用するコンポーネント（ThemeProvider内部で使用）
 */
const ThemedApp = ({ children }: AppProviderProps) => {
  const { theme } = useTheme();

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <StyledThemeProvider theme={theme as DefaultTheme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </StyleSheetManager>
  );
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider>
      <ThemedApp>{children}</ThemedApp>
    </ThemeProvider>
  );
};
