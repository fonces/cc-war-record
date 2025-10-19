/**
 * ServiceWorker登録
 * PWA機能のためのServiceWorkerを登録
 */
export const registerServiceWorker = () => {
  if (import.meta.env.PROD && "serviceWorker" in navigator) {
    const basePath = import.meta.env.VITE_BASEPATH || "/";
    
    // パスを正規化（末尾のスラッシュを統一）
    const normalizedBase = basePath.endsWith("/") ? basePath : `${basePath}/`;
    const swPath = `${normalizedBase}sw.js`;

    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swPath, { scope: normalizedBase })
        .then((registration) => {
          console.log("ServiceWorker registered:", registration.scope);
        })
        .catch((error) => {
          console.error("ServiceWorker registration failed:", error);
        });
    });
  }
};
