import { memo, useRef, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(50%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledAnimatedNumber = styled.span<{ $direction: "up" | "down" }>`
  display: inline-block;
  position: relative;
  animation: ${({ $direction }) =>
      $direction === "up"
        ? css`
            ${slideUp}
          `
        : css`
            ${slideDown}
          `}
    0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

type AnimatedNumberProps = {
  children: number;
  suffix?: string;
};

/**
 * アニメーション付き数字コンポーネント
 * 数字の変化をアニメーションで表示
 * 増加時は下から上、減少時は上から下にスライド
 */
export const AnimatedNumber = memo(({ children, suffix }: AnimatedNumberProps) => {
  const prevValueRef = useRef<number>(children);
  const [direction, setDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    if (prevValueRef.current !== children) {
      setDirection(children > prevValueRef.current ? "up" : "down");
      prevValueRef.current = children;
    }
  }, [children]);

  return (
    <>
      <StyledAnimatedNumber key={`${children}`} $direction={direction}>
        {children}
      </StyledAnimatedNumber>
      {suffix}
    </>
  );
});

AnimatedNumber.displayName = "AnimatedNumber";
