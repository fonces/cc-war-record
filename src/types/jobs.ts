/**
 * FF14 ジョブの種類定義
 */

// ロール定義
export const ROLES = {
  TANK: 'tank',
  HEALER: 'healer',
  MELEE_DPS: 'melee_dps',
  PHYSICAL_RANGED_DPS: 'physical_ranged_dps',
  MAGICAL_RANGED_DPS: 'magical_ranged_dps',
} as const

export type Role = typeof ROLES[keyof typeof ROLES]

// ジョブ定義
export const JOBS = {
  // タンク
  PALADIN: 'PLD',
  WARRIOR: 'WAR',
  DARK_KNIGHT: 'DRK',
  GUNBREAKER: 'GNB',
  
  // ヒーラー
  WHITE_MAGE: 'WHM',
  SCHOLAR: 'SCH',
  ASTROLOGIAN: 'AST',
  SAGE: 'SGE',
  
  // 近接DPS
  MONK: 'MNK',
  DRAGOON: 'DRG',
  NINJA: 'NIN',
  SAMURAI: 'SAM',
  REAPER: 'RPR',
  VIPER: 'VPR',
  
  // 物理遠隔DPS
  BARD: 'BRD',
  MACHINIST: 'MCH',
  DANCER: 'DNC',
  
  // 魔法遠隔DPS
  BLACK_MAGE: 'BLM',
  SUMMONER: 'SMN',
  RED_MAGE: 'RDM',
  BLUE_MAGE: 'BLU',
  PICTOMANCER: 'PCT',
} as const

export type Job = typeof JOBS[keyof typeof JOBS]

// ジョブの詳細情報
export type JobInfo = {
  /** ジョブコード */
  code: Job
  /** 日本語名 */
  name: string
  /** 英語名 */
  nameEn: string
  /** 英語省略名（3文字程度） */
  shortName: string
  /** ロール */
  role: Role
  /** XIVAPIアイコンID */
  iconId: number
  /** カラーコード */
  color: string
}

