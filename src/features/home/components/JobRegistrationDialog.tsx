import styled from "styled-components";
import { Dialog, JobIcon, RoleIcon } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { useCharacterStore } from "@/stores/characterStore";
import { useHistoryStore } from "@/stores/historyStore";
import { JOBS, JOB_INFO, ROLE_INFO, ROLES } from "@/types/jobs";
import type { Job } from "@/types";

type JobRegistrationDialogProps = {
  /** ダイアログの表示状態 */
  isOpen: boolean;
  /** ダイアログを閉じる処理 */
  onClose: () => void;
  /** ジョブ登録完了時の処理 */
  onRegister?: (job: Job) => void;
  /** キャラクターUUID */
  characterUuid: string;
  /** 履歴UUID */
  historyUuid: string;
  /** ローディング状態 */
  isLoading?: boolean;
};

const StyledJobSelection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const StyledSectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};

  &:first-child {
    margin-top: 0;
  }
`;

const StyledRoleSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const StyledRoleTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledJobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
`;

const StyledJobCard = styled.button<{
  isSelected: boolean;
  isDisabled?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 2px solid
    ${({ isSelected, isDisabled, theme }) =>
      isDisabled ? (theme.isDark ? "rgba(71, 85, 105, 0.5)" : theme.colors.gray[300]) : isSelected ? theme.colors.primary[500] : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ isSelected, isDisabled, theme }) =>
    isDisabled
      ? theme.isDark
        ? "rgba(51, 65, 85, 0.3)"
        : theme.colors.gray[50]
      : isSelected
        ? theme.isDark
          ? "rgba(38, 161, 223, 0.2)"
          : theme.colors.primary[50]
        : theme.colors.surface};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  opacity: ${({ isDisabled, theme }) => (isDisabled ? (theme.isDark ? "1" : "0.6") : "1")};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ isDisabled, theme }) => (isDisabled ? (theme.isDark ? "rgba(71, 85, 105, 0.5)" : theme.colors.gray[300]) : theme.colors.primary[300])};
    background-color: ${({ isDisabled, theme }) =>
      isDisabled ? (theme.isDark ? "rgba(51, 65, 85, 0.3)" : theme.colors.gray[50]) : theme.isDark ? "rgba(38, 161, 223, 0.15)" : theme.colors.primary[50]};
  }
`;

const StyledJobName = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

/**
 * ジョブ登録ダイアログコンポーネント
 */
export const JobRegistrationDialog = ({ isOpen, onClose, onRegister, characterUuid, historyUuid, isLoading = false }: JobRegistrationDialogProps) => {
  const { t } = useTranslation();
  const addCharacterStats = useHistoryStore((state) => state.addCharacterStats);
  const getHistoryByUuid = useHistoryStore((state) => state.getHistoryByUuid);
  const characters = useCharacterStore((state) => state.characters);

  // 既に登録されているジョブを取得
  const history = getHistoryByUuid(historyUuid);
  const registeredJobs = history?.characterStats.find((cs) => cs.character.uuid === characterUuid)?.usedJobs || [];

  // ジョブを選択した時の処理
  const handleJobSelect = (job: Job) => {
    // 既に登録済みのジョブはスキップ
    if (registeredJobs.includes(job)) {
      return;
    }

    // キャラクター情報を取得
    const character = characters.find((c) => c.uuid === characterUuid);
    if (!character) {
      console.error("キャラクターが見つかりません");
      return;
    }

    // CharacterStatsを追加または取得
    const characterStats = addCharacterStats(historyUuid, character);

    if (characterStats) {
      // 成功時のコールバックがあれば実行
      onRegister?.(job);

      // ダイアログを閉じる
      onClose();
    }
  };

  // ロール別にジョブをグループ化
  const jobsByRole = Object.values(ROLES).map((role) => ({
    role,
    roleInfo: ROLE_INFO[role],
    jobs: Object.values(JOBS).filter((job) => JOB_INFO[job].role === role),
  }));

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={t("job.selectJob")} isLoading={isLoading}>
      <StyledJobSelection>
        <StyledSectionTitle>{t("job.selectJobDescription")}</StyledSectionTitle>
        {jobsByRole.map(({ role, jobs }) => (
          <StyledRoleSection key={role}>
            <StyledRoleTitle>
              <RoleIcon role={role} size={24} />
              {t(`job.${role}`)}
            </StyledRoleTitle>
            <StyledJobGrid>
              {jobs.map((job) => {
                const isDisabled = registeredJobs.includes(job);
                return (
                  <StyledJobCard key={job} isSelected={false} isDisabled={isDisabled} onClick={() => handleJobSelect(job)} type="button" disabled={isDisabled}>
                    <JobIcon job={job} size={32} />
                    <StyledJobName>{t(`job.${job}`)}</StyledJobName>
                  </StyledJobCard>
                );
              })}
            </StyledJobGrid>
          </StyledRoleSection>
        ))}
      </StyledJobSelection>
    </Dialog>
  );
};
