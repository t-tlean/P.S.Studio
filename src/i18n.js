import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Загружает JSON переводы
  .use(LanguageDetector) // Определяет язык пользователя
  .use(initReactI18next) // Интеграция с React
  .init({
    fallbackLng: "en", // Язык по умолчанию
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "/P.S.Studio/locales/{{lng}}/translation.json", // Загружает файлы из public/locales
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
