/**
 * 履歴関連の型定義
 */

import type { Job } from "./jobs";
import type { CrystalConflictMap } from "./maps";
import type { UUIDv4 } from "./string";

/**
 * キャラクター情報の型
 */
export type Character = {
  /** 一意識別子 */
  uuid: UUIDv4;
  /** キャラクター名 */
  name: string;
  /** 作成日時（ISO文字列） */
  createdAt: string;
  /** 更新日時（ISO文字列） */
  updatedAt: string;
};

/**
 * 戦績記録の型
 */
export type MatchRecord = {
  /** 一意識別子 */
  uuid: UUIDv4;
  /** キャラクターUUID */
  characterUuid: UUIDv4;
  /** シーズンUUID */
  seasonUuid: UUIDv4;
  /** 使用ジョブ */
  job: Job;
  /** マップ */
  map: CrystalConflictMap;
  /** 勝敗（true: 勝利, false: 敗北） */
  isWin: boolean;
  /** メモ（任意） */
  memo?: string;
  /** 記録日時（ISO文字列） */
  recordedAt: string;
  /** 作成日時（ISO文字列） */
  createdAt: string;
  /** 更新日時（ISO文字列） */
  updatedAt: string;
};

/**
 * キャラクター戦績サマリーの型
 */
export type CharacterStats = {
  /** キャラクター情報 */
  character: Character;
  /** 使用したジョブ一覧 */
  usedJobs: Job[];
  /** 戦績記録（最新順） */
  recentMatches: MatchRecord[];
};

/**
 * シーズン履歴の基本型
 */
export type History = {
  /** 一意識別子 */
  uuid: UUIDv4;
  /** シーズン名 */
  seasonName: string;
  /** キャラクター戦績統計の配列 */
  characterStats: CharacterStats[];
  /** 作成日時（ISO文字列） */
  createdAt: string;
  /** 更新日時（ISO文字列） */
  updatedAt: string;
};

/**
 * 新規履歴作成時の入力型
 */
export type CreateHistoryInput = {
  /** シーズン名 */
  seasonName: string;
};

/**
 * 履歴更新時の入力型
 */
export type UpdateHistoryInput = {
  /** シーズン名 */
  seasonName?: string;
};

/**
 * キャラクター作成時の入力型
 */
export type CreateCharacterInput = {
  /** キャラクター名 */
  name: string;
};

/**
 * ジョブ登録時の入力型
 */
export type AddUsedJobInput = {
  /** キャラクターUUID */
  characterUuid: UUIDv4;
  /** シーズンUUID */
  seasonUuid: UUIDv4;
  /** 使用ジョブ */
  job: Job;
};

/**
 * 戦績記録作成時の入力型
 */
export type CreateMatchRecordInput = {
  /** キャラクターUUID */
  characterUuid: UUIDv4;
  /** シーズンUUID */
  seasonUuid: UUIDv4;
  /** 使用ジョブ */
  job: Job;
  /** マップ */
  map: CrystalConflictMap;
  /** 勝敗（true: 勝利, false: 敗北） */
  isWin: boolean;
};
