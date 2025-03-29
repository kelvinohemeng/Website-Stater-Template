import { Meta, StoryObj } from "@storybook/react";
import Stack from "../components/Stack";

import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Stack> & {
  numberOfChildren: number;
};

const meta: Meta<StoryProps> = {
  title: "Stack",
  tags: ["autodocs"],
  component: Stack,
  argTypes: {
    numberOfChildren: {
      control: "select",
      options: [1, 5, 10, 15, 20],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },

  // for components that have a click event
  args: {
    numberOfChildren: 5,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

function createChildren(numberOfChildren: number) {
  return Array(numberOfChildren)
    .fill(null)
    .map((_, i) => {
      return (
        <div
          key={i}
          style={{ width: 100, height: 100, backgroundColor: "red" }}
        >
          Child {i}
        </div>
      );
    });
}
