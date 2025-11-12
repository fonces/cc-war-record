import styled from "styled-components";
import { Checkbox, Input } from "@/components/ui";
import { useTranslation } from "@/hooks";
import type { HudElement } from "../../types";

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

type LineSettingsProps = {
  element: HudElement;
  onUpdate: (updates: Partial<HudElement>) => void;
};

export function LineSettings({ element, onUpdate }: LineSettingsProps) {
  const { t } = useTranslation();

  const handleLineOrientationChange = (orientation: "horizontal" | "vertical") => {
    const currentWidth = element.size?.width || 200;
    const currentHeight = element.size?.height || 2;

    onUpdate({
      lineOrientation: orientation,
      size: {
        width: currentHeight,
        height: currentWidth,
      },
    });
  };

  return (
    <>
      <FormRow>
        <FormGroup>
          <Label>{t("obs.editPanel.lineOrientation")}</Label>
          <CheckboxGroup>
            <CheckboxLabel>
              <Checkbox checked={element.lineOrientation === "horizontal"} onChange={() => handleLineOrientationChange("horizontal")} />
              {t("obs.editPanel.horizontal")}
            </CheckboxLabel>
            <CheckboxLabel>
              <Checkbox checked={element.lineOrientation === "vertical"} onChange={() => handleLineOrientationChange("vertical")} />
              {t("obs.editPanel.vertical")}
            </CheckboxLabel>
          </CheckboxGroup>
        </FormGroup>
        <FormGroup>
          <Label>{t("obs.editPanel.lineThickness")}</Label>
          <Input type="number" value={element.lineThickness || 2} onChange={(e) => onUpdate({ lineThickness: parseInt(e.target.value, 10) })} min="1" max="50" />
        </FormGroup>
      </FormRow>
      <FormGroup>
        <Label>{t("obs.editPanel.lineColor")}</Label>
        <ColorInput type="color" value={element.lineColor || "#ffffff"} onChange={(e) => onUpdate({ lineColor: e.target.value })} />
      </FormGroup>
    </>
  );
}
