import { memo } from "react";
import styled from "styled-components";

type FlushType = "error" | "success" | "warning" | "info";

type FlushProps = {
  /** メッセージタイプ */
  type?: FlushType;
  /** メッセージ内容 */
  children: React.ReactNode;
};

const StyledFlush = styled.div<{ $type: FlushType }>`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: 0.875rem;

  ${({ theme, $type }) => {
    const isDark = theme.isDark;

    switch ($type) {
      case "error":
        return `
          background-color: ${isDark ? "rgba(239, 68, 68, 0.15)" : `${theme.colors.error[500]}20`};
          border: 1px solid ${isDark ? "rgba(239, 68, 68, 0.3)" : `${theme.colors.error[500]}40`};
          color: ${isDark ? "#fca5a5" : theme.colors.error[500]};
        `;
      case "success":
        return `
          background-color: ${isDark ? "rgba(34, 197, 94, 0.15)" : `${theme.colors.success[500]}20`};
          border: 1px solid ${isDark ? "rgba(34, 197, 94, 0.3)" : `${theme.colors.success[500]}40`};
          color: ${isDark ? "#86efac" : theme.colors.success[500]};
        `;
      case "warning":
        return `
          background-color: ${isDark ? "rgba(234, 179, 8, 0.15)" : "rgba(234, 179, 8, 0.1)"};
          border: 1px solid ${isDark ? "rgba(234, 179, 8, 0.3)" : "rgba(234, 179, 8, 0.3)"};
          color: ${isDark ? "#fde047" : "#a16207"};
        `;
      case "info":
        return `
          background-color: ${isDark ? "rgba(38, 161, 223, 0.15)" : "rgba(38, 161, 223, 0.1)"};
          border: 1px solid ${isDark ? "rgba(38, 161, 223, 0.3)" : "rgba(38, 161, 223, 0.3)"};
          color: ${isDark ? "#7dd3fc" : "#0369a1"};
        `;
      default:
        return "";
    }
  }}
`;

/**
 * フラッシュメッセージコンポーネント
 * エラー、成功、警告、情報メッセージを表示
 */
export const Flush = memo(({ type = "info", children }: FlushProps) => {
  return <StyledFlush $type={type}>{children}</StyledFlush>;
});

Flush.displayName = "Flush";
