import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";
import { useTranslation } from "@/hooks";
import { useCurrentSeasonStats } from "../hooks/useCurrentSeasonStats";
import type { HudElement as HudElementType } from "../types";

type DraggableHudElementProps = {
  element: HudElementType;
  editMode: boolean;
};

const ElementContainer = styled.div<{ $x: number; $y: number; $isDragging: boolean; $editMode: boolean }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  background: ${({ theme, $editMode }) => ($editMode ? `${theme.colors.background}ee` : `${theme.colors.background}cc`)};
  border: ${({ theme, $editMode }) => ($editMode ? `2px dashed ${theme.colors.primary}` : "none")};
  border-radius: 8px;
  padding: 16px 24px;
  cursor: ${({ $editMode }) => ($editMode ? "move" : "default")};
  user-select: none;
  opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  min-width: 200px;
  transition:
    background 0.2s,
    border 0.2s;

  &:hover {
    background: ${({ theme, $editMode }) => ($editMode ? `${theme.colors.background}ff` : `${theme.colors.background}cc`)};
  }
`;

const Label = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const Unit = styled.span`
  font-size: 1rem;
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/**
 * ドラッグ可能なHUD要素コンポーネント
 */
export function DraggableHudElement({ element, editMode }: DraggableHudElementProps) {
  const { t } = useTranslation();
  const currentSeasonStats = useCurrentSeasonStats();

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: element.id,
    disabled: !editMode,
  });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  const getElementContent = () => {
    switch (element.type) {
      case "winCount":
        return {
          label: t("obs.winCount"),
          value: currentSeasonStats.wins.toString(),
          unit: t("obs.matches"),
        };
      case "loseCount":
        return {
          label: t("obs.loseCount"),
          value: currentSeasonStats.losses.toString(),
          unit: t("obs.matches"),
        };
      case "winRate":
        return {
          label: t("obs.winRate"),
          value: currentSeasonStats.winRate.toFixed(1),
          unit: "%",
        };
      case "totalMatches":
        return {
          label: t("obs.totalMatches"),
          value: currentSeasonStats.total.toString(),
          unit: t("obs.matches"),
        };
      default:
        return { label: "", value: "-", unit: "" };
    }
  };

  const { label, value, unit } = getElementContent();

  return (
    <ElementContainer ref={setNodeRef} style={style} $x={element.position.x} $y={element.position.y} $isDragging={isDragging} $editMode={editMode} {...listeners} {...attributes}>
      <Label>{label}</Label>
      <Value>
        {value}
        <Unit>{unit}</Unit>
      </Value>
    </ElementContainer>
  );
}
