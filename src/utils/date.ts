/**
 * 日付フォーマット関連のユーティリティ関数
 */

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
 * 日付を指定したオプションでフォーマット
 * @param date - フォーマットする日付
 * @param locale - ロケール（例: "ja-JP", "en-US", "ko-KR"）
 * @param options - Intl.DateTimeFormatのオプション
 * @returns フォーマットされた日付文字列
 */
export const formatDate = (date: Date | string | number, locale: string, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(locale, options);
};
