import React from "react";
import { Input, Typography } from "../../../../../components/atoms";
import { ArrowLeft } from "iconsax-react";
import { useCustomNav } from "../../../../../hook/useNavigate";
import { Button } from "../../../../../components/molecules";


export default function Editingservices() {
  const Navigate = useCustomNav();
  return (
    <div>
      <div className="w-full py-3 flex justify-between">
        <Typography type="p">مهدیس صبوری</Typography>
        <ArrowLeft
          color="#717376"
          className="cursor-pointer"
          onClick={() => Navigate.back()}
        />
      </div>
      <hr />
      <div>
        <Typography type="h2" className="p-5">
          ویرایش خدمات
        </Typography>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="h-10 w-10 rounded-full flex justify-center items-center bg-background-200 border-2 border-success-600">
          1
        </div>
        <Typography>اطلاعات خدمات</Typography>
        <div>-----</div>
        <div className="h-10 w-10 rounded-full flex justify-center items-center bg-background-200 ">
          2
        </div>
        <Typography>انتساب نوع پروانه</Typography>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        <div className="flex flex-col">
          <div className="flex">
            <Typography> نام خدمت</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input type="text" className="text-neutral-300" dir="rtl" placeholder="نام را وارد کنید"/>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>کد خدمت</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input type="text" className="text-neutral-300" dir="rtl" placeholder="نام را وارد کنید" />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>کد ژنتیک</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input type="text" className="text-neutral-300" dir="rtl" placeholder="نام را وارد کنید" />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>نماد خدمت</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input type="text" className="text-neutral-300" dir="rtl" placeholder="نام را وارد کنید" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        <div className="flex flex-col">
          <div className="flex">
            <Typography>عبارت جستوجو</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input type="text" className="text-neutral-300" dir="rtl" placeholder="نام را وارد کنید" />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>نام واسط</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input type="text" className="text-neutral-300" dir="rtl" placeholder="نام را وارد کنید" />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>شروع اعتبار</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input type="text" className="text-neutral-300" dir="rtl" placeholder="نام را وارد کنید" />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>پایان اعتبار</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input type="text" className="text-neutral-300" dir="rtl" placeholder="نام را وارد کنید" />
        </div>
      </div>
      <div>
        <div className="flex flex-col mb-3">
          <div className="flex">
            <Typography>توظیحات</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input type="text" className="h-24" dir="rtl" placeholder="نام را وارد کنید" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-1">
          <input type="checkbox" className="h-6 w-6 bg-neutral-400 rounded-md" />
          <Typography>فعال</Typography>
        </div>
        <div className="flex gap-1">
          <input type="checkbox" className="h-6 w-6 bg-neutral-400 rounded-md" />
          <Typography>پوشش بیمه</Typography>
        </div>
      </div>
      <div className="flex justify-end pt-5"> 
        <Button label="مرحمه بعد" onClick={()=>Navigate.to('/services/editingservusespage2')} className="text-[#eee] bg-[#3949AB] p-3 w-1/3 flex justify-center" leftIcon={<ArrowLeft color="#eee"/>} type="button" size="xs"></Button>
      </div>
    </div>
  );
}
