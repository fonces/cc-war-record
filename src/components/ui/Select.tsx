import { forwardRef, memo } from "react";
import styled from "styled-components";
import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  width?: string;
  options: Array<{ value: string; label: string }>;
};

const Container = styled.div<{ fullWidth?: boolean; width?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  ${({ width }) => width && `width: ${width};`}
`;

const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const StyledSelect = styled.select<{ hasError?: boolean }>`
  padding: 0.5rem 2rem 0.5rem 1rem;
  border: 2px solid ${({ theme, hasError }) => (hasError ? theme.colors.error[500] : "rgba(38, 161, 223, 0.2)")};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2326A1DF' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  appearance: none;
  transition: all ${({ theme }) => theme.transitions.base};
  box-shadow: ${({ theme }) => theme.shadows.sm};
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
    border-color: ${({ theme, hasError }) => (hasError ? theme.colors.error[500] : theme.colors.primary[500])};
    box-shadow: ${({ theme, hasError }) => (hasError ? theme.shadows.md : `${theme.shadows.md}, ${theme.shadows.glow}`)};
    background: rgba(255, 255, 255, 0.95);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.error[500]};
`;

export const Select = memo(
  forwardRef<HTMLSelectElement, SelectProps>(({ label, error, fullWidth, width, options, ...props }, ref) => {
    return (
      <Container fullWidth={fullWidth} width={width}>
        {label && <Label>{label}</Label>}
        <StyledSelect ref={ref} hasError={!!error} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }),
);

Select.displayName = "Select";
