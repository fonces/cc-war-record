import styled from 'styled-components'

type IconProps = {
  /** アイコンの種類 */
  name: 'hamburger' | 'close' | 'home' | 'history' | 'chart'
  /** サイズ */
  size?: number
  /** 色 */
  color?: string
  /** クリックハンドラー */
  onClick?: () => void
  /** クラス名 */
  className?: string
}

const StyledIcon = styled.button<Pick<IconProps, 'size' | 'color'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: ${({ size = 24 }) => size}px;
  height: ${({ size = 24 }) => size}px;
  color: ${({ color, theme }) => color || theme.colors.gray[700]};
  
  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
)

const HistoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

/**
 * アイコンコンポーネント
 */
export const Icon = ({ name, size = 24, color, onClick, className }: IconProps) => {
  const renderIcon = () => {
    switch (name) {
      case 'hamburger':
        return <HamburgerIcon />
      case 'close':
        return <CloseIcon />
      case 'home':
        return <HomeIcon />
      case 'history':
        return <HistoryIcon />
      case 'chart':
        return <ChartIcon />
      default:
        return null
    }
  }

  return (
    <StyledIcon
      size={size}
      color={color}
      onClick={onClick}
      className={className}
      type="button"
      aria-label={name}
    >
      {renderIcon()}
    </StyledIcon>
  )
}