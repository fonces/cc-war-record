import { useNavigate } from '@tanstack/react-router'
import { useHistoryStore, useCharacterStore } from '@/stores'
import { PageContainer, PageTitle, PageDescription, PageTitleContainer } from '@/components/ui'
import { EmptyState } from '@/features/home/components/EmptyState'
import { DailyWinLossChart } from './DailyWinLossChart'
import { JobWinRateRadarChart } from './JobWinRateRadarChart'
import { HourlyWinLossChart } from './HourlyWinLossChart'
import { WeeklyWinLossChart } from './WeeklyWinLossChart'







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
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>戦績グラフ</PageTitle>
      </PageTitleContainer>
      <PageDescription>
        {latestHistory ? `${latestHistory.seasonName} の戦績をグラフ形式で可視化します。` : '現シーズンの戦績をグラフ形式で可視化します。'}
      </PageDescription>
      
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
        <EmptyState onCreateSeason={handleCreateSeason} />
      )}
    </PageContainer>
  )
}
