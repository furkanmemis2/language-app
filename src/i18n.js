import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./languages/en";
import TR from "./languages/tr";


const resources = {
  en: EN,
  tr: TR,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;