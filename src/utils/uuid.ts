/**
 * UUID生成ユーティリティ
 */

/**
 * UUIDv4を生成する
 * @returns UUIDv4文字列
 */
export const generateUUID = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * 現在のISO日時文字列を取得
 * @returns ISO日時文字列
 */
export const getCurrentISOString = (): string => {
  return new Date().toISOString();
};

/**
 * 日付文字列をフォーマット
 * @param isoString ISO日時文字列
 * @param locale ロケール（デフォルト: 'ja-JP'）
 * @returns フォーマット済み日付文字列
 */
export const formatDate = (isoString: string, locale: string = "ja-JP"): string => {
  return new Date(isoString).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

/**
 * 日付文字列をフォーマット（短縮版）
 * @param isoString ISO日時文字列
 * @param locale ロケール（デフォルト: 'ja-JP'）
 * @returns フォーマット済み日付文字列
 */
export const formatDateShort = (isoString: string, locale: string = "ja-JP"): string => {
  return new Date(isoString).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

/**
 * 日付文字列をyyyy-MM-dd HH:mm形式でフォーマット
 * @param isoString ISO日時文字列
 * @returns yyyy-MM-dd HH:mm形式の日付文字列
 */
export const formatDateTable = (isoString: string): string => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
