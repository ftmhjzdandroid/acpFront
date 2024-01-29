import { Add, CloseCircle } from "iconsax-react";
import { Typography } from "../../../components/atoms";
import { Button } from "../../../components/molecules";

import {  useState } from "react";

type prpps = {
  onclick: () => void;
  productTypeValue?: string;
  onProductTypeChange?: (newType: string) => void;
};
export default function   Modalitem(props: prpps) {
    const [name,setname]=useState('');
    const [sagfe,setsagfe]=useState('');
    const [startday,setstartday]=useState('');
    const [endday,setendday]=useState('');
    const [description,setdescription]=useState('');
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
            <Add color="#3949AB"/>
            افزودن قیمت
          </Typography>
          <div className="flex gap-1">
            <Typography type="h6" className="text-success-300">خدمت:</Typography>
            <Typography>مهدیس نرگسی</Typography>
          </div>
        </div>
        <Button
          size="small"
          leftIcon={<CloseCircle size="24" color="#54575B" />}
          onClick={props.onclick}
        ></Button>
      </div>
      <form onSubmit={handelsubmit}>
        <div className="">
          <div className=" grid grid-cols-2 mt-3 gap-3">
            <div className="flex flex-col">
             <div className="flex">
             <Typography className="pb-2">نام خدمت</Typography>
             <Typography className="pb-2 text-red-600">*</Typography>
             </div>
              <input
                type="text"
                required
                className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"
                placeholder="قیمت پایه را وارد کنید"
                onChange={(e)=>{setname(e.target.value)}}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex">

              <Typography className="pb-2">سقف قیمت بیمه</Typography>
              <Typography className="pb-2 text-red-600">*</Typography>
              </div>
              <input
                type="text"
                required
                className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"
                placeholder="سقف قیمت بیمه را وارد کنید"
                onChange={(e)=>{setsagfe(e.target.value)}}
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
              <input
                type="date"
                required
                className="border-[#E8E8E9] bg-[#FEFEFE] px-16 py-3 rounded-md text-xs border-2"
                placeholder="تاریخ شروع اعتبار را وارد کنید"
                onChange={(e)=>{setstartday(e.target.value)}}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex">
              <Typography className="py-2">پایان اعتبار</Typography>
              <Typography className="pb-2 text-red-600">*</Typography>
              </div>
              <input
                type="date"
                required
                className="border-[#E8E8E9] bg-[#FEFEFE] px-16 py-3 rounded-md text-xs border-2"
                placeholder="تاریخ پایان اعتبار را وارد کنید"
                onChange={(e)=>{setendday(e.target.value)}}
              />
            </div>
          </div>
          <div className="flex flex-col">
              <Typography className="py-2">توضیحات</Typography>
              <input
                type="text"
                required
                className="border-[#E8E8E9] bg-[#FEFEFE]  py-3 pb-20 px-3 rounded-md text-xs border-2"
                placeholder=" توضیحات را وارد کنید "
                onChange={(e)=>{setdescription(e.target.value)}}
              />
            </div>
            <div className="  grid grid-cols-2 mt-3 gap-4">
                <Button type="submit" label="به روز رسانی تمامی قیمت ها با کد ژنریک مشابه" className="text-[#3949AB] border-2 border-[#3949AB] p-3" size="small"></Button>
                <Button type="submit" label="ثبت" className="text-[#eee] bg-[#3949AB] flex items-center justify-center p-3 w-full " size="small"></Button>
            </div>
        </div>
      </form>
    </div>
  );
}
