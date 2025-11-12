import { useState } from "react";
import { useObsLayoutStore } from "../store/obsLayoutStore";
import type { ResizeDirection } from "../components/ResizeHandles";
import type { HudElement } from "../types";

/**
 * 要素のリサイズ機能を提供するカスタムフック
 */
export function useElementResize(element: HudElement) {
  const { updateElementSize, updateElementPosition } = useObsLayoutStore();
  const [isResizing, setIsResizing] = useState(false);

  const handleResizeStart = (e: React.MouseEvent, direction: ResizeDirection) => {
    e.stopPropagation();
    setIsResizing(true);

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = element.size?.width || (e.currentTarget.parentElement?.offsetWidth ?? 200);
    const startHeight = element.size?.height || (e.currentTarget.parentElement?.offsetHeight ?? 50);
    const startPosX = element.position.x;
    const startPosY = element.position.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;
      let newX = startPosX;
      let newY = startPosY;

      // 方向に応じたリサイズ計算
      if (direction.includes("e")) {
        newWidth = Math.max(100, startWidth + deltaX);
      }
      if (direction.includes("w")) {
        newWidth = Math.max(100, startWidth - deltaX);
        newX = startPosX + (startWidth - newWidth);
      }
      if (direction.includes("s")) {
        newHeight = Math.max(50, startHeight + deltaY);
      }
      if (direction.includes("n")) {
        newHeight = Math.max(50, startHeight - deltaY);
        newY = startPosY + (startHeight - newHeight);
      }

      updateElementSize(element.id, { width: newWidth, height: newHeight });
      if (newX !== startPosX || newY !== startPosY) {
        updateElementPosition(element.id, { x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return { isResizing, handleResizeStart };
}
