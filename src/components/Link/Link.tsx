import { HTMLAttributes } from "react";
import styled from "styled-components";
import { Text, TextProps } from "../Text";
import { darken } from "polished";
import { LinkOut } from "../Icons/LinkOut";

const Wrapper = styled.a`
  color: ${({ theme }) => theme.palette.text.link};
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => darken(0.07, theme.palette.text.link)};
  }

  :focus {
    color: ${({ theme }) => darken(0.14, theme.palette.text.link)};
  }

  :active {
    color: ${({ theme }) => darken(0.21, theme.palette.text.link)};
  }

  :visited {
    color: ${({ theme }) => darken(0.21, theme.palette.text.link)};
  }
`;

const Icon = styled(LinkOut)`
  margin-left: ${({ theme }) => theme.spacing(1)};
  vertical-align: sub;
`;

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  showIcon?: boolean;
  to: string;
  TextProps?: TextProps;
}

export const Link = ({ to, showIcon = false, children, TextProps, ...props }: LinkProps) => {
  return (
    <Wrapper target="_blank" href={to} rel="noreferrer" {...props}>
      <Text color="inherit" {...TextProps}>
        {children}
      </Text>
      {showIcon && <Icon />}
    </Wrapper>
  );
};
