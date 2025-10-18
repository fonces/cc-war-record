import type { TFunction } from "i18next";
import type { CrystalConflictMap } from "@/types";

/**
 * マップ名の翻訳を取得する
 * @param map - マップコード
 * @param t - i18next の翻訳関数
 * @returns 翻訳されたマップ名
 */
export const getMapName = (map: CrystalConflictMap, t: TFunction): string => {
  return t(`maps.${map}`);
};
