import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '@/components/layout'

/**
 * ルートレイアウトコンポーネント
 * すべてのルートで共有されるレイアウトを定義
 */
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <Header>
      <Outlet />
    </Header>
  )
}
