import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const StyledOverlay = styled.div<{ $isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(2px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-out;
`;

const StyledSkeletonContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 24px;
`;

const StyledSkeletonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const StyledSkeletonTitle = styled.div`
  height: 30px;
  width: 200px;
  background: linear-gradient(to right, #e0e0e0 0%, #f0f0f0 20%, #e0e0e0 40%, #e0e0e0 100%);
  background-size: 800px 100px;
  border-radius: 4px;
  animation: ${shimmer} 1s infinite;
`;

const StyledSkeletonFilters = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledSkeletonFilter = styled.div`
  height: 40px;
  width: 200px;
  background: linear-gradient(to right, #e0e0e0 0%, #f0f0f0 20%, #e0e0e0 40%, #e0e0e0 100%);
  background-size: 800px 100px;
  border-radius: 4px;
  animation: ${shimmer} 1s infinite;
`;

const StyledSkeletonChart = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
  background: linear-gradient(to right, #e0e0e0 0%, #f0f0f0 20%, #e0e0e0 40%, #e0e0e0 100%);
  background-size: 800px 100px;
  border-radius: 4px;
  animation: ${shimmer} 1s infinite;
`;

interface ChartSkeletonProps {
  /** チャートの高さ */
  height?: number;
  /** フィルターの数 */
  filterCount?: number;
  /** 表示状態 */
  isVisible?: boolean;
}

/**
 * チャート読み込み中のオーバーレイスケルトン表示コンポーネント
 */
export const ChartSkeleton = ({ height = 400, filterCount = 3, isVisible = true }: ChartSkeletonProps) => {
  return (
    <StyledOverlay $isVisible={isVisible}>
      <StyledSkeletonContent>
        <StyledSkeletonHeader>
          <StyledSkeletonTitle />
          <StyledSkeletonFilters>
            {Array.from({ length: filterCount }).map((_, index) => (
              <StyledSkeletonFilter key={index} />
            ))}
          </StyledSkeletonFilters>
        </StyledSkeletonHeader>
        <StyledSkeletonChart height={height} />
      </StyledSkeletonContent>
    </StyledOverlay>
  );
};
