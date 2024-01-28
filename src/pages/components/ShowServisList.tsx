import React, { useState } from "react";
import { Box, Typography } from "../../components/atoms";
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
import { Badge } from "../../components/atoms/badge";
import { useCustomNav } from "../../hook/useNavigate";
import { Modal } from "../../components/molecules";
import Historymodal from "./Historymodal";
import { Menu } from "antd";
import { getItem } from "../../models/menu";
import type { MenuProps } from "antd";

type Props = {
  index: number;
  gridcolse: string;
  item: {
    name?: string;
    code?: number;
    jencod?: number;
    namad?: string;
    pris?: number;
    activ?: boolean;
    bime?: boolean;
  };
};
export default function ShowServisList(props: Props) {
  const { item, index, gridcolse } = props;
  const [isProfilePopover, setIsProfilePopover] = useState<boolean>(false);
  const [modal, setmodal] = useState<boolean>(false);
  const navigate = useCustomNav();

  const items: MenuProps["items"] = [
    getItem(
      "انتساب",
      "sub1",
      <Link21 size="18" className="text-neutral-700" />,
      [
        getItem("قانون", "law", null),
        getItem("نوع", "type", null),
        getItem("ویژگی اضافه", "attr", null),
      ]
    ),
    getItem(
      "نمایش تاریخچه",
      "history",
      <Timer1 size="18" className="text-neutral-700" />
    ),
    getItem(
      " مدیریت قیمت",
      "priceM",
      <Tag size="18" className="text-neutral-700" />
    ),
    getItem(
      "ویرایش خدمت ",
      "services",
      <Edit2 size="18" className="text-neutral-700" />
    ),

    getItem("حذف", "remove", <Trash size="18" className="text-neutral-700" />, [
      getItem("خدمت", "services", null),
      getItem("قوانین", "Rules", null),
    ]),
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    setIsProfilePopover(false);
    if (e.key == "priceM") navigate.to("/services/pricemanagement");
    if (e.key == "history") setmodal(true);
  };
  return (
    <>
      <Modal
        isOpen={modal}
        children={
          <Historymodal
            onclose={() => {
              setmodal(false);
            }}
          />
        }
        onBackdrop={() => {
          setmodal(false);
        }}
      />
      <div
        key={index}
        className={`${
          index % 2 == 1 ? "bg-background-300" : ""
        } ${gridcolse} mt-2  p-4 rounded-md text-xs`}
      >
        {item.name && (
          <Typography className="text-center" type="p">
            {item.name}
          </Typography>
        )}
        {item.code && (
          <Typography className="text-center" type="p">
            {item.code}
          </Typography>
        )}
        {item.jencod && (
          <Typography className="text-center" type="p">
            {item.jencod}
          </Typography>
        )}
        {item.namad && (
          <Typography className="text-center" type="p">
            {item.namad}
          </Typography>
        )}
        {item.pris && (
          <Typography className="text-center" type="p">
            {item.pris}
          </Typography>
        )}

        {
          <div className="w-full flex justify-center">
            <div
              className={`${
                item.activ ? "bg-success-200" : "bg-danger-200"
              } h-6 w-6 rounded-full flex justify-center items-center`}
            >
              {item.activ ? (
                <TickCircle size="18" className="text-success-700" />
              ) : (
                <CloseCircle size="18" className="text-danger-700" />
              )}
            </div>
          </div>
        }
        {
          <div
            className={`${
              item.bime ? "text-green-400 " : "text-red-400"
            }  flex w-full justify-center relative`}
          >
            <Badge
              children={item.bime ? "دارد" : "ندارد"}
              className={` ${
                item.bime ? "bg-success-200" : "bg-danger-200"
              } rounded-full w-9 flex justify-center items-center`}
            />

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
        }
      </div>
    </>
  );
}