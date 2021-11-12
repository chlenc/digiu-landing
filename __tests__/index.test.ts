// @ts-ignore
import axios from "axios";
import { writeFileSync } from "fs";

const requestUrl =
  "https://opensheet.vercel.app/1E19-IZ-79dFeX7pRHFsurlFDZXP_jpn08hdz1FJcfhA/translates";

enum langs {
  RU = "RU",
  EN = "EN",
  FR = "FR",
  VN = "VN",
}
type TItem = {
  page: string;
  key: string;
} & Record<langs, string>;

describe("With Enzyme", () => {
  it("test", async () => {
    const { data } = await axios.get<Array<TItem>>(requestUrl);
    const result = data.reduce((acc, item) => {
      Object.values(langs).forEach((lang) => {
        if (acc[lang] == null) {
          acc[lang] = { [item.page]: { [item.key]: item[lang] } };
        } else if (acc[lang][item.page] == null) {
          acc[lang][item.page] = { [item.key]: item[lang] };
        } else {
          acc[lang][item.page][item.key] = item[lang];
        }
      });
      return acc;
    }, {} as Record<langs, Record<string, Record<string, string>>>);
    writeFileSync(
      "./src/localizations/data.json",
      JSON.stringify(result, null, 4)
    );
  }, 10000);
});
