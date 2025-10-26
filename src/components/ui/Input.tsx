import { forwardRef, memo } from "react";
import styled from "styled-components";
import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  inputSize?: "sm" | "md" | "lg";
  icon?: ReactNode;
};

const Container = styled.div<{ fullWidth?: boolean; fit?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  ${({ fullWidth }) => fullWidth && "width: 100%;"}
  ${({ fit }) => fit && "width: fit-content;"}
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.gray[500]};
  z-index: 1;
`;

const StyledInput = styled.input<{ hasError?: boolean; inputSize?: "sm" | "md" | "lg"; hasIcon?: boolean }>`
  display: block;
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
  padding-right: ${({ hasIcon, inputSize = "md" }) => {
    if (!hasIcon) return undefined;
    switch (inputSize) {
      case "sm":
        return "2.5rem";
      case "lg":
        return "3rem";
      default:
        return "2.75rem";
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
  width: 100%;

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
  forwardRef<HTMLInputElement, InputProps>(({ label, error, fullWidth, inputSize = "md", icon, ...props }, ref) => {
    return (
      <Container fit={!!icon} fullWidth={fullWidth}>
        {label && <Label>{label}</Label>}
        <InputWrapper>
          <StyledInput ref={ref} hasError={!!error} inputSize={inputSize} hasIcon={!!icon} {...props} />
          {icon && <IconWrapper>{icon}</IconWrapper>}
        </InputWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }),
);

Input.displayName = "Input";
