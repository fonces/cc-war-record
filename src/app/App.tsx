import { RouterProvider, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { routeTree } from "@/routeTree.gen";

// ルーターインスタンスを作成
const router = createRouter({
  routeTree,
  basepath: import.meta.env.VITE_BASEPATH || "/",
  // View Transition APIを有効化
  defaultViewTransition: true,
});

// 型安全性のためにルーター型を宣言
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </>
  );
};
