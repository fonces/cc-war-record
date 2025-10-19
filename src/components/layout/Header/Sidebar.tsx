import { Link } from "@tanstack/react-router";
import styled from "styled-components";
import { Icon, LanguageSelector } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { navigationItems } from "./types";
import type { NavigationItem } from "./types";

const StyledSidebar = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 260px;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
  z-index: 10;
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: transform 0.15s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    transform: translateX(0);
    position: fixed;
    flex-shrink: 0;
  }
`;

const StyledSidebarTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const StyledLogoIcon = styled.img`
  width: 3rem;
  height: 2rem;
  object-fit: contain;
`;

const StyledSidebarTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
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

type SidebarProps = {
  /** サイドバーが開いているか */
  isOpen: boolean;
  /** 現在アクティブなパスかチェックする関数 */
  isActivePath: (path: string) => boolean;
  /** サイドバーを閉じる関数 */
  onClose: () => void;
};

/**
 * サイドバーコンポーネント
 * デスクトップでは常に表示、モバイルではドロワーとして表示
 */
export const Sidebar = ({ isOpen, isActivePath, onClose }: SidebarProps) => {
  const { t } = useTranslation();

  return (
    <StyledSidebar $isOpen={isOpen}>
      <StyledCloseButton>
        <Icon name="close" size={24} onClick={onClose} />
      </StyledCloseButton>

      <StyledSidebarTitleWrapper>
        <StyledLogoIcon src={`${import.meta.env.VITE_BASEPATH}/img/cc.webp`} alt="CC" />
        <StyledSidebarTitle>{t("common.appName")}</StyledSidebarTitle>
      </StyledSidebarTitleWrapper>

      <StyledNavList>
        {navigationItems.map((item: NavigationItem) => (
          <StyledNavLink key={item.path} to={item.path} $isActive={isActivePath(item.path)} onClick={onClose}>
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
  );
};
