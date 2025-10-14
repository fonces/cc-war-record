import { useEffect } from "react";

/**
 * スクロールをロックするカスタムフック
 * @param isLocked - スクロールをロックするかどうか
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      // スクロールバーの幅を計算
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // 現在のスクロール位置を保存
      const scrollY = window.scrollY;

      // スクロールを無効化し、スクロールバーの幅分パディングを追加
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        // クリーンアップ時に元に戻す
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isLocked]);
};
