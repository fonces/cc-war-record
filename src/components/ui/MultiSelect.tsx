import styled from "styled-components";
import { useState, useRef, useEffect, memo } from "react";
import { Icon } from "./Icon";
import { Checkbox } from "./Checkbox";

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
};

const Container = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  position: relative;
  width: ${({ width }) => width || "auto"};
`;

const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SelectButton = styled.button<{ isOpen: boolean }>`
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  background: white;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[400]};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary[100]};
  }
`;

const IconWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%) ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  right: 0;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-height: 300px;
  overflow-y: auto;
  z-index: 50;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const OptionItem = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

const OptionLabel = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
`;

const SelectedCount = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

/**
 * 複数選択可能なセレクトボックスコンポーネント
 */
export const MultiSelect = memo(({ label, value, onChange, options, placeholder = "選択してください", maxSelections, width }: MultiSelectProps) => {
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
    <Container ref={containerRef} width={width}>
      {label && <Label>{label}</Label>}
      <SelectButton type="button" onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        {getDisplayText()}
        {value.length > 0 && <SelectedCount> ({value.length}件選択)</SelectedCount>}
        <IconWrapper isOpen={isOpen}>
          <Icon name="add" size={16} />
        </IconWrapper>
      </SelectButton>
      <DropdownContainer isOpen={isOpen}>
        {options.map((option) => (
          <OptionItem key={option.value}>
            <Checkbox
              checked={value.includes(option.value)}
              onChange={() => handleToggle(option.value)}
              disabled={maxSelections ? value.length >= maxSelections && !value.includes(option.value) : false}
            />
            <OptionLabel>{option.label}</OptionLabel>
          </OptionItem>
        ))}
      </DropdownContainer>
    </Container>
  );
});

MultiSelect.displayName = "MultiSelect";
