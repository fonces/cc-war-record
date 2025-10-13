import styled from "styled-components";

type GridProps = {
  /** 列数または列のテンプレート */
  columns?: number | string;
  /** 行数または行のテンプレート */
  rows?: number | string;
  /** 間隔 */
  gap?: string | number;
  /** 列の間隔 */
  columnGap?: string | number;
  /** 行の間隔 */
  rowGap?: string | number;
  /** 自動配置の方向 */
  autoFlow?: "row" | "column" | "dense" | "row dense" | "column dense";
  /** 自動配置の列サイズ */
  autoColumns?: string;
  /** 自動配置の行サイズ */
  autoRows?: string;
  /** 主軸の配置 */
  justifyItems?: "start" | "end" | "center" | "stretch";
  /** 交差軸の配置 */
  alignItems?: "start" | "end" | "center" | "stretch" | "baseline";
  /** グリッド全体の主軸配置 */
  justifyContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly";
  /** グリッド全体の交差軸配置 */
  alignContent?: "start" | "end" | "center" | "stretch" | "space-between" | "space-around" | "space-evenly";
  /** 幅 */
  width?: string;
  /** 高さ */
  height?: string;
  /** パディング */
  padding?: string;
  /** マージン */
  margin?: string;
  /** 子要素 */
  children?: React.ReactNode;
  /** クラス名 */
  className?: string;
  /** クリックイベント */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const getTemplateValue = (value: number | string | undefined): string => {
  if (value === undefined) return "none";
  if (typeof value === "number") return `repeat(${value}, 1fr)`;
  return value;
};

const getGapValue = (value: string | number | undefined): string => {
  if (value === undefined) return "0";
  return typeof value === "number" ? `${value}px` : value;
};

const StyledGrid = styled.div<Omit<GridProps, "children" | "className" | "onClick">>`
  display: grid;
  grid-template-columns: ${({ columns }) => getTemplateValue(columns)};
  grid-template-rows: ${({ rows }) => getTemplateValue(rows)};
  gap: ${({ gap }) => getGapValue(gap)};
  column-gap: ${({ columnGap }) => getGapValue(columnGap)};
  row-gap: ${({ rowGap }) => getGapValue(rowGap)};
  grid-auto-flow: ${({ autoFlow }) => autoFlow || "row"};
  grid-auto-columns: ${({ autoColumns }) => autoColumns || "auto"};
  grid-auto-rows: ${({ autoRows }) => autoRows || "auto"};
  justify-items: ${({ justifyItems }) => justifyItems || "stretch"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }) => justifyContent || "start"};
  align-content: ${({ alignContent }) => alignContent || "start"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
`;

/**
 * CSS Gridレイアウトコンポーネント
 */
export const Grid = ({
  columns,
  rows,
  gap,
  columnGap,
  rowGap,
  autoFlow,
  autoColumns,
  autoRows,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  width,
  height,
  padding,
  margin,
  children,
  className,
  onClick,
}: GridProps) => {
  return (
    <StyledGrid
      columns={columns}
      rows={rows}
      gap={gap}
      columnGap={columnGap}
      rowGap={rowGap}
      autoFlow={autoFlow}
      autoColumns={autoColumns}
      autoRows={autoRows}
      justifyItems={justifyItems}
      alignItems={alignItems}
      justifyContent={justifyContent}
      alignContent={alignContent}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledGrid>
  );
};
