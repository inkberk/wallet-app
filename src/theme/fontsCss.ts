import { css } from "styled-components";

import { FONT_FAMILY } from "./constants";
import {
  MontserratBoldFont,
  MontserratLightFont,
  MontserratMediumFont,
  MontserratRegularFont,
  MontserratSemiBoldFont
} from "../assets/fonts";

export const fontsCSS = css`
  @font-face {
    font-family: ${FONT_FAMILY.light};
    src: url(${MontserratLightFont}) format("truetype");
  }

  @font-face {
    font-family: ${FONT_FAMILY.regular};
    src: url(${MontserratRegularFont}) format("truetype");
  }

  @font-face {
    font-family: ${FONT_FAMILY.medium};
    src: url(${MontserratMediumFont}) format("truetype");
  }

  @font-face {
    font-family: ${FONT_FAMILY.semiBold};
    src: url(${MontserratSemiBoldFont}) format("truetype");
  }

  @font-face {
    font-family: ${FONT_FAMILY.bold};
    src: url(${MontserratBoldFont}) format("truetype");
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
