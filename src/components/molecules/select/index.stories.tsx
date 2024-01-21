import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Select } from ".";

export default {
  title: "components/molecules/select",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = args => <Select {...args} />;

export const isLoading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
isLoading.args = {
  isLoading: true,
  data: [],
};

export const search: StoryFn<typeof Select> = args => {
  return <h1>must be develop</h1>;
};
