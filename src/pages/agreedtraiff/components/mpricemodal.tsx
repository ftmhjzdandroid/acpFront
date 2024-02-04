import { useState } from "react";
import { Button } from "../../../components/molecules";
import { Typography } from "../../../components/atoms";
import ContryModalitem from "./modalsitems/contrymodalitems";
import CityModalitem from "./modalsitems/citymodalitems";

type Props = {
  onclose: () => void;
};
export default function Mpricemodal(props: Props) {
  const [contry,setcontry]=useState<boolean>(true)
  const [city,setcity]=useState<boolean>(false)
  return (
    <div>
      <Typography type="h2" className="text-badgeTextColor mb-2">افزودن قیمت K</Typography>
      <Typography className="mb-3">تعرفه قیمت K مربوط به 1402 را وارو کنید</Typography>
     <div className="flex flex-col justify-center items-center">

     
      <div className="flex gap-3">
        <Button
        className={`${contry? "bg-[#3949AB] text-white":"text-slate-600 border-[#E8E8E9] border-2 bg-background-800"}`}
         onClick={()=>{
          setcontry(true) 
          setcity(false)}}
          >کشوری</Button>

        <Button 
        className={`${city? "bg-[#3949AB] text-white":"text-slate-600 border-[#E8E8E9] border-2 bg-background-800"}`}
        onClick={()=>{
          setcontry(false) 
          setcity(true)}}
        >استانی</Button>
      </div>
      {contry && (<div className="">
        <ContryModalitem/>
      </div>)}
      {city && (<div className="">
        <CityModalitem/>
      </div>)}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-5">
          <Button onClick={props.onclose} className="text-slate-600 border-[#E8E8E9] border-2 bg-background-800">انصراف</Button>
          <Button onClick={props.onclose}>ثبت</Button>
        </div>
    </div>
  );
}
