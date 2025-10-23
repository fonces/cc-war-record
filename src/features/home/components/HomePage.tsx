import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import styled from "styled-components";
import { EmptyState } from "@/components/layout";
import { Button, PageContainer, PageTitleContainer, PageTitle, PageDescription, Icon, Flush } from "@/components/ui";
import { usePageTitle, useTranslation } from "@/hooks";
import { sendEvent } from "@/lib/analytics";
import { useHistoryStore, useCharacterStore } from "@/stores";
import { fadeIn } from "@/styles/animation";
import { CharacterCard } from "./CharacterCard";
import { CharacterForm } from "./CharacterForm";
import { DeleteCharacterDialog } from "./DeleteCharacterDialog";
import { JobRegistrationDialog } from "./JobRegistrationDialog";
import type { Job, CrystalConflictMap } from "@/types";

const StyledCharacterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  animation: ${fadeIn} 0.5s ease-out;
`;

/**
 * ホーム画面コンポーネント
 * 現シーズンの戦績を表示、シーズン未作成時は作成ボタンを表示
 */
export const HomePage = () => {
  const { t } = useTranslation();
  usePageTitle(t("navigation.home"));
  const router = useRouter();
  const { histories, isLoading, getSortedHistories, addUsedJob } = useHistoryStore();
  const {
    createCharacter,
    updateCharacter,
    deleteCharacter,
    createMatchRecord,
    deleteMatchRecord,
    getCharacterStatsForSeason,
    matchRecords,
    error: characterError,
    clearError,
  } = useCharacterStore();

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
  const [characterForJobRegistration, setCharacterForJobRegistration] = useState<string | null>(null);

  // シーズンを作成するボタンのクリックハンドラー
  const handleCreateSeason = () => {
    router.navigate({ to: "/new" });
  };

  // キャラクター作成のハンドラー
  const handleCreateCharacter = (name: string) => {
    try {
      createCharacter({ name });
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
  const handleOpenJobRegistration = (characterUuid: string) => {
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
  const handleAddWin = (characterUuid: string, job: Job, map: CrystalConflictMap) => {
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
  const handleAddDefeat = (characterUuid: string, job: Job, map: CrystalConflictMap) => {
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
      <PageContainer>
        <PageTitle>{t("pages.home.title", { seasonName: "" })}</PageTitle>
        <PageDescription>{t("common.loading")}</PageDescription>
      </PageContainer>
    );
  }

  // シーズンが未登録の場合
  if (histories.length === 0) {
    return (
      <PageContainer>
        <PageTitleContainer>
          <PageTitle>{t("pages.home.noSeason")}</PageTitle>
        </PageTitleContainer>
        <PageDescription>{t("pages.home.createFirstSeason")}</PageDescription>
        <EmptyState onCreateSeason={handleCreateSeason} />
      </PageContainer>
    );
  }

  // シーズンが存在する場合の表示
  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>{t("pages.home.title", { seasonName: latestSeason?.seasonName })}</PageTitle>
        <Button variant="outline" size="sm" onClick={handleCreateSeason}>
          <Icon name="add" size={16} />
          {t("pages.home.createSeason")}
        </Button>
      </PageTitleContainer>
      <PageDescription>{t("pages.home.description")}</PageDescription>

      {characterError && (
        <Flush type="error" onClose={clearError}>
          {characterError}
        </Flush>
      )}

      <StyledCharacterList>
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
            onSaveEdit={handleSaveEditing}
            onCancelEdit={handleCancelEditing}
          />
        ))}
        <CharacterForm isOpen={characterStats.length === 0} onCreateCharacter={handleCreateCharacter} />
      </StyledCharacterList>

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
    </PageContainer>
  );
};
