import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      addItemPlaceholder: "Add a new item",
      addButton: "Add",
      deleteButton: "Delete",
    },
  },
  ar: {
    translation: {
      addItemPlaceholder: "أضف عنصرًا جديدًا",
      addButton: "أضف",
      deleteButton: "حذف",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
