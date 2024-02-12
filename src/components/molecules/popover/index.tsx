import React, { Fragment, Ref, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Card, Typography } from "../../atoms";

interface IProps<T> {
  children: React.ReactNode;
  // children(value?: T): JSX.Element;
  // children: ((close?: () => void) => JSX.Element) | ReactFragment;
  className?: string;
  keysLabel: string;
  position?: "center" | "bottom" | "top" | "right" | "left";
  list: T[];
  onClick?: (item: T) => void;
  renders?: (item: T, index?: number, close?: () => void) => React.ReactNode;
  ref?: React.Ref<HTMLDivElement> | undefined;

  onSelectAll?: () => void;
  useMode?: "filtering" | "orginal";
}
export const PopoverDialog = <T,>(props: IProps<T>) => {
  const {
    children,
    list,
    keysLabel,
    onClick = () => { },
    position = "center",
    renders,
    className,
    ref,
    onSelectAll = () => { },
    useMode = "orginal"
  } = props;

  if (list.length === 0) return <></>;

  const classNamePanel: string[] = [];
  switch (position) {
    case "bottom":
      classNamePanel.push("top-8 left-4");
      break;
    default:
      classNamePanel.push("top-1/2 left-0 md:-translate-y-1/2");
      break;
  }

  return (
    <Popover className={`relative ${className}`} as="div" ref={ref}>
      {({ open, close }) => (
        <>
          <Popover.Button className="w-full" as="div">
            {children}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className={`absolute z-50 ${classNamePanel.join(
                " "
              )} max-h-[calc(100vh-50px)] overflow-auto w-80 border rounded-md border-br`}
            >
              <Card className="flex flex-col shadow-lg" padding="p-1">
                {
                  useMode === "filtering" && list.length>1 &&
                  <div className="flex gap-2 p-2 text-right cursor-pointer transition duration-200 hover:bg-gray-200" onClick={onSelectAll}>
                    <input
                      checked={list.filter((item: any) => item.checked === true).length === list.length}
                      type="checkbox"
                      id="checkedAll"
                    />
                    <Typography type="h3" className="cursor-pointer select-none">انتخاب همه</Typography>
                  </div>
                }
                {list.map((item: any, index) => {
                  return (
                    <Fragment key={index}>
                      {renders ? (
                        renders(item, index, close)
                      ) : (
                        // <Popover.Button as="div">
                        <Typography
                          key={index}
                          type="h3"
                          className="p-1 text-right cursor-pointer transition duration-200 hover:bg-gray-200"
                          onClick={() => { onClick(item); close(); }}
                        >
                          {item[keysLabel] as string}
                        </Typography>
                        // </Popover.Button>
                      )}
                    </Fragment>
                  );
                })}
              </Card>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
