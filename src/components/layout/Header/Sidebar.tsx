import { Link } from "@tanstack/react-router";
import styled from "styled-components";
import { Icon, LanguageSelector } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { media } from "@/styles/breakpoints";
import { navigationItems } from "./types";
import type { NavigationItem } from "./types";

const StyledSidebar = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 260px;
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.lg};
  border-right: 1px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  z-index: 10;
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition:
    transform ${({ theme }) => theme.transitions.base},
    background 0.3s ease;
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

  ${media.mobile} {
    display: none;
  }
`;

const StyledLogoIcon = styled.img`
  width: 3rem;
  height: 3rem;
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

  ${media.mobile} {
    margin-top: ${({ theme }) => theme.spacing[16]};
  }
`;

const StyledNavLink = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.white : theme.colors.text)};
  background: ${({ theme, $isActive }) => ($isActive ? theme.gradients.primary : "transparent")};
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "500")};
  transition: all ${({ theme }) => theme.transitions.bounce};
  box-shadow: ${({ theme, $isActive }) => ($isActive ? theme.shadows.md : theme.shadows.none)};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradients.glass};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    color: ${({ theme, $isActive }) => ($isActive ? theme.colors.white : theme.isDark ? theme.colors.primary[300] : theme.colors.primary[700])};
    transform: translateX(4px);
    box-shadow: ${({ theme }) => theme.shadows.md};

    &::before {
      opacity: 1;
    }
  }
`;

const StyledNavIcon = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: inherit;
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

      {/* 設定エリアを下部に配置 */}
      <div style={{ marginTop: "auto", paddingTop: "24px" }}>
        <LanguageSelector direction="up" fullWidth />
      </div>
    </StyledSidebar>
  );
};
