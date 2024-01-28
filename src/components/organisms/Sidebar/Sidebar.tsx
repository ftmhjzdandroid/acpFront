import {
  Box,
  CardCoin,
  ChemicalGlass,
  Element2,
  Global,
  HeartAdd,
  Medal,
  More2,
  Reserve,
  Setting2,
  Star1,
  TextalignJustifycenter,
} from "iconsax-react";
import SidebarElement from "./SidebarElement";
import { useState } from "react";
import { Typography } from "../../atoms";
import userAvatar from "../../../assets/image/avatar3.jfif";
import { Avatar } from "../../molecules";
import { Badge } from "../../atoms/badge";
import { Seperator } from "../../molecules/seperator";

export default function Sidebar() {
  const [isopen, setIsopen] = useState(true);
  const elementlist = [
    {
      text: "نشان",
      elem: <Star1 color="#E8E8E9" variant="Bold" />,
      topage: "/sine",
      isopen: { isopen },
    },
    {
      text: "پیشنهادات",
      elem: <Medal color="#E8E8E9" variant="Bold" />,
      topage: "/proposal",
      isopen: { isopen },
    },
    {
      text: "بسته بند",
      elem: <Box color="#E8E8E9" variant="Bold" />,
      topage: "/packing",
      isopen: { isopen },
    },
    {
      text: "ویژگی جدید",
      elem: <HeartAdd color="#E8E8E9" variant="Bold" />,
      topage: "/feature",
      isopen: { isopen },
    },
    {
      text: "نوع",
      elem: <Global color="#E8E8E9" variant="Bold" />,
      topage: "/type",
      isopen: { isopen },
    },
    {
      text: "طبقه بندی",
      elem: <Element2 color="#E8E8E9" variant="Bold" />,
      topage: "/classification",
      isopen: { isopen },
    },
    {
      text: "نمونه توافقی",
      elem: <CardCoin color="#E8E8E9" variant="Bold" />,
      topage: "/agreedtraiff",
      isopen: { isopen },
    },
    {
      text: "خدمات",
      elem: <Reserve color="#E8E8E9" variant="Bold" />,
      topage: "/services",
      isopen: { isopen },
    },
    {
      text: "دارو و تجهیزات",
      elem: <ChemicalGlass color="#E8E8E9" variant="Bold" />,
      topage: "/medicine",
      isopen: { isopen },
    },
    {
      text: "قوانین",
      elem: <More2 color="#E8E8E9" variant="Bold" />,
      topage: "/rules",
      isopen: { isopen },
    },
  ];

  return (
    <div
      className={`${
        isopen ? "w-64" : "w-24"
      } flex flex-col py-5 text-neutral-200 bg-[#3949AB]  duration-100 trantion-all  min-h-screen`}
    >
      <div className={`  flex justify-around rounded-md gap-2`}>
        {/* -----------navbarforside----------- */}
        <div className="flex gap-2">
          <img src="/vite.svg" alt="icon" />
          <Typography type="p" className={`${isopen ? "flex" : "hidden"}`}>
            سامانه مدریت خدمات
          </Typography>
        </div>
        <TextalignJustifycenter
          onClick={() => setIsopen((preveState) => !preveState)}
          className="text-neutral-200 cursor-pointer"
        />
      </div>
      {/* ------------pectuerforsidebar---------- */}
      <div
        className={`${
          isopen ? "flex flex-col items-center my-3 relative" : "hidden"
        }`}
      >
        <Avatar src={userAvatar} className="h-24 w-24" />

        <Badge
          children={<Typography type="p">فاطمه حاجی زاده</Typography>}
          className="bg-[#F9C310] px-3 text-center py-1 -bottom-4 text-neutral-800 rounded-full absolute"
        />
      </div>
      {/* -----------sideelements-------------- */}
      <div className="mt-2">
        {elementlist.map((elemen) => (
          <SidebarElement 
          key={elemen.topage}
            text={elemen.text}
            elem={elemen.elem}
            topage={elemen.topage}
            isopen={isopen}
          />
        ))}
      </div>
      {/* ----------------------------------------------- */}
      {isopen && <Seperator className="border-b border-neutral-50  mx-5" />}
      <SidebarElement
        text="تنظیمات"
        topage="setting"
        elem={<Setting2 color="#E8E8E9" variant="Bold" />}
        isopen={isopen}
      />
    </div>
  );
}
