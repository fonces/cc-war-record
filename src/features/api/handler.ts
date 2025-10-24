/**
 * APIのレスポンス型定義
 */

// 成功レスポンス型
type SuccessResponse<T> = {
  status: 1;
  data: T;
};

// エラーレスポンス型
type ErrorResponse = {
  status: 0;
  error: {
    status: number;
    message: string | string[];
  };
};

// APIレスポンス型（成功またはエラー）
export type ApiResponse<T> = Promise<SuccessResponse<T> | ErrorResponse>;

/**
 * APIレスポンスを処理する
 * @param response
 * @returns APIレスポンスオブジェクト
 */
export async function handleResponse<T>(response: Response): ApiResponse<T> {
  if (!response.ok) {
    return {
      status: 0,
      error: {
        status: response.status,
        message: response.statusText,
      },
    };
  }

  try {
    const data = (await response.json()) as T;
    return {
      status: 1,
      data,
    };
  } catch (error) {
    return {
      status: 0,
      error: {
        status: response.status,
        message: `Response error: ${(error as Error).message}`,
      },
    };
  }
}
