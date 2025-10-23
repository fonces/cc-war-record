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
          background: ${theme.gradients.glass};
          backdrop-filter: ${theme.blur.md};
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.borderLight};
          box-shadow: ${theme.shadows.sm};

          &:hover:not(:disabled) {
            border-color: ${theme.colors.border};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md};
          }

          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: ${theme.shadows.sm};
          }
        `;
      case "outline":
        return `
          background: ${theme.gradients.glass};
          backdrop-filter: ${theme.blur.md};
          color: ${theme.colors.primary[600]};
          border: 1px solid ${theme.colors.borderLight};
          box-shadow: ${theme.shadows.sm};

          &:hover:not(:disabled) {
            border-color: ${theme.colors.border};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md}, 0 0 0 1px rgba(38, 161, 223, 0.1);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: ${theme.shadows.sm};
          }
        `;
      case "ghost":
        return `
          background-color: transparent;
          color: ${theme.colors.textSecondary};
          border: none;

          &:hover:not(:disabled) {
            background: ${theme.gradients.glass};
            backdrop-filter: ${theme.blur.sm};
          }

          &:active:not(:disabled) {
            background: ${theme.isDark ? "rgba(255, 255, 255, 0.1)" : theme.colors.gray[200]};
          }
        `;
      case "win":
        return `
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.15) 100%);
          backdrop-filter: ${theme.blur.md};
          color: ${theme.colors.win[700]};
          border: 1px solid rgba(34, 197, 94, 0.2);
          box-shadow: ${theme.shadows.sm};

          &:hover:not(:disabled) {
            background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.2) 100%);
            border-color: rgba(34, 197, 94, 0.3);
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md}, 0 4px 12px rgba(34, 197, 94, 0.2);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: ${theme.shadows.sm};
          }
        `;
      case "defeat":
        return `
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.15) 100%);
          backdrop-filter: ${theme.blur.md};
          color: ${theme.colors.defeat[700]};
          border: 1px solid rgba(239, 68, 68, 0.2);
          box-shadow: ${theme.shadows.sm};

          &:hover:not(:disabled) {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.2) 100%);
            border-color: rgba(239, 68, 68, 0.3);
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md}, 0 4px 12px rgba(239, 68, 68, 0.2);
          }

          &:active:not(:disabled) {
            transform: translateY(0);
            box-shadow: ${theme.shadows.sm};
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
