import { useState } from 'react'
import { useRouter } from '@tanstack/react-router'
import styled from 'styled-components'
import { useHistoryStore, useCharacterStore } from '@/stores'
import { Button, Icon, Input, Dialog } from '@/components/ui'

const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  max-width: 1200px;
  margin: 0 auto;
`

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text};
`

const StyledDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

// 空状態表示
const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  text-align: center;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`

const StyledEmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary[100]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const StyledEmptyTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

const StyledEmptyDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  max-width: 400px;
  line-height: 1.6;
`

const StyledCreateButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: 1.1rem;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[8]};
`



// キャラクター登録フォーム
const StyledCharacterForm = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  flex-wrap: wrap;
`

const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
`

const StyledLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

// キャラクター戦績表示
const StyledCharacterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};
`

const StyledCharacterCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`

const StyledCharacterHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`

const StyledCharacterName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

const StyledCharacterStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const StyledWinRate = styled.span<{ winRate: number }>`
  font-weight: 600;
  color: ${({ winRate, theme }) => 
    winRate >= 60 ? theme.colors.success[600] :
    winRate >= 40 ? theme.colors.warning[600] :
    theme.colors.error[600]
  };
`

const StyledCharacterContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`

const StyledCharacterBody = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
`

const StyledEmptyStats = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.colors.textSecondary};
`

const StyledAddJobButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`

// キャラクター編集・削除用のスタイル
const StyledCharacterActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
`

const StyledEditForm = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  flex: 1;
`

const StyledEditInput = styled(Input)`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`

const StyledActionButton = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing[1]};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.text};
  }
  
  &.delete:hover {
    background-color: ${({ theme }) => theme.colors.error[50]};
    color: ${({ theme }) => theme.colors.error[600]};
  }
  
  &.save:hover {
    background-color: ${({ theme }) => theme.colors.success[50]};
    color: ${({ theme }) => theme.colors.success[600]};
  }
