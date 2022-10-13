import styled from "styled-components";
import { Container } from "../../../../components/Container";
import { Button } from "../../../../components/Button";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.palette.background.secondary};
  box-shadow: 0px -1px 3px 1px rgba(0, 0, 0, 0.15), 0px -1px 2px rgba(0, 0, 0, 0.3);
`;

const InnerWrapper = styled.div`
  height: ${({ theme }) => theme.spacing(15.5)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing(4)};
`;

interface BottomBarProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export const BottomBar = ({ onSubmit, onCancel }: BottomBarProps) => {
  return (
    <Wrapper>
      <Container size="md">
        <InnerWrapper>
          <Button onClick={onCancel} variant="secondary">
            Cancel
          </Button>
          <Button onClick={onSubmit}>Add network</Button>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};
