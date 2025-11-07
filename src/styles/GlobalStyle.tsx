import { createGlobalStyle } from "styled-components";
import { media } from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  /* View Transition API サポート */
  @view-transition {
    navigation: auto;
  }

  /* ページ遷移アニメーション */
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 0.3s;
  }

  html {
    background-image: url("${import.meta.env.BASE_URL}img/${({ theme }) => (theme.isDark ? "bgn.webp" : "bg.webp")}");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color-scheme: ${({ theme }) => (theme.isDark ? "dark" : "light")};
  }

  /* iOS 26 Safari ノッチ・Dynamic Island対応 - グラスモフィーな背景 */
  @supports (padding-top: env(safe-area-inset-top)) {
    html {
      padding-top: env(safe-area-inset-top);
      padding-bottom: env(safe-area-inset-bottom);
      padding-left: env(safe-area-inset-left);
      padding-right: env(safe-area-inset-right);
    }

    /* トップエリア（ノッチ・Dynamic Island） - 透過グラスモフィー */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: env(safe-area-inset-top);
      background: transparent;
      backdrop-filter: saturate(180%) ${({ theme }) => theme.blur.xl};
      -webkit-backdrop-filter: saturate(180%) ${({ theme }) => theme.blur.xl};
      z-index: 9999;
      pointer-events: none;
    }

    /* ボトムエリア（ホームインジケーター） - 透過グラスモフィー */
    body::after {
      content: '';
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: env(safe-area-inset-bottom);
      background: transparent;
      backdrop-filter: saturate(180%) ${({ theme }) => theme.blur.xl};
      -webkit-backdrop-filter: saturate(180%) ${({ theme }) => theme.blur.xl};
      z-index: 9999;
      pointer-events: none;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.text};
    overflow-y: scroll;
    scrollbar-width: thin;
    transition: background 0.3s ease, color 0.3s ease;
  }

  /* カスタムスクロールバー (Webkit) */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;

    ${media.mobile} {
      width: 4px;
      height: 4px;
    }
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) =>
      theme.isDark
        ? "linear-gradient(135deg, rgba(38, 161, 223, 0.6) 0%, rgba(243, 99, 70, 0.6) 100%)"
        : "linear-gradient(135deg, rgba(38, 161, 223, 0.5) 0%, rgba(243, 99, 70, 0.5) 100%)"};
    backdrop-filter: ${({ theme }) => theme.blur.sm};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    border: 1px solid ${({ theme }) => theme.colors.borderLight};
    transition: all 0.2s ease;
    
    &:hover {
      background: ${({ theme }) =>
        theme.isDark
          ? "linear-gradient(135deg, rgba(38, 161, 223, 0.8) 0%, rgba(243, 99, 70, 0.8) 100%)"
          : "linear-gradient(135deg, rgba(38, 161, 223, 0.7) 0%, rgba(243, 99, 70, 0.7) 100%)"};
      border-color: ${({ theme }) => theme.colors.border};
    }

    &:active {
      background: ${({ theme }) =>
        theme.isDark
          ? "linear-gradient(135deg, rgba(38, 161, 223, 1) 0%, rgba(243, 99, 70, 1) 100%)"
          : "linear-gradient(135deg, rgba(38, 161, 223, 0.9) 0%, rgba(243, 99, 70, 0.9) 100%)"};
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.base};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary[600]};
    }
  }

  /* テキスト選択時のカラー */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary[200]};
    color: ${({ theme }) => theme.colors.primary[900]};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font: inherit;
  }

  input, textarea, select {
    font: inherit;
  }
`;
