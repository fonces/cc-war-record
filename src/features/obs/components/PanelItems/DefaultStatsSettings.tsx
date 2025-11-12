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

type DefaultStatsSettingsProps = {
  element: HudElement;
  onUpdate: (updates: Partial<HudElement>) => void;
  getBackgroundColorParts: () => { hex: string; alpha: number };
  hexToRgba: (hex: string, alpha: number) => string;
};

export function DefaultStatsSettings({ element, onUpdate, getBackgroundColorParts, hexToRgba }: DefaultStatsSettingsProps) {
  const { t } = useTranslation();

  return (
    <FormRow>
      <FormGroup>
        <Label>{t("obs.editPanel.fontSize")}</Label>
        <Input type="number" value={element.fontSize || 16} onChange={(e) => onUpdate({ fontSize: parseInt(e.target.value, 10) })} min="8" max="200" />
      </FormGroup>
      <FormGroup>
        <Label>{t("obs.editPanel.backgroundColor")}</Label>
        <ColorPickerGroup>
          <ColorInput
            type="color"
            value={getBackgroundColorParts().hex}
            onChange={(e) => {
              const opacity = getBackgroundColorParts().alpha;
              onUpdate({ backgroundColor: hexToRgba(e.target.value, opacity) });
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
            onChange={(e) => {
              const { hex } = getBackgroundColorParts();
              onUpdate({ backgroundColor: hexToRgba(hex, parseFloat(e.target.value)) });
            }}
          />
        </ColorPickerGroup>
      </FormGroup>
    </FormRow>
  );
}
