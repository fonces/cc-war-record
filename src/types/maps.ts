/**
 * FF14 クリスタルコンフリクト マップの型定義
 */

// マップの種類定義
export const MAPS = {
  // 既存マップ
  THE_PALAISTRA: "THE_PALAISTRA",
  VOLCANIC_HEART: "VOLCANIC_HEART",
  CLOUD_NINE: "CLOUD_NINE",
  TOUHOU_KARAKURI_GOTEN: "TOUHOU_KARAKURI_GOTEN",
  RED_SANDS: "RED_SANDS",
  BAYSIDE_BATTLEGROUND: "BAYSIDE_BATTLEGROUND",
} as const;

export type CrystalConflictMap = (typeof MAPS)[keyof typeof MAPS];

// マップのテーマ・環境
export const MAP_THEMES = {
  ARENA: "arena", // アリーナ系
  SKY: "sky", // 空中系
  VOLCANIC: "volcanic", // 火山系
  WATER: "water", // 水系
  CASTLE: "castle", // 城・建築系
  URBAN: "urban", // 都市系
  DESERT: "desert", // 砂漠系
} as const;

export type MapTheme = (typeof MAP_THEMES)[keyof typeof MAP_THEMES];

// マップのサイズ分類
export const MAP_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export type MapSize = (typeof MAP_SIZES)[keyof typeof MAP_SIZES];

// マップの特徴・戦術的要素
export const MAP_FEATURES = {
  CENTRAL_CRYSTAL: "central_crystal", // 中央クリスタル重視
  MULTI_LEVEL: "multi_level", // 多層構造
  NARROW_PATHS: "narrow_paths", // 狭い通路
  OPEN_AREA: "open_area", // 開けたエリア
  ENVIRONMENTAL_HAZARDS: "environmental_hazards", // 環境ギミック
  VERTICAL_MOVEMENT: "vertical_movement", // 縦の移動要素
} as const;

export type MapFeature = (typeof MAP_FEATURES)[keyof typeof MAP_FEATURES];

// マップの詳細情報
export type MapInfo = {
  /** マップコード */
  code: CrystalConflictMap;
  /** 日本語名 */
  name: string;
  /** 英語名 */
  nameEn: string;
  /** テーマ・環境 */
  theme: MapTheme;
  /** サイズ分類 */
  size: MapSize;
  /** 特徴的な要素 */
  features: MapFeature[];
  /** 実装シーズン */
  implementedSeason: string;
  /** マップの説明 */
  description: string;
  /** 戦術的なポイント */
  tacticalNotes: string[];
  /** カラーコード（テーマ色） */
  color: string;
};

// マップ詳細情報の定義
export const MAP_INFO: Record<CrystalConflictMap, MapInfo> = {
  [MAPS.THE_PALAISTRA]: {
    code: MAPS.THE_PALAISTRA,
    name: "パライストラ",
    nameEn: "The Palaistra",
    theme: MAP_THEMES.ARENA,
    size: MAP_SIZES.MEDIUM,
    features: [MAP_FEATURES.CENTRAL_CRYSTAL, MAP_FEATURES.OPEN_AREA],
    implementedSeason: "6.1",
    description: "クリスタルコンフリクトの基本となるアリーナマップ",
    tacticalNotes: ["中央の大きな円形エリアが主戦場", "サイドルートからの奇襲が有効", "視界が良く遠距離ジョブが活躍しやすい"],
    color: "#D4AF37",
  },

  [MAPS.VOLCANIC_HEART]: {
    code: MAPS.VOLCANIC_HEART,
    name: "ヴォルカニックハート",
    nameEn: "The Volcanic Heart",
    theme: MAP_THEMES.VOLCANIC,
    size: MAP_SIZES.MEDIUM,
    features: [MAP_FEATURES.ENVIRONMENTAL_HAZARDS, MAP_FEATURES.CENTRAL_CRYSTAL],
    implementedSeason: "6.25",
    description: "火山地帯の溶岩に囲まれた危険なマップ",
    tacticalNotes: ["溶岩エリアによるダメージゾーン", "安全地帯の確保が最優先", "環境を利用した位置取りが鍵"],
    color: "#FF4500",
  },

  [MAPS.CLOUD_NINE]: {
    code: MAPS.CLOUD_NINE,
    name: "クラウドナイン",
    nameEn: "Cloud Nine",
    theme: MAP_THEMES.SKY,
    size: MAP_SIZES.LARGE,
    features: [MAP_FEATURES.MULTI_LEVEL, MAP_FEATURES.VERTICAL_MOVEMENT],
    implementedSeason: "6.2",
    description: "雲上の浮遊都市を舞台とした立体的なマップ",
    tacticalNotes: ["上下の移動を活用した立体戦闘", "高所からの視界確保が重要", "ジャンプパッドを使った機動戦術"],
    color: "#87CEEB",
  },

  [MAPS.TOUHOU_KARAKURI_GOTEN]: {
    code: MAPS.TOUHOU_KARAKURI_GOTEN,
    name: "東方絡繰御殿",
    nameEn: "The Clockwork Castletown",
    theme: MAP_THEMES.CASTLE,
    size: MAP_SIZES.MEDIUM,
    features: [MAP_FEATURES.MULTI_LEVEL, MAP_FEATURES.NARROW_PATHS, MAP_FEATURES.ENVIRONMENTAL_HAZARDS],
    implementedSeason: "7.0",
    description: "東洋風の機械仕掛けの御殿を舞台とした複雑なマップ",
    tacticalNotes: ["絡繰仕掛けによる動的な地形変化", "複数の階層を活用した立体戦術", "狭い廊下での密集戦闘が頻発", "機械仕掛けのタイミングを読む必要"],
    color: "#8B0000",
  },

  [MAPS.RED_SANDS]: {
    code: MAPS.RED_SANDS,
    name: "レッドサンズ",
    nameEn: "The Red Sands",
    theme: MAP_THEMES.DESERT,
    size: MAP_SIZES.LARGE,
    features: [MAP_FEATURES.OPEN_AREA, MAP_FEATURES.ENVIRONMENTAL_HAZARDS],
    implementedSeason: "7.1",
    description: "赤い砂漠の中に建てられた古代遺跡マップ",
    tacticalNotes: ["広大な砂漠エリアでの長距離戦", "砂嵐による視界制限ギミック", "古代遺跡の構造物を利用した戦術"],
    color: "#CD853F",
  },

  [MAPS.BAYSIDE_BATTLEGROUND]: {
    code: MAPS.BAYSIDE_BATTLEGROUND,
    name: "ベイサイドバトルグラウンド",
    nameEn: "The Bayside Battleground",
    theme: MAP_THEMES.WATER,
    size: MAP_SIZES.LARGE,
    features: [MAP_FEATURES.OPEN_AREA, MAP_FEATURES.CENTRAL_CRYSTAL, MAP_FEATURES.ENVIRONMENTAL_HAZARDS],
    implementedSeason: "7.1",
    description: "海沿いの港湾施設を舞台とした開放的な水辺マップ",
    tacticalNotes: ["海風による視界とスキル効果への影響", "港湾クレーンや建物を利用した遮蔽戦術", "中央の桟橋エリアでの激戦", "潮の満ち引きによる地形変化"],
    color: "#20B2AA",
  },
};
