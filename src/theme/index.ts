import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  spacing: (factor: number) => `${4 * factor}px`,
  palette: {
    background: {
      main: "#1C1E1F",
      secondary: "#252829",
      contrast: "#FFFFFF"
    },
    text: {
      main: "#FFFFFF",
      secondary: "#F2F1F1",
      neutral: "#979797",
      link: "#9ECAFF",
      dark: "#969DA3",
      inherit: "inherit"
    },
    button: {
      background: {
        main: "#4476F2",
        secondary: "#2E3133",
        contrast: "#FFFFFF"
      },
      text: "#FFFFFF"
    }
  }
};
