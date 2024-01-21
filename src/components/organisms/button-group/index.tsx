import React, { useState } from "react";
import { useOutsideClick } from "../../../hook";
import { Card } from "../../atoms";
import { Button, IButtonprops } from "../../molecules";
import { ArrowDown2 } from "iconsax-react";

interface Iprops<T> extends IButtonprops {
  onClick?: () => void;
  onClickItem?: (item: T) => void;
  buttons?: T[];
  color?: string;
  fontSize?: string;
  seprator?: boolean;
}

export const ButtonGroup = <T extends { title?: string }>(props: Iprops<T>) => {
  const {
    onClick = () => {},
    onClickItem = () => {},
    buttons = [],
    fontSize,
    seprator = true,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const ref = useOutsideClick<HTMLDivElement>(handleClickOutside);

  const getStyleButton = () => {
    if (props.variant === "outline")
      return `text-${props.color} border-[1px] border-solid border-${props.color}`;
    return `bg-${props.color} hover:bg-${props.color}-dark`;
  };
  return (
    <div className="relative" ref={ref}>
      {isOpen && (
        <ul className="absolute bottom-9 w-full border rounded-md  border-br z-20">
          <Card>
            {buttons.map((button, index) => {
              return (
                <li
                  className={`p-2 cursor-pointer text-center ${fontSize} border-b-[1px] border-solid border-gray-100 last:border-b-0`}
                  key={index}
                  onClick={() => {
                    onClickItem(button);
                    setIsOpen(false);
                  }}
                >
                  {button.title}
                </li>
              );
            })}
          </Card>
        </ul>
      )}
      <div
        className={`flex rounded-md overflow-hidden relative z-10 ${getStyleButton()}`}
      >
        <Button {...props} variant={"none"} onClick={onClick}>
          <div className={fontSize}>{props.children}</div>
        </Button>
        <span
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${
            props.variant === "outline" && seprator
              ? `border-r-[1px] border-solid border-${props.color}`
              : "border-r-black"
          } w-8 flex justify-center items-center cursor-pointer`}
        >
          <ArrowDown2
            fill={props.color === `primary` ? "#1876d2" : "gray"}
            className="w-6"
          />
        </span>
      </div>
    </div>
  );
};
