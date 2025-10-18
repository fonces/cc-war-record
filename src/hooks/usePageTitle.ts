import { useEffect } from "react";
import { useTranslation } from "./useTranslation";

/**
 * ページタイトルを設定するカスタムフック
 * @param title ページタイトル（画面名）
 */
export const usePageTitle = (title?: string) => {
  const { t } = useTranslation();

  useEffect(() => {
    const baseTitle = t("common.appName");
    document.title = title ? `${baseTitle} - ${title}` : baseTitle;

    // クリーンアップ: コンポーネントがアンマウントされたら基本タイトルに戻す
    return () => {
      document.title = baseTitle;
    };
  }, [title, t]);
};
