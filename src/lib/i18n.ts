import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 翻訳リソース
import translationJA from "./locales/ja/translation.json";
import translationEN from "./locales/en/translation.json";
import translationKO from "./locales/ko/translation.json";

const resources = {
  ja: {
    translation: translationJA,
  },
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n
  .use(LanguageDetector) // ブラウザの言語設定を検出
  .use(initReactI18next) // React向けのi18n初期化
  .init({
    resources,
    fallbackLng: "en", // デフォルト言語
    debug: false, // 開発時はtrueにしてデバッグ

    // 言語検出設定
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false, // Reactでは不要
    },

    // 名前空間の設定
    defaultNS: "translation",
    ns: ["translation"],
  });

// 言語変更時にHTML lang属性を更新
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
