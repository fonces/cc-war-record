import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Button, Icon, Input, Toggle } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { useObsLayoutStore } from "../store/obsLayoutStore";
import { PlainTextSettings, VariableTextSettings, StatsComboSettings, LineSettings, DefaultStatsSettings } from "./PanelItems";

const Panel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 90vw;
  max-height: 80vh;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: 999;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitions.base};
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  cursor: move;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

const PanelTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  cursor: text;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background ${({ theme }) => theme.transitions.base};

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const TitleInput = styled(Input)`
  font-size: 1.125rem;
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  margin: 0;
  height: auto;
`;

const CloseButton = styled(Button)`
  padding: 0;
`;

const PanelContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  overflow-y: auto;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const InfoText = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

/**
 * 16進数カラーとアルファ値をRGBA文字列に変換
 */
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * RGBA文字列から16進数カラーとアルファ値を抽出
 */
const rgbaToHexAndAlpha = (rgba: string): { hex: string; alpha: number } => {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return { hex: "#1f2937", alpha: 1 };

  const r = parseInt(match[1]).toString(16).padStart(2, "0");
  const g = parseInt(match[2]).toString(16).padStart(2, "0");
  const b = parseInt(match[3]).toString(16).padStart(2, "0");
  const alpha = match[4] ? parseFloat(match[4]) : 1;

  return { hex: `#${r}${g}${b}`, alpha };
};

/**
 * HUD要素編集パネルコンポーネント
 */
