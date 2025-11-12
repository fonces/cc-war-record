import { useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { EmptyState } from "@/components/layout";
import { Button, Page, PageTitleContainer, PageTitle, PageDescription, Icon, PageContainer, IconicButton } from "@/components/ui";
import { useObsLayoutStore } from "@/features/obs/store/obsLayoutStore";
import { usePageTitle, useTranslation, useIsMobile } from "@/hooks";
import { sendEvent } from "@/lib/analytics";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { CharacterCard } from "./CharacterCard";
import { CharacterForm } from "./CharacterForm";
import { DeleteCharacterDialog } from "./DeleteCharacterDialog";
import { JobRegistrationDialog } from "./JobRegistrationDialog";
import type { Job, CrystalConflictMap, UUIDv4 } from "@/types";

const ObsRecordingPanel = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  margin-bottom: 16px;
`;

const ObsRecordingStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const ObsRecordingDot = styled.div<{ $isRecording: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $isRecording, theme }) => ($isRecording ? theme.colors.error[500] : theme.colors.textSecondary)};
  animation: ${({ $isRecording }) => ($isRecording ? "pulse 2s ease-in-out infinite" : "none")};

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const ObsRecordingText = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
`;

/**
 * ホーム画面コンポーネント
 * 現シーズンの戦績を表示、シーズン未作成時は作成ボタンを表示
 */
export const HomePage = () => {
  const { t } = useTranslation();
  usePageTitle(t("navigation.home"));
  const router = useRouter();
  const isMobile = useIsMobile();
  const { histories, isLoading, getSortedHistories, addUsedJob } = useHistoryStore();
  const {
    createCharacter,
    updateCharacter,
    updateCharacterOrder,
    deleteCharacter,
    createMatchRecord,
    deleteMatchRecord,
    getCharacterStatsForSeason,
    matchRecords,
    error: characterError,
    clearError,
  } = useCharacterStore();

  const { obsRecordingStartTime, startObsRecording, stopObsRecording } = useObsLayoutStore();

  // OBSブラウザソースが開いているかを検知
  const [isObsBrowserSourceOpen, setIsObsBrowserSourceOpen] = useState(false);

  useEffect(() => {
    // localStorageの変更を監視
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "obs-browser-source-status") {
        setIsObsBrowserSourceOpen(e.newValue === "open");
      }
    };

    // 初期状態をチェック
    const checkObsStatus = () => {
      const status = localStorage.getItem("obs-browser-source-status");
      setIsObsBrowserSourceOpen(status === "open");
    };

    checkObsStatus();
    window.addEventListener("storage", handleStorageChange);

    // 定期的にチェック（同一ウィンドウ内での変更検知）
    const interval = setInterval(checkObsStatus, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  // 最新のシーズンを取得
  const latestSeason = getSortedHistories()[0];

  // 最新シーズンのキャラクター戦績を取得
  const characterStats = latestSeason ? getCharacterStatsForSeason(latestSeason.uuid) : [];

  // デフォルトで1件目のキャラクターを開いた状態にする
  const [openCharacterUuids, setOpenCharacterUuids] = useState<Set<string>>(() => {
    if (characterStats.length > 0) {
      return new Set([characterStats[0].character.uuid]);
    }
    return new Set();
  });

  const [editingCharacterUuid, setEditingCharacterUuid] = useState<string | null>(null);
  const [editingCharacterName, setEditingCharacterName] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState<{
    uuid: string;
    name: string;
  } | null>(null);
  const [jobRegistrationDialogOpen, setJobRegistrationDialogOpen] = useState(false);
  const [characterForJobRegistration, setCharacterForJobRegistration] = useState<UUIDv4 | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // シーズンを作成するボタンのクリックハンドラー
  const handleCreateSeason = () => {
    router.navigate({ to: "/new" });
  };

  // キャラクター作成のハンドラー
  const handleCreateCharacter = (name: string) => {
    try {
      createCharacter({ name });
      setSuccessMessage(t("character.createSuccess", { name }));
      // 3秒後に成功メッセージを自動的にクリア
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch {
      // エラーは characterError で表示される
    }
  };

  // アコーディオンの開閉ハンドラー
  const toggleCharacterAccordion = (characterUuid: string) => {
    const newOpenUuids = new Set(openCharacterUuids);
    if (newOpenUuids.has(characterUuid)) {
      newOpenUuids.delete(characterUuid);
    } else {
      newOpenUuids.add(characterUuid);
    }
    setOpenCharacterUuids(newOpenUuids);
  };

  // キャラクターの並び替えハンドラー
  const handleSortChange = (direction: "up" | "down") => {
    if (!editingCharacterUuid) return;

    const index = characterStats.findIndex((stats) => stats.character.uuid === editingCharacterUuid);
    if (index === -1) return;

    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= characterStats.length) return;

    // 新しい順序でキャラクターUUIDの配列を作成
    const reorderedStats = [...characterStats];
    const [movedStats] = reorderedStats.splice(index, 1);
    reorderedStats.splice(newIndex, 0, movedStats);

    // キャラクターの順序を更新
    const newCharacterOrder = reorderedStats.map((stats) => stats.character.uuid);
    updateCharacterOrder(newCharacterOrder);
  };

  // キャラクター編集開始のハンドラー
  const handleStartEditing = (characterUuid: string, currentName: string) => {
    setEditingCharacterUuid(characterUuid);
    setEditingCharacterName(currentName);
  };

  // キャラクター編集キャンセルのハンドラー
  const handleCancelEditing = () => {
    setEditingCharacterUuid(null);
    setEditingCharacterName("");
  };

  // キャラクター編集保存のハンドラー
  const handleSaveEditing = () => {
    if (!editingCharacterUuid || !editingCharacterName.trim()) return;

    try {
      const success = updateCharacter(editingCharacterUuid, editingCharacterName.trim());
      if (success) {
        setEditingCharacterUuid(null);
        setEditingCharacterName("");
      }
    } catch {
      // エラーは characterError で表示される
    }
  };

  // キャラクター削除ダイアログを開く
  const handleDeleteCharacter = (characterUuid: string, characterName: string) => {
    setCharacterToDelete({ uuid: characterUuid, name: characterName });
    setDeleteDialogOpen(true);
  };

  // キャラクター削除を確定
  const handleConfirmDelete = () => {
    if (!characterToDelete) return;

    try {
      deleteCharacter(characterToDelete.uuid);
      setDeleteDialogOpen(false);
      setCharacterToDelete(null);
    } catch {
      // エラーは characterError で表示される
    }
  };

  // キャラクター削除をキャンセル
  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
    setCharacterToDelete(null);
  };

  // ジョブ登録ダイアログを開く
  const handleOpenJobRegistration = (characterUuid: UUIDv4) => {
    setCharacterForJobRegistration(characterUuid);
    setJobRegistrationDialogOpen(true);
  };

  // ジョブ登録ダイアログを閉じる
  const handleCloseJobRegistration = () => {
    setJobRegistrationDialogOpen(false);
    setCharacterForJobRegistration(null);
  };

  // ジョブ登録を実行
  const handleRegisterJob = (job: Job) => {
    if (!latestSeason || !characterForJobRegistration) return;

    try {
      addUsedJob({
        characterUuid: characterForJobRegistration,
        seasonUuid: latestSeason.uuid,
        job,
      });
      setJobRegistrationDialogOpen(false);
      setCharacterForJobRegistration(null);
    } catch {
      // エラーは characterError で表示される
    }
  };

  // 勝利記録を追加
  const handleAddWin = (characterUuid: UUIDv4, job: Job, map: CrystalConflictMap) => {
    if (!latestSeason) return;

    try {
      createMatchRecord({
        characterUuid,
        seasonUuid: latestSeason.uuid,
        job,
        map,
        isWin: true,
      });

      // 解析イベント送信
      sendEvent("record", "win");
    } catch {
      // エラーは characterError で表示される
    }
  };

  // 敗北記録を追加
  const handleAddDefeat = (characterUuid: UUIDv4, job: Job, map: CrystalConflictMap) => {
    if (!latestSeason) return;

    try {
      createMatchRecord({
        characterUuid,
        seasonUuid: latestSeason.uuid,
        job,
        map,
        isWin: false,
      });

      // 解析イベント送信
      sendEvent("record", "defeat");
    } catch {
      // エラーは characterError で表示される
    }
  };

  // 直近の記録を取り消し
  const handleRevertLast = (characterUuid: string, job: Job, map: CrystalConflictMap) => {
    if (!latestSeason) return;

    try {
      // 指定されたキャラクター、ジョブ、マップの記録を抽出
      const targetRecords = matchRecords.filter(
        (record) => record.characterUuid === characterUuid && record.seasonUuid === latestSeason.uuid && record.job === job && record.map === map,
      );

      // 記録がない場合は何もしない
      if (targetRecords.length === 0) return;

      // 最新の記録を見つける（createdAtが最も新しいもの）
      const latestRecord = targetRecords.reduce((latest, current) => {
        return new Date(current.createdAt) > new Date(latest.createdAt) ? current : latest;
      });

      // 最新の記録を削除
      deleteMatchRecord(latestRecord.uuid);

      // 解析イベント送信
      sendEvent("record", "revert");
    } catch {
      // エラーは characterError で表示される
    }
  };

  // ローディング中の表示
  if (isLoading) {
    return (
      <Page>
        <PageTitle>{t("pages.home.title", { seasonName: "" })}</PageTitle>
        <PageDescription>{t("common.loading")}</PageDescription>
      </Page>
    );
  }

  // シーズンが未登録の場合
  if (histories.length === 0) {
    return (
      <Page>
        <PageTitleContainer>
          <PageTitle>{t("pages.home.noSeason")}</PageTitle>
        </PageTitleContainer>
        <PageDescription>{t("pages.home.createFirstSeason")}</PageDescription>
        <EmptyState />
      </Page>
    );
  }

  // シーズンが存在する場合の表示
  return (
    <Page>
      <PageTitleContainer>
        <PageTitle action={isMobile ? <IconicButton icon={<Icon name="add" size={16} />} onClick={handleCreateSeason} aria-label={t("pages.home.createSeason")} /> : undefined}>
          {t("pages.home.title", { seasonName: latestSeason?.seasonName })}
        </PageTitle>
        {!isMobile && (
          <Button variant="outline" size="sm" onClick={handleCreateSeason}>
            <Icon name="add" size={16} />
            {t("pages.home.createSeason")}
          </Button>
        )}
      </PageTitleContainer>
      <PageDescription>{t("pages.home.description")}</PageDescription>

      {isObsBrowserSourceOpen && (
        <ObsRecordingPanel>
          <ObsRecordingStatus>
            <ObsRecordingDot $isRecording={!!obsRecordingStartTime} />
            <ObsRecordingText>{obsRecordingStartTime ? t("obs.recording.active") : t("obs.recording.description")}</ObsRecordingText>
          </ObsRecordingStatus>
          {obsRecordingStartTime ? (
            <Button variant="secondary" size="sm" onClick={stopObsRecording}>
              <Icon name="xCircle" size={16} />
              {t("obs.recording.stop")}
            </Button>
          ) : (
            <Button variant="primary" size="sm" onClick={startObsRecording}>
              <Icon name="video" size={16} />
              {t("obs.recording.start")}
            </Button>
          )}
        </ObsRecordingPanel>
      )}

      <PageContainer>
        {characterStats.map((stats) => (
          <CharacterCard
            key={stats.character.uuid}
            stats={stats}
            isOpen={openCharacterUuids.has(stats.character.uuid)}
            onToggle={() => toggleCharacterAccordion(stats.character.uuid)}
            onStartEdit={handleStartEditing}
            onDelete={handleDeleteCharacter}
            onOpenJobRegistration={handleOpenJobRegistration}
            onAddWin={handleAddWin}
            onAddDefeat={handleAddDefeat}
            onRevertLast={handleRevertLast}
            isEditing={editingCharacterUuid === stats.character.uuid}
            editingName={editingCharacterName}
            onEditingNameChange={setEditingCharacterName}
            onSortChange={handleSortChange}
            onSaveEdit={handleSaveEditing}
            onCancelEdit={handleCancelEditing}
          />
        ))}
        <CharacterForm
          isOpen={characterStats.length === 0}
          onCreateCharacter={handleCreateCharacter}
          error={characterError}
          onClearError={clearError}
          success={successMessage}
          onClearSuccess={() => setSuccessMessage(null)}
        />
      </PageContainer>

      <DeleteCharacterDialog isOpen={deleteDialogOpen} character={characterToDelete} onClose={handleCancelDelete} onConfirm={handleConfirmDelete} />

      {latestSeason && characterForJobRegistration && (
        <JobRegistrationDialog
          isOpen={jobRegistrationDialogOpen}
          onClose={handleCloseJobRegistration}
          onRegister={handleRegisterJob}
          characterUuid={characterForJobRegistration}
          historyUuid={latestSeason.uuid}
        />
      )}
    </Page>
  );
};
