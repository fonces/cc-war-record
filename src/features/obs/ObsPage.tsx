import { DndContext, DragOverlay, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Icon, Page, PageContainer, PageDescription, PageTitle, PageTitleContainer } from "@/components/ui";
import { usePageTitle, useTranslation } from "@/hooks";
import { generateUUID } from "@/utils";
import { AddElementPanel } from "./components/AddElementPanel";
import { ControlPanel } from "./components/ControlPanel";
import { DraggableHudElement } from "./components/DraggableHudElement";
import { DroppableObsContainer } from "./components/DroppableObsContainer";
import { EditPanel } from "./components/EditPanel";
import { LayerPanel } from "./components/LayerPanel";
import { ScreenSizeSelector } from "./components/ScreenSizeSelector";
import { SnapGuide } from "./components/SnapGuide";
import { TemplatePicker } from "./components/TemplatePicker";
import { useObsLayoutStore } from "./store/obsLayoutStore";
import { calculateSnap } from "./utils/snapCalculation";
import type { HudElement, HudElementType } from "./types";
import type { SnapGuides } from "./utils/snapCalculation";
import type { DragEndEvent, DragMoveEvent, DragStartEvent } from "@dnd-kit/core";

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 320px;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: start;
  isolation: isolate;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 320px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  min-width: 0;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  position: sticky;
  top: 16px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  position: sticky;
  top: 16px;

  @media (max-width: 1024px) {
    position: static;
  }
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

  const {
    elements,
    editMode,
    screenSize,
    selectedElementIds,
    updateElementPosition,
    updateSelectedElementsPosition,
    toggleEditMode,
    resetLayout,
    selectElement,
    clearSelection,
    addElement,
    setEditingElement,
    removeElement,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useObsLayoutStore();
  const [snapGuides, setSnapGuides] = useState<SnapGuides>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isTemplatePickerOpen, setIsTemplatePickerOpen] = useState(false);
  const [isDraggingGroup, setIsDraggingGroup] = useState(false);
  const [groupDragDelta, setGroupDragDelta] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  /**
   * Ctrl+Z / Ctrl+Shift+Z でUndo/Redo
   * Delete / Backspace で選択要素を削除
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 入力フィールドにフォーカスがある場合はスキップ
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Delete / Backspace: 選択要素を削除
      if ((e.key === "Delete" || e.key === "Backspace") && editMode) {
        if (selectedElementIds.length > 0) {
          e.preventDefault();
          selectedElementIds.forEach((id) => removeElement(id));
          clearSelection();
        }
        return;
      }

      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        e.preventDefault();

        if (e.shiftKey) {
          // Ctrl+Shift+Z: Redo
          if (canRedo()) {
            redo();
            setSnapGuides({});
            clearSelection();
          }
        } else {
          // Ctrl+Z: Undo
          if (canUndo()) {
            undo();
            setSnapGuides({});
            clearSelection();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, redo, canUndo, canRedo, clearSelection, editMode, selectedElementIds, removeElement]);

  const handleDragStart = (event: DragStartEvent) => {
    const elementId = event.active.id as string;
    setActiveId(elementId);

    // 複数選択されている要素のドラッグ開始
    if (selectedElementIds.includes(elementId) && selectedElementIds.length > 1) {
      setIsDraggingGroup(true);
    }
  };

  const handleDragMove = (event: DragMoveEvent) => {
    const { active, delta } = event;

    // 新規要素の場合はスナップガイドを表示しない
    if (active.data.current?.isNew) {
      return;
    }

    const element = elements.find((el) => el.id === active.id);

    if (!element) return;

    // グループドラッグの場合
    if (isDraggingGroup && selectedElementIds.length > 1) {
      // スナップガイドは表示しない（グループ移動時は無効化）
      setSnapGuides({});
      // グループドラッグのdeltaを保存
      setGroupDragDelta(delta);
      return;
    }

    const targetX = element.position.x + delta.x;
    const targetY = element.position.y + delta.y;

    const { guides } = calculateSnap(active.id as string, targetX, targetY, elements, SNAP_THRESHOLD);
    setSnapGuides(guides);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta, over } = event;

    setActiveId(null);
    setSnapGuides({});
    setGroupDragDelta(null);

    // ドロップ可能なエリア外にドロップした場合は処理をキャンセル
    if (!over) {
      setIsDraggingGroup(false);
      return;
    }

    // 新規要素の追加
    if (active.data.current?.isNew) {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();

      // ドロップ位置を計算（マウス位置から相対位置を取得）
      let dropX = 100;
      let dropY = 100;

      if (event.activatorEvent instanceof MouseEvent) {
        dropX = event.activatorEvent.clientX - containerRect.left + delta.x;
        dropY = event.activatorEvent.clientY - containerRect.top + delta.y;
      } else if (event.activatorEvent instanceof TouchEvent && event.activatorEvent.touches.length > 0) {
        dropX = event.activatorEvent.touches[0].clientX - containerRect.left + delta.x;
        dropY = event.activatorEvent.touches[0].clientY - containerRect.top + delta.y;
      }

      const type = active.data.current.type as HudElementType;
      const newElement: HudElement = {
        id: generateUUID(),
        type,
        position: { x: Math.max(0, dropX), y: Math.max(0, dropY) },
        visible: true,
        fontSize: 16,
      };

      // 線要素の場合はデフォルトサイズとプロパティを設定
      if (type === "line") {
        newElement.lineOrientation = "horizontal";
        newElement.lineThickness = 2;
        newElement.lineColor = "#ffffff";
        newElement.size = { width: 200, height: 2 };
      }

      // グラフ要素の場合はデフォルトサイズを設定
      if (type === "todayTrendChart") {
        newElement.size = { width: 600, height: 450 };
      }

      addElement(newElement);
      selectElement(newElement.id);
      setEditingElement(newElement.id);
      return;
    }

    // グループ移動の場合
    if (isDraggingGroup && selectedElementIds.length > 1) {
      updateSelectedElementsPosition(delta.x, delta.y);
      setIsDraggingGroup(false);
      return;
    }

    // 既存要素の移動（単一）
    const element = elements.find((el) => el.id === active.id);
    if (!element) return;

    const targetX = element.position.x + delta.x;
    const targetY = element.position.y + delta.y;

    const { position } = calculateSnap(active.id as string, targetX, targetY, elements, SNAP_THRESHOLD);

    updateElementPosition(active.id as string, position);
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // ObsContainer自体をクリックした場合のみ選択解除
    // 子要素のクリックイベントは伝播しないようにする
    if (e.target === e.currentTarget) {
      clearSelection();
    }
  };

  return (
    <Page fullWidth>
      <PageTitleContainer>
        <PageTitle>{t("pages.obs.title")}</PageTitle>
      </PageTitleContainer>
      <PageDescription>{t("pages.obs.description")}</PageDescription>

      <PageContainer>
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
          <ContentLayout>
            <LeftPanel>{editMode && <AddElementPanel />}</LeftPanel>

            <MainContent>
              <DroppableObsContainer containerRef={containerRef} onClick={handleContainerClick} width={screenSize.width} height={screenSize.height}>
                {elements.map((element) => (
                  <DraggableHudElement
                    key={element.id}
                    element={element}
                    editMode={editMode}
                    isDraggingGroup={isDraggingGroup}
                    activeId={activeId}
                    groupDragDelta={groupDragDelta}
                  />
                ))}
                {editMode && <SnapGuide x={snapGuides.x} y={snapGuides.y} xDistance={snapGuides.xDistance} yDistance={snapGuides.yDistance} />}
              </DroppableObsContainer>
            </MainContent>

            <RightPanel>
              {editMode && (
                <>
                  <ScreenSizeSelector />
                  <LayerPanel />
                </>
              )}
            </RightPanel>
          </ContentLayout>

          <DragOverlay>
            {activeId && activeId.startsWith("new-") && (
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#667eea",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Icon name="add" size={24} />
              </div>
            )}
          </DragOverlay>
        </DndContext>

        <EditPanel />

        <ControlPanel editMode={editMode} onToggleEditMode={toggleEditMode} onResetLayout={resetLayout} onOpenTemplates={() => setIsTemplatePickerOpen(true)} />

        <TemplatePicker isOpen={isTemplatePickerOpen} onClose={() => setIsTemplatePickerOpen(false)} />
      </PageContainer>
    </Page>
  );
}
