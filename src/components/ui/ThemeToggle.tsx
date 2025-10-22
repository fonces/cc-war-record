import { memo } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { useThemeMode } from "@/hooks";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledToggleContainer = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing[6]};
  right: ${({ theme }) => theme.spacing[6]};
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: ${({ theme }) => theme.spacing[4]};
    right: ${({ theme }) => theme.spacing[4]};
  }
`;

const StyledToggleButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows["2xl"]}, ${({ theme }) => theme.shadows.glow};
    border-color: ${({ theme }) => theme.colors.primary[400]};

    &::before {
      opacity: 1;
    }

    svg {
      animation: ${rotate} 0.6s ease-in-out;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.primary[500]};
    transition: all ${({ theme }) => theme.transitions.base};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 48px;
    height: 48px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const ThemeToggleComponent = () => {
  const { mode, toggleMode } = useThemeMode();

  const toggleButton = (
    <StyledToggleContainer>
      <StyledToggleButton onClick={toggleMode} aria-label="Toggle theme" title={mode === "light" ? "ダークモードに切り替え" : "ライトモードに切り替え"}>
        {mode === "light" ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        )}
      </StyledToggleButton>
    </StyledToggleContainer>
  );

  return createPortal(toggleButton, document.body);
};

export const ThemeToggle = memo(ThemeToggleComponent);
