import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import styled from "styled-components";
import { useElementResize } from "../hooks/useElementResize";
import { useObsLayoutStore } from "../store/obsLayoutStore";
import { ContextMenu } from "./ContextMenu";
import { HudElementContent } from "./HudElementContent";
import { ResizeHandles } from "./ResizeHandles";
import type { HudElement as HudElementType } from "../types";

type DraggableHudElementProps = {
  element: HudElementType;
  editMode: boolean;
  isDraggingGroup?: boolean;
  activeId?: string | null;
  groupDragDelta?: { x: number; y: number } | null;
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
  $scale?: number;
  $boxShadow?: string;
  $visible?: boolean;
  $padding?: number;
}>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: ${({ $width }) => ($width ? `${$width}px` : "auto")};
  height: ${({ $height }) => ($height ? `${$height}px` : "auto")};
  min-width: ${({ $width }) => ($width ? "unset" : "200px")};
  background: ${({ $backgroundColor, theme, $editMode }) => $backgroundColor || ($editMode ? `${theme.colors.background}ee` : `${theme.colors.background}cc`)};
  border-radius: 8px;
  padding: ${({ $padding }) => ($padding !== undefined ? `${$padding}px` : "16px 24px")};
  cursor: ${({ $editMode }) => ($editMode ? "move" : "default")};
  user-select: none;
  opacity: ${({ $isDragging, $visible }) => ($isDragging ? 0.5 : $visible === false ? 0.1 : 1)};
  box-shadow: ${({ $boxShadow }) => $boxShadow || "0 2px 8px rgba(0, 0, 0, 0.2)"};
  font-size: ${({ $fontSize }) => ($fontSize ? `${$fontSize}px` : "16px")};
  transform-origin: top left;

  /* GPU アクセラレーションを有効化 */
  will-change: width, height, transform;
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

const LineContainer = styled.div<{
  $x: number;
  $y: number;
  $width?: number;
  $height?: number;
  $isDragging: boolean;
  $editMode: boolean;
  $isSelected: boolean;
  $scale?: number;
  $orientation?: "horizontal" | "vertical";
  $visible?: boolean;
}>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: ${({ $width }) => ($width ? `${$width}px` : "auto")};
  height: ${({ $height }) => ($height ? `${$height}px` : "auto")};
  cursor: ${({ $editMode }) => ($editMode ? "move" : "default")};
  user-select: none;
  opacity: ${({ $isDragging, $visible }) => ($isDragging ? 0.5 : $visible === false ? 0.1 : 1)};
  transform-origin: top left;

  /* Line要素を選択しやすくするためのpadding */
  padding: ${({ $orientation }) => ($orientation === "horizontal" ? "8px 0" : "0 8px")};

  /* GPU アクセラレーションを有効化 */
  will-change: width, height, transform;
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
export function DraggableHudElement({ element, editMode, isDraggingGroup, activeId, groupDragDelta }: DraggableHudElementProps) {
  const { selectElement, selectedElementId, selectedElementIds, toggleSelectElement, setEditingElement, removeElement } = useObsLayoutStore();
  const { isResizing, handleResizeStart } = useElementResize(element);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: element.id,
    disabled: !editMode || isResizing,
  });

  const isSelected = selectedElementId === element.id || selectedElementIds.includes(element.id);

  // グループドラッグ中で、この要素が選択されていて、かつ別の要素がドラッグされている場合
  const isInDraggingGroup = isDraggingGroup && isSelected && activeId !== element.id && groupDragDelta;

  // ドラッグ時のtransformとscaleを組み合わせる
  const scaleTransform = element.scale && element.scale !== 1 ? `scale(${element.scale})` : "";

  // 自分がドラッグされている場合は通常のtransform、グループの一員としてドラッグされている場合はgroupDragDelta
  let dragTransform = "";
  if (transform) {
    dragTransform = CSS.Translate.toString(transform) || "";
  } else if (isInDraggingGroup && groupDragDelta) {
    dragTransform = `translate3d(${groupDragDelta.x}px, ${groupDragDelta.y}px, 0)`;
  }

  const style =
    dragTransform || scaleTransform
      ? {
          transform: `${dragTransform}${dragTransform && scaleTransform ? " " : ""}${scaleTransform}`.trim(),
        }
      : undefined;

  const handleContextMenu = (e: React.MouseEvent) => {
    if (editMode) {
      e.preventDefault();
      e.stopPropagation();
      setContextMenu({ x: e.clientX, y: e.clientY });
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (editMode) {
      e.stopPropagation();

      // Ctrl/Cmd キーで複数選択
      if (e.ctrlKey || e.metaKey) {
        toggleSelectElement(element.id);
      } else {
        selectElement(element.id);
      }
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    if (editMode) {
      e.stopPropagation();
      handleEdit();
    }
  };

  const handleEdit = () => {
    selectElement(element.id);
    setEditingElement(element.id);
  };

  const handleDelete = () => {
    removeElement(element.id);
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  const isLine = element.type === "line";

  return (
    <>
      {isLine ? (
        <LineContainer
          ref={setNodeRef}
          style={style}
          $x={element.position.x}
          $y={element.position.y}
          $width={element.size?.width}
          $height={element.size?.height}
          $isDragging={isDragging}
          $editMode={editMode}
          $isSelected={isSelected}
          $scale={element.scale}
          $orientation={element.lineOrientation}
          $visible={element.visible}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onContextMenu={handleContextMenu}
          data-element-id={element.id}
          {...listeners}
          {...attributes}
        >
          <HudElementContent element={element} />
          <ResizeHandles onResizeStart={handleResizeStart} lineOrientation={element.lineOrientation} />
        </LineContainer>
      ) : (
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
          $scale={element.scale}
          $boxShadow={element.boxShadow}
          $visible={element.visible}
          $padding={element.padding}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onContextMenu={handleContextMenu}
          data-element-id={element.id}
          {...listeners}
          {...attributes}
        >
          <HudElementContent element={element} />
          <ResizeHandles onResizeStart={handleResizeStart} />
        </ElementContainer>
      )}
      {contextMenu && <ContextMenu x={contextMenu.x} y={contextMenu.y} onEdit={handleEdit} onDelete={handleDelete} onClose={handleCloseContextMenu} />}
    </>
  );
}
