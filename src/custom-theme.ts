import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
export const customTheme = {
  ...theme,
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  }
};
