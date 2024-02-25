import { Add } from 'iconsax-react'
import { Button, Modal, PopoverDialog } from '../../components/molecules'
import Folders from '../../components/organisms/folder-layout/folders'
import { Items } from '../../components/organisms/folder-layout/items'
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

import { useCustomNav } from '../../hook/useNavigate'
import { AddFolder } from './components/AddFolder';
import { AddType } from './components/AddType';
import { useState } from 'react';
import { Modalitems } from './components/Modalitems';
import { Modaltypeitems } from './components/Modaltypeitems';

export default function Drags() {
  const navigat = useNavigate();
  const [isopenfolder , setisopenfolder] = useState<boolean>(false);
  const [isopentype , setisopentype] = useState<boolean>(false);
  return (
    <div>
      <Modal isOpen={isopenfolder} children={<Modalitems close={()=>setisopenfolder(false)}/>} onBackdrop={()=>setisopenfolder(false)} />
      <Modal isOpen={isopentype} children={<Modaltypeitems close={()=>setisopenfolder(false)}/>} onBackdrop={()=>setisopentype(false)} />
      <div className="flex justify-end w-full">
        <PopoverDialog
          renders={() => <div>
            <p onClick={()=>setisopenfolder(true)} className='text-sm my-2 cursor-pointer mr-2 text-neutral-500'>افزودن پوشه</p>
            {/* <p onClick={()=>navigat("/type/drags/addtype")} className='text-sm my-2 cursor-pointer mr-2 text-neutral-500'>افزودن نوع</p> */}
            <p onClick={()=>setisopentype(true)} className='text-sm my-2 cursor-pointer mr-2 text-neutral-500'>افزودن نوع</p>
          </div>}
          position="bottom"
          keysLabel="label"
          list={[{ id: 1, label: "jjjj" }]} 
          size='w-40'
          children={
            <div className="flex items-center rounded-md border text-neutral-800 p-1 bg-[#F9C310] cursor-pointer">
               <Add size="26" className="text-neutral-800" />
            </div>
          }
        />
      </div>
      <Routes>
        <Route path="/addtype" element={<AddType/>} />
      </Routes>
      <Outlet />

      <Folders/>
      <Items/>
    </div>
  )
}
