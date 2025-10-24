import { memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "@/hooks";

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

type StyledSnackbarContainerProps = {
  $isVisible: boolean;
};

const StyledSnackbarContainer = styled.div<StyledSnackbarContainerProps>`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing[6]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  animation: ${({ $isVisible }) => ($isVisible ? slideIn : slideOut)} 0.3s ease-out forwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: ${({ theme }) => theme.spacing[4]};
    left: ${({ theme }) => theme.spacing[4]};
    right: ${({ theme }) => theme.spacing[4]};
    transform: none;
  }
`;

const StyledSnackbar = styled.div`
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  box-shadow: ${({ theme }) => theme.shadows["2xl"]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  min-width: 320px;
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: auto;
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  }
`;

const StyledMessage = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[600]};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const StyledCloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${({ theme }) => theme.transitions.base};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

type SnackbarProps = {
  /** 表示/非表示の状態 */
  open: boolean;
  /** メッセージ */
  message: string;
  /** アクションボタンのラベル */
  actionLabel?: string;
  /** アクションボタンのクリックハンドラー */
  onAction?: () => void;
  /** 閉じるハンドラー */
  onClose?: () => void;
  /** 自動で閉じるまでの時間（ミリ秒）。指定しない場合は自動で閉じない */
  autoHideDuration?: number;
};

const SnackbarComponent = ({ open, message, actionLabel, onAction, onClose, autoHideDuration }: SnackbarProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setIsVisible(true);

      if (autoHideDuration) {
        const timer = setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onClose?.();
          }, 300); // アニメーション完了後に閉じる
        }, autoHideDuration);

        return () => clearTimeout(timer);
      }
    } else {
      setIsVisible(false);
    }
  }, [open, autoHideDuration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  if (!open) return null;

  const snackbar = (
    <StyledSnackbarContainer $isVisible={isVisible}>
      <StyledSnackbar>
        <StyledMessage>{message}</StyledMessage>
        {actionLabel && onAction && <StyledButton onClick={onAction}>{actionLabel}</StyledButton>}
        <StyledCloseButton onClick={handleClose} aria-label={t("common.close")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </StyledCloseButton>
      </StyledSnackbar>
    </StyledSnackbarContainer>
  );

  return createPortal(snackbar, document.body);
};

/**
 * Snackbar通知コンポーネント
 * 画面下部に一時的な通知を表示する
 */
export const Snackbar = memo(SnackbarComponent);

Snackbar.displayName = "Snackbar";
