import { useState } from 'react'
import { useRouter } from '@tanstack/react-router'
import styled from 'styled-components'
import { useHistoryStore, useCharacterStore } from '@/stores'
import { JobRegistrationDialog, Button } from '@/components/ui'
import { EmptyState } from './EmptyState'
import { CharacterForm } from './CharacterForm'
import { CharacterCard } from './CharacterCard'
import { DeleteCharacterDialog } from './DeleteCharacterDialog'
import type { Job, CrystalConflictMap } from '@/types'

const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
`

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  gap: ${({ theme }) => theme.spacing[4]};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`

const StyledDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const StyledCharacterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};
`

const StyledErrorMessage = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: #dc2626;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledErrorCloseButton = styled.button`
  margin-left: ${({ theme }) => theme.spacing[2]};
  color: #dc2626;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
  }
`

/**
 * ホーム画面コンポーネント
 * 現シーズンの戦績を表示、シーズン未作成時は作成ボタンを表示
 */
export const HomePage = () => {
  const router = useRouter()
  const { histories, isLoading, getSortedHistories, addUsedJob } = useHistoryStore()
  const { 
    createCharacter, 
    updateCharacter,
    deleteCharacter,
    createMatchRecord,
    deleteMatchRecord,
    getCharacterStatsForSeason,
    matchRecords,
    error: characterError,
    clearError 
  } = useCharacterStore()

  const [openCharacterUuids, setOpenCharacterUuids] = useState<Set<string>>(new Set())
  const [editingCharacterUuid, setEditingCharacterUuid] = useState<string | null>(null)
  const [editingCharacterName, setEditingCharacterName] = useState('')
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [characterToDelete, setCharacterToDelete] = useState<{ uuid: string; name: string } | null>(null)
  const [jobRegistrationDialogOpen, setJobRegistrationDialogOpen] = useState(false)
  const [characterForJobRegistration, setCharacterForJobRegistration] = useState<string | null>(null)

  // 最新のシーズンを取得
  const latestSeason = getSortedHistories()[0]

  // シーズンを作成するボタンのクリックハンドラー
  const handleCreateSeason = () => {
    router.navigate({ to: '/new' })
  }

  // キャラクター作成のハンドラー
  const handleCreateCharacter = (name: string) => {
    try {
      createCharacter({ name })
    } catch {
      // エラーは characterError で表示される
    }
  }

  // アコーディオンの開閉ハンドラー
  const toggleCharacterAccordion = (characterUuid: string) => {
    const newOpenUuids = new Set(openCharacterUuids)
    if (newOpenUuids.has(characterUuid)) {
      newOpenUuids.delete(characterUuid)
    } else {
      newOpenUuids.add(characterUuid)
    }
    setOpenCharacterUuids(newOpenUuids)
  }

  // キャラクター編集開始のハンドラー
  const handleStartEditing = (characterUuid: string, currentName: string) => {
    setEditingCharacterUuid(characterUuid)
    setEditingCharacterName(currentName)
  }

  // キャラクター編集キャンセルのハンドラー
  const handleCancelEditing = () => {
    setEditingCharacterUuid(null)
    setEditingCharacterName('')
  }

  // キャラクター編集保存のハンドラー
  const handleSaveEditing = () => {
    if (!editingCharacterUuid || !editingCharacterName.trim()) return

    try {
      const success = updateCharacter(editingCharacterUuid, editingCharacterName.trim())
      if (success) {
        setEditingCharacterUuid(null)
        setEditingCharacterName('')
      }
    } catch {
      // エラーは characterError で表示される
    }
  }

  // キャラクター削除ダイアログを開く
  const handleDeleteCharacter = (characterUuid: string, characterName: string) => {
    setCharacterToDelete({ uuid: characterUuid, name: characterName })
    setDeleteDialogOpen(true)
  }

  // キャラクター削除を確定
  const handleConfirmDelete = () => {
    if (!characterToDelete) return

    try {
      deleteCharacter(characterToDelete.uuid)
      setDeleteDialogOpen(false)
      setCharacterToDelete(null)
    } catch {
      // エラーは characterError で表示される
    }
  }

  // キャラクター削除をキャンセル
  const handleCancelDelete = () => {
    setDeleteDialogOpen(false)
    setCharacterToDelete(null)
  }

  // ジョブ登録ダイアログを開く
  const handleOpenJobRegistration = (characterUuid: string) => {
    setCharacterForJobRegistration(characterUuid)
    setJobRegistrationDialogOpen(true)
  }

  // ジョブ登録ダイアログを閉じる
  const handleCloseJobRegistration = () => {
    setJobRegistrationDialogOpen(false)
    setCharacterForJobRegistration(null)
  }

  // ジョブ登録を実行
  const handleRegisterJob = (job: Job) => {
    if (!latestSeason || !characterForJobRegistration) return

    try {
      addUsedJob({
        characterUuid: characterForJobRegistration,
        seasonUuid: latestSeason.uuid,
        job,
      })
      setJobRegistrationDialogOpen(false)
      setCharacterForJobRegistration(null)
    } catch {
      // エラーは characterError で表示される
    }
  }

  // 勝利記録を追加
  const handleAddWin = (characterUuid: string, job: Job, map: CrystalConflictMap) => {
    if (!latestSeason) return

    try {
      createMatchRecord({
        characterUuid,
        seasonUuid: latestSeason.uuid,
        job,
        map,
        isWin: true,
      })
    } catch {
      // エラーは characterError で表示される
    }
  }

  // 敗北記録を追加
  const handleAddLoss = (characterUuid: string, job: Job, map: CrystalConflictMap) => {
    if (!latestSeason) return

    try {
      createMatchRecord({
        characterUuid,
        seasonUuid: latestSeason.uuid,
        job,
        map,
        isWin: false,
      })
    } catch {
      // エラーは characterError で表示される
    }
  }

  // 直近の記録を取り消し
  const handleRevertLast = (characterUuid: string, job: Job, map: CrystalConflictMap) => {
    if (!latestSeason) return

    try {
      // 指定されたキャラクター、ジョブ、マップの記録を抽出
      const targetRecords = matchRecords.filter(
        (record) =>
          record.characterUuid === characterUuid &&
          record.seasonUuid === latestSeason.uuid &&
          record.job === job &&
          record.map === map
      )

      // 記録がない場合は何もしない
      if (targetRecords.length === 0) return

      // 最新の記録を見つける（createdAtが最も新しいもの）
      const latestRecord = targetRecords.reduce((latest, current) => {
        return new Date(current.createdAt) > new Date(latest.createdAt) ? current : latest
      })

      // 最新の記録を削除
      deleteMatchRecord(latestRecord.uuid)
    } catch {
      // エラーは characterError で表示される
    }
  }

  // ローディング中の表示
  if (isLoading) {
    return (
      <StyledContainer>
        <StyledTitle>現シーズンの戦績</StyledTitle>
        <StyledDescription>読み込み中...</StyledDescription>
      </StyledContainer>
    )
  }

  // シーズンが未登録の場合
  if (histories.length === 0) {
    return (
      <StyledContainer>
        <StyledTitle>現シーズンの戦績</StyledTitle>
        <StyledDescription>
          クリスタルコンフリクト戦績管理へようこそ！
        </StyledDescription>
        <EmptyState onCreateSeason={handleCreateSeason} />
      </StyledContainer>
    )
  }

  // 最新シーズンのキャラクター戦績を取得
  const characterStats = latestSeason ? getCharacterStatsForSeason(latestSeason.uuid) : []

  // シーズンが存在する場合の表示
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledTitle>{latestSeason?.seasonName} の戦績</StyledTitle>
        <Button variant="outline" size="sm" onClick={handleCreateSeason}>
          新しいシーズンを作成
        </Button>
      </StyledTitleContainer>
      <StyledDescription>
        {latestSeason?.seasonName} の戦績と統計情報を入力します。
      </StyledDescription>

      {characterError && (
        <StyledErrorMessage>
          <span>{characterError}</span>
          <StyledErrorCloseButton onClick={clearError}>
            閉じる
          </StyledErrorCloseButton>
        </StyledErrorMessage>
      )}

      <CharacterForm
        isOpen={characterStats.length === 0}
        onCreateCharacter={handleCreateCharacter}
      />

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
            onAddLoss={handleAddLoss}
            onRevertLast={handleRevertLast}
            isEditing={editingCharacterUuid === stats.character.uuid}
            editingName={editingCharacterName}
            onEditingNameChange={setEditingCharacterName}
            onSaveEdit={handleSaveEditing}
            onCancelEdit={handleCancelEditing}
          />
        ))}
      </StyledCharacterList>

      <DeleteCharacterDialog
        isOpen={deleteDialogOpen}
        character={characterToDelete}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />

      {latestSeason && characterForJobRegistration && (
        <JobRegistrationDialog
          isOpen={jobRegistrationDialogOpen}
          onClose={handleCloseJobRegistration}
          onRegister={handleRegisterJob}
          characterUuid={characterForJobRegistration}
          historyUuid={latestSeason.uuid}
        />
      )}
    </StyledContainer>
  )
}
