import React, { useState } from "react";
import {
  CloseCircle,
  Edit2,
  Link21,
  More,
  Tag,
  TickCircle,
  Timer1,
  Trash,
} from "iconsax-react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { getItem } from "../../../models/menu";
import { Modal } from "../../../components/molecules";
import { Box, Typography } from "../../../components/atoms";
import { Badge } from "../../../components/atoms/badge";
import { useNavigate } from "react-router-dom";

type Props = {
  index: number;
  item: {
    center?: string;
    state?: string;
    city?: string;
    owner?: string;
    hashtak?: string;
    partner?: string;
    colleague?: string;
    anes?: string;
    tech?: string;
    pro?: string;
    goveranes?: string;
    govertech?: string;
    goverpro?: string;
  };
};
export default function ShowServisList(props: Props) {
  const { item, index } = props;
  const [isProfilePopover, setIsProfilePopover] = useState<boolean>(false);
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    getItem(
      "ویرایش خدمت ",
      "services",
      <Edit2 size="18" className="text-neutral-700" />
    ),
    getItem("حذف",
     "remove",
      <Trash size="18" className="text-neutral-700" />
      ),
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    setIsProfilePopover(false);
    if (e.key == "priceM") navigate("/services/pricemanagement");
  };
  return (
    <>
      <div
        key={index}
        className={`${
          index % 2 == 0 ? "bg-background-300" : ""
        } mt-2  p-4 rounded-md text-xs flex`}
      >
        <div className="w-[71px] text-center">{item.center}</div>
        <div className="w-[71px] text-center">{item.state}</div>
        <div className="w-[71px] text-center">{item.city}</div>
        <div className="w-[71px] text-center">{item.owner}</div>
        <div className="w-[71px] text-center">{item.hashtak}</div>
        <div className="w-[71px] text-center">{item.partner}</div>
        <div className="w-[71px] text-center">{item.colleague}</div>
        <div className="w-[71px] text-center">{item.anes}</div>
        <div className="w-[71px] text-center">{item.tech}</div>
        <div className="w-[71px] text-center">{item.pro}</div>
        <div className="w-[71px] text-center">{item.goveranes}</div>
        <div className="w-[71px] text-center">{item.govertech}</div>
        <div className="w-[71px] text-center flex relative">
          {item.goverpro}
          <More
            size="25"
            className="rotate-90 absolute left-0 cursor-pointer text-neutral-400 "
            onClick={(e) => {
              e.stopPropagation();
              setIsProfilePopover(true);
            }}
          />
          <Box
            className="z-10"
            handleClickOutside={() => setIsProfilePopover(false)}
          >
            {isProfilePopover && (
              <Menu
                className="absolute left-0"
                onClick={onClick}
                style={{ width: 256, fontFamily: "IranYekan" }}
                mode="inline"
                items={items}
              />
            )}
          </Box>
        </div>
      </div>
    </>
  );
}