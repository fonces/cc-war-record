import { createGlobalStyle } from "styled-components";

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

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) =>
      theme.isDark ? "linear-gradient(to bottom right, #0a0a0b 0%, #18181b 50%, #27272a 100%)" : "linear-gradient(to bottom right, #faf5ff 0%, #f3f4f6 50%, #e9d5ff 100%)"};
    background-attachment: fixed;
    overflow-y: scroll;
    scrollbar-width: thin;
    transition: background 0.3s ease, color 0.3s ease;
  }

  /* カスタムスクロールバー (Webkit) */
  ::-webkit-scrollbar {
    width: 10px;
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
