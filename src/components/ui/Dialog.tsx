import type { ReactNode } from "react";
import styled from "styled-components";
import { Button, Icon } from "@/components/ui";
import { useScrollLock, useTranslation } from "@/hooks";

type DialogProps = {
  /** ダイアログの表示状態 */
  isOpen: boolean;
  /** ダイアログを閉じる処理 */
  onClose: () => void;
  /** ダイアログのタイトル */
  title: string;
  /** ダイアログの内容 */
  children: ReactNode;
  /** 確認ボタンのテキスト */
  confirmText?: string;
  /** キャンセルボタンのテキスト */
  cancelText?: string;
  /** 確認ボタンのクリックハンドラー */
  onConfirm?: () => void;
  /** 確認ボタンのタイプ（危険なアクション用） */
  confirmType?: "primary" | "danger";
  /** ローディング状態 */
  isLoading?: boolean;
};

const StyledOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing[4]};
`;

const StyledDialog = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: dialogSlideIn 0.2s ease-out;

  @keyframes dialogSlideIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

const StyledHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
`;

const StyledTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing[4]};
`;

const StyledCloseButton = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing[1]};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const StyledContent = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
`;

const StyledFooter = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[6]};
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  justify-content: flex-end;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  flex-shrink: 0;
`;

const StyledConfirmButton = styled(Button)<{
  confirmType: "primary" | "danger";
}>`
  background-color: ${({ confirmType, theme }) => (confirmType === "danger" ? theme.colors.error[600] : theme.colors.primary[600])};

  &:hover:not(:disabled) {
    background-color: ${({ confirmType, theme }) => (confirmType === "danger" ? theme.colors.error[700] : theme.colors.primary[700])};
  }
`;

/**
 * 汎用ダイアログコンポーネント
 */
export const Dialog = ({ isOpen, onClose, title, children, confirmText, cancelText, onConfirm, confirmType = "primary", isLoading = false }: DialogProps) => {
  const { t } = useTranslation();

  // デフォルト値を翻訳キーから取得
  const defaultConfirmText = confirmText ?? t("common.confirm");
  const defaultCancelText = cancelText ?? t("common.cancel");

  // ダイアログが開いているときに背景のスクロールを防ぐ
  useScrollLock(isOpen);

  // ESCキーでダイアログを閉じる
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  // オーバーレイクリックでダイアログを閉じる
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <StyledOverlay isOpen={isOpen} onClick={handleOverlayClick} onKeyDown={handleKeyDown}>
      <StyledDialog role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <StyledHeader>
          <StyledTitle id="dialog-title">{title}</StyledTitle>
          <StyledCloseButton onClick={onClose} aria-label={t("common.closeDialog")}>
            <Icon name="close" size={20} />
          </StyledCloseButton>
        </StyledHeader>

        <StyledContent>{children}</StyledContent>

        {onConfirm && (
          <StyledFooter>
            <Button variant="secondary" onClick={onClose} disabled={isLoading}>
              {defaultCancelText}
            </Button>
            <StyledConfirmButton confirmType={confirmType} onClick={onConfirm} disabled={isLoading}>
              {isLoading ? t("common.processing") : defaultConfirmText}
            </StyledConfirmButton>
          </StyledFooter>
        )}
      </StyledDialog>
    </StyledOverlay>
  );
};
