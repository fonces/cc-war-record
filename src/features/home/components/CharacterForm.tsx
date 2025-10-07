import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Icon, Input } from '@/components/ui'

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

const StyledCharacterContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`

const StyledCharacterBody = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
`

const StyledCharacterFormContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: flex-end;
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

type CharacterFormProps = {
  /** フォームの開閉状態 */
  isOpen: boolean
  /** キャラクター作成ハンドラー */
  onCreateCharacter: (name: string) => void
}

/**
 * キャラクター作成フォームコンポーネント
 */
export const CharacterForm = ({ 
  isOpen: isOpenProp, 
  onCreateCharacter 
}: CharacterFormProps) => {
  const [newCharacterName, setNewCharacterName] = useState('')
  const [isOpen, setIsOpen] = useState(isOpenProp)

  // propsの変更を反映
  useEffect(() => {
    setIsOpen(isOpenProp)
  }, [isOpenProp])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleCreate = () => {
    if (!newCharacterName.trim()) return
    onCreateCharacter(newCharacterName.trim())
    setNewCharacterName('')
  }

  return (
    <StyledCharacterCard>
      <StyledCharacterHeader onClick={handleToggle}>
        <StyledCharacterName>キャラクター登録</StyledCharacterName>
        <StyledCharacterStats>
          <Icon 
            name={isOpen ? "close" : "hamburger"} 
            size={16} 
          />
        </StyledCharacterStats>
      </StyledCharacterHeader>
      
      <StyledCharacterContent isOpen={isOpen}>
        <StyledCharacterBody>
          <StyledCharacterFormContent>
            <StyledFormGroup>
              <StyledLabel htmlFor="character-name">キャラクター名</StyledLabel>
              <Input
                id="character-name"
                value={newCharacterName}
                onChange={(e) => setNewCharacterName(e.target.value)}
                placeholder="キャラクター名を入力"
                onKeyPress={(e) => e.key === 'Enter' && handleCreate()}
              />
            </StyledFormGroup>
            <Button onClick={handleCreate} disabled={!newCharacterName.trim()}>
              キャラクターを登録
            </Button>
          </StyledCharacterFormContent>
        </StyledCharacterBody>
      </StyledCharacterContent>
    </StyledCharacterCard>
  )
}
