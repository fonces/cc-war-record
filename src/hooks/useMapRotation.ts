import { useState, useEffect } from "react";
import { getCurrentMap, getNextMap, getNextMapChangeTime } from "@/utils/maps";
import type { CrystalConflictMap } from "@/types";

/**
 * 現在のマップと次のマップをリアルタイムで取得するカスタムフック
 * マップが切り替わるタイミングで自動的に更新されます
 *
 * @returns 現在のマップと次のマップ
 *
 * @example
 * const { currentMap, nextMap } = useMapRotation();
 * console.log(currentMap); // "THE_PALAISTRA" など
 * console.log(nextMap); // "VOLCANIC_HEART" など
 */
export const useMapRotation = (): {
  currentMap: CrystalConflictMap;
  nextMap: CrystalConflictMap;
} => {
  const [currentMap, setCurrentMap] = useState<CrystalConflictMap>(() => getCurrentMap());
  const [nextMap, setNextMap] = useState<CrystalConflictMap>(() => getNextMap());

  useEffect(() => {
    // 初期マップを設定
    setCurrentMap(getCurrentMap());
    setNextMap(getNextMap());

    // 次の切り替え時刻までの待機時間を計算してタイマーをセット
    const updateMaps = () => {
      const now = new Date();
      const nextChangeTime = getNextMapChangeTime(now);
      const timeUntilChange = nextChangeTime.getTime() - now.getTime();

      // 次の切り替え時刻にマップを更新
      const timeoutId = setTimeout(() => {
        setCurrentMap(getCurrentMap());
        setNextMap(getNextMap());
        // 次の切り替えのためにタイマーを再設定
        updateMaps();
      }, timeUntilChange);

      return timeoutId;
    };

    const timeoutId = updateMaps();

    // クリーンアップ
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return { currentMap, nextMap };
};
