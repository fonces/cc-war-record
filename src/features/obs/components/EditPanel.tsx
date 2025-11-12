import { createPortal } from "react-dom";
import styled from "styled-components";
import { Button, Checkbox, Icon, Input, Select } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { useObsLayoutStore } from "../store/obsLayoutStore";
import type { HudElementType, StatsComboItem } from "../types";

const Panel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, ${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  width: 90%;
  max-width: 600px;
  min-height: 400px;
  max-height: 80vh;
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

const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[4]};
  padding-top: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/**
 * HUD要素編集パネルコンポーネント
 */
export function EditPanel() {
  const { t } = useTranslation();
  const { selectedElementId, elements, selectElement, updateElement, removeElement } = useObsLayoutStore();

  const selectedElement = elements.find((el) => el.id === selectedElementId);
  const isOpen = selectedElementId !== null;

  const handleClose = () => {
    selectElement(null);
  };

  const handleTypeChange = (type: HudElementType) => {
    if (!selectedElementId) return;
    updateElement(selectedElementId, { type });
  };

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

  const handleDelete = () => {
    if (!selectedElementId) return;
    if (confirm(t("obs.editPanel.confirmDelete"))) {
      removeElement(selectedElementId);
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
      case "statsCombo":
        return t("obs.elementType.statsCombo");
      default:
        return "";
    }
  };

  const elementTypeOptions = [
    { value: "winCount", label: t("obs.winCount") },
    { value: "loseCount", label: t("obs.loseCount") },
    { value: "winRate", label: t("obs.winRate") },
    { value: "totalMatches", label: t("obs.totalMatches") },
    { value: "plainText", label: t("obs.elementType.plainText") },
    { value: "statsCombo", label: t("obs.elementType.statsCombo") },
  ];

  const statsComboOptions: StatsComboItem[] = ["winCount", "loseCount", "winRate", "totalMatches"];

  const content = (
    <Panel $isOpen={isOpen}>
      <PanelHeader>
        <PanelTitle>{selectedElement ? getElementName(selectedElement.type) : t("obs.editPanel.title")}</PanelTitle>
        <CloseButton variant="ghost" size="sm" onClick={handleClose}>
          <Icon name="close" />
        </CloseButton>
      </PanelHeader>
      <PanelContent>
        {selectedElement ? (
          <>
            <FormGroup>
              <Label>{t("obs.editPanel.elementType")}</Label>
              <Select value={selectedElement.type} onChange={(e) => handleTypeChange(e.target.value as HudElementType)} options={elementTypeOptions} />
            </FormGroup>

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
                <FormGroup>
                  <Label>{t("obs.editPanel.fontSize")}</Label>
                  <Input type="number" value={selectedElement.fontSize || 16} onChange={(e) => handleFontSizeChange(e.target.value)} min="8" max="200" />
                </FormGroup>
              </>
            )}

            {selectedElement.type !== "plainText" && selectedElement.type !== "statsCombo" && (
              <FormGroup>
                <Label>{t("obs.editPanel.fontSize")}</Label>
                <Input type="number" value={selectedElement.fontSize || 16} onChange={(e) => handleFontSizeChange(e.target.value)} min="8" max="200" />
              </FormGroup>
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

            <ActionButtons>
              <Button variant="secondary" size="sm" onClick={handleClose}>
                {t("common.close")}
              </Button>
              <Button variant="outline" size="sm" onClick={handleDelete}>
                {t("obs.editPanel.delete")}
              </Button>
            </ActionButtons>
          </>
        ) : (
          <InfoText>{t("obs.editPanel.selectElement")}</InfoText>
        )}
      </PanelContent>
    </Panel>
  );

  return createPortal(content, document.body);
}
