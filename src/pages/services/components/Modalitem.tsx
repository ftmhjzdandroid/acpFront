import { Add, CloseCircle } from "iconsax-react";

import { useState } from "react";
import { Input, Typography } from "../../../components/atoms";
import { Button } from "../../../components/molecules";
import { PersianDatePicker } from "../../../components/organisms";

type prpps = {
  onclick: () => void;
  productTypeValue?: string;
  onProductTypeChange?: (newType: string) => void;
};
export default function Modalitem(props: prpps) {
  const [name, setname] = useState("");
  const [sagfe, setsagfe] = useState("");
  const [startday, setstartday] = useState("");
  const [endday, setendday] = useState("");
  const [description, setdescription] = useState("");
  const handelsubmit = () => {
    const items = {
      name: name,
      sagfe: sagfe,
      startday: startday,
      endday: endday,
      description: description,
    };
    console.log();
  };
  // props.onProductTypeChange('')

  return (
    <div>
      <div className="flex justify-between items-start p-1 mb-3 w-full">
        <div className="">
          <Typography
            type="p"
            className="pb-2 flex items-center text-[#3949AB]"
          >
            <Add color="#3949AB" />
            افزودن قیمت
          </Typography>
          <div className="flex gap-1">
            <Typography type="h6" className="text-success-300">
              خدمت:
            </Typography>
            <Typography>مهدیس نرگسی</Typography>
          </div>
        </div>
        <CloseCircle
          size="24"
          onClick={props.onclick}
          className="cursor-pointer"
          color="#54575B"
        />
      </div>
      <form onSubmit={handelsubmit}>
        <div className="">
          <div className=" grid grid-cols-2 mt-3 gap-3">
            <div className="flex flex-col">
              <div className="flex">
                <Typography className="pb-2">نام خدمت</Typography>
                <Typography className="pb-2 text-red-600">*</Typography>
              </div>
              <Input type="text" placeholder="قیمت پایه را وارد کنید" className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"/>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <Typography className="pb-2">سقف قیمت بیمه</Typography>
                <Typography className="pb-2 text-red-600">*</Typography>
              </div>
               <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="سقف قیمت بیمه را وارد کنید"/>
            </div>
          </div>
        </div>
        <div>
          <div className=" grid grid-cols-2 mt-3 gap-3">
            <div className="flex flex-col">
              <div className="flex">
                <Typography className="py-2">شروع اعتبار</Typography>
                <Typography className="pb-2 text-red-600">*</Typography>
              </div>
              <PersianDatePicker placeholder="تاریخ شروع اعتبار را وارد کنید"/>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <Typography className="py-2">پایان اعتبار</Typography>
                <Typography className="pb-2 text-red-600">*</Typography>
              </div>
              <PersianDatePicker placeholder="تاریخ پایان اعتبار را وارد کنید"/>
            </div>
          </div>
          <div className="flex flex-col">
            <Typography className="py-2">توضیحات</Typography>
            <input
              type="text"
              required
              className="border-[#E8E8E9] bg-[#FEFEFE]  py-3 pb-20 px-3 rounded-md text-xs border-2"
              placeholder=" توضیحات را وارد کنید "
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
          </div>
          <div className="  grid grid-cols-2 mt-3 gap-4">
            <Button type="submit" variant="outline">
              به روز رسانی تمامی قیمت ها با کد ژنریک مشابه
            </Button>
            <Button type="submit" className="w-full ">
              ثبت
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
