import styled from 'styled-components'
import { useState } from 'react'
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Legend, 
  ResponsiveContainer,
  Tooltip
} from 'recharts'
import { Select } from '@/components/ui'
import type { History, MatchRecord, Job, Character } from '@/types'
import { JOB_INFO, JOBS } from '@/types/jobs'
import { MAP_INFO, MAPS } from '@/types/maps'

const StyledChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
`

const StyledChartTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

const StyledChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const StyledFiltersWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

interface JobWinRateRadarChartProps {
  history: History
  matchRecords: MatchRecord[]
  characters: Character[]
}

/**
 * マップごとのジョブ勝率データを集計する関数
 */
const aggregateJobWinRateByMap = (
  history: History,
  matchRecords: MatchRecord[],
  selectedCharacterUuid: string | null,
  selectedJobs: Job[]
) => {
  // 該当シーズンの試合データをフィルタ
  const seasonMatches = matchRecords.filter(
    match => {
      if (match.seasonUuid !== history.uuid) return false
      if (selectedCharacterUuid && match.characterUuid !== selectedCharacterUuid) return false
      if (selectedJobs.length > 0 && !selectedJobs.includes(match.job)) return false
      return true
    }
  )

  // マップ × ジョブごとの勝敗を集計
  const mapJobStats = new Map<string, Map<Job, { wins: number; total: number }>>()

  seasonMatches.forEach((match) => {
    if (!mapJobStats.has(match.map)) {
      mapJobStats.set(match.map, new Map())
    }
    
    const jobStats = mapJobStats.get(match.map)!
    if (!jobStats.has(match.job)) {
      jobStats.set(match.job, { wins: 0, total: 0 })
    }
    
    const stats = jobStats.get(match.job)!
    stats.total++
    if (match.isWin) {
      stats.wins++
    }
  })

  // RadarChart用のデータ形式に変換
  return Object.values(MAPS).map(map => {
    const mapData: Record<string, string | number> = {
      map: MAP_INFO[map].name,
      fullMark: 100
    }

    selectedJobs.forEach(job => {
      const jobStat = mapJobStats.get(map)?.get(job)
      if (jobStat && jobStat.total > 0) {
        mapData[job] = Math.round((jobStat.wins / jobStat.total) * 100)
      } else {
        mapData[job] = 0
      }
    })

    return mapData
  })
}

/**
 * ジョブ別勝率レーダーチャートコンポーネント
 */
export const JobWinRateRadarChart = ({ history, matchRecords, characters }: JobWinRateRadarChartProps) => {
  const [selectedCharacterUuid, setSelectedCharacterUuid] = useState<string | null>(null)
  const [selectedJob1, setSelectedJob1] = useState<Job>(JOBS.PALADIN)
  const [selectedJob2, setSelectedJob2] = useState<Job>(JOBS.WHITE_MAGE)

  const selectedJobs = [selectedJob1, selectedJob2]
  const radarData = aggregateJobWinRateByMap(
    history,
    matchRecords,
    selectedCharacterUuid,
    selectedJobs
  )

  return (
    <StyledChartContainer>
      <StyledChartHeader>
        <StyledChartTitle>
          マップ別ジョブ勝率比較
        </StyledChartTitle>
        <StyledFiltersWrapper>
          <Select
            label="キャラクター"
            id="character-filter-radar"
            value={selectedCharacterUuid || ''}
            onChange={(e) => setSelectedCharacterUuid(e.target.value || null)}
            options={[
              { value: '', label: 'すべてのキャラクター' },
              ...characters.map(character => ({
                value: character.uuid,
                label: character.name
              }))
            ]}
          />
          <Select
            label="ジョブ1"
            id="job1-filter"
            value={selectedJob1}
            onChange={(e) => setSelectedJob1(e.target.value as Job)}
            options={Object.values(JOBS).map(job => ({
              value: job,
              label: `${JOB_INFO[job].name} (${job})`
            }))}
          />
          <Select
            label="ジョブ2"
            id="job2-filter"
            value={selectedJob2}
            onChange={(e) => setSelectedJob2(e.target.value as Job)}
            options={Object.values(JOBS).map(job => ({
              value: job,
              label: `${JOB_INFO[job].name} (${job})`
            }))}
          />
        </StyledFiltersWrapper>
      </StyledChartHeader>
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="map" />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />
          <Radar
            name={`${JOB_INFO[selectedJob1].name} (${selectedJob1})`}
            dataKey={selectedJob1}
            stroke={JOB_INFO[selectedJob1].color}
            fill={JOB_INFO[selectedJob1].color}
            fillOpacity={0.6}
          />
          <Radar
            name={`${JOB_INFO[selectedJob2].name} (${selectedJob2})`}
            dataKey={selectedJob2}
            stroke={JOB_INFO[selectedJob2].color}
            fill={JOB_INFO[selectedJob2].color}
            fillOpacity={0.6}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </StyledChartContainer>
  )
}
