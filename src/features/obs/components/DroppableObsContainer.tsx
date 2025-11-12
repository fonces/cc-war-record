import { useDroppable } from "@dnd-kit/core";
import styled from "styled-components";

const ObsContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100dvh - 200px);
  overflow: auto;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  /* スクロールバーのカスタマイズ */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  /* Firefox用 */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.border} ${({ theme }) => theme.colors.surface};
`;

const ObsContainer = styled.div<{ $width: number; $height: number }>`
  position: relative;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background: ${({ theme }) => theme.colors.surface};
  flex-shrink: 0;
`;

type DroppableObsContainerProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  width: number;
  height: number;
};

/**
 * ドロップ可能なObsContainerコンポーネント
 */
export function DroppableObsContainer({ children, onClick, containerRef, width, height }: DroppableObsContainerProps) {
  const { setNodeRef } = useDroppable({
    id: "obs-container",
  });

  return (
    <ObsContainerWrapper>
      <ObsContainer
        ref={(node) => {
          setNodeRef(node);
          containerRef.current = node;
        }}
        className="obs-container"
        onClick={onClick}
        $width={width}
        $height={height}
      >
        {children}
      </ObsContainer>
    </ObsContainerWrapper>
  );
}
