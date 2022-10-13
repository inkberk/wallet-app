import styled from "styled-components";
import { Container } from "../../../../components/Container";
import { Text } from "../../../../components/Text";
import { DApp } from "../../../../models";
import { Link } from "../../../../components/Link";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.background.secondary};
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const InnerWrapper = styled.div`
  height: ${({ theme }) => theme.spacing(18)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
`;

const InnerLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

const Right = styled.div`
  text-align: right;
`;

const Icon = styled.img`
  height: ${({ theme }) => theme.spacing(10)};
  width: ${({ theme }) => theme.spacing(10)};
`;

const TimeValue = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing(1)}; ;
`;

interface TopBarProps {
  dApp: DApp;
}

export const TopBar = ({ dApp }: TopBarProps) => {
  return (
    <Wrapper>
      <Container size="md">
        <InnerWrapper>
          <Left>
            <Icon src={dApp.icon} alt="Uniswap icon" />
            <InnerLeft>
              <Text weight="bold" color="secondary" size={16}>
                {dApp.name}
              </Text>
              <Link to="https://www.google.com/">{dApp.url}</Link>
            </InnerLeft>
          </Left>
          <Right>
            <Text weight="medium" color="dark" size={12}>
              TIMESTAMP
            </Text>
            <TimeValue weight="medium" color="secondary" size={12}>
              1 min ago
            </TimeValue>
          </Right>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};
