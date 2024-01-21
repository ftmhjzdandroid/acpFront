import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PopoverDialog } from "./index";

export default {
  title: "PopoverDialog",
  component: PopoverDialog,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PopoverDialog>;

const Template: ComponentStory<typeof PopoverDialog> = (args) => (
  <PopoverDialog {...args} />
);

export const Right = Template.bind({});
Right.args = {
  position: "right",
  keysLabel: "name",
  list: [{ name: "item1" }],
};

export const Left = Template.bind({});
Left.args = {
  position: "left",
  keysLabel: "name",
  list: [{ name: "item 1" }],
};

export const Center = Template.bind({});
Center.args = {
  position: "center",
  keysLabel: "name",
  list: [{ name: "item 2" }],
};

export const Top = Template.bind({});
Top.args = {
  position: "top",
  keysLabel: "name",
  list: [{ name: "item 3" }],
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: "bottom",
  keysLabel: "name",
  list: [{ name: "item 4" }],
};
