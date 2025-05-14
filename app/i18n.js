"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from '../constants/langs/en';
import { es } from '../constants/langs/es';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector).init({
    supportedLngs: ['en', 'es'],
  });

  // pass the i18n instance to react-i18next.
  i18n.use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en', // Set the fallback language to English
    resources: {
      en: {
        translation: en
      },
      es: {
        translation: es
      }
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      // order and from where user language should be detected
      order: ['localStorage', 'navigator'],
      // keys or params to lookup language from
      lookupLocalStorage: 'i18nextLng',
    }
  });

export default i18n;
