import styled, { css } from "styled-components";
import { FontWeight, TextColor } from "../../theme/types";
import { FONT_FAMILY, FONT_WEIGHT } from "../../theme/constants";

export interface TextProps {
  weight?: FontWeight;
  color?: TextColor;
  size?: number;
  maxWidth?: string;
}

export const Text = styled.div<TextProps>`
  font-family: ${({ weight = "regular" }) => FONT_FAMILY[weight]};
  font-weight: ${({ weight = "regular" }) => FONT_WEIGHT[weight]};
  font-size: ${({ size = 14 }) => `${size}px`};
  color: ${({ color = "main", theme }) => theme.palette.text[color]};
  ${({ maxWidth }) =>
    !!maxWidth &&
    css`
      white-space: nowrap;
      overflow: hidden;
      max-width: ${maxWidth};
      text-overflow: ellipsis;
    `};
`;
