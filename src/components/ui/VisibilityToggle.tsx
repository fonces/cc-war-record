import { memo } from "react";
import styled from "styled-components";

type ToggleProps = {
  /** チェック状態 */
  checked: boolean;
  /** 変更ハンドラー */
  onChange: () => void;
  /** ラベルテキスト */
  label?: string;
  /** 非活性 */
  disabled?: boolean;
};

const Container = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  user-select: none;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;

const ToggleTrack = styled.div<{ $checked: boolean; $disabled?: boolean }>`
  position: relative;
  width: 44px;
  height: 24px;
  background: ${({ $checked, theme }) => ($checked ? theme.colors.primary[500] : theme.colors.gray[300])};
  border-radius: 12px;
  transition: background ${({ theme }) => theme.transitions.base};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    ${({ $checked, theme, $disabled }) =>
      !$disabled &&
      `
      background: ${$checked ? theme.colors.primary[600] : theme.colors.gray[400]};
    `}
  }
`;

const ToggleThumb = styled.div<{ $checked: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ $checked }) => ($checked ? "22px" : "2px")};
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: left 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const Label = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

/**
 * トグルスイッチコンポーネント
 */
export const Toggle = memo(({ checked, onChange, label, disabled = false }: ToggleProps) => {
  return (
    <Container $disabled={disabled}>
      <HiddenInput type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
      <ToggleTrack $checked={checked} $disabled={disabled} onClick={disabled ? undefined : onChange}>
        <ToggleThumb $checked={checked} />
      </ToggleTrack>
      {label && <Label>{label}</Label>}
    </Container>
  );
});

Toggle.displayName = "Toggle";
