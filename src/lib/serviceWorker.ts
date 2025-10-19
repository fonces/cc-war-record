/**
 * ServiceWorker登録
 * PWA機能のためのServiceWorkerを登録
 */
export const registerServiceWorker = () => {
  if (import.meta.env.PROD && "serviceWorker" in navigator) {
    const basePath = import.meta.env.VITE_BASEPATH || "/";
    const swPath = `${basePath}/sw.js`.replace(/\/+/g, "/"); // 重複スラッシュを除去
    const scope = `${basePath}/`.replace(/\/+/g, "/");

    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swPath, { scope })
        .then((registration) => {
          console.log("ServiceWorker registered:", registration.scope);
        })
        .catch((error) => {
          console.error("ServiceWorker registration failed:", error);
        });
    });
  }
};
