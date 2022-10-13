import { createGlobalStyle } from "styled-components";
import { fontsCSS } from "./fontsCss";
import { resetCss } from "./resetCss";

export const GlobalStyles = createGlobalStyle`
  ${resetCss}
  ${fontsCSS}
`;
