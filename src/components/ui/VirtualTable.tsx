import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef, type ReactNode, useEffect } from "react";
import styled from "styled-components";
import { fadeIn, shimmer } from "@/styles/animation";
import { media } from "@/styles/breakpoints";

// テーブルコンテナ
const StyledTableContainer = styled.div<{ $height?: string }>`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: ${({ theme }) => theme.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  height: ${({ $height }) => $height || "calc(100dvh - 380px)"};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.6s ease-out 0.1s backwards;

  &::before {
    content: "";
    position: sticky;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    z-index: 3;
  }

  &:hover {
    box-shadow:
      0 12px 40px rgba(38, 161, 223, 0.12),
      0 0 0 1px rgba(38, 161, 223, 0.1);
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

// テーブル
const StyledTable = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;

  ${media.mobile} {
    min-width: 380px;
  }
`;

// テーブルヘッダーラッパー（横スクロール同期用）
const StyledHeaderWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;

  /* スクロールバーを非表示 */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// テーブルヘッダー
const StyledTableHeader = styled.div<{ $width?: string }>`
  display: flex;
  background: ${({ theme }) => (theme.isDark ? "rgba(39, 39, 42, 0.6)" : "rgba(255, 255, 255, 0.1)")};
  backdrop-filter: blur(8px);
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderLight};
  position: sticky;
  top: 0;
  z-index: 2;
  min-width: 100%;
  width: ${({ $width }) => ($width ? `calc(${$width} + 4px)` : "100%")};

  ${media.mobile} {
    min-width: 380px;
  }
`;

export const TableHeaderCell = styled.div<{ width?: string }>`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  flex: ${({ width }) => (width ? "0 0 " + width : "1")};
  text-align: left;

  ${media.mobile} {
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    font-size: 0.6875rem;
  }

  &:last-child {
    text-align: center;
  }
`;

// 仮想スクロールコンテナ
const StyledVirtualContainer = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  min-height: 0;
`;

// テーブル行
export const TableRow = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 100%;
  background: transparent;

  ${media.mobile} {
    min-width: 380px;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: linear-gradient(135deg, #26a1df 0%, #f36346 100%);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: ${({ theme }) => (theme.isDark ? "rgba(38, 161, 223, 0.08)" : "rgba(38, 161, 223, 0.03)")};

    &::before {
      width: 4px;
    }
  }
`;

export const TableCell = styled.div<{ width?: string }>`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  flex: ${({ width }) => (width ? "0 0 " + width : "1")};
  display: flex;
  align-items: center;
  height: 66px;

  ${media.mobile} {
    padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
    font-size: 0.8125rem;
  }

  &:last-child {
    justify-content: center;
  }
`;

// 空状態表示
const StyledEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const StyledEmptyStateText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

// ローディング状態
const StyledLoadingCell = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
  padding: ${({ theme }) => theme.spacing[16]};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  animation: ${shimmer} 1.5s ease-in-out infinite;
`;

export interface VirtualTableColumn {
  key: string;
  label: string;
  width?: string;
}

export interface VirtualTableProps<T> {
  /** データ配列 */
  data: T[];
  /** カラム定義 */
  columns: VirtualTableColumn[];
  /** 行レンダリング関数 */
  renderRow: (item: T, virtualRow: { index: number; start: number; size: number }) => ReactNode;
  /** 行の高さ */
  rowHeight?: number;
  /** overscan数 */
  overscan?: number;
  /** テーブルの高さ */
  height?: string;
  /** テーブルの幅 */
  width?: string;
  /** ローディング状態 */
  isLoading?: boolean;
  /** ローディングテキスト */
  loadingText?: string;
  /** 空状態テキスト */
  emptyText?: string;
  /** 各行のキー取得関数 */
  getRowKey: (item: T) => string;
}

/**
 * 仮想スクロール対応の共通テーブルコンポーネント
 */
export function VirtualTable<T>({
  data,
  columns,
  renderRow,
  rowHeight = 56,
  overscan = 5,
  height,
  width = "100%",
  isLoading = false,
  loadingText = "Loading...",
  emptyText = "No data",
  getRowKey,
}: VirtualTableProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // 仮想化設定
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan,
  });

  // 横スクロール同期
  useEffect(() => {
    const scrollContainer = parentRef.current;
    const headerContainer = headerRef.current;

    if (!scrollContainer || !headerContainer) return;

    const handleScroll = () => {
      headerContainer.scrollLeft = scrollContainer.scrollLeft;
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledTableContainer $height={height}>
      <StyledTable>
        {/* ヘッダー */}
        <StyledHeaderWrapper ref={headerRef}>
          <StyledTableHeader $width={width}>
            {columns.map((column) => (
              <TableHeaderCell key={column.key} width={column.width}>
                {column.label}
              </TableHeaderCell>
            ))}
          </StyledTableHeader>
        </StyledHeaderWrapper>

        {/* ローディング */}
        {isLoading ? (
          <StyledVirtualContainer>
            <StyledLoadingCell>{loadingText}</StyledLoadingCell>
          </StyledVirtualContainer>
        ) : data.length > 0 ? (
          /* 仮想スクロールリスト */
          <StyledVirtualContainer ref={parentRef}>
            <div
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                position: "relative",
                width,
              }}
            >
              {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                const item = data[virtualRow.index];
                return (
                  <div
                    key={getRowKey(item)}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      transform: `translateY(${virtualRow.start}px)`,
                      height: `${virtualRow.size}px`,
                    }}
                  >
                    {renderRow(item, virtualRow)}
                  </div>
                );
              })}
            </div>
          </StyledVirtualContainer>
        ) : (
          /* 空状態 */
          <StyledEmptyState>
            <StyledEmptyStateText>{emptyText}</StyledEmptyStateText>
          </StyledEmptyState>
        )}
      </StyledTable>
    </StyledTableContainer>
  );
}
