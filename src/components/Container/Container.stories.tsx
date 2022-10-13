import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Container } from "./Container";

export default {
  title: "Container",
  component: Container
} as ComponentMeta<typeof Container>;

const style = {
  background: "green"
};

export const SM: ComponentStory<typeof Container> = () => (
  <Container size="sm" style={style}>
    Container
  </Container>
);
export const MD: ComponentStory<typeof Container> = () => (
  <Container size="md" style={style}>
    Container
  </Container>
);
export const LG: ComponentStory<typeof Container> = () => (
  <Container size="lg" style={style}>
    Container
  </Container>
);
