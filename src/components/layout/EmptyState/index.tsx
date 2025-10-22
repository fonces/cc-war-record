import { memo } from "react";
import styled, { keyframes } from "styled-components";
import { Button, Icon } from "@/components/ui";
import { useTranslation } from "@/hooks";

// アニメーション
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[6]};
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(38, 161, 223, 0.15);
  box-shadow: ${({ theme }) => theme.shadows["2xl"]};
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(38, 161, 223, 0.03) 0%, transparent 70%);
    animation: ${pulse} 3s ease-in-out infinite;
  }
`;

const StyledEmptyIcon = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(38, 161, 223, 0.1) 0%, rgba(243, 99, 70, 0.1) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  position: relative;
  z-index: 1;
  animation: ${float} 3s ease-in-out infinite;
  box-shadow: 0 8px 24px rgba(38, 161, 223, 0.15);
  border: 2px solid rgba(38, 161, 223, 0.2);

  &::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.2;
  }
`;

const StyledEmptyTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
`;

const StyledEmptyDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  max-width: 450px;
  line-height: 1.7;
  font-weight: 500;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
`;

const StyledCreateButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: 1.1rem;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.8s ease-out 0.6s backwards;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 24px rgba(38, 161, 223, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(1);
  }
`;

type EmptyStateProps = {
  /** 作成ボタンクリック時のハンドラー */
  onCreateSeason: () => void;
};

/**
 * シーズン未作成時の空状態表示コンポーネント
 */
export const EmptyState = memo(({ onCreateSeason }: EmptyStateProps) => {
  const { t } = useTranslation();

  return (
    <StyledEmptyState>
      <StyledEmptyIcon>
        <Icon name="home" size={32} />
      </StyledEmptyIcon>
      <StyledEmptyTitle>{t("pages.home.noSeason")}</StyledEmptyTitle>
      <StyledEmptyDescription>{t("pages.home.createFirstSeason")}</StyledEmptyDescription>
      <StyledCreateButton onClick={onCreateSeason}>
        <Icon name="add" size={20} color="white" />
        {t("pages.home.createSeason")}
      </StyledCreateButton>
    </StyledEmptyState>
  );
});

EmptyState.displayName = "EmptyState";
