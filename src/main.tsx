import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import { AppProvider } from "@/app/provider";
import "@/lib/i18n"; // i18n初期化

// ServiceWorker登録
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
