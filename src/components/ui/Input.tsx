import { forwardRef, memo } from "react";
import styled from "styled-components";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  inputSize?: "sm" | "md" | "lg";
};

const Container = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const StyledInput = styled.input<{ hasError?: boolean; inputSize?: "sm" | "md" | "lg" }>`
  padding: ${({ theme, inputSize = "md" }) => {
    switch (inputSize) {
      case "sm":
        return `${theme.spacing[2]} ${theme.spacing[3]}`;
      case "lg":
        return `${theme.spacing[4]} ${theme.spacing[5]}`;
      default:
        return `${theme.spacing[3]} ${theme.spacing[4]}`;
    }
  }};
  font-size: ${({ size = "md" }) => {
    switch (size) {
      case "sm":
        return "0.875rem";
      case "lg":
        return "1.125rem";
      default:
        return "1rem";
    }
  }};
  line-height: 1;
  border: 2px solid ${({ theme, hasError }) => (hasError ? theme.colors.error[500] : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  outline: none;
  transition: all ${({ theme }) => theme.transitions.base};
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    border-color: ${({ theme, hasError }) => (hasError ? theme.colors.error[500] : theme.colors.primary[500])};
    box-shadow: ${({ theme, hasError }) => (hasError ? theme.shadows.md : `${theme.shadows.md}, ${theme.shadows.glow}`)};
    transform: translateY(-1px);
    background: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.95)")};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme, hasError }) => (hasError ? theme.colors.error[600] : theme.colors.primary[400])};
  }

  &:disabled {
    background-color: ${({ theme }) => (theme.isDark ? "rgba(51, 65, 85, 0.5)" : theme.colors.gray[100])};
    color: ${({ theme }) => (theme.isDark ? "rgba(148, 163, 184, 0.6)" : theme.colors.gray[500])};
    border-color: ${({ theme }) => (theme.isDark ? "rgba(71, 85, 105, 0.5)" : theme.colors.gray[300])};
    cursor: not-allowed;
    opacity: ${({ theme }) => (theme.isDark ? "1" : "0.6")};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => (theme.isDark ? "rgba(26, 32, 44, 1)" : "rgba(255, 255, 255, 1)")} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.error[500]};
`;

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(({ label, error, fullWidth, inputSize = "md", ...props }, ref) => {
    return (
      <Container fullWidth={fullWidth}>
        {label && <Label>{label}</Label>}
        <StyledInput ref={ref} hasError={!!error} inputSize={inputSize} {...props} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }),
);

Input.displayName = "Input";
