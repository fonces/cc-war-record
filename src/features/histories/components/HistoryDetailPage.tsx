import { useParams } from "@tanstack/react-router";
import { useMemo, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import styled from "styled-components";
import { PageContainer, PageTitle } from "@/components/ui";
import { useHistoryStore } from "@/stores";
import { JobIcon } from "@/components/ui/JobIcon";
import { formatDateTable } from "@/utils/uuid";
import type { MatchRecord } from "@/types";

// テーブルコンテナ
const StyledTableContainer = styled.div`
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  margin-top: ${({ theme }) => theme.spacing[6]};
`;

// テーブル
const StyledTable = styled.div`
  width: 100%;
  background-color: white;
`;

// テーブルヘッダー
const StyledTableHeader = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StyledHeaderCell = styled.div<{ $width?: string }>`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  white-space: nowrap;
  flex: ${({ $width }) => ($width ? "0 0 " + $width : "1")};
  text-align: left;

  &:last-child {
    text-align: center;
  }
`;

// 仮想スクロールコンテナ
const StyledVirtualContainer = styled.div`
  position: relative;
  width: 100%;
`;

// テーブル行
const StyledTableRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }
`;

const StyledTableCell = styled.div<{ $width?: string }>`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[900]};
  flex: ${({ $width }) => ($width ? "0 0 " + $width : "1")};
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: center;
  }
`;

// キャラクター名セル
const StyledCharacterNameCell = styled(StyledTableCell)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

// 作成日時セル
const StyledDateCell = styled(StyledTableCell)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: "Courier New", monospace;
  white-space: nowrap;
`;

// 勝敗バッジ
const StyledWinBadge = styled.span<{ $isWin: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  font-size: 0.75rem;
  background-color: ${({ theme, $isWin }) => ($isWin ? theme.colors.success[100] : theme.colors.error[100])};
  color: ${({ theme, $isWin }) => ($isWin ? theme.colors.success[700] : theme.colors.error[700])};
`;

// 空状態表示
const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

/**
 * シーズン履歴詳細画面コンポーネント
 * 特定シーズンの詳細戦績を表示
 */
export const HistoryDetailPage = () => {
  const { id } = useParams({ from: "/histories/$id" });
  const { getHistoryByUuid, getMatchRecordsForSeason } = useHistoryStore();
  const parentRef = useRef<HTMLDivElement>(null);

  // 履歴データを取得
  const history = useMemo(() => getHistoryByUuid(id), [id, getHistoryByUuid]);

  // 過去のシーズンのマッチレコードを取得
  const archivedMatchRecords = useMemo(() => getMatchRecordsForSeason(id), [id, getMatchRecordsForSeason]);

  // 全戦績を収集（アーカイブされたマッチレコード + 履歴内の戦績）
  const allMatches = useMemo(() => {
    if (!history) return [];

    const matches: (MatchRecord & { characterName: string })[] = [];

    // アーカイブされたマッチレコードを追加
    archivedMatchRecords.forEach((match) => {
      // キャラクター名を取得（characterStatsから検索）
      const characterStats = history.characterStats.find((stats) => stats.character.uuid === match.characterUuid);
      const characterName = characterStats?.character.name || "不明";

      matches.push({
        ...match,
        characterName,
      });
    });

    // 履歴内の戦績も追加（念のため）
    history.characterStats.forEach((stats) => {
      stats.recentMatches.forEach((match) => {
        // 重複チェック（アーカイブと履歴で重複する可能性があるため）
        const isDuplicate = matches.some((m) => m.uuid === match.uuid);
        if (!isDuplicate) {
          matches.push({
            ...match,
            characterName: stats.character.name,
          });
        }
      });
    });

    // 記録日時で降順ソート（新しい順）
    return matches.sort((a, b) => new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime());
  }, [history, archivedMatchRecords]);

  // 仮想化設定
  const rowVirtualizer = useVirtualizer({
    count: allMatches.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 56, // 行の高さ（px）
    overscan: 5, // 表示領域外にレンダリングする行数
  });

  if (!history) {
    return (
      <PageContainer>
        <PageTitle>履歴が見つかりません</PageTitle>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageTitle>{history.seasonName}</PageTitle>

      <StyledTableContainer>
        <StyledTable>
          {/* ヘッダー */}
          <StyledTableHeader>
            <StyledHeaderCell $width="200px">キャラクター名</StyledHeaderCell>
            <StyledHeaderCell $width="120px">使用ジョブ</StyledHeaderCell>
            <StyledHeaderCell $width="180px">作成日時</StyledHeaderCell>
            <StyledHeaderCell $width="100px">勝敗</StyledHeaderCell>
          </StyledTableHeader>

          {/* 仮想スクロールリスト */}
          {allMatches.length > 0 ? (
            <StyledVirtualContainer
              ref={parentRef}
              style={{
                height: "600px",
                overflow: "auto",
              }}
            >
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  position: "relative",
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow: { index: number; start: number; size: number }) => {
                  const match = allMatches[virtualRow.index];
                  return (
                    <StyledTableRow
                      key={match.uuid}
                      style={{
                        transform: `translateY(${virtualRow.start}px)`,
                        height: `${virtualRow.size}px`,
                      }}
                    >
                      <StyledCharacterNameCell $width="200px">{match.characterName}</StyledCharacterNameCell>
                      <StyledTableCell $width="120px">
                        <JobIcon job={match.job} size={24} />
                      </StyledTableCell>
                      <StyledDateCell $width="180px">{formatDateTable(match.recordedAt)}</StyledDateCell>
                      <StyledTableCell $width="100px">
                        <StyledWinBadge $isWin={match.isWin}>{match.isWin ? "勝利" : "敗北"}</StyledWinBadge>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </div>
            </StyledVirtualContainer>
          ) : (
            <StyledEmptyState>まだ戦績が記録されていません</StyledEmptyState>
          )}
        </StyledTable>
      </StyledTableContainer>
    </PageContainer>
  );
};