`

/**
 * ホーム画面コンポーネント
 * 現シーズンの戦績を表示、シーズン未作成時は作成ボタンを表示
 */
export const HomePage = () => {
  const router = useRouter()
  const { histories, isLoading, getSortedHistories } = useHistoryStore()
  const { 
    createCharacter, 
    updateCharacter,
    deleteCharacter,
    getCharacterStatsForSeason,
    error: characterError,
    clearError 
  } = useCharacterStore()

  const [newCharacterName, setNewCharacterName] = useState('')
  const [openCharacterUuids, setOpenCharacterUuids] = useState<Set<string>>(new Set())
  const [isCharacterFormOpen, setIsCharacterFormOpen] = useState(false)
  const [editingCharacterUuid, setEditingCharacterUuid] = useState<string | null>(null)
  const [editingCharacterName, setEditingCharacterName] = useState('')
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [characterToDelete, setCharacterToDelete] = useState<{ uuid: string; name: string } | null>(null)

  // シーズンを作成するボタンのクリックハンドラー
  const handleCreateSeason = () => {
    router.navigate({ to: '/new' })
  }

  // キャラクター作成のハンドラー
  const handleCreateCharacter = () => {
    if (!newCharacterName.trim()) return

    try {
      createCharacter({ name: newCharacterName.trim() })
      setNewCharacterName('')
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

  // キャラクター登録フォームのアコーディオン開閉ハンドラー
  const toggleCharacterFormAccordion = () => {
    setIsCharacterFormOpen(!isCharacterFormOpen)
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

  // 最新のシーズンを取得
  const latestSeason = getSortedHistories()[0]

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

        <StyledEmptyState>
          <StyledEmptyIcon>
            <Icon name="home" size={32} />
          </StyledEmptyIcon>
          <StyledEmptyTitle>まだシーズンが作成されていません</StyledEmptyTitle>
          <StyledEmptyDescription>
            戦績を記録するために、まず最初のシーズンを作成してください。
            シーズン名を設定して、勝敗の記録を開始できます。
          </StyledEmptyDescription>
          <StyledCreateButton onClick={handleCreateSeason}>
            <Icon name="home" size={20} />
            シーズンを作成する
          </StyledCreateButton>
        </StyledEmptyState>
      </StyledContainer>
    )
  }

  // 最新シーズンのキャラクター戦績を取得
  const characterStats = latestSeason ? getCharacterStatsForSeason(latestSeason.uuid) : []
  
  // キャラクターが存在しない場合はフォームをデフォルトで開く
  const shouldFormBeOpenByDefault = characterStats.length === 0
  const isFormOpen = shouldFormBeOpenByDefault || isCharacterFormOpen

  // シーズンが存在する場合の表示
  return (
    <StyledContainer>
      <StyledTitle>現シーズンの戦績</StyledTitle>
      <StyledDescription>
        {latestSeason?.seasonName} の戦績と統計情報を表示します。
      </StyledDescription>

      {characterError && (
        <div style={{ 
          padding: '12px', 
          marginBottom: '24px', 
          backgroundColor: '#fef2f2', 
          border: '1px solid #fecaca', 
          borderRadius: '8px', 
          color: '#dc2626' 
        }}>
          {characterError}
          <button 
            onClick={clearError}
            style={{ marginLeft: '8px', color: '#dc2626', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            閉じる
          </button>
        </div>
      )}

      <StyledCharacterCard>
        <StyledCharacterHeader onClick={toggleCharacterFormAccordion}>
          <StyledCharacterName>キャラクター登録</StyledCharacterName>
          <StyledCharacterStats>
            <Icon 
              name={isFormOpen ? "close" : "hamburger"} 
              size={16} 
            />
          </StyledCharacterStats>
        </StyledCharacterHeader>
        
        <StyledCharacterContent isOpen={isFormOpen}>
          <StyledCharacterBody>
            <StyledCharacterForm>
              <StyledFormGroup>
                <StyledLabel htmlFor="character-name">キャラクター名</StyledLabel>
                <Input
                  id="character-name"
                  value={newCharacterName}
                  onChange={(e) => setNewCharacterName(e.target.value)}
                  placeholder="キャラクター名を入力"
                  onKeyPress={(e) => e.key === 'Enter' && handleCreateCharacter()}
                />
              </StyledFormGroup>
              <Button onClick={handleCreateCharacter} disabled={!newCharacterName.trim()}>
                <Icon name="history" size={16} />
                キャラクターを登録
              </Button>
            </StyledCharacterForm>
          </StyledCharacterBody>
        </StyledCharacterContent>
      </StyledCharacterCard>

      <StyledCharacterList>
        {characterStats.map((stats) => (
            <StyledCharacterCard key={stats.character.uuid}>
              <StyledCharacterHeader>
                {editingCharacterUuid === stats.character.uuid ? (
                  <StyledEditForm>
                    <StyledEditInput
                      value={editingCharacterName}
                      onChange={(e) => setEditingCharacterName(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSaveEditing()
                        if (e.key === 'Escape') handleCancelEditing()
                      }}
                      onClick={(e) => e.stopPropagation()}
                      autoFocus
                    />
                    <StyledCharacterActions>
                      <StyledActionButton
                        className="save"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSaveEditing()
                        }}
                        title="保存"
                      >
                        <Icon name="accept" size={16} />
                      </StyledActionButton>
                      <StyledActionButton
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCancelEditing()
                        }}
                        title="キャンセル"
                      >
                        <Icon name="close" size={16} />
                      </StyledActionButton>
                    </StyledCharacterActions>
                  </StyledEditForm>
                ) : (
                  <>
                    <div 
                      style={{ display: 'flex', alignItems: 'center', flex: 1, cursor: 'pointer' }}
                      onClick={() => toggleCharacterAccordion(stats.character.uuid)}
                    >
                      <StyledCharacterName>{stats.character.name}</StyledCharacterName>
                    </div>
                    <StyledCharacterStats>
                      <span>{stats.totalMatches}試合</span>
                      <span>{stats.wins}勝{stats.losses}敗</span>
                      <StyledWinRate winRate={stats.winRate}>
                        勝率{stats.winRate}%
                      </StyledWinRate>
                      <StyledCharacterActions>
                        <StyledActionButton
                          onClick={(e) => {
                            e.stopPropagation()
                            handleStartEditing(stats.character.uuid, stats.character.name)
                          }}
                          title="編集"
                        >
                          <Icon name="edit" size={16} />
                        </StyledActionButton>
                        <StyledActionButton
                          className="delete"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDeleteCharacter(stats.character.uuid, stats.character.name)
                          }}
                          title="削除"
                        >
                          <Icon name="close" size={16} />
                        </StyledActionButton>
                        <StyledActionButton
                          onClick={() => toggleCharacterAccordion(stats.character.uuid)}
                          title={openCharacterUuids.has(stats.character.uuid) ? "閉じる" : "開く"}
                        >
                          <Icon 
                            name="chart" 
                            size={16} 
                          />
                        </StyledActionButton>
                      </StyledCharacterActions>
                    </StyledCharacterStats>
                  </>
                )}
              </StyledCharacterHeader>
              
              <StyledCharacterContent isOpen={openCharacterUuids.has(stats.character.uuid)}>
                <StyledCharacterBody>
                  {stats.totalMatches === 0 ? (
                    <StyledEmptyStats>
                      <p style={{ marginBottom: '16px' }}>まだ戦績が記録されていません</p>
                      <StyledAddJobButton>
                        <Icon name="history" size={16} />
                        ジョブを登録してください
                      </StyledAddJobButton>
                    </StyledEmptyStats>
                  ) : (
                    <div>
                      <p style={{ marginBottom: '16px', color: '#6b7280' }}>
                        最近の戦績と詳細統計はこちらに表示されます。
                      </p>
                      <StyledAddJobButton>
                        <Icon name="history" size={16} />
                        新しいジョブを追加
                      </StyledAddJobButton>
                    </div>
                  )}
                </StyledCharacterBody>
              </StyledCharacterContent>
            </StyledCharacterCard>
        ))}
      </StyledCharacterList>

      {/* キャラクター削除確認ダイアログ */}
      <Dialog
        isOpen={deleteDialogOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="キャラクターを削除"
        confirmText="削除する"
        confirmType="danger"
        cancelText="キャンセル"
      >
        <p>
          キャラクター「<strong>{characterToDelete?.name}</strong>」を削除しますか？
        </p>
        <p style={{ color: '#dc2626', marginTop: '12px', fontSize: '0.875rem' }}>
          ⚠️ 関連する戦績記録もすべて削除されます。この操作は取り消せません。
        </p>
      </Dialog>
    </StyledContainer>
  )
}
