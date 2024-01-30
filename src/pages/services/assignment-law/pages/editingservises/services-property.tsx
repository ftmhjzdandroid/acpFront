import React, { useState } from "react";
import { Input, Typography } from "../../../../../components/atoms";
import CheckBox from "../../../../../components/atoms/check-box";
import { PersianDatePicker } from "../../../../../components/organisms";

export default function ServicesProperty() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mb-3">
        <div className="flex flex-col">
          <div className="flex">
            <Typography> نام خدمت</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input
            type="text"
            className="text-neutral-300"
            dir="rtl"
            placeholder="نام را وارد کنید"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>کد خدمت</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input
            type="text"
            className="text-neutral-300"
            dir="rtl"
            placeholder="نام را وارد کنید"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>کد ژنتیک</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input
            type="text"
            className="text-neutral-300"
            dir="rtl"
            placeholder="نام را وارد کنید"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>نماد خدمت</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input
            type="text"
            className="text-neutral-300"
            dir="rtl"
            placeholder="نام را وارد کنید"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-3">
        <div className="flex flex-col">
          <div className="flex">
            <Typography>عبارت جستوجو</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input
            type="text"
            className="text-neutral-300"
            dir="rtl"
            placeholder="نام را وارد کنید"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>نام واسط</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <Input
            type="text"
            className="text-neutral-300"
            dir="rtl"
            placeholder="نام را وارد کنید"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>شروع اعتبار</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>
          <PersianDatePicker placeholder="تاریخ شروع را وارد کنید" />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <Typography>پایان اعتبار</Typography>
            <Typography className="pb-2 text-red-600">*</Typography>
          </div>{" "}
          <PersianDatePicker placeholder="تاریخ پایان را وارد کنید" />
        </div>
      </div>
      <div className="flex flex-col mb-3">
        <div className="flex">
          <Typography>توظیحات</Typography>
          <Typography className="pb-2 text-red-600">*</Typography>
        </div>{" "}
        <Input
          type="text"
          className="h-24"
          dir="rtl"
          placeholder="نام را وارد کنید"
        />
      </div>
      <div className="flex gap-2">
        <CheckBox
          isChecked={active}
          label="فعال"
          onChange={(e) => setActive(e)}
        />
        <CheckBox
          isChecked={active}
          label="پوشش بیمه"
          onChange={(e) => setActive(e)}
        />
      </div>
    </div>
  );
}
