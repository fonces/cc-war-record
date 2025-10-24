/**
 * スクロールバーの幅を取得する
 * @returns スクロールバーの幅（px）
 */
export const getScrollbarWidth = (): number => {
  // SSR対応: windowが存在しない場合は0を返す
  if (typeof window === "undefined") {
    return 0;
  }

  // 一時的な要素を作成してスクロールバーの幅を計測
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);

  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // クリーンアップ
  document.body.removeChild(outer);

  return scrollbarWidth;
};
