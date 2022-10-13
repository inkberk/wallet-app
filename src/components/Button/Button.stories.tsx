import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>;

export const Main: ComponentStory<typeof Button> = () => <Button variant="main">Button</Button>;

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button variant="secondary">Button</Button>
);
