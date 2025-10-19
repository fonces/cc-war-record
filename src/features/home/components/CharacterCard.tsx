import styled from "styled-components";
import { Button, Icon, Input } from "@/components/ui";
import { useTranslation } from "@/hooks";
import type { CharacterStats, Job, CrystalConflictMap } from "@/types";
import { getTotalMatches, getWins, getDefeats, getWinRate } from "@/types/history";
import { MatchRecordTable } from "./MatchRecordTable";
import { getWinRateColor } from "@/utils/colors";

const StyledCharacterCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const StyledCharacterHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

const StyledCharacterName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const StyledCharacterStatsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const StyledWinRate = styled.span<{ winRate: number }>`
  font-weight: 600;
  color: ${({ winRate, theme }) => getWinRateColor(winRate, theme)};
`;

const StyledCharacterContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "10000px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const StyledCharacterBody = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
`;

const StyledEmptyStats = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const StyledAddJobButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const StyledCharacterActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
`;

const StyledEditForm = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  flex: 1;
`;

const StyledEditInput = styled(Input)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`;

const StyledActionButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing[1]};
  min-width: auto;

  &.delete:hover {
    background-color: ${({ theme }) => theme.colors.error[50]};
    border-color: ${({ theme }) => theme.colors.error[600]};
    color: ${({ theme }) => theme.colors.error[600]};
  }

  &.save:hover {
    background-color: ${({ theme }) => theme.colors.success[50]};
    border-color: ${({ theme }) => theme.colors.success[600]};
    color: ${({ theme }) => theme.colors.success[600]};
  }
`;

type CharacterCardProps = {
  /** キャラクター戦績統計 */
  stats: CharacterStats;
  /** 開閉状態 */
  isOpen: boolean;
  /** アコーディオントグル */
  onToggle: () => void;
  /** 編集開始 */
  onStartEdit: (uuid: string, name: string) => void;
  /** 削除 */
  onDelete: (uuid: string, name: string) => void;
  /** ジョブ登録ダイアログを開く */
  onOpenJobRegistration: (uuid: string) => void;
  /** 勝利記録を追加（ジョブとマップ指定） */
  onAddWin?: (characterUuid: string, job: Job, map: CrystalConflictMap) => void;
  /** 敗北記録を追加（ジョブとマップ指定） */
  onAddDefeat?: (characterUuid: string, job: Job, map: CrystalConflictMap) => void;
  /** 直近の記録を取り消し（ジョブとマップ指定） */
  onRevertLast?: (characterUuid: string, job: Job, map: CrystalConflictMap) => void;
  /** 編集中かどうか */
  isEditing: boolean;
  /** 編集中の名前 */
  editingName: string;
  /** 編集中の名前変更 */
  onEditingNameChange: (name: string) => void;
  /** 編集保存 */
  onSaveEdit: () => void;
  /** 編集キャンセル */
  onCancelEdit: () => void;
};

/**
 * キャラクター表示カードコンポーネント
 */
export const CharacterCard = ({
  stats,
  isOpen,
  onToggle,
  onStartEdit,
  onDelete,
  onOpenJobRegistration,
  onAddWin,
  onAddDefeat,
  onRevertLast,
  isEditing,
  editingName,
  onEditingNameChange,
  onSaveEdit,
  onCancelEdit,
}: CharacterCardProps) => {
  const { t } = useTranslation();

  // 戦績統計を計算
  const totalMatches = getTotalMatches(stats.recentMatches);
  const wins = getWins(stats.recentMatches);
  const defeats = getDefeats(stats.recentMatches);
  const winRate = getWinRate(stats.recentMatches);

  return (
    <StyledCharacterCard>
      <StyledCharacterHeader onClick={isEditing ? undefined : onToggle} style={{ cursor: isEditing ? "default" : "pointer" }}>
        {isEditing ? (
          <StyledEditForm>
            <StyledEditInput
              value={editingName}
              inputSize="sm"
              onChange={(e) => onEditingNameChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onSaveEdit();
                if (e.key === "Escape") onCancelEdit();
              }}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
            <StyledCharacterActions>
              <StyledActionButton
                variant="outline"
                icon={<Icon name="accept" size={16} />}
                onClick={(e) => {
                  e.stopPropagation();
                  onSaveEdit();
                }}
                title={t("common.save")}
              />
              <StyledActionButton
                variant="outline"
                icon={<Icon name="close" size={16} />}
                onClick={(e) => {
                  e.stopPropagation();
                  onCancelEdit();
                }}
                title={t("common.cancel")}
              />
            </StyledCharacterActions>
          </StyledEditForm>
        ) : (
          <>
            <StyledCharacterName>{stats.character.name}</StyledCharacterName>
            <StyledCharacterStatsContainer onClick={(e) => e.stopPropagation()}>
              <span>{t("character.stats.matches", { count: totalMatches })}</span>
              <span>
                {t("character.stats.wins", { count: wins })} / {t("character.stats.defeats", { count: defeats })}
              </span>
              {0 < totalMatches ? (
                <StyledWinRate winRate={winRate}>{t("character.stats.winRate", { rate: winRate })}</StyledWinRate>
              ) : (
                <span>{t("character.stats.noWinRate")}</span>
              )}
              <StyledCharacterActions>
                <StyledActionButton
                  variant="outline"
                  icon={<Icon name="add" size={16} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenJobRegistration(stats.character.uuid);
                  }}
                  title={t("character.actions.addJob")}
                />
                <StyledActionButton
                  variant="outline"
                  icon={<Icon name="edit" size={16} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartEdit(stats.character.uuid, stats.character.name);
                  }}
                  title={t("character.actions.editName")}
                />
                <StyledActionButton
                  variant="outline"
                  icon={<Icon name="delete" size={16} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(stats.character.uuid, stats.character.name);
                  }}
                  title={t("character.actions.deleteName")}
                />
              </StyledCharacterActions>
            </StyledCharacterStatsContainer>
          </>
        )}
      </StyledCharacterHeader>
      <StyledCharacterContent isOpen={isOpen}>
        <StyledCharacterBody>
          {stats.usedJobs.length === 0 ? (
            <StyledEmptyStats>
              <StyledAddJobButton onClick={() => onOpenJobRegistration(stats.character.uuid)}>{t("match.pleaseRegisterJob")}</StyledAddJobButton>
            </StyledEmptyStats>
          ) : (
            <MatchRecordTable
              usedJobs={stats.usedJobs}
              matchRecords={stats.recentMatches}
              onAddWin={onAddWin ? (job, map) => onAddWin(stats.character.uuid, job, map) : undefined}
              onAddDefeat={onAddDefeat ? (job, map) => onAddDefeat(stats.character.uuid, job, map) : undefined}
              onRevertLast={onRevertLast ? (job, map) => onRevertLast(stats.character.uuid, job, map) : undefined}
            />
          )}
        </StyledCharacterBody>
      </StyledCharacterContent>
    </StyledCharacterCard>
  );
};
