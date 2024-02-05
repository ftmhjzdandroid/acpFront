import ShowServisList from "./components/ShowServisList";
import Heder from "./components/heder";

export default function Agreedtraiff() {
  const list = [
    {
      center : "545",
      state : "کشور",
      city : "تهران ",
      owner : "دولتی",
      hashtak : "همه کد ها",
      partner : "تهران  ",
      colleague : "تهران  ",
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
      city : "تهران ",
      owner : "دولتی",
      hashtak : "همه کد ها",
      partner : "تهران  ",
      colleague : "تهران  ",
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
      city : "تهران ",
      owner : "دولتی",
      hashtak : "همه کد ها",
      partner : "تهران  ",
      colleague : "تهران  ",
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
      <table className="bg-[#F4F5FA] text-[#3949AB] text-xs mt-5 p-4 w-full rounded-md ">
        <tr>
          <th className="text-center py-3">شناسه</th >
          <th className="text-center py-3">استان</th >
          <th className="text-center py-3">شهراستان</th >
          <th className="text-center py-3">مالکیت</th >
          <th className="text-center py-3">هشتک</th >
          <th className="text-center py-3">شریک کاری</th >
          <th className="text-center py-3">همکار</th >
          <th className="text-center py-3">بیهوشی</th >
          <th className="text-center py-3">فنی</th >
          <th className="text-center py-3">حرفه ای</th >
          <th className="text-center py-3">بیهوشی دولتی</th >
          <th className="text-center py-3">فنی دولتی</th >
          <th className="text-center py-3">حرفه ای دولتی</th >
          </tr>
      </table>
      {list.map((item,index)=>( 
        <ShowServisList key={index} index={index} item={item}/>
      ))}
    </div>
  );
}
