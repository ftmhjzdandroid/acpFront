import React from "react";
import { Typography } from "../typography";

interface Iprops {
  label?: string;
  isChecked?: boolean;
  onChange?: (e: boolean) => void;
}

const CheckBox = (props: Iprops) => {
  const { onChange = () => {}, label = "", isChecked = false } = props;
  return (
    <>
      <label className="p-2 flex items-center gap-2 border-b-1 cursor-pointer  duration-300">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.currentTarget.checked)}
          className="w-4 cursor-pointer hover:bg-gray-200 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <Typography type="h4">{label}</Typography>
      </label>
    </>
  );
};

export default CheckBox;
