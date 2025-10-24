/**
 * ジョブ関連のユーティリティ関数
 */

import { ROLES, JOB_INFO } from "@/types/jobs";
import type { Role, Job, JobInfo } from "@/types";

// ロール別のジョブリスト取得ユーティリティ
export const getJobsByRole = (role: Role): JobInfo[] => {
  return Object.values(JOB_INFO).filter((job) => job.role === role);
};

// ジョブコードからジョブ情報を取得
export const getJobInfo = (jobCode: Job): JobInfo | undefined => {
  return JOB_INFO[jobCode];
};

// すべてのジョブを配列で取得
export const getAllJobs = (): JobInfo[] => {
  return Object.values(JOB_INFO);
};

// ジョブのアイコンURLを取得
export const getJobIconUrl = (job: Job): string => {
  const jobInfo = getJobInfo(job);
  if (!jobInfo) {
    return "";
  }

  // ロールに応じたディレクトリを決定
  let roleDir = "";
  switch (jobInfo.role) {
    case ROLES.TANK:
      roleDir = "01_TANK";
      break;
    case ROLES.HEALER:
      roleDir = "02_HEALER";
      break;
    case ROLES.MELEE_DPS:
    case ROLES.PHYSICAL_RANGED_DPS:
    case ROLES.MAGICAL_RANGED_DPS:
      roleDir = "03_DPS";
      break;
  }

  return `${import.meta.env.VITE_BASEPATH || ""}/img/${roleDir}/Job/${jobInfo.nameEn}.png`;
};

// ロールのアイコンURLを取得
export const getRoleIconUrl = (role: Role): string => {
  let iconName = "";
  switch (role) {
    case ROLES.TANK:
      iconName = "TankRole";
      break;
    case ROLES.HEALER:
      iconName = "HealerRole";
      break;
    case ROLES.MELEE_DPS:
      iconName = "MeleeDPS";
      break;
    case ROLES.PHYSICAL_RANGED_DPS:
      iconName = "PhysicalRangedDPS";
      break;
    case ROLES.MAGICAL_RANGED_DPS:
      iconName = "MagicalRangedDPS";
      break;
  }

  return `${import.meta.env.VITE_BASEPATH || ""}/img/00_ROLE/${iconName}.png`;
};

// ロール名の日本語変換
export const ROLE_NAMES: Record<Role, string> = {
  [ROLES.TANK]: "タンク",
  [ROLES.HEALER]: "ヒーラー",
  [ROLES.MELEE_DPS]: "近接DPS",
  [ROLES.PHYSICAL_RANGED_DPS]: "物理遠隔DPS",
  [ROLES.MAGICAL_RANGED_DPS]: "魔法遠隔DPS",
};

// ロール表示順序
export const ROLE_ORDER: Role[] = [ROLES.TANK, ROLES.HEALER, ROLES.MELEE_DPS, ROLES.PHYSICAL_RANGED_DPS, ROLES.MAGICAL_RANGED_DPS];
