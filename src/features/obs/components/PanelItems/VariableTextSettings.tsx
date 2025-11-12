import { useState } from "react";
import styled from "styled-components";
import { Checkbox, Input, Snackbar, Textarea } from "@/components/ui";
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
  flex-direction: row;
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

const HelpText = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing[1]};
  line-height: 1.4;
`;

const AccordionHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
  }

  svg {
    transition: transform 0.2s;
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`;

const AccordionContent = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const VariableListInner = styled.div`
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const VariableItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[1]} 0;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing[2]};
  margin: ${({ theme }) => theme.spacing[1]} 0;

  &:hover {
    background: ${({ theme }) => theme.colors.background};
  }

  code {
    font-family: monospace;
    background: ${({ theme }) => theme.colors.background};
    padding: 2px 6px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

type VariableTextSettingsProps = {
  element: HudElement;
  onUpdate: (updates: Partial<HudElement>) => void;
  getBackgroundColorParts: () => { hex: string; alpha: number };
  hexToRgba: (hex: string, alpha: number) => string;
};

export function VariableTextSettings({ element, onUpdate, getBackgroundColorParts, hexToRgba }: VariableTextSettingsProps) {
  const { t } = useTranslation();
  const [isVariableListOpen, setIsVariableListOpen] = useState(false);
  const [showCopySnackbar, setShowCopySnackbar] = useState(false);
  const [copiedVariable, setCopiedVariable] = useState("");

  const handleCopyVariable = async (variable: string) => {
    try {
      await navigator.clipboard.writeText(variable);
      setCopiedVariable(variable);
      setShowCopySnackbar(true);
    } catch (error) {
      console.error("Failed to copy variable:", error);
    }
  };

  return (
    <>
      <FormGroup>
        <Label>{t("obs.editPanel.text")}</Label>
        <Textarea value={element.text || ""} onChange={(e) => onUpdate({ text: e.target.value })} placeholder="{winCount}勝 {loseCount}敗 勝率{winRate}%" rows={3} />
        <HelpText>変数を使用できます。例: {"{winCount}"} → 勝利数</HelpText>
      </FormGroup>

      <FormGroup>
        <AccordionHeader type="button" onClick={() => setIsVariableListOpen(!isVariableListOpen)} aria-expanded={isVariableListOpen}>
          <span>使用可能な変数</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </AccordionHeader>
        <AccordionContent $isOpen={isVariableListOpen}>
          <VariableListInner>
            <VariableItem onClick={() => handleCopyVariable("{winCount}")}>
              <code>{"{winCount}"}</code>
              <span>勝利数</span>
            </VariableItem>
            <VariableItem onClick={() => handleCopyVariable("{loseCount}")}>
              <code>{"{loseCount}"}</code>
              <span>敗北数</span>
            </VariableItem>
            <VariableItem onClick={() => handleCopyVariable("{winRate}")}>
              <code>{"{winRate}"}</code>
              <span>勝率（%）</span>
            </VariableItem>
            <VariableItem onClick={() => handleCopyVariable("{totalMatches}")}>
              <code>{"{totalMatches}"}</code>
              <span>総試合数</span>
            </VariableItem>
          </VariableListInner>
        </AccordionContent>
      </FormGroup>

      <FormRow>
        <FormGroup>
          <Label>{t("obs.editPanel.textColor")}</Label>
          <ColorInput type="color" value={element.textColor || "#ffffff"} onChange={(e) => onUpdate({ textColor: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <Label>{t("obs.editPanel.fontSize")}</Label>
          <Input type="number" value={element.fontSize || 16} onChange={(e) => onUpdate({ fontSize: parseInt(e.target.value, 10) })} min="8" max="200" />
        </FormGroup>
      </FormRow>

      <FormGroup>
        <Label>{t("obs.editPanel.textAlign")}</Label>
        <CheckboxGroup>
          <CheckboxLabel>
            <Checkbox checked={element.textAlign === "left" || !element.textAlign} onChange={() => onUpdate({ textAlign: "left" })} />
            {t("obs.editPanel.alignLeft")}
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox checked={element.textAlign === "center"} onChange={() => onUpdate({ textAlign: "center" })} />
            {t("obs.editPanel.alignCenter")}
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox checked={element.textAlign === "right"} onChange={() => onUpdate({ textAlign: "right" })} />
            {t("obs.editPanel.alignRight")}
          </CheckboxLabel>
        </CheckboxGroup>
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

      <Snackbar open={showCopySnackbar} message={`${copiedVariable} をコピーしました`} autoHideDuration={2000} onClose={() => setShowCopySnackbar(false)} />
    </>
  );
}
