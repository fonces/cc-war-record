import styled from "styled-components";
import { memo } from "react";

type CheckboxProps = {
  /** チェック状態 */
  checked: boolean;
  /** 変更ハンドラー */
  onChange: () => void;
  /** 非活性 */
  disabled?: boolean;
};

const StyledCheckbox = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary[500]};
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  &:checked::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/**
 * チェックボックスコンポーネント
 */
export const Checkbox = memo(({ checked, onChange, disabled = false }: CheckboxProps) => {
  return <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />;
});

Checkbox.displayName = "Checkbox";
