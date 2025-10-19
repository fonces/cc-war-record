import { useState, useEffect } from "react";
import type { CrystalConflictMap } from "@/types";
import { getCurrentMap, getNextMap, getNextMapChangeTime } from "@/utils/maps";

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

/**
 * 現在のマップと次の切り替え時刻を取得するカスタムフック
 * マップが切り替わるタイミングで自動的に更新されます
 *
 * @returns 現在のマップと次の切り替え時刻、残り時間（ミリ秒）
 *
 * @example
 * const { currentMap, nextChangeTime, remainingMs } = useCurrentMapWithTimer();
 * console.log(currentMap); // "THE_PALAISTRA" など
 * console.log(nextChangeTime); // 次の切り替え時刻
 * console.log(remainingMs); // 残り時間（ミリ秒）
 */
export const useCurrentMapWithTimer = (): {
  currentMap: CrystalConflictMap;
  nextChangeTime: Date;
  remainingMs: number;
} => {
  const [currentMap, setCurrentMap] = useState<CrystalConflictMap>(() => getCurrentMap());
  const [nextChangeTime, setNextChangeTime] = useState<Date>(() => getNextMapChangeTime());
  const [remainingMs, setRemainingMs] = useState<number>(() => {
    const now = new Date();
    const next = getNextMapChangeTime(now);
    return next.getTime() - now.getTime();
  });

  useEffect(() => {
    // 初期値を設定
    const now = new Date();
    setCurrentMap(getCurrentMap(now));
    setNextChangeTime(getNextMapChangeTime(now));
    setRemainingMs(getNextMapChangeTime(now).getTime() - now.getTime());

    // 1秒ごとに残り時間を更新
    const intervalId = setInterval(() => {
      const now = new Date();
      const next = getNextMapChangeTime(now);
      const remaining = next.getTime() - now.getTime();

      setRemainingMs(remaining);

      // 残り時間が0以下になったらマップを更新
      if (remaining <= 0) {
        setCurrentMap(getCurrentMap(now));
        setNextChangeTime(getNextMapChangeTime(now));
      }
    }, 1000);

    // クリーンアップ
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { currentMap, nextChangeTime, remainingMs };
};