export function EditPanel() {
  const { t } = useTranslation();
  const { editingElementId, elements, setEditingElement, updateElement } = useObsLayoutStore();
  const panelRef = useRef<HTMLDivElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const selectedElement = elements.find((el) => el.id === editingElementId);
  const isOpen = editingElementId !== null;

  const handleClose = useCallback(() => {
    setEditingElement(null);
  }, [setEditingElement]);

  // タイトル編集開始
  const handleTitleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditingTitle(true);
  }, []);

  // タイトル編集完了
  const handleTitleBlur = useCallback(() => {
    setIsEditingTitle(false);
  }, []);

  const handleTitleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditingTitle(false);
      e.currentTarget.blur();
    } else if (e.key === "Escape") {
      setIsEditingTitle(false);
      e.currentTarget.blur();
    }
  }, []);

  // タイトル入力にフォーカス
  useEffect(() => {
    if (isEditingTitle && titleInputRef.current) {
      titleInputRef.current.focus();
      titleInputRef.current.select();
    }
  }, [isEditingTitle]);

  // ドラッグ開始
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget && !(e.target as HTMLElement).closest("h3")) {
        return; // ヘッダー以外をクリックした場合は何もしない
      }
      if (isEditingTitle) return; // タイトル編集中はドラッグしない
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    },
    [position, isEditingTitle],
  );

  // ドラッグ中
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  // 外部クリックで閉じる(ドラッグ中は無視)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen || isDragging) return;

      const target = event.target as HTMLElement;

      // パネル外部をクリックした場合に閉じる
      if (panelRef.current && !panelRef.current.contains(target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isDragging, handleClose]);

  const getBackgroundColorParts = () => {
    if (!selectedElement?.backgroundColor) {
      return { hex: "#1f2937", alpha: 1 };
    }
    return rgbaToHexAndAlpha(selectedElement.backgroundColor);
  };

  const handleVisibilityChange = () => {
    if (!editingElementId || !selectedElement) return;
    updateElement(editingElementId, { visible: !selectedElement.visible });
  };

  const handlePositionChange = (axis: "x" | "y", value: string) => {
    if (!editingElementId || !selectedElement) return;
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      updateElement(editingElementId, {
        position: {
          ...selectedElement.position,
          [axis]: numValue,
        },
      });
    }
  };

  const getElementName = (type: string) => {
    switch (type) {
      case "winCount":
        return t("obs.winCount");
      case "loseCount":
        return t("obs.loseCount");
      case "winRate":
        return t("obs.winRate");
      case "totalMatches":
        return t("obs.totalMatches");
      case "plainText":
        return t("obs.elementType.plainText");
      case "variableText":
        return t("obs.elementType.variableText");
      case "statsCombo":
        return t("obs.elementType.statsCombo");
      case "line":
        return t("obs.elementType.line");
      case "todayTrendChart":
        return t("obs.elementType.todayTrendChart");
      default:
        return "";
    }
  };

  const panelStyle = {
    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
  };

  const content = (
    <Panel ref={panelRef} $isOpen={isOpen} style={panelStyle}>
      <PanelHeader onMouseDown={handleMouseDown}>
        {isEditingTitle && selectedElement ? (
          <TitleInput
            ref={titleInputRef}
            type="text"
            value={selectedElement.name || ""}
            onChange={(e) => updateElement(editingElementId!, { name: e.target.value })}
            onBlur={handleTitleBlur}
            onKeyDown={handleTitleKeyDown}
            placeholder={getElementName(selectedElement.type)}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <PanelTitle onClick={handleTitleClick}>{selectedElement ? selectedElement.name || getElementName(selectedElement.type) : t("obs.editPanel.title")}</PanelTitle>
        )}
        <CloseButton variant="ghost" size="sm" onClick={handleClose}>
          <Icon name="close" />
        </CloseButton>
      </PanelHeader>
      <PanelContent>
        {selectedElement ? (
          <>
            {selectedElement.type === "plainText" && (
              <PlainTextSettings
                element={selectedElement}
                onUpdate={(updates) => updateElement(editingElementId!, updates)}
                getBackgroundColorParts={getBackgroundColorParts}
                hexToRgba={hexToRgba}
              />
            )}

            {selectedElement.type === "variableText" && (
              <VariableTextSettings
                element={selectedElement}
                onUpdate={(updates) => updateElement(editingElementId!, updates)}
                getBackgroundColorParts={getBackgroundColorParts}
                hexToRgba={hexToRgba}
              />
            )}

            {selectedElement.type === "statsCombo" && (
              <StatsComboSettings
                element={selectedElement}
                onUpdate={(updates) => updateElement(editingElementId!, updates)}
                getBackgroundColorParts={getBackgroundColorParts}
                hexToRgba={hexToRgba}
                getElementName={getElementName}
              />
            )}

            {selectedElement.type === "line" && <LineSettings element={selectedElement} onUpdate={(updates) => updateElement(editingElementId!, updates)} />}

            {selectedElement.type !== "plainText" && selectedElement.type !== "variableText" && selectedElement.type !== "statsCombo" && selectedElement.type !== "line" && (
              <DefaultStatsSettings
                element={selectedElement}
                onUpdate={(updates) => updateElement(editingElementId!, updates)}
                getBackgroundColorParts={getBackgroundColorParts}
                hexToRgba={hexToRgba}
              />
            )}

            <FormRow>
              <FormGroup>
                <Label>{t("obs.editPanel.positionX")}</Label>
                <Input type="number" value={Math.round(selectedElement.position.x)} onChange={(e) => handlePositionChange("x", e.target.value)} step="1" />
              </FormGroup>
              <FormGroup>
                <Label>{t("obs.editPanel.positionY")}</Label>
                <Input type="number" value={Math.round(selectedElement.position.y)} onChange={(e) => handlePositionChange("y", e.target.value)} step="1" />
              </FormGroup>
            </FormRow>
            <FormRow>
              <FormGroup>
                <Label>{t("obs.editPanel.scale")}</Label>
                <Input
                  type="number"
                  value={selectedElement.scale || 1}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    if (!isNaN(value)) {
                      updateElement(editingElementId!, { scale: value });
                    }
                  }}
                  min="0.1"
                  max="5"
                  step="0.1"
                />
              </FormGroup>
              <FormGroup>
                <Label>{t("obs.editPanel.visible")}</Label>
                <Toggle checked={selectedElement.visible} onChange={handleVisibilityChange} label={t("obs.editPanel.visible")} />
              </FormGroup>
            </FormRow>
            {selectedElement.type !== "line" && (
              <FormRow>
                <FormGroup>
                  <Label>{t("obs.editPanel.padding")}</Label>
                  <Input
                    type="number"
                    value={selectedElement.padding !== undefined ? selectedElement.padding : 16}
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      if (!isNaN(value)) {
                        updateElement(editingElementId!, { padding: value });
                      }
                    }}
                    min="0"
                    max="100"
                    step="1"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>{t("obs.editPanel.boxShadow")}</Label>
                  <Input
                    type="text"
                    value={selectedElement.boxShadow || ""}
                    onChange={(e) => updateElement(editingElementId!, { boxShadow: e.target.value })}
                    placeholder="0 2px 8px rgba(0, 0, 0, 0.2)"
                  />
                </FormGroup>
              </FormRow>
            )}
          </>
        ) : (
          <InfoText>{t("obs.editPanel.selectElement")}</InfoText>
        )}
      </PanelContent>
    </Panel>
  );

  return createPortal(content, document.body);
}
