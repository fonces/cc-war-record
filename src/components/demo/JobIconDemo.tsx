import styled from 'styled-components'
import { JobIcon } from '@/components/ui'
import { JOBS, getAllJobs } from '@/types'

const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
`

const StyledTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.text};
`

const StyledJobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`

const StyledJobCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.gray[50]};
`

const StyledJobInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledJobName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`

const StyledJobCode = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const StyledSizeDemo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`

/**
 * JobIconのテスト・デモ用コンポーネント
 */
export const JobIconDemo = () => {
  const allJobs = getAllJobs()

  return (
    <StyledContainer>
      <StyledTitle>FF14 ジョブアイコン</StyledTitle>
      
      {/* サイズバリエーション */}
      <StyledTitle>サイズバリエーション</StyledTitle>
      <StyledSizeDemo>
        <JobIcon job={JOBS.PALADIN} size={16} />
        <JobIcon job={JOBS.PALADIN} size={24} />
        <JobIcon job={JOBS.PALADIN} size={32} />
        <JobIcon job={JOBS.PALADIN} size={48} />
        <JobIcon job={JOBS.PALADIN} size={64} />
      </StyledSizeDemo>

      {/* 全ジョブ一覧 */}
      <StyledTitle>全ジョブ一覧</StyledTitle>
      <StyledJobGrid>
        {allJobs.map((job) => (
          <StyledJobCard key={job.code}>
            <JobIcon job={job.code} size={32} />
            <StyledJobInfo>
              <StyledJobName>{job.name}</StyledJobName>
              <StyledJobCode>{job.shortName}</StyledJobCode>
            </StyledJobInfo>
          </StyledJobCard>
        ))}
      </StyledJobGrid>
    </StyledContainer>
  )
}