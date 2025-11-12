import styled from "styled-components";
import { Input } from "@/components/ui";
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

type RectangleSettingsProps = {
  element: HudElement;
  onUpdate: (updates: Partial<HudElement>) => void;
};

export function RectangleSettings({ element, onUpdate }: RectangleSettingsProps) {
  const { t } = useTranslation();

  return (
    <>
      <FormRow>
        <FormGroup>
          <Label>{t("obs.editPanel.rectangleFillColor")}</Label>
          <ColorInput type="color" value={element.rectangleFillColor || "#000000"} onChange={(e) => onUpdate({ rectangleFillColor: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <Label>{t("obs.editPanel.rectangleBorderColor")}</Label>
          <ColorInput type="color" value={element.rectangleBorderColor || "#ffffff"} onChange={(e) => onUpdate({ rectangleBorderColor: e.target.value })} />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup>
          <Label>{t("obs.editPanel.rectangleBorderWidth")}</Label>
          <Input type="number" value={element.rectangleBorderWidth || 2} onChange={(e) => onUpdate({ rectangleBorderWidth: parseInt(e.target.value, 10) })} min="0" max="50" />
        </FormGroup>
        <FormGroup>
          <Label>{t("obs.editPanel.rectangleBorderRadius")}</Label>
          <Input type="number" value={element.rectangleBorderRadius || 0} onChange={(e) => onUpdate({ rectangleBorderRadius: parseInt(e.target.value, 10) })} min="0" max="100" />
        </FormGroup>
      </FormRow>
    </>
  );
}
