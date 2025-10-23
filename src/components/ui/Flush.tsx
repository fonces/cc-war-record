import { memo } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

type FlushType = "error" | "success" | "warning" | "info";

type FlushProps = {
  /** メッセージタイプ */
  type?: FlushType;
  /** メッセージ内容 */
  children: React.ReactNode;
  /** 閉じるボタンのクリックハンドラー */
  onClose?: () => void;
};

const StyledFlush = styled.div<{ $type: FlushType }>`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.875rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};

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

const StyledContent = styled.div`
  flex: 1;
`;

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
  transition: opacity ${({ theme }) => theme.transitions.base};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;

  /* クリック領域を拡張 */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
  }

  &:hover {
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
  }
`;

/**
 * フラッシュメッセージコンポーネント
 * エラー、成功、警告、情報メッセージを表示
 */
export const Flush = memo(({ type = "info", children, onClose }: FlushProps) => {
  return (
    <StyledFlush $type={type}>
      <StyledContent>{children}</StyledContent>
      {onClose && (
        <StyledCloseButton onClick={onClose} type="button" aria-label="Close">
          <Icon name="close" size={16} />
        </StyledCloseButton>
      )}
    </StyledFlush>
  );
});

Flush.displayName = "Flush";
