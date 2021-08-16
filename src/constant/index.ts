import { GenderType } from "./enum";

export const APP_URL = "http://localhost:3000";

export interface IOption {
  key: number;
  text: string;
}

export const GenderOptions: IOption[] = [
  {
    key: GenderType.Male,
    text: "Male",
  },
  {
    key: GenderType.Female,
    text: "Female",
  },
  {
    key: GenderType.Other,
    text: "Other",
  },
];

const OptionMirror = class {
  Gender(key: string | number | undefined) {
    const option = GenderOptions.find((e) => e.key === key);
    return option ? option.text : "";
  }
  // 1000000 => 1,000,000
  NumberWithCommas(n: string | number, separator: string) {
    return n && n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }

  FormatDateInput(n) {
    if (n.match(/^\d{2}$/) !== null) {
      return n + "/";
    } else if (n.match(/^\d{2}\/\d{2}$/) !== null) {
      return n + "/";
    } else return n;
  }

  CheckImageUrl(url: string) {
    return url.match(/\.(jpeg|jpg|gif|png|svg)$/) !== null;
  }
};
const optionMirror = new OptionMirror();

export { optionMirror };
