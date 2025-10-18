import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "@/app/provider";
import { App } from "@/app/App";
import "@/lib/i18n"; // i18n初期化

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
