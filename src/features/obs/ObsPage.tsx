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

/**
 * OBS表示用ページ
 * ストリーミング配信用のオーバーレイ表示を提供
 */
export function ObsPage() {
  const { t } = useTranslation();
  usePageTitle(t("pages.obs.title"));

  const { elements, editMode, updateElementPosition, toggleEditMode, resetLayout } = useObsLayoutStore();
  const [snapGuides, setSnapGuides] = useState<{
    x?: number;
    y?: number;
    xDistance?: { from: number; to: number; y: number };
    yDistance?: { from: number; to: number; x: number };
  }>({});

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

  // スナップ距離（px）
  const SNAP_THRESHOLD = 10;

  /**
   * 他の要素との位置を比較してスナップ補正を計算
   */
  const calculateSnap = (currentId: string, targetX: number, targetY: number) => {
    const currentElement = elements.find((el) => el.id === currentId);
    if (!currentElement) return { position: { x: targetX, y: targetY }, guides: {} };

    const otherElements = elements.filter((el) => el.id !== currentId);
    let snappedX = targetX;
    let snappedY = targetY;
    const guides: {
      x?: number;
      y?: number;
      xDistance?: { from: number; to: number; y: number };
      yDistance?: { from: number; to: number; x: number };
    } = {};

    // 実際のDOM要素からサイズのみを取得（位置はtargetX/Yを使用）
    const currentDom = document.querySelector(`[data-element-id="${currentId}"]`);
    const currentRect = currentDom?.getBoundingClientRect();

    // DOMが取得できない場合はデフォルト値を使用
    const currentWidth = currentRect?.width || 200;
    const currentHeight = currentRect?.height || 50;

    let closestXElement: (typeof otherElements)[0] | null = null;
    let closestYElement: (typeof otherElements)[0] | null = null;
    let closestXElementWidth = 0;
    let closestYElementHeight = 0;
    let minXGap = Infinity;
    let minYGap = Infinity;

    // 他の要素との距離を計算してスナップと最近接要素を探す
    for (const other of otherElements) {
      // 他の要素の実際のサイズを取得
      const otherDom = document.querySelector(`[data-element-id="${other.id}"]`);
      const otherRect = otherDom?.getBoundingClientRect();

      // サイズが取得できない場合はデフォルト値
      const otherWidth = otherRect?.width || 200;
      const otherHeight = otherRect?.height || 50;

      const xDist = Math.abs(targetX - other.position.x);
      const yDist = Math.abs(targetY - other.position.y);

      // X軸のスナップ（左端揃え）
      if (xDist < SNAP_THRESHOLD) {
        snappedX = other.position.x;
        guides.x = other.position.x;
      }

      // Y軸のスナップ（上端揃え）
      if (yDist < SNAP_THRESHOLD) {
        snappedY = other.position.y;
        guides.y = other.position.y;
      }

      // Y軸が重なっている範囲をチェック（横方向のgap計算用）
      const yOverlapStart = Math.max(targetY, other.position.y);
      const yOverlapEnd = Math.min(targetY + currentHeight, other.position.y + otherHeight);
      const hasYOverlap = yOverlapEnd > yOverlapStart;

      // X軸が重なっている範囲をチェック（縦方向のgap計算用）
      const xOverlapStart = Math.max(targetX, other.position.x);
      const xOverlapEnd = Math.min(targetX + currentWidth, other.position.x + otherWidth);
      const hasXOverlap = xOverlapEnd > xOverlapStart;

      // 横方向のgap（X方向）: Y軸が重なっている要素間の距離
      if (hasYOverlap) {
        let gap: number;
        if (targetX < other.position.x) {
          // 現在の要素が左側
          gap = other.position.x - (targetX + currentWidth);
        } else {
          // 現在の要素が右側
          gap = targetX - (other.position.x + otherWidth);
        }

        if (gap >= 0 && gap < minXGap) {
          minXGap = gap;
          closestXElement = other;
          closestXElementWidth = otherWidth;
        }
      }

      // 縦方向のgap（Y方向）: X軸が重なっている要素間の距離
      if (hasXOverlap) {
        let gap: number;
        if (targetY < other.position.y) {
          // 現在の要素が上側
          gap = other.position.y - (targetY + currentHeight);
        } else {
          // 現在の要素が下側
          gap = targetY - (other.position.y + otherHeight);
        }

        if (gap >= 0 && gap < minYGap) {
          minYGap = gap;
          closestYElement = other;
          closestYElementHeight = otherHeight;
        }
      }
    }

    // X方向の距離表示（横方向のgap）- コンテナの外側の端から端まで
    if (closestXElement && minXGap < 200) {
      let lineFrom: number, lineTo: number;
      const yPos = Math.max(targetY, closestXElement.position.y) + 10;

      if (targetX < closestXElement.position.x) {
        // 現在の要素が左側: 現在の右端 から 相手の左端
        lineFrom = targetX + currentWidth;
        lineTo = closestXElement.position.x;
      } else {
        // 現在の要素が右側: 相手の右端 から 現在の左端
        lineFrom = closestXElement.position.x + closestXElementWidth;
        lineTo = targetX;
      }

      guides.xDistance = {
        from: lineFrom,
        to: lineTo,
        y: yPos,
      };
    }

    // Y方向の距離表示（縦方向のgap）- コンテナの外側の端から端まで
    if (closestYElement && minYGap < 200) {
      let lineFrom: number, lineTo: number;
      const xPos = Math.max(targetX, closestYElement.position.x) + 10;

      if (targetY < closestYElement.position.y) {
        // 現在の要素が上側: 現在の下端 から 相手の上端
        lineFrom = targetY + currentHeight;
        lineTo = closestYElement.position.y;
      } else {
        // 現在の要素が下側: 相手の下端 から 現在の上端
        lineFrom = closestYElement.position.y + closestYElementHeight;
        lineTo = targetY;
      }

      guides.yDistance = {
        from: lineFrom,
        to: lineTo,
        x: xPos,
      };
    }

    return { position: { x: snappedX, y: snappedY }, guides };
  };

  const handleDragMove = (event: DragMoveEvent) => {
    const { active, delta } = event;
    const element = elements.find((el) => el.id === active.id);

    if (!element) return;

    const targetX = element.position.x + delta.x;
    const targetY = element.position.y + delta.y;

    const { guides } = calculateSnap(active.id as string, targetX, targetY);
    setSnapGuides(guides);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    const element = elements.find((el) => el.id === active.id);

    if (!element) return;

    const targetX = element.position.x + delta.x;
    const targetY = element.position.y + delta.y;

    const { position } = calculateSnap(active.id as string, targetX, targetY);

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
