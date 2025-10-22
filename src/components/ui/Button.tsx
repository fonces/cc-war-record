import { memo } from "react";
import styled from "styled-components";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "win" | "defeat";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  gap: 0.4rem;
  line-height: 1;
  transition: all ${({ theme }) => theme.transitions.bounce};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;

  /* サイズ */
  ${({ size = "md", theme, icon }) => {
    // アイコンのみの場合はpaddingを削除
    if (icon) {
      return `
        padding: ${theme.spacing[1]};
        font-size: 1rem;
      `;
    }

    switch (size) {
      case "sm":
        return `
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
          font-size: 0.875rem;
        `;
      case "lg":
        return `
          padding: ${theme.spacing[4]} ${theme.spacing[6]};
          font-size: 1.125rem;
        `;
      default:
        return `
          padding: ${theme.spacing[3]} ${theme.spacing[4]};
          font-size: 1rem;
        `;
    }
  }}

  /* バリアント */
  ${({ variant = "primary", theme }) => {
    switch (variant) {
      case "primary":
        return `
          background: ${theme.gradients.primary};
          color: white;
          border: none;
          box-shadow: ${theme.shadows.glow};

          &:hover:not(:disabled) {
            transform: translateY(-2px) scale(1.02);
            box-shadow: ${theme.shadows.glowLg};
          }

          &:active:not(:disabled) {
            transform: translateY(0) scale(0.98);
            box-shadow: ${theme.shadows.glow};
          }

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: ${theme.gradients.shimmer};
            transition: left ${theme.transitions.slow};
          }

          &:hover::before {
            left: 100%;
          }
        `;
      case "secondary":
        return `
          background-color: ${theme.colors.gray[600]};
          color: white;
          border: none;

          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray[700]};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.gray[800]};
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          color: ${theme.colors.primary[600]};
          border: 2px solid ${theme.colors.primary[400]};
          box-shadow: ${theme.shadows.sm};

          &:hover:not(:disabled) {
            background: ${theme.gradients.glass};
            backdrop-filter: ${theme.blur.sm};
            border-color: ${theme.colors.primary[600]};
            transform: translateY(-1px);
            box-shadow: ${theme.shadows.md};
          }

          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: ${theme.shadows.sm};
          }
        `;
      case "ghost":
        return `
          background-color: transparent;
          color: ${theme.colors.gray[700]};
          border: none;

          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray[100]};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.gray[200]};
          }
        `;
      case "win":
        return `
          background-color: ${theme.colors.win[200]};
          color: ${theme.colors.win[700]};
          border: none;

          &:hover:not(:disabled) {
            background-color: ${theme.colors.win[300]};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.win[800]};
          }
        `;
      case "defeat":
        return `
          background-color: ${theme.colors.defeat[200]};
          color: ${theme.colors.defeat[700]};
          border: none;

          &:hover:not(:disabled) {
            background-color: ${theme.colors.defeat[300]};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.defeat[800]};
          }
        `;
    }
  }}

  ${({ fullWidth }) => fullWidth && "width: 100%;"}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    svg {
      cursor: not-allowed;
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const Button = memo(({ children, icon, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} icon={icon}>
      {icon || children}
    </StyledButton>
  );
});

Button.displayName = "Button";
