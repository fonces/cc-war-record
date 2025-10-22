import { useState, useRef, useEffect, memo } from "react";
import styled, { keyframes } from "styled-components";
import { Checkbox } from "./Checkbox";
import { Icon } from "./Icon";

type MultiSelectOption = {
  value: string;
  label: string;
};

type MultiSelectProps = {
  /** ラベル */
  label?: string;
  /** 選択された値の配列 */
  value: string[];
  /** 変更ハンドラー */
  onChange: (values: string[]) => void;
  /** 選択肢 */
  options: MultiSelectOption[];
  /** プレースホルダー */
  placeholder?: string;
  /** 最大選択数 */
  maxSelections?: number;
  /** 幅 */
  width?: string;
  /** フルワイド */
  fullWidth?: boolean;
};

// アニメーション
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div<{ width?: string; fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  position: relative;
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  ${({ width }) => width && `width: ${width};`}
`;

const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SelectButton = styled.button<{ isOpen: boolean }>`
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 2px solid ${({ isOpen, theme }) => (isOpen ? theme.colors.primary[400] : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all ${({ theme }) => theme.transitions.base};
  box-shadow: ${({ theme, isOpen }) => (isOpen ? `${theme.shadows.md}, ${theme.shadows.glow}` : theme.shadows.sm)};
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary[400]};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: ${({ theme }) => `${theme.shadows.md}, ${theme.shadows.glow}`};
    background: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.95)")};
  }
`;

const IconWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%) ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform ${({ theme }) => theme.transitions.base};
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #26a1df;
`;

const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => `${theme.shadows.xl}, ${theme.shadows.glow}`};
  max-height: 300px;
  overflow-y: auto;
  z-index: 50;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${fadeIn} 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
  }
`;

const OptionItem = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    transition: width ${({ theme }) => theme.transitions.base};
  }

  &:hover:not([disabled]) {
    background-color: rgba(38, 161, 223, 0.05);
    padding-left: ${({ theme }) => theme.spacing[5]};

    &::before {
      width: 3px;
    }
  }

  &:first-child {
    padding-top: ${({ theme }) => theme.spacing[4]};
  }

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const OptionLabel = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  font-weight: 500;
`;

const SelectedCount = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.75rem;
  font-weight: 600;
`;

/**
 * 複数選択可能なセレクトボックスコンポーネント
 */
export const MultiSelect = memo(({ label, value, onChange, options, placeholder = "選択してください", maxSelections, width, fullWidth }: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 外部クリックでドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      if (maxSelections && value.length >= maxSelections) {
        return;
      }
      onChange([...value, optionValue]);
    }
  };

  const getDisplayText = () => {
    if (value.length === 0) {
      return placeholder;
    }
    return value.map((v) => options.find((opt) => opt.value === v)?.label || v).join(", ");
  };

  return (
    <Container ref={containerRef} width={width} fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <SelectButton type="button" onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {getDisplayText()}
        {value.length > 0 && <SelectedCount> ({value.length})</SelectedCount>}
        <IconWrapper isOpen={isOpen}>
          <Icon name="add" size={16} />
        </IconWrapper>
      </SelectButton>
      <DropdownContainer isOpen={isOpen}>
        {options.map((option) => {
          const isDisabled = maxSelections ? value.length >= maxSelections && !value.includes(option.value) : false;
          return (
            <OptionItem key={option.value} disabled={isDisabled}>
              <Checkbox checked={value.includes(option.value)} onChange={() => handleToggle(option.value)} disabled={isDisabled} />
              <OptionLabel>{option.label}</OptionLabel>
            </OptionItem>
          );
        })}
      </DropdownContainer>
    </Container>
  );
});

MultiSelect.displayName = "MultiSelect";
