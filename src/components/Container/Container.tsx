import styled from "styled-components";
import { Size } from "../../theme/types";

interface ContainerProps {
  size?: Size;
}

export const Container = styled.div<ContainerProps>`
  margin: ${({ size = "md", theme }) => {
    switch (size) {
      case "sm":
        return `auto ${theme.spacing(2)}`;
      case "md":
        return `auto ${theme.spacing(4)}`;
      case "lg":
        return `auto ${theme.spacing(8)}`;
      default:
        return `auto ${theme.spacing(4)}`;
    }
  }};
`;
