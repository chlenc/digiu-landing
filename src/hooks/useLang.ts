import localizations from "@src/localizations";
import { useRouter } from "next/router";

export enum langs {
  RU = "RU",
  EN = "EN",
  FR = "FR",
  VN = "VN",
}

export const useLang = () => {
  const { locale } = useRouter();
  return localizations[(locale as langs) ?? "RU"];
};
