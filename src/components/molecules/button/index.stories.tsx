import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primaryx = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primaryx.args = {
  // primary: true,
  children: "Button",
};

export const Primary2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary2.args = {
  variant: "primary",
  children: "Button2 2",
};
