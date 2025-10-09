import styled from 'styled-components'
import { useNavigate } from '@tanstack/react-router'
import { useHistoryStore, useCharacterStore } from '@/stores'
import { Button, Icon } from '@/components/ui'
import { DailyWinLossChart } from './DailyWinLossChart'
import { JobWinRateRadarChart } from './JobWinRateRadarChart'
import { HourlyWinLossChart } from './HourlyWinLossChart'
import { WeeklyWinLossChart } from './WeeklyWinLossChart'

const StyledContainer = styled.div`
  padding: 2rem;
`

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`

const StyledDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`

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
  margin-top: 2rem;
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

/**
 * グラフ画面コンポーネント
 * 現シーズンの戦績をチャート表示
 */
export const GraphsPage = () => {
  const navigate = useNavigate()
  const { histories } = useHistoryStore()
  const { characters, matchRecords } = useCharacterStore()
  
  const latestHistory = histories.length > 0 ? histories[histories.length - 1] : null

  const handleCreateSeason = () => {
    navigate({ to: '/new' })
  }

  return (
    <StyledContainer>
      <StyledTitle>戦績グラフ</StyledTitle>
      <StyledDescription>
        {latestHistory ? `${latestHistory.seasonName} の戦績をグラフ形式で可視化します。` : '現シーズンの戦績をグラフ形式で可視化します。'}
      </StyledDescription>
      
      {latestHistory ? (
        <>
          <DailyWinLossChart 
            history={latestHistory} 
            matchRecords={matchRecords} 
            characters={characters}
          />
          <HourlyWinLossChart
            history={latestHistory}
            matchRecords={matchRecords}
            characters={characters}
          />
          <WeeklyWinLossChart
            history={latestHistory}
            matchRecords={matchRecords}
            characters={characters}
          />
          <JobWinRateRadarChart
            history={latestHistory}
            matchRecords={matchRecords}
            characters={characters}
          />
        </>
      ) : (
        <StyledEmptyState>
          <StyledEmptyIcon>
            <Icon name="home" size={32} />
          </StyledEmptyIcon>
          <StyledEmptyTitle>まだシーズンが作成されていません</StyledEmptyTitle>
          <StyledEmptyDescription>
            戦績グラフを表示するには、まず最初のシーズンを作成してください。
            シーズン名を設定して、勝敗の記録を開始できます。
          </StyledEmptyDescription>
          <StyledCreateButton onClick={handleCreateSeason}>
            <Icon name="home" size={20} />
            シーズンを作成する
          </StyledCreateButton>
        </StyledEmptyState>
      )}
    </StyledContainer>
  )
}
