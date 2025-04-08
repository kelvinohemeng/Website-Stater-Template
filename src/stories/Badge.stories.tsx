import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { Badge } from "../components/Buttons/Badge";

type StoryProps = ComponentProps<typeof Badge> & { badgeText: string };

const meta: Meta<StoryProps> = {
  title: "Badge",
  tags: ["autodocs"],
  component: Badge,
  argTypes: {
    type: {
      control: "select",
      options: ["underline", "covered"],
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Covered: Story = {
  args: {
    badgeText: "Get Started",
    type: "underline",
  },
  render: ({ badgeText, ...args }) => {
    return <Badge {...args}>{badgeText}</Badge>;
  },
};
export const Underlined: Story = {
  args: {
    badgeText: "Get Started Sec",
    type: "underline",
  },
  render: ({ badgeText, ...args }) => {
    return <Badge {...args}>{badgeText}</Badge>;
  },
};
