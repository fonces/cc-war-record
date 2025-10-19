import styled from "styled-components";
import type { InputHTMLAttributes } from "react";
import { forwardRef, memo } from "react";

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
  color: ${({ theme }) => theme.colors.gray[700]};
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
  border: 2px solid ${({ theme, hasError }) => (hasError ? theme.colors.error[500] : theme.colors.gray[300])};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  transition: all 0.2s;
  background-color: white;

  &:focus {
    border-color: ${({ theme, hasError }) => (hasError ? theme.colors.error[500] : theme.colors.primary[500])};
    box-shadow: 0 0 0 3px ${({ theme, hasError }) => (hasError ? theme.colors.error[500] + "20" : theme.colors.primary[100])};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
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
