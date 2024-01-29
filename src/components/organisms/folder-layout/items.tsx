import React from "react";
import { folderItem } from "./data";
import { Typography } from "../../atoms";
import { ArrowDown2, FormatSquare, TickCircle } from "iconsax-react";
import { useState } from "react";
import { Badge } from "../../atoms/badge";

export const Items = () => {
  const [showType, setShowType] = useState<boolean>(true);

  return (
    <>
      <div className="flex duration-100 trantion-all gap-4 items-center rounded-md  border-r-2 border-[#F9C310] pr-2 my-4">
        <Typography type="h4">قانون</Typography>
        <Badge
          children={3}
          className="h-7 w-7 flex items-center justify-center text-[#F9C310] bg-[#FEF7E2] rounded-full"
        />
        <ArrowDown2
          color="#717376"
          className={`${
            !showType && "rotate-180"
          } duration-300 trantion-all cursor-pointer`}
          onClick={() => setShowType((e) => !e)}
        />
      </div>
      <div className="text-center text-[#3949AB] grid grid-cols-4 bg-[#F4F5FA] p-2 rounded mb-4">
        <Typography type="h4">نام</Typography>
        <Typography type="h4">شناسه</Typography>
        <Typography type="h4">نماد</Typography>
        <Typography type="h4">اعتبار</Typography>
      </div>
      {showType &&
        folderItem.item.map((item, index) => (
          <div
            key={index}
            className={`${
              index % 2 == 1 ? "bg-background-300" : ""
            } grid  text-center grid-cols-4 py-3 rounded-md`}
          >
            <div className="flex  items-center justify-between">
              <FormatSquare color="#F9C310" variant="Bold" />
              <div className="w-full text-center">
                <Typography type="p">{item.name}</Typography>
              </div>
            </div>
            <Typography type="p">{item.id}</Typography>
            <Typography type="p">{item.symbol}</Typography>
            <div className="flex justify-center ">
              {item.isValid && (
                <TickCircle
                  size={20}
                  className="text-center text-success-700"
                />
              )}
            </div>
          </div>
        ))}
    </>
  );
};
