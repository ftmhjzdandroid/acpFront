import { Checkbox } from "antd";
import { Input, Typography } from "../../../../components/atoms";
import CheckBox from "../../../../components/atoms/check-box";
import { Button } from "../../../../components/molecules";
import { PersianDatePicker } from "../../../../components/organisms";

type prpps = {
  productTypeValue?: string;
  onProductTypeChange?: (newType: string) => void;
};
export default function CityModalitem(props: prpps) {
  const handelsubmit = () => {
    console.log();
  };
  
  return (
    <div>
       <form onSubmit={handelsubmit}>
      
          <div className=" grid grid-cols-4 mt-3 gap-3">
          <div className="flex flex-col">
              <div className="flex">
                <Typography className="pb-2">استان</Typography>
                <Typography className="pb-2 text-red-600">*</Typography>
              </div>
              <Input type="text" placeholder=" استان را وارد کنید" className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"/>
                </div>
            <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">شهر استان</Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="شهر استان را وارد کنید"/>
                </div>
            <div className="flex flex-col">
              <div className="flex">
                <Typography className="pb-2">مالکیت</Typography>
                <Typography className="pb-2 text-red-600">*</Typography>
              </div>
              <Input type="text" placeholder=" مالکیت را وارد کنید" className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"/>
                </div>
            <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">نوع شریک کاری</Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="  نوع شریک کاری را وارد کنید"/>
                </div>
            </div>
            <div className=" grid grid-cols-4 mt-3 gap-3">
                <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">نوع همکار</Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="نوع همکار را وارد کنید"/>
                </div>
                <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">هشتک</Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="هشتک را وارد کنید"/>
                </div>
                <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">شروع اعتبار</Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <PersianDatePicker placeholder="شروع اعتبار را وارد کنید" className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"/>
                </div>
                <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">پایان اعتبار </Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <PersianDatePicker className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="نام واسط را وارد کنید"/>
                </div>
            </div>
            <div className=" grid grid-cols-4 mt-3 gap-3">
                <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">بیهوشی K</Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="نام واسط را وارد کنید"/>
                </div>
                <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">بیهوشی دولتی K</Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="نام واسط را وارد کنید"/>
                </div>
                <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">فنی K</Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <Input type="text" placeholder="نام واسط را وارد کنید" className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"/>
                </div>
                <div className="flex flex-col">
              <div className="flex">
                <Typography className="pb-2">فنی دولتی K</Typography>
                <Typography className="pb-2 text-red-600">*</Typography>
              </div>
               <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="نام واسط را وارد کنید"/>
            </div>
          
            <div className=" grid grid-cols-4 mt-3 gap-3"></div>
                <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">حرفه ای K</Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="نام واسط را وارد کنید"/>
                </div>
                <div className="flex flex-col">
                <div className="flex">
                    <Typography className="pb-2">حرفه ای دولتی K</Typography>
                    <Typography className="pb-2 text-red-600">*</Typography>
                </div>
                <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="نام واسط را وارد کنید"/>
                </div>
            </div>
         <div className="mt-3 flex gap-2 items-center">
          <Checkbox />
          <Typography>فعال</Typography>
         </div> 
      </form>
    </div>
  );
}