// ジョブ詳細情報の定義
export const JOB_INFO: Record<Job, JobInfo> = {
  // タンク
  [JOBS.PALADIN]: {
    code: JOBS.PALADIN,
    name: 'ナイト',
    nameEn: 'Paladin',
    shortName: 'PLD',
    role: ROLES.TANK,
    iconId: 19,
    color: '#A8D2E6',
  },
  [JOBS.WARRIOR]: {
    code: JOBS.WARRIOR,
    name: '戦士',
    nameEn: 'Warrior',
    shortName: 'WAR',
    role: ROLES.TANK,
    iconId: 21,
    color: '#CF2621',
  },
  [JOBS.DARK_KNIGHT]: {
    code: JOBS.DARK_KNIGHT,
    name: '暗黒騎士',
    nameEn: 'Dark Knight',
    shortName: 'DRK',
    role: ROLES.TANK,
    iconId: 32,
    color: '#D126CC',
  },
  [JOBS.GUNBREAKER]: {
    code: JOBS.GUNBREAKER,
    name: 'ガンブレイカー',
    nameEn: 'Gunbreaker',
    shortName: 'GNB',
    role: ROLES.TANK,
    iconId: 37,
    color: '#796D30',
  },
  
  // ヒーラー
  [JOBS.WHITE_MAGE]: {
    code: JOBS.WHITE_MAGE,
    name: '白魔道士',
    nameEn: 'White Mage',
    shortName: 'WHM',
    role: ROLES.HEALER,
    iconId: 24,
    color: '#FFF0DC',
  },
  [JOBS.SCHOLAR]: {
    code: JOBS.SCHOLAR,
    name: '学者',
    nameEn: 'Scholar',
    shortName: 'SCH',
    role: ROLES.HEALER,
    iconId: 28,
    color: '#8657FF',
  },
  [JOBS.ASTROLOGIAN]: {
    code: JOBS.ASTROLOGIAN,
    name: '占星術師',
    nameEn: 'Astrologian',
    shortName: 'AST',
    role: ROLES.HEALER,
    iconId: 33,
    color: '#FFE74A',
  },
  [JOBS.SAGE]: {
    code: JOBS.SAGE,
    name: '賢者',
    nameEn: 'Sage',
    shortName: 'SGE',
    role: ROLES.HEALER,
    iconId: 40,
    color: '#ADFF2F',
  },
  
  // 近接DPS
  [JOBS.MONK]: {
    code: JOBS.MONK,
    name: 'モンク',
    nameEn: 'Monk',
    shortName: 'MNK',
    role: ROLES.MELEE_DPS,
    iconId: 20,
    color: '#D69C00',
  },
  [JOBS.DRAGOON]: {
    code: JOBS.DRAGOON,
    name: '竜騎士',
    nameEn: 'Dragoon',
    shortName: 'DRG',
    role: ROLES.MELEE_DPS,
    iconId: 22,
    color: '#4164CD',
  },
  [JOBS.NINJA]: {
    code: JOBS.NINJA,
    name: '忍者',
    nameEn: 'Ninja',
    shortName: 'NIN',
    role: ROLES.MELEE_DPS,
    iconId: 30,
    color: '#AF1964',
  },
  [JOBS.SAMURAI]: {
    code: JOBS.SAMURAI,
    name: '侍',
    nameEn: 'Samurai',
    shortName: 'SAM',
    role: ROLES.MELEE_DPS,
    iconId: 34,
    color: '#E46D04',
  },
  [JOBS.REAPER]: {
    code: JOBS.REAPER,
    name: 'リーパー',
    nameEn: 'Reaper',
    shortName: 'RPR',
    role: ROLES.MELEE_DPS,
    iconId: 39,
    color: '#965A90',
  },
  [JOBS.VIPER]: {
    code: JOBS.VIPER,
    name: 'ヴァイパー',
    nameEn: 'Viper',
    shortName: 'VPR',
    role: ROLES.MELEE_DPS,
    iconId: 41,
    color: '#906020',
  },
  
  // 物理遠隔DPS
  [JOBS.BARD]: {
    code: JOBS.BARD,
    name: '吟遊詩人',
    nameEn: 'Bard',
    shortName: 'BRD',
    role: ROLES.PHYSICAL_RANGED_DPS,
    iconId: 23,
    color: '#91BA5E',
  },
  [JOBS.MACHINIST]: {
    code: JOBS.MACHINIST,
    name: '機工士',
    nameEn: 'Machinist',
    shortName: 'MCH',
    role: ROLES.PHYSICAL_RANGED_DPS,
    iconId: 31,
    color: '#6EE1D6',
  },
  [JOBS.DANCER]: {
    code: JOBS.DANCER,
    name: '踊り子',
    nameEn: 'Dancer',
    shortName: 'DNC',
    role: ROLES.PHYSICAL_RANGED_DPS,
    iconId: 38,
    color: '#E2B0AF',
  },
  
  // 魔法遠隔DPS
  [JOBS.BLACK_MAGE]: {
    code: JOBS.BLACK_MAGE,
    name: '黒魔道士',
    nameEn: 'Black Mage',
    shortName: 'BLM',
    role: ROLES.MAGICAL_RANGED_DPS,
    iconId: 25,
    color: '#A579D6',
  },
  [JOBS.SUMMONER]: {
    code: JOBS.SUMMONER,
    name: '召喚士',
    nameEn: 'Summoner',
    shortName: 'SMN',
    role: ROLES.MAGICAL_RANGED_DPS,
    iconId: 27,
    color: '#2D9B78',
  },
  [JOBS.RED_MAGE]: {
    code: JOBS.RED_MAGE,
    name: '赤魔道士',
    nameEn: 'Red Mage',
    shortName: 'RDM',
    role: ROLES.MAGICAL_RANGED_DPS,
    iconId: 35,
    color: '#E87B7B',
  },
  [JOBS.BLUE_MAGE]: {
    code: JOBS.BLUE_MAGE,
    name: '青魔道士',
    nameEn: 'Blue Mage',
    shortName: 'BLU',
    role: ROLES.MAGICAL_RANGED_DPS,
    iconId: 36,
    color: '#4F81BD',
  },
  [JOBS.PICTOMANCER]: {
    code: JOBS.PICTOMANCER,
    name: 'ピクトマンサー',
    nameEn: 'Pictomancer',
    shortName: 'PCT',
    role: ROLES.MAGICAL_RANGED_DPS,
    iconId: 42,
    color: '#F0E68C',
  },
}

// ロール別のジョブリスト取得ユーティリティ
export const getJobsByRole = (role: Role): JobInfo[] => {
  return Object.values(JOB_INFO).filter(job => job.role === role)
}

// ジョブコードからジョブ情報を取得
export const getJobInfo = (jobCode: Job): JobInfo | undefined => {
  return JOB_INFO[jobCode]
}

// すべてのジョブを配列で取得
export const getAllJobs = (): JobInfo[] => {
  return Object.values(JOB_INFO)
}

// ジョブのアイコンURLを取得
export const getJobIconUrl = (job: Job): string => {
  const jobInfo = getJobInfo(job)
  if (!jobInfo) {
    return ''
  }
  return `https://xivapi.com/i/062000/062${jobInfo.iconId.toString().padStart(3, '0')}.png`
}

// ロール名の日本語変換
export const ROLE_NAMES: Record<Role, string> = {
  [ROLES.TANK]: 'タンク',
  [ROLES.HEALER]: 'ヒーラー',
  [ROLES.MELEE_DPS]: '近接DPS',
  [ROLES.PHYSICAL_RANGED_DPS]: '物理遠隔DPS',
  [ROLES.MAGICAL_RANGED_DPS]: '魔法遠隔DPS',
}

// ロール表示順序
export const ROLE_ORDER: Role[] = [
  ROLES.TANK,
  ROLES.HEALER,
  ROLES.MELEE_DPS,
  ROLES.PHYSICAL_RANGED_DPS,
  ROLES.MAGICAL_RANGED_DPS,
]