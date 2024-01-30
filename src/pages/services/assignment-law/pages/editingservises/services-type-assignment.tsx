import React, { useState } from "react";
import { Typography } from "../../../../../components/atoms";
import { useCustomNav } from "../../../../../hook/useNavigate";
import {
  ArrowDown2,
  ArrowLeft,
  Folder2,
  FormatSquare,
  TickCircle,
} from "iconsax-react";
import { Button } from "../../../../../components/molecules";
import { FolderLayout } from "../../../../../components/organisms/folder-layout";

export default function ServicesTypeAssignmet() {
  const Navigate = useCustomNav();
  const [folder, setfolder] = useState<boolean>(true);
  const [type, settype] = useState<boolean>(false);
  const list = [
    {
      name: "تعداد جلسات",
      ahnase: 3423,
      namad: "نوع شریک کاری",
      etbar: <TickCircle className="text-success-700" />,
    },
    {
      name: "تعداد جلسات",
      ahnase: 3423,
      namad: "نوع شریک کاری",
      etbar: <TickCircle className="text-success-700" />,
    },
    {
      name: "تعداد جلسات",
      ahnase: 3423,
      namad: "نوع شریک کاری",
      etbar: <TickCircle className="text-success-700" />,
    },
  ];
  return (
    <>
      <FolderLayout />
    </>
  );
}
{
  /* <div className="">
{" "}
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
    <TickCircle size="34" className="text-success-700" />
  </div>
  <Typography>اطلاعات خدمات</Typography>
  <div>-----</div>
  <div className="h-10 w-10 rounded-full flex justify-center items-center bg-background-200 border-2 border-success-600 ">
    2
  </div>
  <Typography>انتساب نوع پروانه</Typography>
</div>
<div className="flex gap-3 border-r-2 border-[#3949AB] mt-5 px-2">
  <Typography>پوشه</Typography>
  <div className="h-7 w-7 text-[#3949AB] bg-background-300 rounded-full text-center">
    4
  </div>
  <ArrowDown2
    color="#717376"
    className="cursor-pointer"
    onClick={() => setfolder((e) => !e)}
  />
</div>
{folder && (
  <>
    <div className="grid grid-cols-2 p-4 gap-3 duration-100 trantion-all">
      <div className=" flex gap-3 p-3 bg-neutral-300 rounded-md">
        <Folder2 color="#3949AB" variant="Bold" />
        <div className="w-full">
          <Typography>انواع خدمات درمانی</Typography>
          <Typography className="text-neutral-500 py-3">
            partnerTest
          </Typography>
          <div className="flex justify-between">
            <div className="gap-3 flex  pb-3">
              <Typography>شناسه:</Typography>
              <Typography className="text-[#3949AB]">4865</Typography>
            </div>
            <div className="gap-3 flex  pb-3">
              <Typography>پوشه:</Typography>
              <Typography className="text-[#3949AB]">12</Typography>
            </div>
            <div className="gap-3 flex  pb-3">
              <Typography>قانون:</Typography>
              <Typography className="text-[#3949AB]">12</Typography>
            </div>
            <div className="gap-3 flex pb-3 justify-center items-center">
              <Typography>اعتبار:</Typography>
              <TickCircle color="#16A34A" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-3 p-3 bg-neutral-300 rounded-md">
        <Folder2 color="#3949AB" variant="Bold" />
        <div className="w-full">
          <Typography>انواع خدمات درمانی</Typography>
          <Typography className="text-neutral-500 py-3">
            partnerTest
          </Typography>
          <div className="flex justify-between">
            <div className="gap-3 flex  pb-3">
              <Typography>شناسه:</Typography>
              <Typography className="text-[#3949AB]">4865</Typography>
            </div>
            <div className="gap-3 flex  pb-3">
              <Typography>پوشه:</Typography>
              <Typography className="text-[#3949AB]">12</Typography>
            </div>
            <div className="gap-3 flex  pb-3">
              <Typography>قانون:</Typography>
              <Typography className="text-[#3949AB]">12</Typography>
            </div>
            <div className="gap-3 flex pb-3 justify-center items-center">
              <Typography>اعتبار:</Typography>
              <TickCircle color="#16A34A" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 p-4 gap-3">
      <div className=" flex gap-3 p-3 bg-neutral-300 rounded-md">
        <Folder2 color="#3949AB" variant="Bold" />
        <div className="w-full">
          <Typography>انواع خدمات درمانی</Typography>
          <Typography className="text-neutral-500 py-3">
            partnerTest
          </Typography>
          <div className="flex justify-between">
            <div className="gap-3 flex  pb-3">
              <Typography>شناسه:</Typography>
              <Typography className="text-[#3949AB]">4865</Typography>
            </div>
            <div className="gap-3 flex  pb-3">
              <Typography>پوشه:</Typography>
              <Typography className="text-[#3949AB]">12</Typography>
            </div>
            <div className="gap-3 flex  pb-3">
              <Typography>قانون:</Typography>
              <Typography className="text-[#3949AB]">12</Typography>
            </div>
            <div className="gap-3 flex pb-3 justify-center items-center">
              <Typography>اعتبار:</Typography>
              <TickCircle color="#16A34A" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex gap-3 p-3 bg-neutral-300 rounded-md">
        <Folder2 color="#3949AB" variant="Bold" />
        <div className="w-full">
          <Typography>انواع خدمات درمانی</Typography>
          <Typography className="text-neutral-500 py-3">
            partnerTest
          </Typography>
          <div className="flex justify-between">
            <div className="gap-3 flex  pb-3">
              <Typography>شناسه:</Typography>
              <Typography className="text-[#3949AB]">4865</Typography>
            </div>
            <div className="gap-3 flex  pb-3">
              <Typography>پوشه:</Typography>
              <Typography className="text-[#3949AB]">12</Typography>
            </div>
            <div className="gap-3 flex  pb-3">
              <Typography>قانون:</Typography>
              <Typography className="text-[#3949AB]">12</Typography>
            </div>
            <div className="gap-3 flex pb-3 justify-center items-center">
              <Typography>اعتبار:</Typography>
              <TickCircle color="#16A34A" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)}
<div className="flex gap-4 border-r-2 border-[#F9C310] px-2">
  <Typography>نوع</Typography>
  <div className="h-7 w-7 text-[#F9C310] bg-background-300 rounded-full text-center">
    3
  </div>
  <ArrowDown2
    color="#717376"
    className="cursor-pointer"
    onClick={() => settype((e) => !e)}
  />
</div>
{
  type && (
  <>
  <div className="bg-background-300 text-center grid grid-cols-4  p-4 text-[#3949AB] text-sm  gap-2 rounded-md">
    <Typography type="h4">نام </Typography>
    <Typography type="h4">شناسه</Typography>
    <Typography type="h4">نماد</Typography>
    <Typography type="h4"> اعتبار</Typography>
  </div>
  {list.map((item, index) => (
  <div
    key={index}
    className={`${
      index % 2 == 1 ? "bg-background-300" : ""
    } grid grid-cols-4 mt-2  p-4 rounded-md text-xs`}
  >
    <Typography className="flex justify-around " type="p">
      <FormatSquare color="#F9C310" variant="Bold"/>
      {item.name}
      <div></div>
    </Typography>
    <Typography className="text-center" type="p">
      {item.ahnase}
    </Typography>
    <Typography className="text-center" type="p">
      {item.namad}
    </Typography>

    <div className="w-full flex justify-center">
      <Typography>
        {item.etbar}
      </Typography>
    </div>
  </div>
))}
  </>
)}
<div className="flex justify-end w-full pt-5"> 
  <Button  className="w-1/3">ثبت <ArrowLeft color="#eee"/></Button>
</div>
</div> */
}
