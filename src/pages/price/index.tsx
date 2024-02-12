import React from 'react'
import { Typography } from '../../components/atoms'
import MineNavbar from './components/MineNavbar'
import ShowMedisineList from './components/ShowMedisineList'


export default function Price() {
  const list = [
    {
      startday:"1402/03/04",
      tqiir : 24,
      t : false,
      tahodprice:200000,
      pishprice: 100000,
      irc:1245664,
      jencode:1234,
      name :"kbdkkjduuukdh",
      vaz:1
    },
    {
      startday:"1402/03/04",
      tqiir : 4,
      t:true,
      tahodprice:200000,
      pishprice: 100000,
      irc:1245664,
      jencode:1234,
      name :"kbdkkjduuukdh",
      vaz:2
    },
    {
      startday:"1402/03/04",
      tqiir : 2,
      t:true,
      tahodprice:200000,
      pishprice: 100000,
      irc:1245664,
      jencode:1234,
      name :"kbdkkjduuukdh",
      vaz:3
    },
    // vaz 1 = تایید شده ,vaz 2 = رد شده ,vaz 3 = مشاهده شده ,......
  ]
  return (
    <div>
         <div>
          <Typography type="h2">مدیریت دارو و خدمات</Typography>
          <Typography type="p" className="text-[#717376] mt-3">
            در این قسمت میتوان توضیحاتی در موردمدریت دارو و خدمات نوشت.
          </Typography>
        </div>
        <MineNavbar/>
        <div className="bg-[#F4F5FA] mt-5 text-center grid grid-cols-7  p-4 text-[#3949AB] text-sm  gap-2 rounded-md">
        <Typography type="h4">تاریخ ایجاد</Typography>
        <Typography type="h4">درصد تغیر</Typography>
        <Typography type="h4">قیمت در تعهد</Typography>
        <Typography type="h4">قیمت پیشین</Typography>
        <Typography type="h4">IRC</Typography>
        <Typography type="h4">کدژنتیکی</Typography>
        <Typography type="h4">نام دارو</Typography>
      </div>

      <div>
      {
      
      
      list.map((item,index)=>(
        <ShowMedisineList index={index} item={item} key={index}/>
      ))}
      </div>

    </div>
  )
}





























// import { ArrowDown, ArrowRotateLeft, ArrowUp, Sort } from "iconsax-react";
// import { Typography } from "../../../components/atoms";
// import { ArrowBtn } from "../../../components/molecules/arrow-botton";
// import { PopoverDialog } from "../../../components/molecules";
// import Filteritems from "./filteritems";


// export default function MineNavbar() {
//   const saya = (e:string)=>{
//     console.log('====================================');
//     console.log(e);
//     console.log('====================================');
//   }
//   return (
//     <div className="h-12 my-3 gap-2 w-full flex text-[#54575B] items-center justify-end">
//       <div className="flex gap-3">
//         <ArrowBtn
//           borderColo="border-brand-800"
//           children={<ArrowUp className="text-brand-800" />}
//           className="p-1"
//         />
//         <ArrowBtn
//           children={<ArrowDown className="text-neutral-400" />}
//           className="p-1 border-neutral-200"
//         />
//       </div>
//       <div className="flex gap-2 text-[#3949AB] items-center justify-center ">
//         <ArrowRotateLeft
//           size="30"
//           className="cursor-pointer text-neutral-800"
//         />

//         <PopoverDialog
//           renders={() => <Filteritems saya={saya}/>}
//           keysLabel="label"
//           list={[{ id: 1, label: "jjjj" }]}
//           position="bottom"
//           children={
//             <div className="flex items-center rounded-md border text-neutral-800 p-1">
//               <Sort className="text-neutral-800" />
//               <Typography type="p" className="m-2">
//                 فیلترها
//               </Typography>
//             </div>
//           }
//         />
//       </div>
//     </div>
//   );
// }
