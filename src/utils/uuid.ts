/**
 * UUID生成ユーティリティ
 */

import type { UUIDv4 } from "@/types";

/**
 * UUIDv4を生成する
 * @returns UUIDv4文字列
 */
export const generateUUID = (): UUIDv4 => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  }) as UUIDv4;
};
