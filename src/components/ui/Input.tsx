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
  border: 1px solid ${({ theme, hasError }) => (hasError ? theme.colors.error[500] : theme.colors.borderLight)};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  outline: none;
  transition: all ${({ theme }) => theme.transitions.base};
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    border-color: ${({ theme, hasError }) => (hasError ? theme.colors.error[500] : theme.colors.border)};
    box-shadow: ${({ theme, hasError }) => (hasError ? theme.shadows.md : `${theme.shadows.md}, 0 0 0 1px rgba(38, 161, 223, 0.1)`)};
    transform: translateY(-1px);
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme, hasError }) => (hasError ? theme.colors.error[600] : theme.colors.border)};
  }

  &:disabled {
    background: ${({ theme }) => (theme.isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)")};
    backdrop-filter: ${({ theme }) => theme.blur.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
    border-color: ${({ theme }) => theme.colors.borderLight};
    cursor: not-allowed;
    opacity: 0.5;
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
