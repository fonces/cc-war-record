import { memo } from "react";
import styled from "styled-components";
import type { ReactNode } from "react";

type ButtonGroupProps = {
  /** ボタングループの方向 */
  direction?: "vertical" | "horizontal";
  /** フルサイズ */
  fullWidth?: boolean;
  /** 子要素 */
  children: ReactNode;
};

const StyledButtonGroup = styled.div<Pick<ButtonGroupProps, "direction" | "fullWidth">>`
  display: flex;
  flex-direction: ${({ direction = "vertical" }) => (direction === "vertical" ? "column" : "row")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  /* 横並びの場合はボタンを折り返す */
  ${({ direction }) => direction === "horizontal" && "flex-wrap: wrap;"}

  /* 隣接ボタンの角を削除 */
  button:not(:first-child):not(:last-child) {
    border-radius: 0;
  }

  /* hover時の浮き上がりを無効化 */
  button:hover:not(:disabled) {
    transform: none;
  }

  ${({ direction = "vertical" }) =>
    direction === "vertical"
      ? `
    button:first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    button:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `
      : `
    button:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `}
`;

/**
 * ボタングループコンポーネント
 * 複数のボタンをグループ化して表示
 */
export const ButtonGroup = memo(({ direction = "vertical", fullWidth = false, children }: ButtonGroupProps) => {
  return (
    <StyledButtonGroup direction={direction} fullWidth={fullWidth}>
      {children}
    </StyledButtonGroup>
  );
});

ButtonGroup.displayName = "ButtonGroup";
