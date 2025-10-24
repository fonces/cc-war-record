import { memo } from "react";
import styled, { css } from "styled-components";
import { Button, type ButtonProps } from "./Button";

type ButtonType = "danger" | "default";

type AppendedProps = { $type?: ButtonType };

type IconicButtonProps = Omit<ButtonProps, "variant"> & AppendedProps;

const buttonStyles = {
  danger: css`
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: ${({ theme }) => theme.colors.error[500]};

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.error[500]};
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }
  `,
  default: css`
    border: 1px solid ${({ theme }) => theme.colors.borderLight};
    color: ${({ theme }) => theme.colors.primary[500]};

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.primary[500]};
      box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);
    }
  `,
} satisfies Record<ButtonType, ReturnType<typeof css>>;

const StyledButton = styled(Button)<AppendedProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.base};
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  padding: 0;

  &:hover:not(:disabled) {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  ${({ $type }) => buttonStyles[$type || "default"]}
`;

export const IconicButton = memo(({ icon, children, ...props }: IconicButtonProps) => {
  return (
    <StyledButton variant="outline" {...props}>
      {icon || children}
    </StyledButton>
  );
});

IconicButton.displayName = "IconicButton";
