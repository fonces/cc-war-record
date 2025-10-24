import styled from "styled-components";
import { Icon, ThemeToggle } from "@/components/ui";
import { useTranslation } from "@/hooks";

const StyledMobileHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: ${({ theme }) => theme.spacing[4]};
  transition:
    background 0.3s ease,
    border-color 0.3s ease;

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

const StyledMobileTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledLogoIcon = styled.img`
  width: 3rem;
  height: 2rem;
  object-fit: contain;
`;

const StyledMobileTitle = styled.h1`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

type MobileHeaderProps = {
  /** ハンバーガーメニューのクリックハンドラ */
  onMenuClick: () => void;
};

/**
 * モバイル用ヘッダーコンポーネント
 * スティッキーヘッダーとしてハンバーガーメニューを表示
 */
export const MobileHeader = ({ onMenuClick }: MobileHeaderProps) => {
  const { t } = useTranslation();

  return (
    <StyledMobileHeader>
      <StyledMobileHeaderContent>
        <StyledMobileTitleWrapper>
          <StyledLogoIcon src={`${import.meta.env.VITE_BASEPATH}/img/cc.webp`} alt="CC" />
          <StyledMobileTitle>{t("common.appName")}</StyledMobileTitle>
        </StyledMobileTitleWrapper>
        <StyledMobileHeaderActions>
          <ThemeToggle />
          <Icon name="hamburger" size={24} onClick={onMenuClick} />
        </StyledMobileHeaderActions>
      </StyledMobileHeaderContent>
    </StyledMobileHeader>
  );
};
