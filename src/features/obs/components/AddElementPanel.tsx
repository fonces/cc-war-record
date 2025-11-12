import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";
import { Icon } from "@/components/ui";
import { useTranslation } from "@/hooks";
import type { HudElementType } from "../types";

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  height: fit-content;
  max-height: 600px;
  overflow: hidden;
`;

const PanelHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]} 0;
  flex-shrink: 0;
`;

const ScrollableContent = styled.div`
  padding: 0 ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;

  /* カスタムスクロールバー */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;

    &:hover {
      background: ${({ theme }) => theme.colors.gray[400]};
    }
  }
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const AddElementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};
`;

const DraggableButton = styled.button<{ $isDragging?: boolean }>`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing[3]};
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  color: ${({ theme }) => theme.colors.textSecondary};
  aspect-ratio: 1;
  opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)};

  &:active {
    cursor: grabbing;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-color: ${({ theme }) => theme.colors.primary[300]};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  svg {
    cursor: grab;
  }
`;

type DraggableElementProps = {
  type: HudElementType;
  icon: "edit" | "chart" | "add" | "minus" | "detail" | "close" | "history" | "trophy" | "percent" | "text" | "grid" | "hash" | "xCircle";
  labelKey: string;
};

function DraggableElement({ type, icon, labelKey }: DraggableElementProps) {
  const { t } = useTranslation();
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `new-${type}`,
    data: { type, isNew: true },
  });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  return (
    <DraggableButton ref={setNodeRef} style={style} $isDragging={isDragging} title={t(labelKey)} {...listeners} {...attributes}>
      <IconWrapper>
        <Icon name={icon} size={20} />
      </IconWrapper>
    </DraggableButton>
  );
}

/**
 * 要素追加パネルコンポーネント
 */
export function AddElementPanel() {
  const { t } = useTranslation();

  const elementTypes: Array<{
    type: HudElementType;
    icon: "edit" | "chart" | "add" | "minus" | "detail" | "close" | "history" | "trophy" | "percent" | "text" | "grid" | "hash" | "xCircle";
    labelKey: string;
  }> = [
    { type: "winCount", icon: "trophy", labelKey: "obs.winCount" },
    { type: "loseCount", icon: "xCircle", labelKey: "obs.loseCount" },
    { type: "winRate", icon: "percent", labelKey: "obs.winRate" },
    { type: "totalMatches", icon: "hash", labelKey: "obs.totalMatches" },
    { type: "plainText", icon: "text", labelKey: "obs.elementType.plainText" },
    { type: "statsCombo", icon: "grid", labelKey: "obs.elementType.statsCombo" },
    { type: "line", icon: "minus", labelKey: "obs.elementType.line" },
    { type: "todayTrendChart", icon: "chart", labelKey: "obs.elementType.todayTrendChart" },
  ];

  return (
    <Panel>
      <PanelHeader>
        <SectionTitle>{t("obs.layerPanel.addElement")}</SectionTitle>
      </PanelHeader>
      <ScrollableContent>
        <AddElementGrid>
          {elementTypes.map((elementType) => (
            <DraggableElement key={elementType.type} {...elementType} />
          ))}
        </AddElementGrid>
      </ScrollableContent>
    </Panel>
  );
}
