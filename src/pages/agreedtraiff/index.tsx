import { Outlet, Route, Routes } from "react-router-dom";
import ShowServisList from "./components/ShowServisList";
import Heder from "./components/heder";
import Mprice from "./mprice";
import Vprice from "./vprice";

export default function Agreedtraiff() {
  return (
    <div>
     <Heder/>
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
      
      <Routes>
        <Route path="/mprice" element={<Mprice/>}  />
        <Route path="/vprice" element={<Vprice/>}  />
      </Routes>
      <Outlet />
    </div>
  );
}
