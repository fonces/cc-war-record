import { useState } from "react";
import styled from "styled-components";
import { Icon } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { generateUUID } from "@/utils";
import { useObsLayoutStore } from "../store/obsLayoutStore";
import type { HudElement, HudElementType } from "../types";

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

const AddElementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};
`;

const AddButton = styled.button<{ $color?: string }>`
  position: relative;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  font-weight: 500;
  aspect-ratio: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $color }) => $color || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ $color, theme }) => $color || theme.colors.primary[400]};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

    &::before {
      opacity: 0.1;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const IconWrapper = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $color }) => $color || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const ElementLabel = styled.span`
  font-size: 0.6875rem;
  text-align: center;
  line-height: 1.2;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/**
 * 要素追加パネルコンポーネント
 */
export function AddElementPanel() {
  const { t } = useTranslation();
  const { addElement, selectElement } = useObsLayoutStore();
  const [nextPosition, setNextPosition] = useState({ x: 100, y: 100 });

  const handleAddElement = (type: HudElementType) => {
    const newElement: HudElement = {
      id: generateUUID(),
      type,
      position: { ...nextPosition },
      visible: true,
    };

    // 次の要素は少しずらして配置
    setNextPosition({
      x: nextPosition.x + 20,
      y: nextPosition.y + 20,
    });

    addElement(newElement);
    selectElement(newElement.id);
  };

  const elementTypes: Array<{
    type: HudElementType;
    icon: "edit" | "chart" | "add" | "minus" | "detail" | "close" | "history";
    labelKey: string;
    gradient: string;
  }> = [
    { type: "winCount", icon: "add", labelKey: "obs.winCount", gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)" },
    { type: "loseCount", icon: "close", labelKey: "obs.loseCount", gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" },
    { type: "winRate", icon: "chart", labelKey: "obs.winRate", gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" },
    { type: "totalMatches", icon: "history", labelKey: "obs.totalMatches", gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)" },
    { type: "plainText", icon: "edit", labelKey: "obs.elementType.plainText", gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)" },
    { type: "statsCombo", icon: "detail", labelKey: "obs.elementType.statsCombo", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
  ];

  return (
    <Panel>
      <SectionTitle>{t("obs.layerPanel.addElement")}</SectionTitle>
      <AddElementGrid>
        {elementTypes.map(({ type, icon, labelKey, gradient }) => (
          <AddButton key={type} onClick={() => handleAddElement(type)} $color={gradient} title={t(labelKey)}>
            <IconWrapper $color={gradient}>
              <Icon name={icon} size={24} />
            </IconWrapper>
            <ElementLabel>{t(labelKey)}</ElementLabel>
          </AddButton>
        ))}
      </AddElementGrid>
    </Panel>
  );
}
