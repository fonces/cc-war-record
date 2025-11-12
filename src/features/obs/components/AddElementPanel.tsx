import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";
import { Icon } from "@/components/ui";
import { useTranslation } from "@/hooks";
import type { HudElementType } from "../types";
import type { IconName } from "@/components/ui/Icon/types";

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  height: fit-content;
  max-height: calc(100dvh - 200px);
  overflow: hidden;
`;

const ScrollableContent = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
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
  icon: IconName;
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
  const elementTypes: Array<{
    type: HudElementType;
    icon: IconName;
    labelKey: string;
  }> = [
    { type: "winCount", icon: "trophy", labelKey: "obs.winCount" },
    { type: "loseCount", icon: "xCircle", labelKey: "obs.loseCount" },
    { type: "winRate", icon: "percent", labelKey: "obs.winRate" },
    { type: "totalMatches", icon: "hash", labelKey: "obs.totalMatches" },
    { type: "plainText", icon: "text", labelKey: "obs.elementType.plainText" },
    { type: "variableText", icon: "function", labelKey: "obs.elementType.variableText" },
    { type: "statsCombo", icon: "grid", labelKey: "obs.elementType.statsCombo" },
    { type: "line", icon: "minus", labelKey: "obs.elementType.line" },
    { type: "rectangle", icon: "square", labelKey: "obs.elementType.rectangle" },
    { type: "todayTrendChart", icon: "chart", labelKey: "obs.elementType.todayTrendChart" },
  ];

  return (
    <Panel>
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
