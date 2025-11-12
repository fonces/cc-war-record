import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Button, Checkbox, Icon, Input } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { useObsLayoutStore } from "../store/obsLayoutStore";
import type { StatsComboItem } from "../types";

const Panel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, ${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  width: 100%;
  max-height: 400px;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-bottom: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0 0;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: transform ${({ theme }) => theme.transitions.base};
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const PanelTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
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

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const ColorInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.surface};

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`;

const ColorPickerGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const OpacitySlider = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  background: linear-gradient(to right, transparent 0%, currentColor 100%);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary[500]};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary[500]};
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const OpacityLabel = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  const { selectedElementId, elements, selectElement, updateElement } = useObsLayoutStore();
  const panelRef = useRef<HTMLDivElement>(null);

  const selectedElement = elements.find((el) => el.id === selectedElementId);
  const isOpen = selectedElementId !== null;

  const handleClose = useCallback(() => {
    selectElement(null);
  }, [selectElement]);

  // 外部クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;

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
  }, [isOpen, handleClose]);

  const handleTextChange = (text: string) => {
    if (!selectedElementId) return;
    updateElement(selectedElementId, { text });
  };

  const handleFontSizeChange = (fontSize: string) => {
    if (!selectedElementId) return;
    const size = parseInt(fontSize, 10);
    if (!isNaN(size)) {
      updateElement(selectedElementId, { fontSize: size });
    }
  };

  const handleColorChange = (textColor: string) => {
    if (!selectedElementId) return;
    updateElement(selectedElementId, { textColor });
  };

  const handleBackgroundColorChange = (backgroundColor: string) => {
    if (!selectedElementId) return;
    updateElement(selectedElementId, { backgroundColor });
  };

  const handleBackgroundOpacityChange = (opacity: number) => {
    if (!selectedElementId || !selectedElement) return;
    const currentBg = selectedElement.backgroundColor || "#1f2937";
    const { hex } = rgbaToHexAndAlpha(currentBg);
    const newBg = hexToRgba(hex, opacity);
    updateElement(selectedElementId, { backgroundColor: newBg });
  };

  const getBackgroundColorParts = () => {
    if (!selectedElement?.backgroundColor) {
      return { hex: "#1f2937", alpha: 1 };
    }
    return rgbaToHexAndAlpha(selectedElement.backgroundColor);
  };

  const handleVisibilityChange = () => {
    if (!selectedElementId || !selectedElement) return;
    updateElement(selectedElementId, { visible: !selectedElement.visible });
  };

  const handleComboItemToggle = (item: StatsComboItem) => {
    if (!selectedElementId || !selectedElement) return;
    const currentItems = selectedElement.comboItems || [];
    const newItems = currentItems.includes(item) ? currentItems.filter((i) => i !== item) : [...currentItems, item];
    updateElement(selectedElementId, { comboItems: newItems });
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
      case "statsCombo":
        return t("obs.elementType.statsCombo");
      default:
        return "";
    }
  };

  const statsComboOptions: StatsComboItem[] = ["winCount", "loseCount", "winRate", "totalMatches"];

  const content = (
    <Panel ref={panelRef} $isOpen={isOpen}>
      <PanelHeader>
        <PanelTitle>{selectedElement ? getElementName(selectedElement.type) : t("obs.editPanel.title")}</PanelTitle>
        <CloseButton variant="ghost" size="sm" onClick={handleClose}>
          <Icon name="close" />
        </CloseButton>
      </PanelHeader>
      <PanelContent>
        {selectedElement ? (
          <>
            {selectedElement.type === "plainText" && (
              <>
                <FormGroup>
                  <Label>{t("obs.editPanel.text")}</Label>
                  <Input type="text" value={selectedElement.text || ""} onChange={(e) => handleTextChange(e.target.value)} placeholder={t("obs.plainText.placeholder")} />
                </FormGroup>
                <FormRow>
                  <FormGroup>
                    <Label>{t("obs.editPanel.textColor")}</Label>
                    <ColorInput type="color" value={selectedElement.textColor || "#ffffff"} onChange={(e) => handleColorChange(e.target.value)} />
                  </FormGroup>
                  <FormGroup>
                    <Label>{t("obs.editPanel.fontSize")}</Label>
                    <Input type="number" value={selectedElement.fontSize || 16} onChange={(e) => handleFontSizeChange(e.target.value)} min="8" max="200" />
                  </FormGroup>
                </FormRow>
                <FormGroup>
                  <Label>{t("obs.editPanel.backgroundColor")}</Label>
                  <ColorPickerGroup>
                    <ColorInput
                      type="color"
                      value={getBackgroundColorParts().hex}
                      onChange={(e) => {
                        const opacity = getBackgroundColorParts().alpha;
                        handleBackgroundColorChange(hexToRgba(e.target.value, opacity));
                      }}
                    />
                    <OpacityLabel>
                      <span>{t("obs.editPanel.opacity")}</span>
                      <span>{Math.round(getBackgroundColorParts().alpha * 100)}%</span>
                    </OpacityLabel>
                    <OpacitySlider
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={getBackgroundColorParts().alpha}
                      onChange={(e) => handleBackgroundOpacityChange(parseFloat(e.target.value))}
                    />
                  </ColorPickerGroup>
                </FormGroup>
              </>
            )}

            {selectedElement.type === "statsCombo" && (
              <>
                <FormGroup>
                  <Label>{t("obs.editPanel.comboItems")}</Label>
                  <CheckboxGroup>
                    {statsComboOptions.map((item) => (
                      <CheckboxLabel key={item}>
                        <Checkbox checked={(selectedElement.comboItems || []).includes(item)} onChange={() => handleComboItemToggle(item)} />
                        {getElementName(item)}
                      </CheckboxLabel>
                    ))}
                  </CheckboxGroup>
                </FormGroup>
                <FormRow>
                  <FormGroup>
                    <Label>{t("obs.editPanel.fontSize")}</Label>
                    <Input type="number" value={selectedElement.fontSize || 16} onChange={(e) => handleFontSizeChange(e.target.value)} min="8" max="200" />
                  </FormGroup>
                  <FormGroup>
                    <Label>{t("obs.editPanel.backgroundColor")}</Label>
                    <ColorPickerGroup>
                      <ColorInput
                        type="color"
                        value={getBackgroundColorParts().hex}
                        onChange={(e) => {
                          const opacity = getBackgroundColorParts().alpha;
                          handleBackgroundColorChange(hexToRgba(e.target.value, opacity));
                        }}
                      />
                      <OpacityLabel>
                        <span>{t("obs.editPanel.opacity")}</span>
                        <span>{Math.round(getBackgroundColorParts().alpha * 100)}%</span>
                      </OpacityLabel>
                      <OpacitySlider
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={getBackgroundColorParts().alpha}
                        onChange={(e) => handleBackgroundOpacityChange(parseFloat(e.target.value))}
                      />
                    </ColorPickerGroup>
                  </FormGroup>
                </FormRow>
              </>
            )}

            {selectedElement.type !== "plainText" && selectedElement.type !== "statsCombo" && (
              <FormRow>
                <FormGroup>
                  <Label>{t("obs.editPanel.fontSize")}</Label>
                  <Input type="number" value={selectedElement.fontSize || 16} onChange={(e) => handleFontSizeChange(e.target.value)} min="8" max="200" />
                </FormGroup>
                <FormGroup>
                  <Label>{t("obs.editPanel.backgroundColor")}</Label>
                  <ColorPickerGroup>
                    <ColorInput
                      type="color"
                      value={getBackgroundColorParts().hex}
                      onChange={(e) => {
                        const opacity = getBackgroundColorParts().alpha;
                        handleBackgroundColorChange(hexToRgba(e.target.value, opacity));
                      }}
                    />
                    <OpacityLabel>
                      <span>{t("obs.editPanel.opacity")}</span>
                      <span>{Math.round(getBackgroundColorParts().alpha * 100)}%</span>
                    </OpacityLabel>
                    <OpacitySlider
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={getBackgroundColorParts().alpha}
                      onChange={(e) => handleBackgroundOpacityChange(parseFloat(e.target.value))}
                    />
                  </ColorPickerGroup>
                </FormGroup>
              </FormRow>
            )}

            <FormRow>
              <FormGroup>
                <Label>{t("obs.editPanel.position")}</Label>
                <InfoText>
                  X: {Math.round(selectedElement.position.x)}px, Y: {Math.round(selectedElement.position.y)}px
                </InfoText>
              </FormGroup>
              <FormGroup>
                <Label>&nbsp;</Label>
                <CheckboxLabel>
                  <Checkbox checked={selectedElement.visible} onChange={handleVisibilityChange} />
                  {t("obs.editPanel.visible")}
                </CheckboxLabel>
              </FormGroup>
            </FormRow>
          </>
        ) : (
          <InfoText>{t("obs.editPanel.selectElement")}</InfoText>
        )}
      </PanelContent>
    </Panel>
  );

  return createPortal(content, document.body);
}
