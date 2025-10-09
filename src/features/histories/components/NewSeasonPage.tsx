import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import styled from "styled-components";
import { useHistoryStore } from "@/stores";
import { Button, Input, Dialog, PageTitle, PageDescription } from "@/components/ui";

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
  background-color: ${({ theme }) => theme.colors.error}20;
  border: 1px solid ${({ theme }) => theme.colors.error}40;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: 0.875rem;
`;

const StyledSuccessMessage = styled.div`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.success}20;
  border: 1px solid ${({ theme }) => theme.colors.success}40;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: 0.875rem;
`;

/**
 * 新規シーズン作成画面コンポーネント
 * シーズン名を入力してnewHistoryを作成
 */
export const NewSeasonPage = () => {
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
      setValidationError("シーズン名を入力してください");
      return;
    }

    if (trimmedSeasonName.length > 50) {
      setValidationError("シーズン名は50文字以内で入力してください");
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

      setSuccessMessage(`シーズン「${newHistory.seasonName}」を作成しました`);

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
        title="シーズン作成の確認"
        confirmText="作成する"
        cancelText="キャンセル"
        onConfirm={handleConfirmCreate}
        confirmType="danger"
        isLoading={isSubmitting}
      >
        新しいシーズンを作成すると「{latestSeasonName}
        」の戦績はアーカイブされ、戦績を入力することができなくなります。よろしいでしょうか?
      </Dialog>

      {/* メインコンテンツ */}
      <StyledContainer>
        <StyledHeader>
          <PageTitle>新規シーズン作成</PageTitle>
          <PageDescription>新しいシーズンを作成します。シーズン名を入力してください。</PageDescription>
        </StyledHeader>

        <StyledForm onSubmit={handleSubmit}>
          {/* エラーメッセージ */}
          {(error || validationError) && <StyledErrorMessage>{validationError || error}</StyledErrorMessage>}

          {/* 成功メッセージ */}
          {successMessage && <StyledSuccessMessage>{successMessage}</StyledSuccessMessage>}

          {/* シーズン名入力 */}
          <StyledFormGroup>
            <Input
              label="シーズン名"
              type="text"
              value={seasonName}
              onChange={handleSeasonNameChange}
              placeholder="例: シーズン1"
              disabled={isSubmitting || !!successMessage}
              fullWidth
              required
            />
          </StyledFormGroup>

          {/* アクションボタン */}
          <StyledActions>
            <Button type="button" variant="outline" onClick={handleCancel} disabled={isSubmitting || !!successMessage}>
              キャンセル
            </Button>
            <Button type="submit" disabled={isSubmitting || !!successMessage || !seasonName.trim()}>
              {isSubmitting ? "作成中..." : "作成する"}
            </Button>
          </StyledActions>
        </StyledForm>
      </StyledContainer>
    </>
  );
};
