import { extendTheme, theme } from "@chakra-ui/react";

const colors = {
  "main-bg": "#9097c0",

  "white-text": "#fff",
  "subtle-text": "#fff",

  "column-bg": "#a7bbec",
  "column-header-bg": "#313b72",

  "card-bg": "#313b72",
  // "card-border": "#2D313E"
};

const fonts = {
  heading: "Roboto",
  body: "Roboto",
};

export default extendTheme({
  ...theme,
  colors,
  fonts,
});