import React from "react";
import { Typography } from "../../components/atoms";
import { Button, PopoverDialog } from "../../components/molecules";
import { Add, ArrowRotateLeft, Copy, MessageAdd1, Sort } from "iconsax-react";
import { ArrowBtn } from "../../components/molecules/arrow-botton";
import ShowServisList from "./components/ShowServisList";
import TabBar from "../../components/organisms/tabview/tabview2";

export default function Agreedtraiff() {
  const list = [
    {
      center : "545",
      state : "کشور",
      city : "",
      owner : "دولتی",
      hashtak : "همه کد ها",
      partner : "",
      colleague : "",
      anes : "20000",
      tech : "20000",
      pro : "20000",
      goveranes : "20000",
      govertech : "20000",
      goverpro : "20000"
    },
    {
      center : "545",
      state : "کشور",
      city : "",
      owner : "دولتی",
      hashtak : "همه کد ها",
      partner : "",
      colleague : "",
      anes : "20000",
      tech : "20000",
      pro : "20000",
      goveranes : "20000",
      govertech : "20000",
      goverpro : "20000"
    },
    {
      center : "545",
      state : "کشور",
      city : "",
      owner : "دولتی",
      hashtak : "همه کد ها",
      partner : "",
      colleague : "",
      anes : "20000",
      tech : "20000",
      pro : "20000",
      goveranes : "20000",
      govertech : "20000",
      goverpro : "20000"
    },
  ]
  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="gap-2">
          <Typography type="h2">مدیریت تعرفه</Typography>
          <Typography>
            در اینجا هر چیزی در مورد مدریت تعرفه میتوان نوشت
          </Typography>
        </div>
        <div className="flex gap-5">
          <div
            title="درخواست نرخ کگاری مجدد"
           >
            <ArrowBtn
            borderColo="border-brand-800"
            children={<MessageAdd1 className="text-brand-800" />}
            className="p-1"
          />
          </div>
          
          <div
            title="کپی تعرفه سال قبل"
             > <ArrowBtn
            borderColo="border-brand-800"
            children={<Copy className="text-brand-800" />}
            className="p-1"/>
          </div>
          <Button
            className="bg-[#F9C310]"
            icon={<Add className="text-neutral-800" />}
          >
            <Typography className="text-neutral-800">افزودن</Typography>
          </Button>
        </div>
      </div>
      <TabBar
        data={[
          { key: "1", route: "userActivities", title: "قیمت K" },
          { key: "2", route: "groupActivities", title: "قیمت ویزیت" },
        ]}
        className="mx-auto mt-4"
      />
      <div className="flex justify-end gap-3">
      <ArrowRotateLeft
          size="30"
          className="cursor-pointer text-neutral-800"
        />
        <PopoverDialog
        renders={() => <Typography>jj</Typography>}
        keysLabel="label"
        list={[{ id: 1, label: "jjjj" }]}
        children={
          <div className="flex items-center rounded-md border text-neutral-800 p-1">
            <Sort className="text-neutral-800" />
            <Typography type="p" className="m-2">
              فیلترها
            </Typography>
          </div>
        }
      />
      </div>
      <div className="bg-[#F4F5FA] text-[#3949AB] text-xs mt-5 p-4 flex  rounded-md ">
          <div className="w-[71px] text-center">شناسه</div >
          <div className="w-[71px] text-center">استان</div >
          <div className="w-[71px] text-center">شهراستان</div >
          <div className="w-[71px] text-center">مالکیت</div >
          <div className="w-[71px] text-center">هشتک</div >
          <div className="w-[71px] text-center">شریک کاری</div >
          <div className="w-[71px] text-center">همکار</div >
          <div className="w-[71px] text-center">بیهوشی</div >
          <div className="w-[71px] text-center">فنی</div >
          <div className="w-[71px] text-center">حرفه ای</div >
          <div className="w-[71px] text-center">بیهوشی دولتی</div >
          <div className="w-[71px] text-center">فنی دولتی</div >
          <div className="w-[71px] text-center">حرفه ای دولتی</div >
      </div>
      {list.map((item,index)=>(
        <ShowServisList key={index} index={index} item={item}/>
      ))}
    </div>
  );
}
