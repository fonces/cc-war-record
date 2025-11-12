import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "@/hooks";
import { useElementResize } from "../hooks/useElementResize";
import { useObsLayoutStore } from "../store/obsLayoutStore";
import { ContextMenu } from "./ContextMenu";
import { HudElementContent } from "./HudElementContent";
import { ResizeHandles } from "./ResizeHandles";
import type { HudElement as HudElementType } from "../types";

type DraggableHudElementProps = {
  element: HudElementType;
  editMode: boolean;
};

const ElementContainer = styled.div<{
  $x: number;
  $y: number;
  $width?: number;
  $height?: number;
  $isDragging: boolean;
  $editMode: boolean;
  $isSelected: boolean;
  $fontSize?: number;
  $backgroundColor?: string;
}>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: ${({ $width }) => ($width ? `${$width}px` : "auto")};
  height: ${({ $height }) => ($height ? `${$height}px` : "auto")};
  min-width: ${({ $width }) => ($width ? "unset" : "200px")};
  background: ${({ $backgroundColor, theme, $editMode }) => $backgroundColor || ($editMode ? `${theme.colors.background}ee` : `${theme.colors.background}cc`)};
  border-radius: 8px;
  padding: 16px 24px;
  cursor: ${({ $editMode }) => ($editMode ? "move" : "default")};
  user-select: none;
  opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  font-size: ${({ $fontSize }) => ($fontSize ? `${$fontSize}px` : "inherit")};

  /* GPU アクセラレーションを有効化 */
  will-change: width, height, transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  /* 選択された要素のみoutlineを表示 */
  ${({ theme, $isSelected }) =>
    $isSelected &&
    `
    outline: 2px solid ${theme.colors.primary[300]};
  `}

  &:hover {
    ${({ theme, $editMode, $isSelected }) =>
      $editMode &&
      !$isSelected &&
      `
      outline: 2px solid ${theme.colors.primary[200]};
    `}
  }

  &:focus,
  &:active {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
  }

  &:focus:not(:focus-visible) {
    outline: ${({ $isSelected, theme }) => ($isSelected ? `2px solid ${theme.colors.primary[300]}` : "none")};
  }
`;

/**
 * ドラッグ可能なHUD要素コンポーネント
 */
export function DraggableHudElement({ element, editMode }: DraggableHudElementProps) {
  const { t } = useTranslation();
  const { selectElement, selectedElementId, removeElement } = useObsLayoutStore();
  const { isResizing, handleResizeStart } = useElementResize(element);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: element.id,
    disabled: !editMode || isResizing,
  });

  const isSelected = selectedElementId === element.id;

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  const handleContextMenu = (e: React.MouseEvent) => {
    if (editMode) {
      e.preventDefault();
      e.stopPropagation();
      setContextMenu({ x: e.clientX, y: e.clientY });
    }
  };

  const handleEdit = () => {
    selectElement(element.id);
  };

  const handleDelete = () => {
    if (confirm(t("obs.editPanel.confirmDelete"))) {
      removeElement(element.id);
    }
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  return (
    <>
      <ElementContainer
        ref={setNodeRef}
        style={style}
        $x={element.position.x}
        $y={element.position.y}
        $width={element.size?.width}
        $height={element.size?.height}
        $isDragging={isDragging}
        $editMode={editMode}
        $isSelected={isSelected}
        $fontSize={element.fontSize}
        $backgroundColor={element.backgroundColor}
        onContextMenu={handleContextMenu}
        data-element-id={element.id}
        {...listeners}
        {...attributes}
      >
        <HudElementContent element={element} />
        <ResizeHandles onResizeStart={handleResizeStart} />
      </ElementContainer>
      {contextMenu && <ContextMenu x={contextMenu.x} y={contextMenu.y} onEdit={handleEdit} onDelete={handleDelete} onClose={handleCloseContextMenu} />}
    </>
  );
}
