import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import styled from "styled-components";
import { useHistoryStore } from "@/stores";
import { Button, Input, Dialog, PageTitle, PageDescription } from "@/components/ui";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useTranslation } from "@/hooks";

const StyledContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[6]};
`;

const StyledHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  text-align: center;
`;

const StyledForm = styled.form`
  background-color: white;
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`;

const StyledFormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const StyledActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;

const StyledErrorMessage = styled.div`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.error[500]}20;
  border: 1px solid ${({ theme }) => theme.colors.error[500]}40;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.error[500]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: 0.875rem;
`;

const StyledSuccessMessage = styled.div`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.success[500]}20;
  border: 1px solid ${({ theme }) => theme.colors.success[500]}40;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.success[500]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: 0.875rem;
`;

/**
 * 新規シーズン作成画面コンポーネント
 * シーズン名を入力してnewHistoryを作成
 */
export const NewSeasonPage = () => {
  const { t } = useTranslation();
  usePageTitle(t("pages.newSeason.title"));
  const router = useRouter();
  const { createHistory, error, clearError, getSortedHistories } = useHistoryStore();

  const [seasonName, setSeasonName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showWarningDialog, setShowWarningDialog] = useState(false);

  // フォーム送信処理（バリデーションのみ）
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーション
    const trimmedSeasonName = seasonName.trim();
    if (!trimmedSeasonName) {
      setValidationError(t("pages.newSeason.validationRequired"));
      return;
    }

    if (trimmedSeasonName.length > 50) {
      setValidationError(t("pages.newSeason.validationMaxLength"));
      return;
    }

    setValidationError("");

    // 既存のシーズンがある場合は警告ダイアログを表示
    const sortedHistories = getSortedHistories();
    if (sortedHistories.length > 0) {
      setShowWarningDialog(true);
      return;
    }

    // シーズンがない場合は直接作成
    await createNewSeason();
  };

  // 実際にシーズンを作成する処理
  const createNewSeason = async () => {
    setIsSubmitting(true);
    clearError();

    try {
      const trimmedSeasonName = seasonName.trim();
      // 新規履歴作成
      const newHistory = createHistory({ seasonName: trimmedSeasonName });

      setSuccessMessage(t("pages.newSeason.successMessage", { seasonName: newHistory.seasonName }));

      // 少し待ってからホーム画面に遷移
      setTimeout(() => {
        router.navigate({ to: "/" });
      }, 1500);
    } catch (error) {
      // エラーはhistoryStoreのerror状態に設定される
      console.error("シーズン作成エラー:", error);
    } finally {
      setIsSubmitting(false);
      setShowWarningDialog(false);
    }
  };

  // 警告ダイアログで確認した場合
  const handleConfirmCreate = () => {
    createNewSeason();
  };

  // 警告ダイアログをキャンセルした場合
  const handleCancelCreate = () => {
    setShowWarningDialog(false);
  };

  // キャンセル処理
  const handleCancel = () => {
    history.back();
  };

  // 入力値変更処理
  const handleSeasonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeasonName(e.target.value);
    // 入力中はバリデーションエラーをクリア
    if (validationError) {
      setValidationError("");
    }
  };

  // 最新のシーズン名を取得
  const latestSeasonName = getSortedHistories()[0]?.seasonName || "";

  return (
    <>
      {/* 警告ダイアログ */}
      <Dialog
        isOpen={showWarningDialog}
        onClose={handleCancelCreate}
        title={t("pages.newSeason.confirmTitle")}
        confirmText={t("pages.newSeason.create")}
        cancelText={t("pages.newSeason.cancel")}
        onConfirm={handleConfirmCreate}
        confirmType="danger"
        isLoading={isSubmitting}
      >
        {t("pages.newSeason.confirmDescription", { seasonName: latestSeasonName })}
      </Dialog>

      {/* メインコンテンツ */}
      <StyledContainer>
        <StyledHeader>
          <PageTitle>{t("pages.newSeason.title")}</PageTitle>
          <PageDescription>{t("pages.newSeason.description")}</PageDescription>
        </StyledHeader>

        <StyledForm onSubmit={handleSubmit}>
          {/* エラーメッセージ */}
          {(error || validationError) && <StyledErrorMessage>{validationError || error}</StyledErrorMessage>}

          {/* 成功メッセージ */}
          {successMessage && <StyledSuccessMessage>{successMessage}</StyledSuccessMessage>}

          {/* シーズン名入力 */}
          <StyledFormGroup>
            <Input
              label={t("pages.newSeason.seasonName")}
              type="text"
              value={seasonName}
              onChange={handleSeasonNameChange}
              placeholder={t("pages.newSeason.seasonNamePlaceholder")}
              disabled={isSubmitting || !!successMessage}
              fullWidth
              required
            />
          </StyledFormGroup>

          {/* アクションボタン */}
          <StyledActions>
            <Button type="button" variant="outline" onClick={handleCancel} disabled={isSubmitting || !!successMessage}>
              {t("pages.newSeason.cancel")}
            </Button>
            <Button type="submit" disabled={isSubmitting || !!successMessage || !seasonName.trim()}>
              {isSubmitting ? t("pages.newSeason.creating") : t("pages.newSeason.create")}
            </Button>
          </StyledActions>
        </StyledForm>
      </StyledContainer>
    </>
  );
};
