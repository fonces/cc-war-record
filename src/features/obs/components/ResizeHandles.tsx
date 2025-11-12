import styled from "styled-components";

export type ResizeDirection = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

type ResizeHandlesProps = {
  onResizeStart: (e: React.MouseEvent, direction: ResizeDirection) => void;
};

const ResizeHandle = styled.div<{ $direction: ResizeDirection }>`
  position: absolute;
  z-index: 10;
  transition: all 0.2s ease;

  ${({ $direction }) => {
    const edgeSize = 6;
    const cornerSize = 4;
    const offset = -6;
    const cornerOffset = -2; // 角のハンドル用のオフセット（より内側に配置）

    // 角のハンドル（丸い円形）
    if ($direction.length === 2) {
      const isTop = $direction.includes("n");
      const isBottom = $direction.includes("s");
      const isLeft = $direction.includes("w");
      const isRight = $direction.includes("e");

      const top = isTop ? `${cornerOffset}px` : "auto";
      const bottom = isBottom ? `${cornerOffset}px` : "auto";
      const left = isLeft ? `${cornerOffset}px` : "auto";
      const right = isRight ? `${cornerOffset}px` : "auto";

      let cursor = "";
      if ($direction === "ne" || $direction === "sw") cursor = "nesw-resize";
      if ($direction === "nw" || $direction === "se") cursor = "nwse-resize";

      return `
        top: ${top};
        bottom: ${bottom};
        left: ${left};
        right: ${right};
        width: ${cornerSize + 4}px;
        height: ${cornerSize + 4}px;
        background: transparent;
        border: 2px solid transparent;
        border-radius: 50%;
        cursor: ${cursor};
      `;
    }

    // 辺のハンドル（細いバー）
    const isVertical = $direction === "n" || $direction === "s";
    const isTop = $direction === "n";
    const isLeft = $direction === "w";

    if (isVertical) {
      return `
        ${isTop ? `top: ${offset}px;` : `bottom: ${offset}px;`}
        left: ${cornerSize + 4}px;
        right: ${cornerSize + 4}px;
        height: ${edgeSize}px;
        background: transparent;
        border-radius: 2px;
        cursor: ns-resize;
      `;
    } else {
      return `
        ${isLeft ? `left: ${offset}px;` : `right: ${offset}px;`}
        top: ${cornerSize + 4}px;
        bottom: ${cornerSize + 4}px;
        width: ${edgeSize}px;
        background: transparent;
        border-radius: 2px;
        cursor: ew-resize;
      `;
    }
  }}
`;

/**
 * リサイズハンドルコンポーネント
 */
export function ResizeHandles({ onResizeStart }: ResizeHandlesProps) {
  return (
    <>
      <ResizeHandle $direction="n" onMouseDown={(e) => onResizeStart(e, "n")} />
      <ResizeHandle $direction="s" onMouseDown={(e) => onResizeStart(e, "s")} />
      <ResizeHandle $direction="e" onMouseDown={(e) => onResizeStart(e, "e")} />
      <ResizeHandle $direction="w" onMouseDown={(e) => onResizeStart(e, "w")} />
      <ResizeHandle $direction="ne" onMouseDown={(e) => onResizeStart(e, "ne")} />
      <ResizeHandle $direction="nw" onMouseDown={(e) => onResizeStart(e, "nw")} />
      <ResizeHandle $direction="se" onMouseDown={(e) => onResizeStart(e, "se")} />
      <ResizeHandle $direction="sw" onMouseDown={(e) => onResizeStart(e, "sw")} />
    </>
  );
}
