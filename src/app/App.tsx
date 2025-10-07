import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'

// ルーターインスタンスを作成
const router = createRouter({ routeTree })

// 型安全性のためにルーター型を宣言
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const App = () => {
  return <RouterProvider router={router} />
}
