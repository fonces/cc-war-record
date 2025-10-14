import { useEffect } from "react";

/**
 * ページタイトルを設定するカスタムフック
 * @param title ページタイトル（画面名）
 */
export const usePageTitle = (title?: string) => {
  useEffect(() => {
    const baseTitle = "クリコン戦績記録";
    document.title = title ? `${baseTitle} - ${title}` : baseTitle;

    // クリーンアップ: コンポーネントがアンマウントされたら基本タイトルに戻す
    return () => {
      document.title = baseTitle;
    };
  }, [title]);
};
