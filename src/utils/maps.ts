import { MAPS, MAP_INFO } from "@/types/maps";
import type { CrystalConflictMap, MapInfo, MapTheme, MapSize, MapFeature } from "@/types";
import type { TFunction } from "i18next";

/**
 * マップ名の翻訳を取得する
 * @param map - マップコード
 * @param t - i18next の翻訳関数
 * @returns 翻訳されたマップ名
 */
export const getMapName = (map: CrystalConflictMap, t: TFunction): string => {
  return t(`maps.${map}`);
};

/**
 * マップのローテーション順序
 * 1時間30分ごとにこの順序で切り替わる
 */
const MAP_ROTATION: CrystalConflictMap[] = [
  MAPS.THE_PALAISTRA, // 1. パライストラ
  MAPS.VOLCANIC_HEART, // 2. ヴォルカニックハート
  MAPS.TOUHOU_KARAKURI_GOTEN, // 3. 東方絡繰御殿
  MAPS.BAYSIDE_BATTLEGROUND, // 4. ベイサイドバトルグラウンド
  MAPS.CLOUD_NINE, // 5. クラウドナイン
  MAPS.RED_SANDS, // 6. レッド・サンズ
];

/**
 * 基準日時（UTC: 2022年01月01日 00:00:00 / JST: 2022年01月01日 09:00:00）
 * この日時からマップローテーションが開始されると仮定
 *
 * 注意: Date オブジェクトは内部的に UTC で管理されます
 * JST（日本標準時）は UTC+9 です
 */
const BASE_DATE = new Date("2022-01-01T00:00:00+09:00");

/**
 * 1つのマップの表示時間（ミリ秒）
 * 1時間30分 = 90分 = 5400秒 = 5400000ミリ秒
 */
const MAP_DURATION_MS = 90 * 60 * 1000;

/**
 * 現在のマップを取得する
 * @param currentDate - 現在日時（省略時は現在時刻）
 * @returns 現在表示されているマップ
 *
 * @example
 * const currentMap = getCurrentMap();
 * console.log(currentMap); // "THE_PALAISTRA" など
 *
 * // 特定の日時でのマップを取得
 * const specificMap = getCurrentMap(new Date("2025-10-19T12:00:00Z"));
 */
export const getCurrentMap = (currentDate: Date = new Date()): CrystalConflictMap => {
  // 基準日時からの経過時間（ミリ秒）
  const elapsedMs = currentDate.getTime() - BASE_DATE.getTime();

  // 現在のローテーション位置を計算
  const rotationIndex = Math.floor(elapsedMs / MAP_DURATION_MS) % MAP_ROTATION.length;

  return MAP_ROTATION[rotationIndex];
};

/**
 * 次に表示されるマップを取得する
 * @param currentDate - 現在日時（省略時は現在時刻）
 * @returns 次に表示されるマップ
 *
 * @example
 * const nextMap = getNextMap();
 * console.log(nextMap); // 次のマップ（例: "VOLCANIC_HEART"）
 */
export const getNextMap = (currentDate: Date = new Date()): CrystalConflictMap => {
  // 基準日時からの経過時間（ミリ秒）
  const elapsedMs = currentDate.getTime() - BASE_DATE.getTime();

  // 現在のローテーション位置を計算
  const currentRotationIndex = Math.floor(elapsedMs / MAP_DURATION_MS) % MAP_ROTATION.length;

  // 次のマップのインデックス（ローテーションの最後なら最初に戻る）
  const nextRotationIndex = (currentRotationIndex + 1) % MAP_ROTATION.length;

  return MAP_ROTATION[nextRotationIndex];
};

/**
 * 次のマップ切り替え時刻を取得する
 * @param currentDate - 現在日時（省略時は現在時刻）
 * @returns 次のマップに切り替わる日時
 *
 * @example
 * const nextChange = getNextMapChangeTime();
 * console.log(nextChange); // 次の切り替え時刻
 */
export const getNextMapChangeTime = (currentDate: Date = new Date()): Date => {
  // 基準日時からの経過時間（ミリ秒）
  const elapsedMs = currentDate.getTime() - BASE_DATE.getTime();

  // 現在のローテーション周期内での経過時間
  const currentCycleMs = elapsedMs % MAP_DURATION_MS;

  // 次の切り替えまでの残り時間
  const remainingMs = MAP_DURATION_MS - currentCycleMs;

  // 次の切り替え時刻
  return new Date(currentDate.getTime() + remainingMs);
};

/**
 * マップコードからマップ情報を取得
 */
export const getMapInfo = (mapCode: CrystalConflictMap): MapInfo | undefined => {
  return MAP_INFO[mapCode];
};

/**
 * すべてのマップを配列で取得
 */
export const getAllMaps = (): MapInfo[] => {
  return Object.values(MAP_INFO);
};

/**
 * テーマ別のマップ取得
 */
export const getMapsByTheme = (theme: MapTheme): MapInfo[] => {
  return Object.values(MAP_INFO).filter((map) => map.theme === theme);
};

/**
 * サイズ別のマップ取得
 */
export const getMapsBySize = (size: MapSize): MapInfo[] => {
  return Object.values(MAP_INFO).filter((map) => map.size === size);
};

/**
 * 特徴でマップを検索
 */
export const getMapsByFeature = (feature: MapFeature): MapInfo[] => {
  return Object.values(MAP_INFO).filter((map) => map.features.includes(feature));
};

/**
 * シーズン別のマップ取得
 */
export const getMapsBySeason = (season: string): MapInfo[] => {
  return Object.values(MAP_INFO).filter((map) => map.implementedSeason === season);
};

/**
 * マップ名での検索（日本語・英語両対応）
 */
export const searchMapsByName = (query: string): MapInfo[] => {
  const lowerQuery = query.toLowerCase();
  return Object.values(MAP_INFO).filter((map) => map.name.toLowerCase().includes(lowerQuery) || map.nameEn.toLowerCase().includes(lowerQuery));
};

/**
 * マップの実装順序でソート
 */
export const getSortedMapsByImplementation = (): MapInfo[] => {
  return Object.values(MAP_INFO).sort((a, b) => {
    // シーズン番号での比較（6.1 < 6.2 < 6.25 < 6.3 など）
    const parseVersion = (version: string) => {
      const parts = version.split(".");
      return parseFloat(parts[0]) * 100 + parseFloat(parts[1] || "0");
    };

    return parseVersion(a.implementedSeason) - parseVersion(b.implementedSeason);
  });
};
