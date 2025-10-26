import { useState } from "react";
import { EmptyState } from "@/components/layout";
import {
  PageContainer,
  PageTitle,
  PageDescription,
  PageTitleContainer,
  PageTitleActions,
  StatsGrid,
  StatCard,
  StatLabel,
  StatValue,
  StatDescription,
  Flush,
  IconicButton,
  Icon,
  Dialog,
} from "@/components/ui";
import { useTranslation } from "@/hooks";
import { usePageTitle } from "@/hooks/usePageTitle";
import { sendEvent } from "@/lib/analytics";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { formatShortDate, formatLongDate, createBackup, restoreBackup } from "@/utils";
import { HistoryTable } from "./HistoryTable";

/**
 * シーズン履歴一覧画面コンポーネント
 * シーズンの履歴一覧をテーブル形式で表示
 */
export const HistoriesPage = () => {
  const { t, i18n } = useTranslation();
  usePageTitle(t("pages.histories.title"));
  const { histories, isLoading, error, getSortedHistories, deleteHistory, clearError } = useHistoryStore();

  const { matchRecords } = useCharacterStore();

  // バックアップ関連のエラー状態
  const [backupError, setBackupError] = useState<string | null>(null);
  const [backupSuccess, setBackupSuccess] = useState<string | null>(null);
  const [showImportWarning, setShowImportWarning] = useState(false);

  // 日付順（新しい順）にソートされた履歴を取得
  const sortedHistories = getSortedHistories();

  // 現在の言語に応じたロケールを取得
  const locale = i18n.language === "ja" ? "ja-JP" : i18n.language === "ko" ? "ko-KR" : "en-US";

  /**
   * 履歴削除ハンドラー
   * 履歴と関連する全ての戦績記録を削除
   */
  const handleDelete = (historyUuid: string) => {
    // 関連する全ての戦績記録を削除
    const relatedMatchRecords = matchRecords.filter((m) => m.seasonUuid === historyUuid);

    // 各戦績記録を削除
    const { deleteMatchRecord } = useCharacterStore.getState();
    relatedMatchRecords.forEach((record) => {
      deleteMatchRecord(record.uuid);
    });

    // 履歴を削除
    deleteHistory(historyUuid);

    // 解析イベント送信
    sendEvent("histories", "delete");
  };

  /**
   * バックアップ作成ハンドラー
   */
  const handleCreateBackup = async () => {
    try {
      setBackupError(null);
      setBackupSuccess(null);
      await createBackup();
      sendEvent("histories", "create_backup");
      setBackupSuccess(t("pages.histories.backupCreated"));
    } catch {
      setBackupError(t("pages.histories.errors.backupCreateFailed"));
    }
  };

  /**
   * バックアップ取り込みハンドラー
   */
  const handleImportBackup = () => {
    // 警告ダイアログを表示
    setShowImportWarning(true);
  };

  /**
   * バックアップ取り込み確認後の処理
   */
  const handleConfirmImport = () => {
    setShowImportWarning(false);

    // ファイル選択用のinput要素を動的に作成
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".zip";

    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        setBackupError(null);
        setBackupSuccess(null);
        await restoreBackup(file);
        sendEvent("histories", "restore_backup");
        setBackupSuccess(t("pages.histories.backupRestored"));

        // 少し遅延してからリロード（成功メッセージを表示するため）
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        // エラーメッセージの判定
        if (error instanceof Error && error.message === "BACKUP_FILE_CORRUPTED") {
          setBackupError(t("pages.histories.errors.backupFileCorrupted"));
        } else {
          setBackupError(t("pages.histories.errors.backupRestoreFailed"));
        }
      }
    };

    // ファイル選択ダイアログを開く
    input.click();
  };

  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>{t("pages.histories.title")}</PageTitle>
        <PageTitleActions>
          <IconicButton onClick={handleCreateBackup} icon={<Icon name="download" size={16} />} title={t("pages.histories.createBackup")} />
          <IconicButton onClick={handleImportBackup} icon={<Icon name="upload" size={16} />} title={t("pages.histories.importBackup")} />
        </PageTitleActions>
      </PageTitleContainer>
      <PageDescription>{t("pages.histories.description")}</PageDescription>

      {/* エラー表示 */}
      {error && (
        <Flush type="error" onClose={clearError}>
          {error}
        </Flush>
      )}

      {/* バックアップエラー表示 */}
      {backupError && (
        <Flush type="error" onClose={() => setBackupError(null)}>
          {backupError}
        </Flush>
      )}

      {/* バックアップ成功表示 */}
      {backupSuccess && (
        <Flush type="success" onClose={() => setBackupSuccess(null)}>
          {backupSuccess}
        </Flush>
      )}

      {/* 統計情報カード */}
      {0 < histories.length ? (
        <>
          <StatsGrid>
            <StatCard>
              <StatLabel>{t("pages.histories.stats")}</StatLabel>
              <StatValue>{histories.length}</StatValue>
              <StatDescription>{t("pages.histories.totalSeasons", { count: histories.length })}</StatDescription>
            </StatCard>
            <StatCard>
              <StatLabel>{t("pages.histories.latestCreated")}</StatLabel>
              <StatValue>{formatShortDate(sortedHistories[0]?.createdAt, locale)}</StatValue>
              <StatDescription>{formatLongDate(sortedHistories[0]?.createdAt, locale)}</StatDescription>
            </StatCard>
          </StatsGrid>

          {/* 履歴テーブル */}
          <HistoryTable histories={sortedHistories} isLoading={isLoading} onDelete={handleDelete} />
        </>
      ) : (
        <EmptyState icon="history" />
      )}

      {/* バックアップ取り込み警告ダイアログ */}
      <Dialog
        isOpen={showImportWarning}
        onClose={() => setShowImportWarning(false)}
        title={t("pages.histories.importBackupWarningTitle")}
        onConfirm={handleConfirmImport}
        confirmText={t("common.upload")}
        cancelText={t("common.cancel")}
        confirmType="danger"
      >
        <p>{t("pages.histories.importBackupWarningMessage")}</p>
      </Dialog>
    </PageContainer>
  );
};
