import { Add } from "iconsax-react";
import { Typography } from "../../components/atoms";
import ShowServisList from "./components/ShowServisList";
import MineNavbar from "../../components/organisms/navbar/MineNavbar";
import { useNavigate, } from "react-router-dom";
import { Button } from "../../components/molecules";

export default function Services() {
  const navigate = useNavigate();
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
        <div title="افزودن خدمت جدید">
        <Button onClick={()=>navigate("add")} className="bg-[#F9C310] min-w-[40px] md:min-w-[40px]">
          <Add size="26" className="text-neutral-800" />
        </Button>
        </div>
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
        <ShowServisList
          item={item}
          index={index}
          gridcolse="grid grid-cols-7 "
        />
      ))}
    </div>
  );
}
