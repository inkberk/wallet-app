import { css } from "styled-components";

export const resetCss = css`
  body,
  button,
  a {
    all: unset;
  }

  #root {
    max-width: 400px;
    height: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;
