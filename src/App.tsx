import React from "react";
import { AddNetwork } from "./screens/AddNetwork/AddNetwork";
import { GlobalStyles } from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

void i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Network name": "Network name"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <AddNetwork />
    </ThemeProvider>
  );
}

export default App;
