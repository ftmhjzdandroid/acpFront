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
import { useCustomNav } from "../../../hook/useNavigate";
import { getItem } from "../../../models/menu";
import { Menu, MenuProps } from "antd";
import { Modal } from "../../../components/molecules";
import { Box, Typography } from "../../../components/atoms";
import Historymodal from "./Historymodal";
import Deletedmodal from "./Deletedmodal";
import Deleteganonmodal from "./Deleteganonmodal";

type Props = {
  index: number;

  item: {
    name?: string;
    code?: number;
    jencod?: number;
    namad?: string;
    pris?: number;
    activ?: boolean;
  };
};
export default function ShowMedisineList(props: Props) {
  const { item, index } = props;
  const [isProfilePopover, setIsProfilePopover] = useState<boolean>(false);
  const [historymodal, sethistorymodal] = useState<boolean>(false);
  const [deletemodal, setdeletemodal] = useState<boolean>(false);
  const [deleteganonmodal, setdeleteganonmodal] = useState<boolean>(false);
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
      "ویرایش دارو ",
      "services",
      <Edit2 size="18" className="text-neutral-700" />
    ),
    getItem(
      " مدیریت قیمت",
      "priceM",
      <Tag size="18" className="text-neutral-700" />
    ),
    getItem("حذف", "remove", <Trash size="18" className="text-neutral-700" />, [
      getItem("خدمت", "service", null),
      getItem("قوانین", "Rules", null),
    ]),
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    setIsProfilePopover(false);
    if (e.key == "services") navigate.to("/medisine/editingservices");
    if (e.key == "priceM") navigate.to("/medisine/pricemanagement");
    if (e.key == "history") sethistorymodal(true);
    if (e.key == "service") setdeletemodal(true);
    if (e.key == "Rules") setdeleteganonmodal(true);
  };
  return (
    <>
      <Modal
        isOpen={historymodal}
        children={<Historymodal onclose={()=>sethistorymodal(false)}/>}
        onBackdrop={() => {
          sethistorymodal(false);
        }}
      />
      <Modal
        isOpen={deletemodal}
        children={<Deletedmodal onclose={()=>setdeletemodal(false)}/>}
        onBackdrop={() => {
          setdeletemodal(false);
        }}
      />
      <Modal
        isOpen={deleteganonmodal}
        children={<Deleteganonmodal onclose={()=>setdeleteganonmodal(false)}/>}
        onBackdrop={() => {
          setdeleteganonmodal(false);
        }}
      />
      <div
        key={index}
        className={`${
          index % 2 == 0 ? "bg-background-300" : ""
        } grid grid-cols-6 mt-2  p-4 rounded-md text-xs`}
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
          <div className="w-full flex justify-center relative">
            <div
              className={`${
                item.activ ? "bg-success-200" : "bg-danger-200"
              } h-6 w-6 rounded-full flex justify-center items-center `}
            >
              {item.activ ? (
                <TickCircle size="18" className="text-success-700" />
              ) : (
                <CloseCircle size="18" className="text-danger-700" />
              )}
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
        }
      </div>
    </>
  );
}
