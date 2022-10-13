import styled from "styled-components";
import { Container } from "../../../../components/Container";
import { Text } from "../../../../components/Text";
import { Link } from "../../../../components/Link";
import { Network } from "../../../../models";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.background.main};
  box-shadow: 0px -1px 3px 1px rgba(0, 0, 0, 0.15), 0px -1px 2px rgba(0, 0, 0, 0.3);
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing(13.5)};
  padding-bottom: ${({ theme }) => theme.spacing(20)};
`;

const InnerWrapper = styled.div`
  text-align: center;
`;

const IconWrapper = styled.div`
  height: ${({ theme }) => theme.spacing(12)};
  width: ${({ theme }) => theme.spacing(12)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.background.contrast};
  border-radius: 100%;
`;

const Icon = styled.img`
  width: ${({ theme }) => theme.spacing(8)};
  height: auto;
`;

const Title = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const Caption = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing(4)};
  max-width: ${({ theme }) => theme.spacing(60)};
  margin-left: auto;
  margin-right: auto;
`;

const List = styled.div`
  margin-top: ${({ theme }) => theme.spacing(6)};
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.palette.background.secondary};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(2)};
`;

const ListItem = styled.div`
  height: ${({ theme }) => theme.spacing(6)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListLeft = styled(Text)`
  text-transform: uppercase;
  font-size: 12px;
`;

const ListRight = styled.div``;

interface NetworkInfoProps {
  network: Network;
}

export const NetworkInfo = ({ network }: NetworkInfoProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container size="sm">
        <InnerWrapper>
          <IconWrapper>
            <Icon src={network.icon} alt={network.name} />
          </IconWrapper>
          <Title weight="bold" size={16}>
            {network.name}
          </Title>
          <Caption size={16}>Uniswap wants to add a new network to your wallet.</Caption>
          <List>
            <ListItem>
              <ListLeft weight="medium" color="neutral">
                {t("Network name")}
              </ListLeft>
              <ListRight>
                <Text>{network.name}</Text>
              </ListRight>
            </ListItem>
            <ListItem>
              <ListLeft weight="medium" color="neutral">
                Chain ID
              </ListLeft>
              <ListRight>
                <Text>{network.chainId}</Text>
              </ListRight>
            </ListItem>
            <ListItem>
              <ListLeft weight="medium" color="neutral">
                Currency symbol
              </ListLeft>
              <ListRight>
                <Text>{network.currencySymbol}</Text>
              </ListRight>
            </ListItem>
            <ListItem>
              <ListLeft weight="medium" color="neutral">
                RPC URL
              </ListLeft>
              <ListRight>
                <Link TextProps={{ maxWidth: "146px" }} to="https://www.google.com/" showIcon>
                  {network.rpcUrl}
                </Link>
              </ListRight>
            </ListItem>
            <ListItem>
              <ListLeft weight="medium" color="neutral">
                Block explorer
              </ListLeft>
              <ListRight>
                <Link TextProps={{ maxWidth: "146px" }} to="https://www.google.com/" showIcon>
                  {network.explorerUrl}
                </Link>
              </ListRight>
            </ListItem>
          </List>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};
