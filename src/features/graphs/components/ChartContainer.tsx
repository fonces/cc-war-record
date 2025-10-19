import styled from "styled-components";

/**
 * グラフコンテナの共通スタイル
 */
export const StyledChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
`;

/**
 * グラフヘッダーの共通スタイル
 */
export const StyledChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

/**
 * グラフタイトルの共通スタイル
 */
export const StyledChartTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

/**
 * フィルターラッパーの共通スタイル
 */
export const StyledFiltersWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
