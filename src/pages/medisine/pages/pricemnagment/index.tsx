import { ArrowLeft } from "iconsax-react";
import { useCustomNav } from "../../../../hook/useNavigate";
import { useState } from "react";
import { Modal } from "../../../../components/molecules";
import { Typography } from "../../../../components/atoms";
import { Badge } from "../../../../components/atoms/badge";
import Modalprice from "../../components/Modalprice";
export default function PriceManagement() {
  const [addpricemodal, setaddpricemodal] = useState<boolean>(false);
  const [productType, setProductType] = useState<string>("");
const Navigate = useCustomNav()

  const list = [
    {
      name: "مهدیس صبوری",
      pris: 1200000,
      pris2: 1300000,
      start: "1402/2/4",
      end: "1405-4-12",
      activ : true,
      tozihat:"توضیحات فرضی را در این "
    },
    {
      name: "مهدیس صبوری",
      pris: 1200000,
      pris2: 1300000,
      start: "1402/2/4",
      end: "1405-4-12",
      activ : true,
      tozihat:"توضیحات فرضی را در این "
    },
    {
      name: "مهدیس صبوری",
      pris: 1200000,
      pris2: 1300000,
      start: "1402/2/4",
      end: "1405-4-12",
      activ : false,
      tozihat:"توضیحات فرضی را در این "
    },
    {
      name: "مهدیس صبوری",
      pris: 1200000,
      pris2: 1300000,
      start: "1402/2/4",
      end: "1405-4-12",
      activ : true,
      tozihat:"توضیحات فرضی را در این "
    },
  ];
  console.log(productType);
  return (
    <div className="">
      <Modal
        isOpen={addpricemodal}
        onBackdrop={() => {
          setaddpricemodal(false);
        }}
        children={
          <Modalprice
            onProductTypeChange={setProductType}
            onclick={() => {
          setaddpricemodal(false);
            }}
          />
        }
      />
      <div className="w-full py-3 flex justify-between">
        <Typography type="p">دارو نبولایزر اولتراسونیک</Typography>
        <ArrowLeft color="#717376" className="cursor-pointer" onClick={()=>Navigate.back()} />
      </div>
      <hr />
      <div className="flex justify-between items-center  py-5">
        <Typography type="h3">مدیریت قیمت</Typography>
        <button
          className="bg-[#F9C310] rounded-lg p-2 text-sm"
          onClick={() => {
            setaddpricemodal(true);

          }}
        >
          ویرایش قیمت
        </button>
      </div>
      <div className="bg-background-300 text-center grid grid-cols-8  p-4 text-[#3949AB] text-sm  gap-2 rounded-md">
        <Typography type="h4">نام کاربر</Typography>
        <Typography type="h4">قیمت پایه</Typography>
        <Typography type="h4">قیمتت در تعهد</Typography>
        <Typography type="h4">شروع اعتبار</Typography>
        <Typography type="h4">پایان اعتبار </Typography>
        <Typography type="h4">تاریخ ایجاد</Typography>
        <Typography type="h4">وضعیت</Typography>
        <Typography type="h4">توضیحات</Typography>
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className={`${
            index % 2 == 1 ? "bg-background-300" : ""
          } grid grid-cols-8 mt-2  p-4 rounded-md text-xs`}
        >
          <Typography className="text-center" type="p">
            {item.name}
          </Typography>
          <Typography className="text-center" type="p">
            {item.pris}
          </Typography>
          <Typography className="text-center" type="p">
            {item.pris2}
          </Typography>
          <div className="w-full flex justify-center ">
            <Typography className="bg-success-200 px-3 py-1">
              {item.start}
            </Typography>
          </div>
          <div className="w-full flex justify-center ">
            <Typography className=" bg-neutral-200 px-3 py-1">
              {item.end}
            </Typography>
          </div>
          <div className="w-full flex justify-center">
            <Typography>{item.start}</Typography>
          </div>
          <div className="flex w-full justify-center relative">
             <Badge
              children={item.activ ? <div className="bg-green-400 rounded-full h-4 w-4"></div> :<div className="bg-red-400 rounded-full h-4 w-4"></div>}
              className={` ${
                item.activ ? "bg-success-200" : "bg-danger-200"
              } rounded-full p-1 flex justify-center items-center`}
            />
          </div>
          <div className="w-full flex justify-center">
            <Typography>{item.tozihat}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
