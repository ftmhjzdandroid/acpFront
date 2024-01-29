import React from "react";
import { Typography } from "../../../components/atoms";
import { Timer1 } from "iconsax-react";
import { Button } from "../../../components/molecules";
type Props={
    onclose : ()=> void
}
export default function Historymodal(props : Props) {
  const lists = [
    {
      code: 126,
      name: "مهدیس صبوری",
      namad: "خدمات",
      shenase: 161,
      jencod: 12,
      startday: "1402/11/05",
      endday: "",
      amal: "قانونی",
      amaldate: "1042/11/6",
      tizihat: "resety",
    },
    {
      code: 126,
      name: "مهدیس صبوری",
      namad: "خدمات",
      shenase: 161,
      jencod: 12,
      startday: "1402/11/05",
      endday: "",
      amal: "قانونی",
      amaldate: "1042/11/6",
      tizihat: "resety",
    },
    {
      code: 126,
      name: "مهدیس صبوری",
      namad: "خدمات",
      shenase: 161,
      jencod: 12,
      startday: "1402/11/05",
      endday: "",
      amal: "قانونی",
      amaldate: "1042/11/6",
      tizihat: "resety",
    },
    {
      code: 126,
      name: "مهدیس صبوری",
      namad: "خدمات",
      shenase: 161,
      jencod: 12,
      startday: "1402/11/05",
      endday: "",
      amal: "قانونی",
      amaldate: "1042/11/6",
      tizihat: "resety",
    }
  ];
  return (
    <div>
      <div>
        <div className="flex gap-3 pb-3">
          <Timer1 color="#3949AB" variant="Bold" />
          <Typography type="h3" className="text-[#3949AB]">
            نمایش تاریخچه
          </Typography>
        </div>
        <div className="flex gap-1 pb-4 pr-5">
          <Typography type="h6" className="text-success-300">
            خدمت:
          </Typography>
          <Typography>مهدیس نرگسی</Typography>
        </div>
      </div>
      <div className="bg-background-300 text-center grid grid-cols-10  p-4 text-[#3949AB] text-sm  gap-2 rounded-md">
        <Typography type="h4">کد کاربر</Typography>
        <Typography type="h4">نام</Typography>
        <Typography type="h4">نماد</Typography>
        <Typography type="h4">شناسه نوع</Typography>
        <Typography type="h4">کد ژنتیک</Typography>
        <Typography type="h4">شروع اعتبار</Typography>
        <Typography type="h4">پایان اعتبار</Typography>
        <Typography type="h4">نوع عملیات</Typography>
        <Typography type="h4">تاریخ عملیات</Typography>
        <Typography type="h4">توضیحات عملیات</Typography>
      </div>
      {lists.map((list, index) => (
        <div
          key={index}
          className={`${
            index % 2 == 1 ? "bg-background-300" : ""
          } grid grid-cols-10 mt-2  p-4 rounded-md text-xs text-center`}
        >
            <Typography>{list.code}</Typography>
            <Typography>{list.name}</Typography>
            <Typography>{list.namad}</Typography>
            <Typography>{list.shenase}</Typography>
            <Typography>{list.jencod}</Typography>
            <Typography>{list.startday}</Typography>
            <Typography>{list.endday}</Typography>
            <Typography>{list.amal}</Typography>
            <Typography>{list.amaldate}</Typography>
            <Typography>{list.tizihat}</Typography>
        </div>
      ))}
      <Button label="بستن" size="small" onClick={props.onclose}  className="border-[#E8E8E9] flex justify-center px-0 mt-3 w-full bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2" ></Button>
    </div>
  );
}
