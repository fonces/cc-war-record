import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import styled from "styled-components";
import { Button, Icon, Dialog } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { formatDateTable } from "@/utils/uuid";
import type { History } from "@/types";

type HistoryTableProps = {
  /** 履歴一覧 */
  histories: History[];
  /** ローディング状態 */
  isLoading?: boolean;
  /** 削除ハンドラー */
  onDelete: (historyUuid: string) => void;
};

// テーブルコンテナ
const StyledTableContainer = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 1px solid rgba(38, 161, 223, 0.2);
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradients.primary};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows["2xl"]}, ${({ theme }) => theme.shadows.glow};
  }
`;

// テーブル
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: transparent;
`;

// テーブルヘッダー
const StyledTableHeader = styled.thead`
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border-bottom: 1px solid rgba(38, 161, 223, 0.2);
`;

const StyledHeaderCell = styled.th`
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  text-align: left;
  font-weight: 700;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;

  &:last-child {
    text-align: center;
    width: 140px;
  }
`;

// テーブルボディ
const StyledTableBody = styled.tbody``;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid rgba(38, 161, 223, 0.1);
  transition: all ${({ theme }) => theme.transitions.base};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: ${({ theme }) => theme.gradients.primary};
    transition: width ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    background: rgba(38, 161, 223, 0.05);

    &::before {
      width: 4px;
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;

const StyledTableCell = styled.td`
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray[900]};

  &:last-child {
    text-align: center;
  }
`;

// シーズン名セル
const StyledSeasonNameCell = styled(StyledTableCell)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: ${({ theme }) => theme.spacing[4]};
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.gradients.primary};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.base};
  }

  ${StyledTableRow}:hover &::before {
    opacity: 1;
  }
`;

// 作成日時セル
const StyledDateCell = styled(StyledTableCell)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace;
  font-size: 0.875rem;
  white-space: nowrap;
`;

// 詳細ボタン
const StyledDetailButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.base};
  border: 1px solid rgba(38, 161, 223, 0.3);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: ${({ theme }) => theme.blur.sm};

  &:hover {
    background: ${({ theme }) => theme.colors.primary[500]};
    border-color: ${({ theme }) => theme.colors.primary[500]};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(38, 161, 223, 0.3);
  }
`;

// 削除ボタン
const StyledDeleteButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.base};
  border: 1px solid rgba(239, 68, 68, 0.3);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: ${({ theme }) => theme.blur.sm};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.error[500]};
    border-color: ${({ theme }) => theme.colors.error[500]};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

// ボタングループ
const StyledButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  justify-content: center;
  align-items: center;
`;

// モーダルコンテンツ
const StyledDialogContent = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
`;

const StyledDialogDescription = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: 1.6;
`;

const StyledDialogActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  justify-content: flex-end;
`;

// 空状態表示
const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[6]};
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(38, 161, 223, 0.2);
  box-shadow: ${({ theme }) => theme.shadows.xl};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradients.primary};
  }

  animation: fadeIn 0.5s ease-out;
`;

const StyledEmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[5]};
  box-shadow: 0 8px 24px rgba(38, 161, 223, 0.3);
  animation: pulse 2s ease-in-out infinite;

  svg {
    color: white;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

const StyledEmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const StyledEmptyDescription = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 400px;
`;

// ローディング状態
const StyledLoadingRow = styled(StyledTableRow)`
  &:hover {
    background: transparent;

    &::before {
      width: 0;
    }
  }
`;

const StyledLoadingCell = styled(StyledTableCell)`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
  padding: ${({ theme }) => theme.spacing[8]};

  @keyframes shimmer {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  animation: shimmer 1.5s ease-in-out infinite;
`;

/**
 * 履歴テーブルコンポーネント
 * テーブル形式でシーズン履歴一覧を表示
 */
export const HistoryTable = ({ histories, isLoading = false, onDelete }: HistoryTableProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [historyToDelete, setHistoryToDelete] = useState<{
    uuid: string;
    seasonName: string;
  } | null>(null);

  // 履歴詳細へ遷移
  const handleNavigateToDetail = (historyUuid: string) => {
    navigate({ to: `/histories/${historyUuid}` });
  };

  // 削除ダイアログを開く
  const handleOpenDeleteDialog = (historyUuid: string, seasonName: string) => {
    setHistoryToDelete({ uuid: historyUuid, seasonName });
    setDeleteDialogOpen(true);
  };

  // 削除をキャンセル
  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
    setHistoryToDelete(null);
  };

  // 削除を確定
  const handleConfirmDelete = () => {
    if (historyToDelete) {
      onDelete(historyToDelete.uuid);
      setDeleteDialogOpen(false);
      setHistoryToDelete(null);
    }
  };

  // ローディング中の表示
  if (isLoading) {
    return (
      <StyledTableContainer>
        <StyledTable>
          <StyledTableHeader>
            <tr>
              <StyledHeaderCell>{t("pages.historyDetail.columns.season")}</StyledHeaderCell>
              <StyledHeaderCell>{t("pages.historyDetail.columns.date")}</StyledHeaderCell>
              <StyledHeaderCell>{t("pages.histories.detail")}</StyledHeaderCell>
            </tr>
          </StyledTableHeader>
          <StyledTableBody>
            <StyledLoadingRow>
              <StyledLoadingCell colSpan={3}>{t("common.loading")}</StyledLoadingCell>
            </StyledLoadingRow>
          </StyledTableBody>
        </StyledTable>
      </StyledTableContainer>
    );
  }

  // 履歴が0件の場合
  if (histories.length === 0) {
    return (
      <StyledEmptyState>
        <StyledEmptyIcon>
          <Icon name="history" size={24} />
        </StyledEmptyIcon>
        <StyledEmptyTitle>{t("pages.histories.emptyState")}</StyledEmptyTitle>
        <StyledEmptyDescription>{t("pages.histories.createFirstSeason")}</StyledEmptyDescription>
      </StyledEmptyState>
    );
  }

  // 履歴テーブル表示
  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledTableHeader>
          <tr>
            <StyledHeaderCell>{t("pages.historyDetail.columns.season")}</StyledHeaderCell>
            <StyledHeaderCell>{t("pages.historyDetail.columns.date")}</StyledHeaderCell>
            <StyledHeaderCell>{t("match.actions")}</StyledHeaderCell>
          </tr>
        </StyledTableHeader>
        <StyledTableBody>
          {histories.map((history) => {
            const isLatestHistory = history.uuid === histories[0]?.uuid;

            return (
              <StyledTableRow key={history.uuid}>
                <StyledSeasonNameCell>{history.seasonName}</StyledSeasonNameCell>
                <StyledDateCell>{formatDateTable(history.createdAt)}</StyledDateCell>
                <StyledTableCell>
                  <StyledButtonGroup>
                    <StyledDetailButton
                      variant="outline"
                      icon={<Icon name="detail" size={16} />}
                      onClick={() => handleNavigateToDetail(isLatestHistory ? "current" : history.uuid)}
                      title={t("pages.histories.detail")}
                    />
                    <StyledDeleteButton
                      variant="outline"
                      icon={<Icon name="delete" size={16} />}
                      onClick={() => handleOpenDeleteDialog(history.uuid, history.seasonName)}
                      title={t("pages.histories.delete")}
                      disabled={isLatestHistory}
                    />
                  </StyledButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </StyledTableBody>
      </StyledTable>

      {/* 削除確認ダイアログ */}
      <Dialog isOpen={deleteDialogOpen} onClose={handleCancelDelete} title={t("pages.histories.confirmDelete")}>
        <StyledDialogContent>
          <StyledDialogDescription>{t("pages.histories.deleteDescription", { seasonName: historyToDelete?.seasonName })}</StyledDialogDescription>
          <StyledDialogActions>
            <Button variant="outline" onClick={handleCancelDelete}>
              {t("common.cancel")}
            </Button>
            <Button variant="primary" onClick={handleConfirmDelete}>
              {t("character.confirmDelete")}
            </Button>
          </StyledDialogActions>
        </StyledDialogContent>
      </Dialog>
    </StyledTableContainer>
  );
};
