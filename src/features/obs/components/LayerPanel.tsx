import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";
import { Icon } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { useObsLayoutStore } from "../store/obsLayoutStore";
import type { HudElement } from "../types";
import type { DragEndEvent } from "@dnd-kit/core";

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  height: fit-content;
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const LayerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const LayerItem = styled.div<{ $isSelected: boolean; $isVisible: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.surface : theme.colors.surface)};
  border: 1px solid ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary[400] : theme.colors.border)};
  border-left: ${({ theme, $isSelected }) => ($isSelected ? `3px solid ${theme.colors.primary[500]}` : `3px solid transparent`)};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0.5)};
  position: relative;

  ${({ theme, $isSelected }) =>
    $isSelected &&
    `
    box-shadow: 0 0 0 1px ${theme.colors.primary[200]};
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary[400] : theme.colors.primary[200])};

    ${({ theme, $isSelected }) =>
      !$isSelected &&
      `
      border-left-color: ${theme.colors.primary[300]};
    `}
  }
`;

const LayerInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

const LayerName = styled.div<{ $isSelected?: boolean }>`
  font-size: 0.875rem;
  font-weight: ${({ $isSelected }) => ($isSelected ? 600 : 500)};
  color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary[700] : theme.colors.text)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LayerPosition = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const LayerActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const EmptyState = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const DragHandle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: grab;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:active {
    cursor: grabbing;
  }

  &::before {
    content: "⋮⋮";
    font-size: 14px;
    letter-spacing: -2px;
  }
`;

/**
 * ソート可能なレイヤーアイテムコンポーネント
 */
interface SortableLayerItemProps {
  element: HudElement;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: (e: React.MouseEvent) => void;
  getElementName: (element: HudElement) => string;
  t: (key: string) => string;
}

function SortableLayerItem({ element, isSelected, onSelect, onDelete, getElementName, t }: SortableLayerItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: element.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <LayerItem ref={setNodeRef} style={style} $isSelected={isSelected} $isVisible={element.visible} onClick={onSelect}>
      <DragHandle {...attributes} {...listeners} onClick={(e) => e.stopPropagation()} />
      <LayerInfo>
        <LayerName $isSelected={isSelected}>{getElementName(element)}</LayerName>
        <LayerPosition>
          X: {Math.round(element.position.x)}, Y: {Math.round(element.position.y)}
        </LayerPosition>
      </LayerInfo>
      <LayerActions>
        <IconButton onClick={onDelete} title={t("common.delete")}>
          <Icon name="delete" size={16} />
        </IconButton>
      </LayerActions>
    </LayerItem>
  );
}

/**
 * レイヤーパネルコンポーネント
 * レイヤーの表示順序の変更、削除などを行う
 */
export function LayerPanel() {
  const { t } = useTranslation();
  const { elements, removeElement, selectElement, selectedElementId, setEditingElement, moveElement } = useObsLayoutStore();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const handleDelete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeElement(id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = elements.findIndex((el) => el.id === active.id);
      const newIndex = elements.findIndex((el) => el.id === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        moveElement(active.id as string, newIndex);
      }
    }
  };

  const getElementName = (element: HudElement): string => {
    // カスタム名が設定されている場合はそれを使用
    if (element.name) {
      return element.name;
    }

    // デフォルト名
    switch (element.type) {
      case "winCount":
        return t("obs.winCount");
      case "loseCount":
        return t("obs.loseCount");
      case "winRate":
        return t("obs.winRate");
      case "totalMatches":
        return t("obs.totalMatches");
      case "plainText":
        return element.text || t("obs.elementType.plainText");
      case "variableText":
        return element.text || t("obs.elementType.variableText");
      case "statsCombo":
        return t("obs.elementType.statsCombo");
      case "line":
        return t("obs.elementType.line");
      case "todayTrendChart":
        return t("obs.elementType.todayTrendChart");
      default:
        return "Unknown";
    }
  };

  return (
    <Panel>
      <SectionTitle>{t("obs.layerPanel.layers")}</SectionTitle>
      {elements.length === 0 ? (
        <EmptyState>{t("obs.layerPanel.noLayers")}</EmptyState>
      ) : (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={elements.map((el) => el.id)} strategy={verticalListSortingStrategy}>
            <LayerList>
              {elements.map((element, index) => (
                <SortableLayerItem
                  key={element.id}
                  element={element}
                  index={index}
                  isSelected={selectedElementId === element.id}
                  onSelect={() => {
                    selectElement(element.id);
                    setEditingElement(element.id);
                  }}
                  onDelete={(e) => handleDelete(e, element.id)}
                  getElementName={getElementName}
                  t={t}
                />
              ))}
            </LayerList>
          </SortableContext>
        </DndContext>
      )}
    </Panel>
  );
}
