import { createTheme } from "@material-ui/core";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import overrides from "./overrides";

const theme = createTheme({
  palette,
  typography,
  breakpoints,
  overrides,
});
export default theme;
export { palette, typography, breakpoints };
