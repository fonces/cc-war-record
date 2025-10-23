import styled from "styled-components";
import { Button, Icon, IconicButton, Input } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { getTotalMatches, getWins, getDefeats, getWinRate } from "@/types/history";
import { getWinRateColor } from "@/utils/colors";
import { MatchRecordTable } from "./MatchRecordTable";
import type { CharacterStats, Job, CrystalConflictMap } from "@/types";

const StyledCharacterCard = styled.div`
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows["2xl"]}, ${({ theme }) => theme.shadows.glow};
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

const StyledCharacterHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.base};
  cursor: pointer;
  height: 85px;

  &:hover {
    background: ${({ theme }) =>
      theme.isDark
        ? "linear-gradient(135deg, rgba(38, 161, 223, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)"
        : "linear-gradient(135deg, rgba(38, 161, 223, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)"};
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
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const StyledWinRate = styled.span<{ winRate: number }>`
  font-weight: 600;
  color: ${({ winRate, theme }) => getWinRateColor(winRate, theme)};
`;

const StyledCharacterContent = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ isOpen }) => (isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
`;

const StyledCharacterBody = styled.div`
  min-height: 0;
  overflow: hidden;

  > * {
    padding: ${({ theme }) => theme.spacing[6]};
  }
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
              <IconicButton
                icon={<Icon name="accept" size={16} />}
                onClick={(e) => {
                  e.stopPropagation();
                  onSaveEdit();
                }}
                title={t("common.save")}
              />
              <IconicButton
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
                <IconicButton
                  icon={<Icon name="add" size={16} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenJobRegistration(stats.character.uuid);
                  }}
                  title={t("character.actions.addJob")}
                />
                <IconicButton
                  icon={<Icon name="edit" size={16} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartEdit(stats.character.uuid, stats.character.name);
                  }}
                  title={t("character.actions.editName")}
                />
                <IconicButton
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
