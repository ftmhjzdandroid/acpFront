import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "../../atoms";

type ElementFor = {
  text: string;
  elem: React.ReactNode;
  topage: string;
  isopen: boolean;
};
export default function SidebarElement(props: ElementFor) {
  const { isopen, elem, text, topage } = props;
  return (
    <NavLink
      to={topage}
      className={({ isActive }) =>
        `${
          isActive ? "text-white bg-white/30 rounded-lg " : "text-white/50"
        }  flex items-center  p-2 m-2  ${
          isopen ? " w-60 " : "w-20 justify-center"
        }`
      }
    >
      <div className={`${isopen && "gap-3"} flex items-center`}>
        {elem}
        <Typography type="p" className={`${isopen ? "mr-1" : "hidden "}`}>
          {text}
        </Typography>
      </div>
    </NavLink>
  );
}
