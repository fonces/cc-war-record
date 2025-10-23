import { useLocation } from "@tanstack/react-router";
import { useState } from "react";
import styled from "styled-components";
import { MobileHeader } from "./MobileHeader";
import { Sidebar } from "./Sidebar";

// オーバーレイ（モバイル用）
const StyledOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

// メインコンテンツエリア
const StyledMainContent = styled.main`
  display: flex;
  flex: 1;
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 260px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-image: url("${import.meta.env.BASE_URL}img/${({ theme }) => (theme.isDark ? "bgn.webp" : "bg.webp")}");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

type HeaderProps = {
  /** メインコンテンツ */
  children: React.ReactNode;
};

/**
 * ヘッダーコンポーネント
 * PCでは左メニュー、SPではドロワーを表示する
 */
export const Header = ({ children }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <StyledContainer>
      {/* モバイル用ヘッダー */}
      <MobileHeader onMenuClick={toggleMobileMenu} />

      {/* サイドバー */}
      <Sidebar isOpen={isMobileMenuOpen} isActivePath={isActivePath} onClose={closeMobileMenu} />

      {/* オーバーレイ（モバイル用） */}
      <StyledOverlay $isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />

      {/* メインコンテンツ */}
      <StyledMainContent>{children}</StyledMainContent>
    </StyledContainer>
  );
};
