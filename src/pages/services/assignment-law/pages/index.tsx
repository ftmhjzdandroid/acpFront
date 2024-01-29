import { Add, ArrowLeft } from "iconsax-react";
import { Typography } from "../../../../components/atoms";
import { useState } from "react";
import { Button, Modal } from "../../../../components/molecules";
import Modalitem from "../../components/Modalitem";
import { useCustomNav } from "../../../../hook/useNavigate";


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
    },
    {
      name: "مهدیس صبوری",
      pris: 1200000,
      pris2: 1300000,
      start: "1402/2/4",
      end: "1405-4-12",
    },
    {
      name: "مهدیس صبوری",
      pris: 1200000,
      pris2: 1300000,
      start: "1402/2/4",
      end: "1405-4-12",
    },
    {
      name: "مهدیس صبوری",
      pris: 1200000,
      pris2: 1300000,
      start: "1402/2/4",
      end: "1405-4-12",
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
          <Modalitem
            onProductTypeChange={setProductType}
            onclick={() => {
          setaddpricemodal(false);
            }}
          />
        }
      />
      <div className="w-full py-3 flex justify-between">
        <Typography type="p">مهدیس صبوری</Typography>
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
          افزودن قیمت
        </button>
      </div>
      <div className="bg-background-300 text-center grid grid-cols-6  p-4 text-[#3949AB] text-sm  gap-2 rounded-md">
        <Typography type="h4">نام کاربر</Typography>
        <Typography type="h4">قیمت پایه</Typography>
        <Typography type="h4">قیمتت در تعهد</Typography>
        <Typography type="h4">شروع اعتبار</Typography>
        <Typography type="h4">پایان اعتبار </Typography>
        <Typography type="h4">تاریخ ایجاد</Typography>
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className={`${
            index % 2 == 1 ? "bg-background-300" : ""
          } grid grid-cols-6 mt-2  p-4 rounded-md text-xs`}
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
        </div>
      ))}
    </div>
  );
}
