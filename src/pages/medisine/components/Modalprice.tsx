import { useState } from "react";
import { Input, Typography } from "../../../components/atoms";
import { Add, CloseCircle } from "iconsax-react";
import { Button } from "../../../components/molecules";
import { PersianDatePicker } from "../../../components/organisms";


type prpps = {
  onclick: () => void;
  productTypeValue?: string;
  onProductTypeChange?: (newType: string) => void;
};
export default function Modalprice(props: prpps) {
    const [name,setname]=useState<string>('');
    const [sagfe,setsagfe]=useState<string>('');
    const [startday,setstartday]=useState<string>('');
    const [endday,setendday]=useState<string>('');
    const [description,setdescription]=useState<string>('');
    const handelsubmit =()=>{
        const items = {
            name : name,
            sagfe:sagfe,
            startday:startday,
            endday:endday,
            description:description
        }
        console.log()
    }
    // props.onProductTypeChange('')
  return (
    <div>
      <div className="flex justify-between items-start p-1 mb-3 w-full">
        <div className="">
          <Typography type="p" className="pb-2 flex items-center text-[#3949AB]">
            ویرایش قیمت
          </Typography>
          <div className="flex gap-1 pb-2">
            <Typography type="h6" className="text-success-300">نام دارو:</Typography>
            <Typography>  نبولایزر اولتراسونیک</Typography>
          </div>
          <div className="flex gap-1">
            <Typography type="h6" className="text-success-300">کدژنتیک:</Typography>
            <Typography> 1043</Typography>
          </div>
        </div>
        <Button
        variant="none"
          onClick={props.onclick}
        ><CloseCircle size="24" color="#54575B" /></Button>
      </div>
      <form onSubmit={handelsubmit}>
        <div className="mt-5">
          <div className=" grid grid-cols-2 mt-3 gap-3">
            <div className="flex flex-col">
             <div className="flex">
             <Typography className="pb-2">نام خدمت</Typography>
             <Typography className="pb-2 text-red-600">*</Typography>
             </div>
              <Input
                type="text"
                className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"
                placeholder="قیمت پایه را وارد کنید"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex">

              <Typography className="pb-2">سقف قیمت بیمه</Typography>
              <Typography className="pb-2 text-red-600">*</Typography>
              </div>
              <Input
                type="text"
                className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"
                placeholder="سقف قیمت بیمه را وارد کنید"
              />
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
              <Input
                type="text"
                className="border-[#E8E8E9] bg-[#FEFEFE]  py-3 pb-20 px-3 rounded-md text-xs border-2"
                placeholder=" توضیحات را وارد کنید "
              />
            </div>
            <div className="  grid grid-cols-2 mt-3 gap-4">
                <Button type="submit"  variant="outline">به روز رسانی تمامی قیمت ها با کد ژنریک مشابه</Button>
                <Button type="submit" className="w-full ">ثبت</Button>
            </div>
        </div>
      </form>
    </div>
  );
}

