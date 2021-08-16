const white = "#FFFFFF";
const black = "#172123";
const gray = "rgba(255, 255, 255, 0.5)";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: "#056359",
    main: "#5FA1FC",
    light: "#EDF9F8",
    activated: "#4ABAAE",
  },
  secondary: {
    contrastText: white,
    dark: "#65B39D",
    main: "#65B39D",
    light: "#65B39D",
  },
  grey: {
    100: "#C5C5C5",
    500: "#9E9E9E",
    600: "#707070",
  },
  link: {
    primary: "#172123",
    secondary: "#172123",
    link: "#4ABAAE",
  },
  success: {
    contrastText: black,
    dark: "#568906",
    main: "#8FE822",
    light: "#E4F89B",
  },
  info: {
    contrastText: white,
    dark: "#0A51B7",
    main: "#00C8FF",
    light: "#A1DFFF",
  },
  warning: {
    contrastText: white,
    dark: "#B77501",
    main: "#FFB000",
    light: "#FFE999",
  },
  error: {
    contrastText: white,
    dark: "#AC2925",
    main: "#D03C38",
    light: "#FF6263",
  },
  text: {
    primary: black,
    secondary: gray,
    link: black,
  },
  background: {
    default: "#F5F5F5",
    paper: white,
    primary: "#4ABAAE",
    secondary: gray,
  },
  icon: "#3A3B3F",
  divider: "#C5C5C5",
};
