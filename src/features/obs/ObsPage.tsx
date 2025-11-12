import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Button, ButtonGroup, Page, PageContainer, PageDescription, PageTitle, PageTitleContainer } from "@/components/ui";
import { usePageTitle, useTranslation } from "@/hooks";
import { DraggableHudElement } from "./components/DraggableHudElement";
import { EditPanel } from "./components/EditPanel";
import { SnapGuide } from "./components/SnapGuide";
import { useObsLayoutStore } from "./store/obsLayoutStore";
import { calculateSnap } from "./utils/snapCalculation";
import type { SnapGuides } from "./utils/snapCalculation";
import type { DragEndEvent, DragMoveEvent } from "@dnd-kit/core";

const ObsContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 600px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: visible;
`;

const ControlPanel = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 16px;
  right: 16px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  opacity: ${({ $visible }) => ($visible ? 1 : 0.7)};
  transition: opacity ${({ theme }) => theme.transitions.base};
  z-index: 1000;

  &:hover {
    opacity: 1;
  }
`;

const InfoText = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing[3]};
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

// スナップ距離（px）
const SNAP_THRESHOLD = 10;

/**
 * OBS表示用ページ
 * ストリーミング配信用のオーバーレイ表示を提供
 */
export function ObsPage() {
  const { t } = useTranslation();
  usePageTitle(t("pages.obs.title"));

  const { elements, editMode, updateElementPosition, toggleEditMode, resetLayout } = useObsLayoutStore();
  const [snapGuides, setSnapGuides] = useState<SnapGuides>({});

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

  const handleDragMove = (event: DragMoveEvent) => {
    const { active, delta } = event;
    const element = elements.find((el) => el.id === active.id);

    if (!element) return;

    const targetX = element.position.x + delta.x;
    const targetY = element.position.y + delta.y;

    const { guides } = calculateSnap(active.id as string, targetX, targetY, elements, SNAP_THRESHOLD);
    setSnapGuides(guides);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    const element = elements.find((el) => el.id === active.id);

    if (!element) return;

    const targetX = element.position.x + delta.x;
    const targetY = element.position.y + delta.y;

    const { position } = calculateSnap(active.id as string, targetX, targetY, elements, SNAP_THRESHOLD);

    updateElementPosition(active.id as string, position);
    setSnapGuides({});
  };

  return (
    <Page>
      <PageTitleContainer>
        <PageTitle>{t("pages.obs.title")}</PageTitle>
      </PageTitleContainer>
      <PageDescription>{t("pages.obs.description")}</PageDescription>

      <PageContainer>
        <ObsContainer className="obs-container">
          <DndContext sensors={sensors} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
            {elements.map((element) => (
              <DraggableHudElement key={element.id} element={element} editMode={editMode} />
            ))}
          </DndContext>
          {editMode && <SnapGuide x={snapGuides.x} y={snapGuides.y} xDistance={snapGuides.xDistance} yDistance={snapGuides.yDistance} />}
        </ObsContainer>

        {createPortal(
          <ControlPanel $visible={editMode}>
            <ButtonGroup direction="horizontal">
              <Button variant={editMode ? "primary" : "secondary"} size="sm" onClick={toggleEditMode}>
                {editMode ? t("obs.editMode.disable") : t("obs.editMode.enable")}
              </Button>
              <Button variant="outline" size="sm" onClick={resetLayout}>
                {t("obs.resetLayout")}
              </Button>
            </ButtonGroup>
            {editMode && <InfoText>{t("obs.editMode.instruction")}</InfoText>}
          </ControlPanel>,
          document.body,
        )}

        <EditPanel />
      </PageContainer>
    </Page>
  );
}
