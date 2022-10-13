export type Color = string;
export type Size = "sm" | "md" | "lg";
export type TextColor = "main" | "secondary" | "link" | "neutral" | "dark" | "inherit";
export type FontWeight = "light" | "regular" | "medium" | "semiBold" | "bold";
export type BackgroundVariant = "main" | "secondary" | "contrast";

export interface PaletteColor {
  background: Record<BackgroundVariant, Color>;
  text: Record<TextColor, Color>;
  button: {
    background: Record<BackgroundVariant, Color>;
    text: Color;
  };
}
