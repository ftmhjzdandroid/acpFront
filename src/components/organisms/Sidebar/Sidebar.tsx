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
      topage: "/medisine",
      isopen: { isopen },
    },
    {
      text: "قوانین",
      elem: <More2 color="#E8E8E9" variant="Bold" />,
      topage: "/rules",
      isopen: { isopen },
    },
    {
      text: "قیمت",
      elem: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.83 6.6998L13.3 2.1698C12.35 1.2198 11.04 0.709805 9.69998 0.779805L4.69998 1.0198C2.69998 1.1098 1.10998 2.6998 1.00998 4.6898L0.769975 9.6898C0.709975 11.0298 1.20998 12.3398 2.15998 13.2898L6.68997 17.8198C8.54997 19.6798 11.57 19.6798 13.44 17.8198L17.83 13.4298C19.7 11.5798 19.7 8.5598 17.83 6.6998ZM7.49998 10.3798C5.90998 10.3798 4.61998 9.0898 4.61998 7.4998C4.61998 5.9098 5.90998 4.6198 7.49998 4.6198C9.08998 4.6198 10.38 5.9098 10.38 7.4998C10.38 9.0898 9.08998 10.3798 7.49998 10.3798Z" fill="#FBFBFB"/>
      </svg>
      ,
      topage: "/price",
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
