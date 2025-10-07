import styled from 'styled-components';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'win';
type ButtonSize = 'sm' | 'md' | 'lg';

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
  font-weight: 500;
  transition: all 0.2s;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  outline: none;

  /* サイズ */
  ${({ size = 'md', theme, icon }) => {
    // アイコンのみの場合はpaddingを削除
    if (icon) {
      return `
        padding: 0;
        font-size: 1rem;
      `;
    }
    
    switch (size) {
      case 'sm':
        return `
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
          font-size: 0.875rem;
        `;
      case 'lg':
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
  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary[600]};
          color: white;
          border: none;

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary[700]};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.primary[800]};
          }
        `;
      case 'secondary':
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
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.gray[700]};
          border: 2px solid ${theme.colors.gray[600]};

          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary[50]};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.primary[100]};
          }
        `;
      case 'ghost':
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
      case 'win':
        return `
          background-color: ${theme.colors.win[600]};
          color: white;
          border: none;

          &:hover:not(:disabled) {
            background-color: ${theme.colors.win[700]};
          }

          &:active:not(:disabled) {
            background-color: ${theme.colors.win[800]};
          }
        `;
    }
  }}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

export const Button = ({ children, icon, ...props }: ButtonProps) => {
  return <StyledButton {...props} icon={icon}>{icon || children}</StyledButton>;
};
