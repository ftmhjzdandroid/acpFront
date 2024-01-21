import React from "react";
import { Loading } from "../../atoms/loading";

export interface IButtonprops {
  variant?: "primary" | "outline" | "none";
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  ref?: React.LegacyRef<HTMLButtonElement> | undefined;
}

export const Button = (props: IButtonprops) => {
  const {
    disabled,
    onClick = () => { },
    variant,
    isLoading,
    children,
    type,
    icon,
    ref,
  } = props;
  let { className = "" } = props;

  let loadingColor: "white" | "black" | "primary" = "white";
  switch (variant) {
    case "outline":
      className +=
        " hover:bg-blue-50 th-primary-color th-text-color border th-primary-border-color rounded-md";
      loadingColor = "primary";
      break;
    case "none":
      break;
    default:
      className += " th-primary-bg-color th-text-neutral-50 border rounded-md";
      break;
  }

  return (
    <button
      onClick={onClick}
      ref={ref}
      disabled={isLoading || disabled}
      type={type ?? "button"}
      className={`z-20 px-2 md:px-4 py-2 min-w-[60px] md:min-w-[100px] flex items-center justify-center relative transition-color ease-in-out duration-300 text-[14px] md:text-[16px] gap-2 ${isLoading || disabled ? "cursor-not-allowed" : ""
        }${className ?? ""}`}
    >
      <span> {icon} </span>
      {children}
      <span
        className={`absolute left-0 top-0 h-full w-6 md:w-10 flex items-center justify-center transition-opacity duration-300 opacity-${isLoading ? 1 : 0
          }`}
      >
        <Loading color={loadingColor} />
      </span>
    </button>
  );
};
