import { useDroppable } from "@dnd-kit/core";
import styled from "styled-components";

const ObsContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

const ObsContainer = styled.div<{ $width: number; $height: number }>`
  position: relative;
  width: 100%;
  max-width: ${({ $width }) => $width}px;
  aspect-ratio: ${({ $width, $height }) => $width / $height};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: auto;

  /* スクロールバーのカスタマイズ */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;

    &:hover {
      background: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  /* Firefox用 */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.border} ${({ theme }) => theme.colors.surface};
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
