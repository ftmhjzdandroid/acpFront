import React from "react";

interface Iprops {
  className?: string;
  borderColo?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const ArrowBtn = (props: Iprops) => {
  return (
    <button
      onClick={props.onClick}
      className={`border border-1 ${props.borderColo} rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
};
