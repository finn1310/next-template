import palette from "../palette";

const textSizeSmall = { fontSize: 12, fontWeight: 600 };
const textSizeMedium = { fontSize: 14, fontWeight: 600 };
const textSizeLarge = { fontSize: 16, fontWeight: 600 };

const smallStyle = {
  paddingLeft: 16,
  paddingRight: 16,
};

const mediumStyle = {
  height: 40,
  paddingLeft: 36,
  paddingRight: 36,
  ...textSizeMedium,
};

const largeStyle = {
  height: 43,
  paddingLeft: 38,
  paddingRight: 38,
  ...textSizeLarge,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  root: {
    textTransform: "none",
    lineHeight: "normal",
    borderRadius: 2,
    whiteSpace: "nowrap",
    "&$disabled": {
      cursor: "not-allowed",
    },
  },
  contained: {
    boxShadow: "none",
    backgroundColor: palette.black,
    color: palette.white,
    "&:hover": {
      boxShadow: "none !important",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    "&:focus": {
      boxShadow: "none",
    },
    ...mediumStyle,
  },
  outlined: {
    borderBox: "box-sizing",
    backgroundColor: palette.white,
    color: palette.black,
    border: "1px solid #000000",
    "&:hover": {
      borderColor: "rgba(0, 0, 0, 0.75)",
    },
    "&:focus": {
      boxShadow: "none",
    },
    ...mediumStyle,
  },
  text: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
      opacity: 0.75,
    },
  },
  sizeSmall: { ...smallStyle, ...textSizeSmall },
  sizeLarge: { ...largeStyle, ...textSizeLarge },
};
