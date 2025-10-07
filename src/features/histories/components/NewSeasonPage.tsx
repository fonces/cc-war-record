import { useState } from 'react'
import { useRouter } from '@tanstack/react-router'
import styled from 'styled-components'
import { useHistoryStore } from '@/stores'
import { Button, Input } from '@/components/ui'

const StyledContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[6]};
`

const StyledHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  text-align: center;
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
`

const StyledForm = styled.form`
  background-color: white;
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
`

const StyledFormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const StyledActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`

const StyledErrorMessage = styled.div`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.error}20;
  border: 1px solid ${({ theme }) => theme.colors.error}40;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: 0.875rem;
`

const StyledSuccessMessage = styled.div`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.success}20;
  border: 1px solid ${({ theme }) => theme.colors.success}40;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  font-size: 0.875rem;
`

/**
 * 新規シーズン作成画面コンポーネント
 * シーズン名を入力してnewHistoryを作成
 */
export const NewSeasonPage = () => {
  const router = useRouter()
  const { createHistory, error, clearError } = useHistoryStore()
  
  const [seasonName, setSeasonName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // バリデーション
    const trimmedSeasonName = seasonName.trim()
    if (!trimmedSeasonName) {
      setValidationError('シーズン名を入力してください')
      return
    }

    if (trimmedSeasonName.length > 50) {
      setValidationError('シーズン名は50文字以内で入力してください')
      return
    }

    setValidationError('')
    setIsSubmitting(true)
    clearError()

    try {
      // 新規履歴作成
      const newHistory = createHistory({ seasonName: trimmedSeasonName })
      
      setSuccessMessage(`シーズン「${newHistory.seasonName}」を作成しました`)
      
      // 少し待ってからホーム画面に遷移
      setTimeout(() => {
        router.navigate({ to: '/' })
      }, 1500)
      
    } catch (error) {
      // エラーはhistoryStoreのerror状態に設定される
      console.error('シーズン作成エラー:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // キャンセル処理
  const handleCancel = () => {
    router.navigate({ to: '/histories' })
  }

  // 入力値変更処理
  const handleSeasonNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeasonName(e.target.value)
    // 入力中はバリデーションエラーをクリア
    if (validationError) {
      setValidationError('')
    }
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>新規シーズン作成</StyledTitle>
        <StyledDescription>
          新しいシーズンを作成します。シーズン名を入力してください。
        </StyledDescription>
      </StyledHeader>

      <StyledForm onSubmit={handleSubmit}>
        {/* エラーメッセージ */}
        {(error || validationError) && (
          <StyledErrorMessage>
            {validationError || error}
          </StyledErrorMessage>
        )}

        {/* 成功メッセージ */}
        {successMessage && (
          <StyledSuccessMessage>
            {successMessage}
          </StyledSuccessMessage>
        )}

        {/* シーズン名入力 */}
        <StyledFormGroup>
          <Input
            label="シーズン名"
            type="text"
            value={seasonName}
            onChange={handleSeasonNameChange}
            placeholder="例: シーズン7.1、2025年春シーズン"
            disabled={isSubmitting || !!successMessage}
            fullWidth
            required
          />
        </StyledFormGroup>

        {/* アクションボタン */}
        <StyledActions>
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={isSubmitting || !!successMessage}
          >
            キャンセル
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting || !!successMessage || !seasonName.trim()}
          >
            {isSubmitting ? '作成中...' : '作成する'}
          </Button>
        </StyledActions>
      </StyledForm>
    </StyledContainer>
  )
}