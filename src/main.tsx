import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import { AppProvider } from "@/app/provider";
import { initializeAnalytics } from "@/lib/analytics";
import { registerServiceWorker } from "@/lib/serviceWorker";
import "@/lib/i18n"; // i18n初期化

// Google Analytics初期化 (production環境のみ)
initializeAnalytics();

// ServiceWorker登録 (PWA機能, production環境のみ)
registerServiceWorker();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
