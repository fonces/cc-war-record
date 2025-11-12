import { useDroppable } from "@dnd-kit/core";
import { useEffect, useRef } from "react";
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
  border: 1px solid ${({ theme }) => theme.colors.border};
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

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;

    const handleMouseDown = (e: MouseEvent) => {
      // 要素上でのクリックの場合はドラッグスクロールを無効化
      if ((e.target as HTMLElement).closest(".obs-container > *")) {
        return;
      }

      isDragging = true;
      startX = e.pageX - wrapper.offsetLeft;
      startY = e.pageY - wrapper.offsetTop;
      scrollLeft = wrapper.scrollLeft;
      scrollTop = wrapper.scrollTop;
      wrapper.style.cursor = "grabbing";
      wrapper.style.userSelect = "none";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const x = e.pageX - wrapper.offsetLeft;
      const y = e.pageY - wrapper.offsetTop;
      const walkX = (x - startX) * 1.5; // スクロール速度
      const walkY = (y - startY) * 1.5;

      wrapper.scrollLeft = scrollLeft - walkX;
      wrapper.scrollTop = scrollTop - walkY;
    };

    const handleMouseUp = () => {
      isDragging = false;
      wrapper.style.cursor = "grab";
      wrapper.style.userSelect = "";
    };

    const handleMouseLeave = () => {
      isDragging = false;
      wrapper.style.cursor = "grab";
      wrapper.style.userSelect = "";
    };

    wrapper.addEventListener("mousedown", handleMouseDown);
    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseup", handleMouseUp);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    // 初期カーソル設定
    wrapper.style.cursor = "grab";

    return () => {
      wrapper.removeEventListener("mousedown", handleMouseDown);
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseup", handleMouseUp);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <ObsContainerWrapper ref={wrapperRef}>
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
