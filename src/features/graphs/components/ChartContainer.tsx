import styled, { keyframes } from "styled-components";

/**
 * フェードインアニメーション
 */
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

/**
 * グラフコンテナの共通スタイル
 */
export const StyledChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradients.primary};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows["2xl"]}, ${({ theme }) => theme.shadows.glow};
  }

  /* Recharts要素のフォーカスoutlineを打ち消し */
  .recharts-surface:focus {
    outline: none;
  }
`;

/**
 * グラフヘッダーの共通スタイル
 */
export const StyledChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

/**
 * グラフタイトルの共通スタイル
 */
export const StyledChartTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: ${({ theme }) => theme.colors.text};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeIn 0.5s ease-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.gradients.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    opacity: 0.6;
  }
`;

/**
 * フィルターラッパーの共通スタイル
 */
export const StyledFiltersWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;
