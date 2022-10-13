import styled from "styled-components";
import { BackgroundVariant } from "../../theme/types";
import { FONT_FAMILY, FONT_WEIGHT } from "../../theme/constants";
import { darken } from "polished";

interface ButtonProps {
  variant?: BackgroundVariant;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  background-color: ${({ variant = "main", theme }) => theme.palette.button.background[variant]};
  font-size: 12px;
  color: ${({ theme }) => theme.palette.button.text};
  font-weight: ${FONT_WEIGHT.semiBold};
  font-family: ${FONT_FAMILY.semiBold};
  height: ${({ theme }) => theme.spacing(7.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;

  :hover {
    background-color: ${({ variant = "main", theme }) =>
      darken(0.07, theme.palette.button.background[variant])};
  }

  :focus {
    background-color: ${({ variant = "main", theme }) =>
      darken(0.14, theme.palette.button.background[variant])};
  }
`;
