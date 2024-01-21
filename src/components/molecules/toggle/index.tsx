import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { Typography } from "../../atoms";
type ToggleProps = {
  label?: string;
  enabledValue?: boolean;
  onClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    enabled?: boolean
  ) => void;
};
const Toggle = ({
  label,
  enabledValue = true,
  onClick = () => {},
}: ToggleProps) => {
  const [enabled, setEnabled] = useState(enabledValue);
  useEffect(() => {
    setEnabled(enabledValue);
  }, [enabledValue]);
  return (
    <div
      className="flex gap-2 items-center"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        onClick(e, !enabled)
      }
    >
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "th-primary-bg-color" : "bg-blue-100"}
          relative inline-flex h-4 w-[36px] shrink-0 cursor-pointer rounded-[33px] p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            enabled
              ? "translate-x-0 bg-white"
              : "translate-x-[-1.20rem] bg-blue-700"
          }
            pointer-events-none inline-block h-3 w-3 transform rounded-[33px] shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Typography className="!text-sm">{label}</Typography>
    </div>
  );
};

export default Toggle;
