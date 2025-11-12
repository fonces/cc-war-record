import { memo } from "react";
import styled from "styled-components";

type SnapGuideProps = {
  /** X軸のガイド位置 */
  x?: number;
  /** Y軸のガイド位置 */
  y?: number;
  /** X軸の距離表示 */
  xDistance?: { from: number; to: number; y: number };
  /** Y軸の距離表示 */
  yDistance?: { from: number; to: number; x: number };
};

const VerticalGuide = styled.div<{ $x: number }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: 0;
  height: 100%;
  width: 2px;
  background: ${({ theme }) => theme.colors.primary[500]};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary[500]};
  pointer-events: none;
  z-index: 1000;
  animation: fadeIn 0.15s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const HorizontalGuide = styled.div<{ $y: number }>`
  position: absolute;
  top: ${({ $y }) => $y}px;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary[500]};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary[500]};
  pointer-events: none;
  z-index: 1000;
  animation: fadeIn 0.15s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const DistanceLine = styled.div<{ $vertical?: boolean }>`
  position: absolute;
  background: ${({ theme }) => theme.colors.primary[300]};
  pointer-events: none;
  z-index: 1001;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.primary[500]};
  }

  ${({ $vertical }) =>
    $vertical
      ? `
    width: 1px;
    &::before, &::after {
      width: 8px;
      height: 1px;
      left: -4px;
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
  `
      : `
    height: 1px;
    &::before, &::after {
      width: 1px;
      height: 8px;
      top: -4px;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  `}
`;

const DistanceLabel = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  pointer-events: none;
  z-index: 1002;
  white-space: nowrap;
`;

/**
 * スナップガイドコンポーネント
 * ドラッグ中に他の要素との位置合わせを視覚的に表示
 */
export const SnapGuide = memo(({ x, y, xDistance, yDistance }: SnapGuideProps) => {
  console.log("SnapGuide render:", { x, y, xDistance, yDistance }); // デバッグ用
  return (
    <>
      {x !== undefined && <VerticalGuide $x={x} />}
      {y !== undefined && <HorizontalGuide $y={y} />}

      {xDistance && (
        <>
          <DistanceLine
            style={{
              left: `${xDistance.from}px`,
              top: `${xDistance.y}px`,
              width: `${Math.abs(xDistance.to - xDistance.from)}px`,
            }}
          />
          <DistanceLabel
            style={{
              left: `${xDistance.from + Math.abs(xDistance.to - xDistance.from) / 2 - 20}px`,
              top: `${xDistance.y - 20}px`,
            }}
          >
            {Math.abs(xDistance.to - xDistance.from).toFixed(1)}px
          </DistanceLabel>
        </>
      )}

      {yDistance && (
        <>
          <DistanceLine
            $vertical
            style={{
              left: `${yDistance.x}px`,
              top: `${yDistance.from}px`,
              height: `${Math.abs(yDistance.to - yDistance.from)}px`,
            }}
          />
          <DistanceLabel
            style={{
              left: `${yDistance.x + 10}px`,
              top: `${yDistance.from + Math.abs(yDistance.to - yDistance.from) / 2 - 10}px`,
            }}
          >
            {Math.abs(yDistance.to - yDistance.from).toFixed(1)}px
          </DistanceLabel>
        </>
      )}
    </>
  );
});

SnapGuide.displayName = "SnapGuide";
