import styled from "styled-components";

const StyledLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: ${({ theme }) => theme.spacing[8]};
`;

const StyledLoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${({ theme }) => theme.colors.gray[200]};
  border-top-color: ${({ theme }) => theme.colors.primary[500]};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledLoadingText = styled.p`
  margin-top: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

/**
 * ローディングフォールバックコンポーネント
 * Suspense使用時のフォールバック表示
 */
export const LoadingFallback = () => {
  return (
    <StyledLoadingContainer>
      <div>
        <StyledLoadingSpinner />
        <StyledLoadingText>Loading...</StyledLoadingText>
      </div>
    </StyledLoadingContainer>
  );
};
