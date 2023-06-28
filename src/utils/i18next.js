import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import Languagedetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

i18next
  .use(Backend)
  .use(Languagedetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        auth: require(`../locales/en/auth.json`),
        account: require(`../locales/en/account.json`),
        common: require(`../locales/en/common.json`),
        forms: require(`../locales/en/forms.json`),
      },
      ua: {
        auth: require('../locales/ua/auth.json'),
        account: require('../locales/ua/account.json'),
        common: require('../locales/ua/common.json'),
        forms: require('../locales/ua/forms.json'),
      },
    },
    whitelist: ['en', 'ua'],
    debug: false,
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
