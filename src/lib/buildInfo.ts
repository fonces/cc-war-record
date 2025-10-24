import { fetchBuildInfo } from "@/features/api/buildInfo";
import { STORAGE_KEYS, getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";

/**
 * ビルド情報をチェックし、更新があればServiceWorkerのキャッシュをクリアする
 */
export const checkBuildUpdate = async (): Promise<boolean> => {
  const buildInfo = await fetchBuildInfo();

  if (!buildInfo) {
    console.warn("Failed to fetch build info");
    return false;
  }

  const { timestamp } = buildInfo;
  const storedTimestamp = getFromLocalStorage(STORAGE_KEYS.BUILD_TIMESTAMP, "");

  // 初回アクセスの場合はタイムスタンプを保存して終了
  if (!storedTimestamp) {
    saveToLocalStorage(STORAGE_KEYS.BUILD_TIMESTAMP, timestamp.toString());
    console.info("First access: build timestamp saved");
    return false;
  }

  // タイムスタンプを比較
  const isUpdated = Number(storedTimestamp) !== timestamp;

  if (isUpdated) {
    console.info("Build updated detected:", {
      old: new Date(Number(storedTimestamp)).toISOString(),
      new: buildInfo.buildTime,
    });

    // 新しいタイムスタンプを保存
    saveToLocalStorage(STORAGE_KEYS.BUILD_TIMESTAMP, timestamp.toString());

    // ServiceWorkerのキャッシュをクリア
    if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
      try {
        const registration = await navigator.serviceWorker.ready;
        await registration.unregister();
        console.info("ServiceWorker unregistered");

        // キャッシュストレージをクリア
        if ("caches" in window) {
          const cacheNames = await caches.keys();
          await Promise.all(cacheNames.map((name) => caches.delete(name)));
          console.info("Cache storage cleared");
        }

        return true;
      } catch (error) {
        console.error("Error clearing ServiceWorker cache:", error);
      }
    }
  }

  return false;
};
