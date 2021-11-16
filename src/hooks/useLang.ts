import localizations from "@src/localizations";
import React, { useContext } from "react";

export enum langs {
  RU = "RU",
  EN = "EN",
  FR = "FR",
  VN = "VN",
}

export const LanguageProvider = React.createContext<langs>(langs.RU);

export const useLang = () => {
  const lang = useContext(LanguageProvider);
  return localizations[lang];
};
