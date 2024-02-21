import { Outlet, Route, Routes } from "react-router-dom";
import ShowServisList from "./components/ShowServisList";
import Heder from "./components/heder";
import Mprice from "./mprice";
import Vprice from "./vprice";

export default function Agreedtraiff() {
  return (
    <div>
     <Heder/>
      <table className="bg-[#F4F5FA] text-[#3949AB] text-xs mt-5 p-4 w-full rounded-md ">
        <tr>
          <th className="p-4 text-center">شناسه</th >
          <th className="p-4 text-center">استان</th >
          <th className="p-4 text-center">شهراستان</th >
          <th className="p-4 text-center">مالکیت</th >
          <th className="p-4 text-center">هشتک</th >
          <th className="p-4 text-center">شریک کاری</th >
          <th className="p-4 text-center">همکار</th >
          <th className="p-4 text-center">بیهوشی</th >
          <th className="p-4 text-center">فنی</th >
          <th className="p-4 text-center">حرفه ای</th >
          <th className="p-4 text-center">بیهوشی دولتی</th >
          <th className="p-4 text-center">فنی دولتی</th >
          <th className="p-4 text-center">حرفه ای دولتی</th >
        </tr>
      </table>
      
      <Routes>
        <Route path="/mprice" element={<Mprice/>}  />
        <Route path="/vprice" element={<Vprice/>}  />
      </Routes>
      <Outlet />
    </div>
  );
}
