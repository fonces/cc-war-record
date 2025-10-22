import "styled-components";
import type { lightTheme, darkTheme } from "./theme";

type LightTheme = typeof lightTheme;
type DarkTheme = typeof darkTheme;

// 両方のテーマで共通の型を作成（gray[50]などの値は文字列リテラルではなくstring型に）
type ThemeColors = {
  primary: LightTheme["colors"]["primary"];
  win: LightTheme["colors"]["win"];
  defeat: LightTheme["colors"]["defeat"];
  error: LightTheme["colors"]["error"];
  success: LightTheme["colors"]["success"];
  warning: LightTheme["colors"]["warning"];
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  white: string;
  black: string;
  background: string;
  backgroundSecondary: string;
  surface: string;
  surfaceHover: string;
  border: string;
  borderLight: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  info: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    isLight: boolean;
    isDark: boolean;
    colors: ThemeColors;
    breakpoints: LightTheme["breakpoints"];
    spacing: LightTheme["spacing"];
    borderRadius: LightTheme["borderRadius"];
    shadows: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      inner: string;
      none: string;
      glow: string;
      glowLg: string;
    };
    gradients: {
      primary: string;
      success: string;
      danger: string;
      warning: string;
      glass: string;
      shimmer: string;
    };
    transitions: LightTheme["transitions"];
    blur: LightTheme["blur"];
  }
}
