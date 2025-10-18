import { useTranslation as useI18nTranslation } from "react-i18next";

/**
 * 翻訳フック
 * react-i18nextのuseTranslationをラップして使いやすくする
 */
export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();

  return {
    t,
    i18n,
    currentLanguage: i18n.language,
    changeLanguage: (lng: string) => i18n.changeLanguage(lng),
    isLanguage: (lng: string) => i18n.language === lng,
  };
};
