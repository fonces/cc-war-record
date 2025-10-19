/**
 * ServiceWorker登録
 * PWA機能のためのServiceWorkerを登録
 */
export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/cc-war-record/sw.js", {
          scope: "/cc-war-record/",
        })
        .then((registration) => {
          console.log("ServiceWorker registered:", registration.scope);
        })
        .catch((error) => {
          console.error("ServiceWorker registration failed:", error);
        });
    });
  }
};
