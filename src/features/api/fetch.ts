/**
 * GETリクエストを送信する
 * @param path リクエストパス
 * @param options リクエストオプション
 * @returns レスポンス
 */
export const GET = (path: string, options: RequestInit = {}) => {
  const basePath = import.meta.env.VITE_BASEPATH || "/";
  const url = new URL(path, window.location.origin + basePath).href;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
};
