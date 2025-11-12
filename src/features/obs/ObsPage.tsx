import { DndContext, DragOverlay, MouseSensor, TouchSensor, useSensor, useSensors, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Icon, Page, PageContainer, PageDescription, PageTitle, PageTitleContainer } from "@/components/ui";
import { usePageTitle, useTranslation } from "@/hooks";
import { generateUUID } from "@/utils";
import { AddElementPanel } from "./components/AddElementPanel";
import { ControlPanel } from "./components/ControlPanel";
import { DraggableHudElement } from "./components/DraggableHudElement";
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

const ObsContainer = styled.div<{ $width: number; $height: number }>`
  position: relative;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

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

const SelectionBox = styled.div<{ $x: number; $y: number; $width: number; $height: number }>`
  position: absolute;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  border: 2px dashed ${({ theme }) => theme.colors.primary[400]};
  background: ${({ theme }) => theme.colors.primary[500]}22;
  pointer-events: none;
  z-index: 1000;
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
 * ドロップ可能なObsContainerコンポーネント
 */
function DroppableObsContainer({
  children,
  onClick,
  containerRef,
  width,
  height,
  onMouseDown,
  onMouseMove,
  onMouseUp,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
  width: number;
  height: number;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  const { setNodeRef } = useDroppable({
    id: "obs-container",
  });

  return (
    <ObsContainer
      ref={(node) => {
        setNodeRef(node);
        containerRef.current = node;
      }}
      className="obs-container"
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      $width={width}
      $height={height}
    >
      {children}
    </ObsContainer>
  );
}

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
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionStart, setSelectionStart] = useState<{ x: number; y: number } | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<{ x: number; y: number } | null>(null);
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
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 入力フィールドにフォーカスがある場合はスキップ
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
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
  }, [undo, redo, canUndo, canRedo, clearSelection]);

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

  /**
   * マウスドラッグによる範囲選択の開始
   */
  const handleSelectionMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // 要素をクリックした場合は範囲選択しない
    if (e.target !== e.currentTarget) return;

    // 範囲選択モード中は無効
    if (isSelecting) return;

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    setIsSelecting(true);
    setSelectionStart({ x, y });
    setSelectionEnd({ x, y });
  };

  /**
   * マウスドラッグによる範囲選択の更新
   */
  const handleSelectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSelecting || !selectionStart) return;

    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    setSelectionEnd({ x, y });
  };

  /**
   * マウスドラッグによる範囲選択の終了
   */
  const handleSelectionMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSelecting || !selectionStart || !selectionEnd) {
      setIsSelecting(false);
      setSelectionStart(null);
      setSelectionEnd(null);
      return;
    }

    // 選択範囲を計算
    const minX = Math.min(selectionStart.x, selectionEnd.x);
    const maxX = Math.max(selectionStart.x, selectionEnd.x);
    const minY = Math.min(selectionStart.y, selectionEnd.y);
    const maxY = Math.max(selectionStart.y, selectionEnd.y);

    // 範囲内の要素を検出
    const selectedIds = elements
      .filter((element) => {
        const elementCenterX = element.position.x + (element.size?.width || 0) / 2;
        const elementCenterY = element.position.y + (element.size?.height || 0) / 2;

        return elementCenterX >= minX && elementCenterX <= maxX && elementCenterY >= minY && elementCenterY <= maxY;
      })
      .map((el) => el.id);

    // Ctrlキーが押されている場合は既存の選択に追加、そうでない場合は置き換え
    if (e.ctrlKey || e.metaKey) {
      // 既存の選択に追加
      const newSelectedIds = [...new Set([...selectedElementIds, ...selectedIds])];
      // Storeを直接更新（複数選択のため）
      useObsLayoutStore.setState({ selectedElementIds: newSelectedIds });
    } else {
      // 選択を置き換え
      useObsLayoutStore.setState({ selectedElementIds: selectedIds });
    }

    // 選択範囲をクリア
    setIsSelecting(false);
    setSelectionStart(null);
    setSelectionEnd(null);
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
              <DroppableObsContainer
                containerRef={containerRef}
                onClick={handleContainerClick}
                onMouseDown={handleSelectionMouseDown}
                onMouseMove={handleSelectionMouseMove}
                onMouseUp={handleSelectionMouseUp}
                width={screenSize.width}
                height={screenSize.height}
              >
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
                {isSelecting && selectionStart && selectionEnd && (
                  <SelectionBox
                    $x={Math.min(selectionStart.x, selectionEnd.x)}
                    $y={Math.min(selectionStart.y, selectionEnd.y)}
                    $width={Math.abs(selectionEnd.x - selectionStart.x)}
                    $height={Math.abs(selectionEnd.y - selectionStart.y)}
                  />
                )}
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
