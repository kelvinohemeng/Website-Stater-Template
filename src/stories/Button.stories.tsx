import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Buttons/Button";

import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & { buttonText: string };

const meta: Meta<StoryProps> = {
  title: "Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "small"],
    },
  },

  // for components that have a click event
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Get Started",
    variant: "primary",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const Secondary: Story = {
  args: {
    buttonText: "Get Started Sec",
    variant: "secondary",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const Small: Story = {
  args: {
    buttonText: "Get Started Small",
    variant: "small",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
