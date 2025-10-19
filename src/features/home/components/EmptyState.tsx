import styled from "styled-components";
import { Button, Icon } from "@/components/ui";
import { useTranslation } from "@/hooks";

const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  text-align: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const StyledEmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const StyledEmptyTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const StyledEmptyDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  max-width: 400px;
  line-height: 1.6;
`;

const StyledCreateButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: 1.1rem;
`;

type EmptyStateProps = {
  /** 作成ボタンクリック時のハンドラー */
  onCreateSeason: () => void;
};

/**
 * シーズン未作成時の空状態表示コンポーネント
 */
export const EmptyState = ({ onCreateSeason }: EmptyStateProps) => {
  const { t } = useTranslation();

  return (
    <StyledEmptyState>
      <StyledEmptyIcon>
        <Icon name="home" size={32} />
      </StyledEmptyIcon>
      <StyledEmptyTitle>{t("pages.home.noSeason")}</StyledEmptyTitle>
      <StyledEmptyDescription>{t("pages.home.createFirstSeason")}</StyledEmptyDescription>
      <StyledCreateButton onClick={onCreateSeason}>
        <Icon name="add" size={20} color="white" />
        {t("pages.home.createSeason")}
      </StyledCreateButton>
    </StyledEmptyState>
  );
};
