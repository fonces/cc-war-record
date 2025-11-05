import { useState, useEffect } from "react";

/**
 * メディアクエリの状態を監視するカスタムフック
 * @param query メディアクエリ文字列（例: "(max-width: 768px)"）
 * @returns メディアクエリにマッチしているかどうか
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // 初期値を設定
    setMatches(media.matches);

    // リスナー関数
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // イベントリスナーを追加
    media.addEventListener("change", listener);

    // クリーンアップ
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

/**
 * モバイル表示かどうかを判定するカスタムフック
 * @returns モバイル表示の場合true
 */
export const useIsMobile = (): boolean => {
  return useMediaQuery("(max-width: 768px)");
};
