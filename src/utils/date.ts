/**
 * 日付フォーマット関連のユーティリティ関数
 */

/**
 * 現在のISO日時文字列を取得
 * @returns ISO日時文字列
 */
export const getCurrentISOString = (): string => {
  return new Date().toISOString();
};

/**
 * 日付を指定した形式でフォーマット
 * ロケールとオプションが指定されていない場合は、yyyy-MM-dd HH:mm形式でフォーマット
 * @param date - フォーマットする日付
 * @param locale - ロケール（例: "ja-JP", "en-US", "ko-KR"）
 * @param options - Intl.DateTimeFormatのオプション
 * @returns フォーマットされた日付文字列
 */
export const formatDate = (date: Date | string | number, locale?: string, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = new Date(date);

  // ロケールが指定されていない場合は、yyyy-MM-dd HH:mm形式でフォーマット
  if (!locale) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  return dateObj.toLocaleDateString(locale, options);
};

/**
 * 日付を短い形式（月/日）でフォーマット
 * @param date - フォーマットする日付
 * @param locale - ロケール（例: "ja-JP", "en-US", "ko-KR"）
 * @returns フォーマットされた日付文字列（例: "12/25"）
 */
export const formatShortDate = (date: Date | string | number, locale: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(locale, { month: "numeric", day: "numeric" });
};

/**
 * 日付を長い形式（年月日）でフォーマット
 * @param date - フォーマットする日付
 * @param locale - ロケール（例: "ja-JP", "en-US", "ko-KR"）
 * @returns フォーマットされた日付文字列（例: "2025年12月25日"）
 */
export const formatLongDate = (date: Date | string | number, locale: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" });
};

/**
 * 時間を HH:mm 形式でフォーマット
 * @param date - フォーマットする日付
 * @returns フォーマットされた時間文字列（例: "14:30"）
 */
export const formatTime = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};
