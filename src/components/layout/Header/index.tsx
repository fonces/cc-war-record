import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import styled from "styled-components";
import { Icon, LanguageSelector } from "@/components/ui";
import { useTranslation } from "@/hooks";

type NavigationItem = {
  /** ラベル */
  labelKey: string;
  /** パス */
  path: string;
  /** アイコン */
  icon: "home" | "history" | "chart" | "detail";
};

const navigationItems: NavigationItem[] = [
  { labelKey: "navigation.home", path: "/", icon: "home" },
  { labelKey: "navigation.graphs", path: "/graphs", icon: "chart" },
  { labelKey: "navigation.histories", path: "/histories", icon: "history" },
  { labelKey: "navigation.faq", path: "/faq", icon: "detail" },
];

// デスクトップ用サイドメニュー
const StyledSidebar = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 240px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
  z-index: 10;
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  transition: transform 0.15s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    transform: translateX(0);
    position: fixed;
    flex-shrink: 0;
  }
`;

const StyledSidebarTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const StyledNavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledNavLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary[700] : theme.colors.gray[700])};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary[100] : "transparent")};
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary[100] : theme.colors.gray[100])};
    color: ${({ theme }) => theme.colors.primary[700]};
  }
`;

const StyledNavIcon = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primary[700] : theme.colors.gray[500])};
`;

// モバイル用ヘッダー
const StyledMobileHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const StyledMobileHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledMobileHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledMobileTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

// オーバーレイ（モバイル用）
const StyledOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
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
  overflow-x: hidden;
  background-image: url("${import.meta.env.BASE_URL}img/bg.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 240px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const StyledCloseButton = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
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
  const { t } = useTranslation();

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
      <StyledMobileHeader>
        <StyledMobileHeaderContent>
          <StyledMobileTitle>{t("common.appName")}</StyledMobileTitle>
          <StyledMobileHeaderActions>
            <Icon name="hamburger" size={24} onClick={toggleMobileMenu} />
          </StyledMobileHeaderActions>
        </StyledMobileHeaderContent>
      </StyledMobileHeader>

      {/* サイドバー */}
      <StyledSidebar isOpen={isMobileMenuOpen}>
        <StyledCloseButton>
          <Icon name="close" size={24} onClick={closeMobileMenu} />
        </StyledCloseButton>

        <StyledSidebarTitle>{t("common.appName")}</StyledSidebarTitle>

        <StyledNavList>
          {navigationItems.map((item) => (
            <StyledNavLink key={item.path} to={item.path} $isActive={isActivePath(item.path)} onClick={closeMobileMenu}>
              <StyledNavIcon $isActive={isActivePath(item.path)}>
                <Icon name={item.icon} size={20} />
              </StyledNavIcon>
              {t(item.labelKey)}
            </StyledNavLink>
          ))}
        </StyledNavList>

        {/* 言語セレクターを下部に配置 */}
        <div style={{ marginTop: "auto", paddingTop: "24px" }}>
          <LanguageSelector direction="up" fullWidth />
        </div>
      </StyledSidebar>

      {/* オーバーレイ（モバイル用） */}
      <StyledOverlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />

      {/* メインコンテンツ */}
      <StyledMainContent>{children}</StyledMainContent>
    </StyledContainer>
  );
};
