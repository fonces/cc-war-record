import { GET } from "@/features/api/fetch";
import { handleResponse, type ApiResponse } from "@/features/api/handler";

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
export const fetchBuildInfo = async (): ApiResponse<BuildInfo> => {
  if (import.meta.env.DEV) {
    const now = new Date();

    return {
      status: 1,
      data: {
        buildTime: now.toISOString(),
        timestamp: now.getTime(),
      },
    };
  }

  try {
    const response = await GET("/build-info.json", { cache: "no-cache" });

    return handleResponse<BuildInfo>(response);
  } catch (error) {
    console.error("Error fetching build-info.json:", error);
    return {
      status: 0,
      error: {
        status: 500,
        message: `Internal Server Error: ${(error as Error).message}`,
      },
    };
  }
};
