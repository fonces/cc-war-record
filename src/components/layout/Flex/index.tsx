import styled from "styled-components";

type FlexProps = {
  /** フレックス方向 */
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  /** 主軸の配置 */
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  /** 交差軸の配置 */
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  /** 折り返し */
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  /** 間隔 */
  gap?: string | number;
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

const StyledFlex = styled.div<Omit<FlexProps, "children" | "className" | "onClick">>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify = "flex-start" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  gap: ${({ gap }) => (typeof gap === "number" ? `${gap}px` : gap || "0")};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
`;

/**
 * Flexboxレイアウトコンポーネント
 */
export const Flex = ({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  gap,
  width,
  height,
  padding,
  margin,
  children,
  className,
  onClick,
}: FlexProps) => {
  return (
    <StyledFlex
      direction={direction}
      justify={justify}
      align={align}
      wrap={wrap}
      gap={gap}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledFlex>
  );
};
