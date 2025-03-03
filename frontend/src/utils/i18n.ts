import i18next from "i18next";
import enNs1 from "../locales/en/ns1.json";
import ukNs1 from "../locales/uk/ns1.json";
import { initReactI18next } from "react-i18next";

export const defaultNS = "ns1";
export const fallbackNS = "ns1";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  defaultNS,
  fallbackNS,
  resources: {
    en: {
      ns1: enNs1,
    },
    uk: {
      ns1: ukNs1,
    },
  },
});

export default i18next;
