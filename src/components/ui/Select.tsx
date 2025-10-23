import { useState, useRef, useEffect, memo } from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "./Icon";

type SelectProps = {
  id?: string;
  label?: string;
  error?: string;
  fullWidth?: boolean;
  width?: string;
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
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

const Container = styled.div<{ fullWidth?: boolean; width?: string }>`
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

const SelectButton = styled.button<{ isOpen: boolean; hasError?: boolean }>`
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  border: 2px solid ${({ isOpen, hasError, theme }) => (hasError ? theme.colors.error[500] : isOpen ? theme.colors.primary[400] : theme.colors.border)};
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
  width: 100%;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary[400]};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => (hasError ? theme.colors.error[500] : theme.colors.primary[500])};
    box-shadow: ${({ theme }) => `${theme.shadows.md}, ${theme.shadows.glow}`};
    background: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.95)")};
  }

  &:disabled {
    background-color: ${({ theme }) => (theme.isDark ? "rgba(51, 65, 85, 0.5)" : theme.colors.gray[100])};
    color: ${({ theme }) => (theme.isDark ? "rgba(148, 163, 184, 0.6)" : theme.colors.gray[500])};
    border-color: ${({ theme }) => (theme.isDark ? "rgba(71, 85, 105, 0.5)" : theme.colors.gray[300])};
    cursor: not-allowed;
    opacity: ${({ theme }) => (theme.isDark ? "1" : "0.6")};
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

const OptionItem = styled.div<{ isSelected?: boolean }>`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;
  background: ${({ isSelected }) => (isSelected ? "rgba(38, 161, 223, 0.1)" : "transparent")};
  font-weight: ${({ isSelected }) => (isSelected ? "600" : "500")};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ isSelected }) => (isSelected ? "3px" : "0")};
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    transition: width ${({ theme }) => theme.transitions.base};
  }

  &:hover {
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

const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.error[500]};
`;

// 非表示のnative select（フォーム送信用）
const HiddenSelect = styled.select`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`;

/**
 * カスタムドロップダウンセレクトコンポーネント
 */
export const Select = memo(({ id, label, error, fullWidth, width, options, value, onChange, disabled }: SelectProps) => {
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

  const handleSelect = (optionValue: string) => {
    if (disabled) return;

    setIsOpen(false);

    // 模擬的なchangeイベントを作成
    if (onChange) {
      const event = {
        target: { value: optionValue },
      } as React.ChangeEvent<HTMLSelectElement>;
      onChange(event);
    }
  };

  const selectedOption = options.find((opt) => opt.value === value);
  const displayText = selectedOption?.label || options[0]?.label || "";

  return (
    <Container ref={containerRef} fullWidth={fullWidth} width={width}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <SelectButton type="button" onClick={() => !disabled && setIsOpen(!isOpen)} isOpen={isOpen} hasError={!!error} disabled={disabled}>
        {displayText}
        <IconWrapper isOpen={isOpen}>
          <Icon name="arrowDropDown" size={24} />
        </IconWrapper>
      </SelectButton>
      <DropdownContainer isOpen={isOpen}>
        {options.map((option) => (
          <OptionItem key={option.value} onClick={() => handleSelect(option.value)} isSelected={option.value === value}>
            {option.label}
          </OptionItem>
        ))}
      </DropdownContainer>
      {/* フォーム送信用の非表示select */}
      <HiddenSelect id={id} value={value} onChange={onChange} disabled={disabled} tabIndex={-1}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </HiddenSelect>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
});

Select.displayName = "Select";
