import React, { useEffect, useState } from "react";
import { Typography } from "../../components/atoms";
import { Button, Modal, PopoverDialog } from "../../components/molecules";
import { Add } from "iconsax-react";
import { Typemodal } from "./components/typemodal";
import { Foldermodal } from "./components/foldermodal";

export const Property = () => {
  const [isopenfolder, setisopenfolder] = useState<boolean>(false);
  const [isopentype, setisopentype] = useState<boolean>(false);

  return (
    <div>

      <Modal isOpen={isopentype} onBackdrop={()=>setisopentype(false)} children={<Typemodal onclos={()=>setisopentype(false)}/>}/>
      <Modal isOpen={isopenfolder} onBackdrop={()=>setisopenfolder(false)} children={<Foldermodal onclos={()=>setisopenfolder(false)}/>}/>

      <div className="flex flex-col mb-5">
        <Typography type="h2">مدریت ویژگی اضافه</Typography>
        <Typography type="p" className="text-[#717376] mt-3">
          در این قسمت میتوان توضیحاتی در موردمدریت ویژگی اضافه نوشت.
        </Typography>
      </div>
      <div className="w-full flex justify-end mb-5">
        <PopoverDialog
          renders={() => (
            <div>
              <p
                onClick={() => setisopenfolder(true)}
                className="text-sm my-2 cursor-pointer mr-2 text-neutral-500"
              >
                ثبت پوشه
              </p>
               <p
                onClick={() => setisopentype(true)}
                className="text-sm my-2 cursor-pointer mr-2 text-neutral-500"
              >
                ثبت نوع
              </p>
            </div>
          )}
          position="bottom"
          keysLabel="label"
          list={[{ id: 1, label: "jjjj" }]}
          size="w-40"
          children={
            <div className="flex items-center rounded-md border text-neutral-800 p-1 bg-[#F9C310] cursor-pointer">
              <Add size="26" className="text-neutral-800" />
            </div>
          }
        />
      </div>

      <hr />

      <div className="bg-[#F4F5FA] mt-5 text-center grid grid-cols-7  p-4 text-[#3949AB] text-sm  gap-2 rounded-md">
        <Typography type="h4">نام خدمت</Typography>
        <Typography type="h4">کد خدمت</Typography>
        <Typography type="h4">کد ژنریک</Typography>
        <Typography type="h4">نماد</Typography>
        <Typography type="h4">قیمت پایه</Typography>
        <Typography type="h4">فعال</Typography>
        <Typography type="h4">پوشش بیمه</Typography>
      </div>

    </div>
  );
};
