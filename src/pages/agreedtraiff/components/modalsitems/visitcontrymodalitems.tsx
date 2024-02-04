import { Checkbox } from "antd";
import { Input, Typography } from "../../../../components/atoms";
import { PersianDatePicker } from "../../../../components/organisms";

type prpps = {
  productTypeValue?: string;
  onProductTypeChange?: (newType: string) => void;
};
export default function Visitcontrymodalitems(props: prpps) {
const handelsubmit =()=>{

}
  return (
    <div>
       <form onSubmit={handelsubmit}>
      
          <div className=" grid grid-cols-4 mt-3 gap-3">
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
          </div>
          <div className=" grid grid-cols-4 mt-3 gap-3">
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
          </div>
         <div className="grid grid-cols-1 mt-3">
         <div className="flex flex-col">
              <div className="flex">
                <Typography className="pb-2">توضیحات</Typography>
                <Typography className="pb-2 text-red-600">*</Typography>
              </div>
               <Input type="text"className="border-[#E8E8E9] bg-[#FEFEFE] p-3 pl-20 rounded-md text-xs border-2"placeholder="نام واسط را وارد کنید"/>
            </div>
         </div>
         <div className="mt-3 flex gap-5 items-center">
          <div className="flex gap-2 items-center">  <Checkbox />
            <Typography>فعال</Typography></div>
          <div className="flex gap-2 items-center">  <Checkbox />
            <Typography>مراجعه به پزشک خواواده</Typography></div>
          <div className="flex gap-2 items-center">  <Checkbox />
            <Typography>2K</Typography></div>
          <div className="flex gap-2 items-center">  <Checkbox />
            <Typography>تجویز الکترونیک</Typography></div>
         </div> 
      </form>
    </div>
  );
}
