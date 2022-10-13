import { FontWeight } from "./types";

export const FONT_FAMILY: Record<FontWeight, string> = {
  light: "MontserratLight",
  regular: "MontserratRegular",
  medium: "MontserratMedium",
  semiBold: "MontserratSemiBold",
  bold: "MontserratBold"
};

export const FONT_WEIGHT: Record<FontWeight, number> = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
};
