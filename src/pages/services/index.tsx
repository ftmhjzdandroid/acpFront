import { Add } from "iconsax-react";
import { Typography } from "../../components/atoms";
import ShowServisList from "./components/ShowServisList";
import MineNavbar from "../../components/organisms/navbar/MineNavbar";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { AssignmenLaw } from "./assignment-law";
import { Button } from "../../components/molecules";

export default function Services() {
  const list = [
    {
      name: "مهدیس صبوری",
      code: 1,
      jencod: 1,
      namad: "خدمات",
      pris: 0,
      activ: true,
      bime: true,
    },
    {
      name: "محمد افضلی",
      code: 2,
      jencod: 2,
      namad: "خدمات",
      pris: 200,
      activ: true,
      bime: true,
    },
    {
      name: "مهرنوش ستوده",
      code: 3,
      jencod: 3,
      namad: "پاپ اسمیر",
      pris: 50,
      activ: true,
      bime: false,
    },
    {
      name: "سپیده شریفی",
      code: 4,
      jencod: 4,
      namad: "برای بای pass",
      pris: 54,
      activ: false,
      bime: false,
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between items-center  mb-5">
        <div>
          <Typography type="h2">مدیریت خدمات</Typography>
          <Typography type="p" className="text-[#717376] mt-3">
            در این قسمت میتوان توضیحاتی در مورد مدیریت خدمات نوشت.
          </Typography>
        </div>
        <Button size="small" leftIcon={<Add size="26" className="text-neutral-800" />} className="bg-[#F9C310] rounded-lg py-2 pl-2">
          
        </Button>
      </div>
      <hr />
      <MineNavbar />
      <div className="bg-[#F4F5FA] mt-5 text-center grid grid-cols-7  p-4 text-[#3949AB] text-sm  gap-2 rounded-md">
        <Typography type="h4">نام خدمت</Typography>
        <Typography type="h4">کد خدمت</Typography>
        <Typography type="h4">کد ژنریک</Typography>
        <Typography type="h4">نماد</Typography>
        <Typography type="h4">قیمت پایه</Typography>
        <Typography type="h4">فعال</Typography>
        <Typography type="h4">پوشش بیمه</Typography>
      </div>

      {list.map((item, index) => (
        <ShowServisList item={item} index={index} gridcolse="grid grid-cols-7"/>
      ))}
    </div>
  );
}
