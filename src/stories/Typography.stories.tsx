import { Meta, StoryObj } from "@storybook/react";
import Typography from "../components/Typography";

const meta: Meta<typeof Typography> = {
  title: "Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "overline",
      ],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
        "inherit",
      ],
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
    },
    gutterBottom: {
      control: "boolean",
    },
    noWrap: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
  args: {
    variant: "body1",
    children: "Hello, Storybook!",
    color: "inherit",
    align: "left",
    gutterBottom: false,
    noWrap: false,
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

/**
 * Default Typography Story
 */
export const Default: Story = {
  args: {},
};

/**
 * Heading Variants
 */
export const Headings: Story = {
  args: {
    variant: "h1",
    children: "This is a heading",
  },
};

/**
 * Subtitle Variant
 */
export const Subtitle: Story = {
  args: {
    variant: "subtitle1",
    children: "This is a subtitle",
  },
};

/**
 * Body Text Variants
 */
export const BodyText: Story = {
  args: {
    variant: "body1",
    children: "This is body text.",
  },
  render: ({ className, children, ...args }) => {
    return (
      <Typography {...args} className=" font-display">
        {children}
      </Typography>
    );
  },
};

/**
 * Caption Variant
 */
export const Caption: Story = {
  args: {
    variant: "caption",
    children: "This is a caption.",
  },
};

/**
 * Overline Variant
 */
export const Overline: Story = {
  args: {
    variant: "overline",
    children: "OVERLINE TEXT",
  },
};

/**
 * With Custom Color
 */
export const ColoredText: Story = {
  args: {
    variant: "body1",
    color: "error",
    children: "This is an error message.",
  },
};

/**
 * Center-Aligned Text
 */
export const CenterAligned: Story = {
  args: {
    variant: "body1",
    align: "center",
    children: "This text is center-aligned.",
  },
};

/**
 * No Wrap Text
 */
export const NoWrapText: Story = {
  args: {
    variant: "body1",
    noWrap: true,
    children: "This is a very long line of text that should not wrap.",
  },
};
