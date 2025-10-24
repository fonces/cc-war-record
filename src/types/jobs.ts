/**
 * FF14 ジョブの種類定義
 */

// ロール定義
export const ROLES = {
  TANK: "tank",
  HEALER: "healer",
  MELEE_DPS: "melee_dps",
  PHYSICAL_RANGED_DPS: "physical_ranged_dps",
  MAGICAL_RANGED_DPS: "magical_ranged_dps",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

// ロール情報の型定義
export type RoleInfo = {
  /** ロールコード */
  code: Role;
  /** 日本語名 */
  name: string;
  /** 英語名 */
  nameEn: string;
  /** カラーコード */
  color: string;
};

// ロール詳細情報の定義
export const ROLE_INFO: Record<Role, RoleInfo> = {
  [ROLES.TANK]: {
    code: ROLES.TANK,
    name: "タンク",
    nameEn: "Tank",
    color: "#3b82f6", // Blue
  },
  [ROLES.HEALER]: {
    code: ROLES.HEALER,
    name: "ヒーラー",
    nameEn: "Healer",
    color: "#10b981", // Green
  },
  [ROLES.MELEE_DPS]: {
    code: ROLES.MELEE_DPS,
    name: "近接DPS",
    nameEn: "MeleeDPS",
    color: "#f59e0b", // Orange
  },
  [ROLES.PHYSICAL_RANGED_DPS]: {
    code: ROLES.PHYSICAL_RANGED_DPS,
    name: "物理遠隔DPS",
    nameEn: "PhysicalRangedDPS",
    color: "#8b5cf6", // Purple
  },
  [ROLES.MAGICAL_RANGED_DPS]: {
    code: ROLES.MAGICAL_RANGED_DPS,
    name: "魔法遠隔DPS",
    nameEn: "MagicalRangedDPS",
    color: "#ef4444", // Red
  },
};

// ジョブ定義
export const JOBS = {
  // タンク
  PALADIN: "PLD",
  WARRIOR: "WAR",
  DARK_KNIGHT: "DRK",
  GUNBREAKER: "GNB",

  // ヒーラー
  WHITE_MAGE: "WHM",
  SCHOLAR: "SCH",
  ASTROLOGIAN: "AST",
  SAGE: "SGE",

  // 近接DPS
  MONK: "MNK",
  DRAGOON: "DRG",
  NINJA: "NIN",
  SAMURAI: "SAM",
  REAPER: "RPR",
  VIPER: "VPR",

  // 物理遠隔DPS
  BARD: "BRD",
  MACHINIST: "MCH",
  DANCER: "DNC",

  // 魔法遠隔DPS
  BLACK_MAGE: "BLM",
  SUMMONER: "SMN",
  RED_MAGE: "RDM",
  PICTOMANCER: "PCT",
} as const;

export type Job = (typeof JOBS)[keyof typeof JOBS];

// ジョブの詳細情報
export type JobInfo = {
  /** ジョブコード */
  code: Job;
  /** 日本語名 */
  name: string;
  /** 英語名 */
  nameEn: string;
  /** 英語省略名（3文字程度） */
  shortName: string;
  /** ロール */
  role: Role;
  /** XIVAPIアイコンID */
  iconId: number;
  /** カラーコード */
  color: string;
};

// ジョブ詳細情報の定義
export const JOB_INFO: Record<Job, JobInfo> = {
  // タンク
  [JOBS.PALADIN]: {
    code: JOBS.PALADIN,
    name: "ナイト",
    nameEn: "Paladin",
    shortName: "PLD",
    role: ROLES.TANK,
    iconId: 19,
    color: "#5EADDC", // 視認性を向上(より濃い青)
  },
  [JOBS.WARRIOR]: {
    code: JOBS.WARRIOR,
    name: "戦士",
    nameEn: "Warrior",
    shortName: "WAR",
    role: ROLES.TANK,
    iconId: 21,
    color: "#CF2621",
  },
  [JOBS.DARK_KNIGHT]: {
    code: JOBS.DARK_KNIGHT,
    name: "暗黒騎士",
    nameEn: "DarkKnight",
    shortName: "DRK",
    role: ROLES.TANK,
    iconId: 32,
    color: "#D126CC",
  },
  [JOBS.GUNBREAKER]: {
    code: JOBS.GUNBREAKER,
    name: "ガンブレイカー",
    nameEn: "Gunbreaker",
    shortName: "GNB",
    role: ROLES.TANK,
    iconId: 37,
    color: "#9C8542", // 視認性を向上(より濃い茶色)
  },

  // ヒーラー
  [JOBS.WHITE_MAGE]: {
    code: JOBS.WHITE_MAGE,
    name: "白魔道士",
    nameEn: "WhiteMage",
    shortName: "WHM",
    role: ROLES.HEALER,
    iconId: 24,
    color: "#E6D8BC", // 視認性を向上(少し濃いベージュ)
  },
  [JOBS.SCHOLAR]: {
    code: JOBS.SCHOLAR,
    name: "学者",
    nameEn: "Scholar",
    shortName: "SCH",
    role: ROLES.HEALER,
    iconId: 28,
    color: "#8657FF",
  },
  [JOBS.ASTROLOGIAN]: {
    code: JOBS.ASTROLOGIAN,
    name: "占星術師",
    nameEn: "Astrologian",
    shortName: "AST",
    role: ROLES.HEALER,
    iconId: 33,
    color: "#E6C84A", // 視認性を向上(より濃い黄色)
  },
  [JOBS.SAGE]: {
    code: JOBS.SAGE,
    name: "賢者",
    nameEn: "Sage",
    shortName: "SGE",
    role: ROLES.HEALER,
    iconId: 40,
    color: "#8FD14F", // 視認性を向上(より濃い黄緑)
  },

  // 近接DPS
  [JOBS.MONK]: {
    code: JOBS.MONK,
    name: "モンク",
    nameEn: "Monk",
    shortName: "MNK",
    role: ROLES.MELEE_DPS,
    iconId: 20,
    color: "#D69C00",
  },
  [JOBS.DRAGOON]: {
    code: JOBS.DRAGOON,
    name: "竜騎士",
    nameEn: "Dragoon",
    shortName: "DRG",
    role: ROLES.MELEE_DPS,
    iconId: 22,
    color: "#4164CD",
  },
  [JOBS.NINJA]: {
    code: JOBS.NINJA,
    name: "忍者",
    nameEn: "Ninja",
    shortName: "NIN",
    role: ROLES.MELEE_DPS,
    iconId: 30,
    color: "#AF1964",
  },
  [JOBS.SAMURAI]: {
    code: JOBS.SAMURAI,
    name: "侍",
    nameEn: "Samurai",
    shortName: "SAM",
    role: ROLES.MELEE_DPS,
    iconId: 34,
    color: "#E46D04",
  },
  [JOBS.REAPER]: {
    code: JOBS.REAPER,
    name: "リーパー",
    nameEn: "Reaper",
    shortName: "RPR",
    role: ROLES.MELEE_DPS,
    iconId: 39,
    color: "#965A90",
  },
  [JOBS.VIPER]: {
    code: JOBS.VIPER,
    name: "ヴァイパー",
    nameEn: "Viper",
    shortName: "VPR",
    role: ROLES.MELEE_DPS,
    iconId: 41,
    color: "#B07830", // 視認性を向上(より濃いベージュ)
  },

  // 物理遠隔DPS
  [JOBS.BARD]: {
    code: JOBS.BARD,
    name: "吟遊詩人",
    nameEn: "Bard",
    shortName: "BRD",
    role: ROLES.PHYSICAL_RANGED_DPS,
    iconId: 23,
    color: "#91BA5E",
  },
  [JOBS.MACHINIST]: {
    code: JOBS.MACHINIST,
    name: "機工士",
    nameEn: "Machinist",
    shortName: "MCH",
    role: ROLES.PHYSICAL_RANGED_DPS,
    iconId: 31,
    color: "#6EE1D6",
  },
  [JOBS.DANCER]: {
    code: JOBS.DANCER,
    name: "踊り子",
    nameEn: "Dancer",
    shortName: "DNC",
    role: ROLES.PHYSICAL_RANGED_DPS,
    iconId: 38,
    color: "#D98B8A", // 視認性を向上(より濃いピンク)
  },

  // 魔法遠隔DPS
  [JOBS.BLACK_MAGE]: {
    code: JOBS.BLACK_MAGE,
    name: "黒魔道士",
    nameEn: "BlackMage",
    shortName: "BLM",
    role: ROLES.MAGICAL_RANGED_DPS,
    iconId: 25,
    color: "#A579D6",
  },
  [JOBS.SUMMONER]: {
    code: JOBS.SUMMONER,
    name: "召喚士",
    nameEn: "Summoner",
    shortName: "SMN",
    role: ROLES.MAGICAL_RANGED_DPS,
    iconId: 27,
    color: "#2D9B78",
  },
  [JOBS.RED_MAGE]: {
    code: JOBS.RED_MAGE,
    name: "赤魔道士",
    nameEn: "RedMage",
    shortName: "RDM",
    role: ROLES.MAGICAL_RANGED_DPS,
    iconId: 35,
    color: "#E87B7B",
  },
  [JOBS.PICTOMANCER]: {
    code: JOBS.PICTOMANCER,
    name: "ピクトマンサー",
    nameEn: "Pictomancer",
    shortName: "PCT",
    role: ROLES.MAGICAL_RANGED_DPS,
    iconId: 42,
    color: "#D4C05C", // 視認性を向上(より濃い黄色)
  },
};
