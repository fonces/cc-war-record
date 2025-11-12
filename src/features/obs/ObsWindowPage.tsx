import { useEffect } from "react";
import { useCharacterStore } from "@/stores";
import { DraggableHudElement } from "./components/DraggableHudElement";
import { useObsLayoutStore } from "./store/obsLayoutStore";

/**
 * OBSウィンドウページ
 * ブラウザソースとして使用する専用ページ
 */
export function ObsWindowPage() {
  const { elements, screenSize } = useObsLayoutStore();

  /**
   * localStorageの変更を監視して自動リロード
   * 戦績データが更新されたら画面を再描画
   */
  useEffect(() => {
    // ブラウザソースが開いていることを通知
    localStorage.setItem("obs-browser-source-status", "open");

    const handleStorageChange = (e: StorageEvent) => {
      // キャラクターまたは戦績データが変更された場合はストアをリロード
      if (e.key === "cc-war-record-characters" || e.key === "cc-war-record-match-records") {
        // Zustandストアのデータを再読み込み
        useCharacterStore.getState().loadData();
      }
    };

    const handleBeforeUnload = () => {
      // ページが閉じられる前にステータスをクリア
      localStorage.removeItem("obs-browser-source-status");
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    // クリーンアップ: ページを離れたらステータスをクリア
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      localStorage.removeItem("obs-browser-source-status");
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "transparent",
        // スクロールバーを完全に非表示
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>
        {`
          body {
            overflow: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          body::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div
        style={{
          width: `${screenSize.width}px`,
          height: `${screenSize.height}px`,
          position: "relative",
          background: "transparent",
        }}
      >
        {elements.map((element) => (
          <DraggableHudElement key={element.id} element={element} editMode={false} isDraggingGroup={false} activeId={null} groupDragDelta={null} />
        ))}
      </div>
    </div>
  );
}
