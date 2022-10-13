import "styled-components";
import { PaletteColor } from "../theme/types";

declare module "styled-components" {
  export interface DefaultTheme {
    spacing: (factor: number) => string;
    palette: PaletteColor;
  }
}
