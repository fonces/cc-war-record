import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import styled from "styled-components";
import { usePageTitle, useTranslation } from "@/hooks";
import { DraggableHudElement } from "./components/DraggableHudElement";
import { useObsLayoutStore } from "./store/obsLayoutStore";
import type { Position } from "./types";
import type { DragEndEvent } from "@dnd-kit/core";

const ObsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  overflow: hidden;
`;

const ControlPanel = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 16px;
  right: 16px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s;
  z-index: 1000;

  &:hover {
    opacity: 1;
  }
`;

const ControlButton = styled.button<{ $active?: boolean }>`
  background: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.surface)};
  color: ${({ theme, $active }) => ($active ? theme.colors.white : theme.colors.text)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.surface)};
    opacity: 0.9;
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const InfoText = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

/**
 * OBS表示用ページ
 * ストリーミング配信用のオーバーレイ表示を提供
 */
export function ObsPage() {
  const { t } = useTranslation();
  usePageTitle("OBS");

  const { elements, editMode, updateElementPosition, toggleEditMode, resetLayout } = useObsLayoutStore();

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    const element = elements.find((el) => el.id === active.id);

    if (!element) return;

    const newPosition: Position = {
      x: element.position.x + delta.x,
      y: element.position.y + delta.y,
    };

    updateElementPosition(active.id as string, newPosition);
  };

  return (
    <ObsContainer>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        {elements.map((element) => (
          <DraggableHudElement key={element.id} element={element} editMode={editMode} />
        ))}
      </DndContext>

      <ControlPanel $visible={editMode}>
        <ControlButton $active={editMode} onClick={toggleEditMode}>
          {editMode ? t("obs.editMode.disable") : t("obs.editMode.enable")}
        </ControlButton>
        <ControlButton onClick={resetLayout}>{t("obs.resetLayout")}</ControlButton>
        {editMode && <InfoText>{t("obs.editMode.instruction")}</InfoText>}
      </ControlPanel>
    </ObsContainer>
  );
}
