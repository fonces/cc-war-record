import { useState, useEffect } from "react";
import type { CrystalConflictMap } from "@/types";
import { getCurrentMap, getNextMap, getNextMapChangeTime } from "@/utils/maps";

/**
 * 現在のマップをリアルタイムで取得するカスタムフック
 * マップが切り替わるタイミングで自動的に更新されます
 *
 * @returns 現在のマップ
 *
 * @example
 * const currentMap = useCurrentMap();
 * console.log(currentMap); // "THE_PALAISTRA" など
 */
export const useCurrentMap = (): CrystalConflictMap => {
  const [currentMap, setCurrentMap] = useState<CrystalConflictMap>(() => getCurrentMap());

  useEffect(() => {
    // 初期マップを設定
    setCurrentMap(getCurrentMap());

    // 次の切り替え時刻までの待機時間を計算してタイマーをセット
    const updateMap = () => {
      const now = new Date();
      const nextChangeTime = getNextMapChangeTime(now);
      const timeUntilChange = nextChangeTime.getTime() - now.getTime();

      // 次の切り替え時刻にマップを更新
      const timeoutId = setTimeout(() => {
        setCurrentMap(getCurrentMap());
        // 次の切り替えのためにタイマーを再設定
        updateMap();
      }, timeUntilChange);

      return timeoutId;
    };

    const timeoutId = updateMap();

    // クリーンアップ
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return currentMap;
};

/**
 * 次に表示されるマップをリアルタイムで取得するカスタムフック
 * マップが切り替わるタイミングで自動的に更新されます
 *
 * @returns 次に表示されるマップ
 *
 * @example
 * const nextMap = useNextMap();
 * console.log(nextMap); // "VOLCANIC_HEART" など
 */
export const useNextMap = (): CrystalConflictMap => {
  const [nextMap, setNextMap] = useState<CrystalConflictMap>(() => getNextMap());

  useEffect(() => {
    // 初期マップを設定
    setNextMap(getNextMap());

    // 次の切り替え時刻までの待機時間を計算してタイマーをセット
    const updateMap = () => {
      const now = new Date();
      const nextChangeTime = getNextMapChangeTime(now);
      const timeUntilChange = nextChangeTime.getTime() - now.getTime();

      // 次の切り替え時刻にマップを更新
      const timeoutId = setTimeout(() => {
        setNextMap(getNextMap());
        // 次の切り替えのためにタイマーを再設定
        updateMap();
      }, timeUntilChange);

      return timeoutId;
    };

    const timeoutId = updateMap();

    // クリーンアップ
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return nextMap;
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
