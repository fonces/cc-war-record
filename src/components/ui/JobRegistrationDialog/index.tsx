import styled from "styled-components";
import { Dialog, JobIcon } from "@/components/ui";
import { JOBS, JOB_INFO, ROLE_INFO, ROLES } from "@/types/jobs";
import type { Job } from "@/types";
import { useHistoryStore } from "@/stores/historyStore";
import { useCharacterStore } from "@/stores/characterStore";

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

const StyledRoleIcon = styled.div<{ roleColor: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ roleColor }) => roleColor};
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
  border: 2px solid ${({ isSelected, isDisabled, theme }) => (isDisabled ? theme.colors.gray[200] : isSelected ? theme.colors.primary[500] : theme.colors.gray[200])};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ isSelected, isDisabled, theme }) => (isDisabled ? theme.colors.gray[100] : isSelected ? theme.colors.primary[50] : "white")};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ isDisabled, theme }) => (isDisabled ? theme.colors.gray[200] : theme.colors.primary[300])};
    background-color: ${({ isDisabled, theme }) => (isDisabled ? theme.colors.gray[100] : theme.colors.primary[50])};
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
    <Dialog isOpen={isOpen} onClose={onClose} title="使用ジョブを選択" isLoading={isLoading}>
      <StyledJobSelection>
        <StyledSectionTitle>ジョブを選択してください</StyledSectionTitle>
        {jobsByRole.map(({ role, roleInfo, jobs }) => (
          <StyledRoleSection key={role}>
            <StyledRoleTitle>
              <StyledRoleIcon roleColor={roleInfo.color} />
              {roleInfo.name}
            </StyledRoleTitle>
            <StyledJobGrid>
              {jobs.map((job) => {
                const isDisabled = registeredJobs.includes(job);
                return (
                  <StyledJobCard key={job} isSelected={false} isDisabled={isDisabled} onClick={() => handleJobSelect(job)} type="button" disabled={isDisabled}>
                    <JobIcon job={job} size={32} />
                    <StyledJobName>{JOB_INFO[job].name}</StyledJobName>
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
