import isPropValid from "@emotion/is-prop-valid";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";

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

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
};
