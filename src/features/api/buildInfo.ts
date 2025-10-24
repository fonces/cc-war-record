/**
 * ビルド情報の型定義
 */
export type BuildInfo = {
  /** ビルド日時（ISO 8601形式） */
  buildTime: string;
  /** ビルド日時（Unixタイムスタンプ） */
  timestamp: number;
};

/**
 * ビルド情報を取得する
 * @returns ビルド情報、取得失敗時はnull
 */
export const fetchBuildInfo = async (): Promise<BuildInfo | null> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASEPATH}/build-info.json`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      console.warn("Failed to fetch build-info.json:", response.status);
      return null;
    }

    const data = await response.json();
    return data as BuildInfo;
  } catch (error) {
    console.error("Error fetching build-info.json:", error);
    return null;
  }
};
