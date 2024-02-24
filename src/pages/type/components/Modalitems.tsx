import { Add } from "iconsax-react";
import React from "react";
import { Input, Typography } from "../../../components/atoms";
import { Button } from "../../../components/molecules";
type prop ={
  close : ()=> void
}

export const Modalitems = (props : prop) => {
  return (
    <div className="w-[700px]">
      <div className="flex items-center text-[#3949AB]">
        <Add />
        <Typography type="p">ثبت پوشه جدید</Typography>
      </div>
      <div className="grid grid-cols-2 my-5 ">
        <Typography type="p" className="pt-3 text-neutral-500">
          نام
        </Typography>
        <Input />
      </div>
      <div className="grid grid-cols-2 my-5 ">
        <Typography type="p" className="pt-3 text-neutral-500">
          نماد
        </Typography>
        <Input />
      </div>
      <div className="grid grid-cols-2 my-5 ">
        <Typography type="p" className="pt-3 text-neutral-500">
          توضیحات
        </Typography>
        <Input placeholder="توضیحات" />
      </div>
      <div className="grid grid-cols-2 my-5 ">
        <Typography type="p" className="pt-3 text-neutral-500">
          شاخه انتخاب شده
        </Typography>

        <select
          name="cars"
          id="cars"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value=" ..">شاخه اصلی</option>
          <option value="saab">فرغی</option>
          <option value="mercedes">....</option>
          <option value="audi">.....</option>
        </select>
      </div>
      <div className="grid grid-cols-2 my-5 ">
      <div></div>
      <div className="flex  w-full">
<Button className="w-1/2">ثبت</Button>
<Button variant="outline" className="w-1/2" onClick={props.close}>انصراف</Button>

      </div>

      </div>
    </div>
  );
};
