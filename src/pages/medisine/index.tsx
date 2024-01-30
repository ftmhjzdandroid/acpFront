import { Add, CloseCircle, TickCircle } from "iconsax-react";
import { Typography } from "../../components/atoms";
import { Button } from "../../components/molecules";
import MineNavbar from "./components/MineNavbar";
import ShowMedisineList from "./components/ShowMedisineList";

export default function Medisine() {
  const list = [
    {
      name: "مهدیس صبوری",
      code: 1,
      jencod: 1,
      namad: "خدمات",
      pris: 300,
      activ: true,
    },
    {
      name: "محمد افضلی",
      code: 2,
      jencod: 2,
      namad: "خدمات",
      pris: 200,
      activ: true,
    },
    {
      name: "مهرنوش ستوده",
      code: 3,
      jencod: 3,
      namad: "پاپ اسمیر",
      pris: 50,
      activ: true,
    },
    {
      name: "سپیده شریفی",
      code: 4,
      jencod: 4,
      namad: "برای بای pass",
      pris: 54,
      activ: false,
    },
    {
      name: "سپیده شریفی",
      code: 4,
      jencod: 4,
      namad: "برای بای pass",
      pris: 54,
      activ: false,
    },
  ];
  return (
    <div className="">
      <div className="flex justify-between items-center  mb-5">
        <div>
          <Typography type="h2">مدیریت دارو و خدمات</Typography>
          <Typography type="p" className="text-[#717376] mt-3">
            در این قسمت میتوان توضیحاتی در موردمدریت دارو و خدمات نوشت.
          </Typography>
        </div>
        <Button className="bg-[#F9C310] min-w-[40px] md:min-w-[40px]">
          <Add size="26" className="text-neutral-800" />
        </Button>
      </div>
      <hr />
      <MineNavbar />
      <div className="bg-[#F4F5FA] mt-5 text-center grid grid-cols-6  p-4 text-[#3949AB] text-sm  gap-2 rounded-md">
        <Typography type="h4">نام دارو ولوازم مصرفی</Typography>
        <Typography type="h4">IRC</Typography>
        <Typography type="h4">کد ژنریک</Typography>
        <Typography type="h4">قیمت در تعهد</Typography>
        <Typography type="h4">قیمت IFDA</Typography>
        <Typography type="h4">پوشش بیمه</Typography>
      </div>

      {list.map((item, index) => (
        <ShowMedisineList item={item} index={index} key={index}/>
      ))}
         
    </div>
  );
}
