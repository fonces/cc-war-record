import { createRootRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { Suspense, useEffect, useRef, useState } from "react";
import { Header, NotFoundPage, LoadingFallback } from "@/components/layout";
import { Snackbar } from "@/components/ui";
import { useTranslation } from "@/hooks";
import { sendPageView } from "@/lib/analytics";
import { checkBuildUpdate } from "@/lib/buildInfo";

/**
 * ルートレイアウトコンポーネント
 * すべてのルートで共有されるレイアウトを定義
 */
export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const router = useRouterState();
  const { t } = useTranslation();
  const shouldCheckUpdateRef = useRef(false);
  const [showUpdateSnackbar, setShowUpdateSnackbar] = useState(false);

  // OBSウィンドウページかどうかを判定
  const isObsMode = router.location.pathname.includes("/obs/window");

  // ページ遷移時にスクロールを一番上に戻す & GA4にページビュー送信
  useEffect(() => {
    window.scrollTo(0, 0);
    sendPageView(router.location.pathname);
  }, [router.location.pathname]);

  // ビルド更新のチェック
  useEffect(() => {
    if (import.meta.env.PROD && !showUpdateSnackbar && !shouldCheckUpdateRef.current) {
      setTimeout(() => {
        checkBuildUpdate().then((updated) => {
          if (updated) {
            setShowUpdateSnackbar(true);
          }
        });
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.location.pathname]);

  const handleReload = () => {
    window.location.reload();
  };

  const handleCloseSnackbar = () => {
    setShowUpdateSnackbar(false);
    shouldCheckUpdateRef.current = true;
  };

  // OBSモードの場合はヘッダーとサイドメニューを非表示
  if (isObsMode) {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
    );
  }

  return (
    <Header>
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
      <Snackbar
        open={showUpdateSnackbar}
        message={t("common.buildUpdate.message")}
        actionLabel={t("common.buildUpdate.reload")}
        onAction={handleReload}
        onClose={handleCloseSnackbar}
      />
    </Header>
  );
}

function NotFoundComponent() {
  return <NotFoundPage />;
}
