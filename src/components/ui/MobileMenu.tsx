import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { Icon, IconicButton } from "@/components/ui";
import { useScrollLock } from "@/hooks";
import { media } from "@/styles/breakpoints";
import type { IconName } from "./Icon/types";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-8px);
  }
`;

const StyledMobileMenuContainer = styled.div`
  display: none;
  position: relative;

  ${media.mobile} {
    display: block;
  }
`;

const StyledBackdrop = styled.div<{ $isOpen: boolean; $isClosing: boolean }>`
  display: ${({ $isOpen, $isClosing }) => ($isOpen || $isClosing ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  background: ${({ theme }) => (theme.isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)")};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  animation: ${({ $isClosing }) => ($isClosing ? fadeOut : fadeIn)} 0.2s ease-out;
`;

const StyledMobileMenu = styled.div<{ $isOpen: boolean; $isClosing: boolean; $position: { top: number; right: number } }>`
  position: fixed;
  top: ${({ $position }) => $position.top}px;
  right: ${({ $position }) => $position.right}px;
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  -webkit-backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: 9999;
  min-width: 160px;
  overflow: hidden;
  display: ${({ $isOpen, $isClosing }) => ($isOpen || $isClosing ? "block" : "none")};
  animation: ${({ $isClosing }) => ($isClosing ? slideUp : slideDown)} 0.2s ease-out;
  transform-origin: top right;
`;

const StyledMenuItem = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  transition: background-color ${({ theme }) => theme.transitions.base};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }

  &:active {
    background: ${({ theme }) => theme.colors.border};
  }
`;

export type MobileMenuItem = {
  /** メニュー項目のラベル */
  label: string;
  /** アイコン名 */
  icon: IconName;
  /** クリックハンドラー */
  onClick: () => void;
};

type MobileMenuProps = {
  /** メニュー項目のリスト */
  items: MobileMenuItem[];
  /** トリガーボタンのタイトル */
  triggerTitle?: string;
  /** クリック時のstopPropagation */
  stopPropagation?: boolean;
};

/**
 * モバイル用メニューコンポーネント
 * SP表示時のみ表示される三点リーダーメニュー
 */
export const MobileMenu = ({ items, triggerTitle, stopPropagation = true }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // スクロールロック
  useScrollLock(isOpen);

  const closeMenu = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200); // アニメーション時間と同じ
  }, []);

  // メニューの位置を計算
  const updateMenuPosition = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + 8, // 8px gap
        right: window.innerWidth - rect.right, // 右端からの距離
      });
    }
  }, []);

  // メニューを開く
  const openMenu = useCallback(() => {
    updateMenuPosition();
    setIsOpen(true);
  }, [updateMenuPosition]);

  // メニュー外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // トリガーボタンとメニュー本体の両方を除外
      if (menuRef.current && !menuRef.current.contains(target) && containerRef.current && !containerRef.current.contains(target)) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isOpen) {
      // clickイベントのみを使用（mousedownとclickの重複を避ける）
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, closeMenu]);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (stopPropagation) {
      e.stopPropagation();
    }
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleItemClick = (e: React.MouseEvent, onClick: () => void) => {
    e.preventDefault();
    if (stopPropagation) {
      e.stopPropagation();
    }
    closeMenu();
    onClick();
  };

  return (
    <>
      <StyledMobileMenuContainer ref={containerRef}>
        <div ref={triggerRef}>
          <IconicButton icon={<Icon name="hamburger" size={16} />} onClick={handleToggle} title={triggerTitle} />
        </div>
      </StyledMobileMenuContainer>
      {(isOpen || isClosing) &&
        createPortal(
          <>
            <StyledBackdrop $isOpen={isOpen} $isClosing={isClosing} onClick={closeMenu} />
            <StyledMobileMenu ref={menuRef} $isOpen={isOpen} $isClosing={isClosing} $position={menuPosition}>
              {items.map((item, index) => (
                <StyledMenuItem key={index} onClick={(e) => handleItemClick(e, item.onClick)}>
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </StyledMenuItem>
              ))}
            </StyledMobileMenu>
          </>,
          document.body,
        )}
    </>
  );
};
