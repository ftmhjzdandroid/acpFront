import ShowServisList from "./components/ShowServisList";
import Heder from "./components/heder";

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
      {list.map((item,index)=>( 
        <ShowServisList key={index} index={index} item={item}/>
      ))}
    </div>
  );
}
