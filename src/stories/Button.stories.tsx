import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & { buttonText: string };

const meta: Meta<StoryProps> = {
  title: "Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
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
    size: "lg",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const Secondary: Story = {
  args: {
    buttonText: "Get Started Sec",
    variant: "secondary",
    size: "lg",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
