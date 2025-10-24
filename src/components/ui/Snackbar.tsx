import { memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "@/hooks";
import { Button } from "./Button";
import { CloseIcon } from "./Icon/icons";

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
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
    transform: translateY(-100%);
    opacity: 0;
  }
`;

type StyledSnackbarContainerProps = {
  $isVisible: boolean;
};

const StyledSnackbarContainer = styled.div<StyledSnackbarContainerProps>`
  position: fixed;
  top: ${({ theme }) => theme.spacing[6]};
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -100%);
  opacity: 0;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  animation: ${({ $isVisible }) => ($isVisible ? slideIn : slideOut)} 0.3s ease-out forwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: ${({ theme }) => theme.spacing[4]};
    left: ${({ theme }) => theme.spacing[4]};
    right: ${({ theme }) => theme.spacing[4]};
    transform: translateY(-100%);
  }
`;

const StyledSnackbar = styled.div`
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  box-shadow: ${({ theme }) => theme.shadows["2xl"]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
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
  margin-right: 1rem;
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      // 少し遅延させてからアニメーションを開始
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 10);

      if (autoHideDuration) {
        const hideTimer = setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onClose?.();
          }, 300); // アニメーション完了後に閉じる
        }, autoHideDuration);

        return () => {
          clearTimeout(showTimer);
          clearTimeout(hideTimer);
        };
      }

      return () => clearTimeout(showTimer);
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
        {actionLabel && onAction && (
          <Button variant="outline" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
        <StyledCloseButton onClick={handleClose} aria-label={t("common.close")}>
          <CloseIcon />
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
