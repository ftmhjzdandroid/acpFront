import { Box, Typography } from "../../../components/atoms";
import { Button, Modal, PopoverDialog } from "../../../components/molecules";
import { Add, ArrowRotateLeft, Copy, MessageAdd1, Sort } from "iconsax-react";
import { ArrowBtn } from "../../../components/molecules/arrow-botton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getItem } from "../../../models/menu";
import { Menu, MenuProps } from "antd";
import Mpricemodal from "./mpricemodal";
import Vpricemodal from "./vpricemodal";
import Tab from "../../../components/molecules/tab";
import Filteritems from "../../medisine/components/filteritems";

export default function  Heder() {
    const [isProfilePopover, setIsProfilePopover] = useState<boolean>(false);
    const [mpricemodal, setmpricemodal] = useState<boolean>(false);
    const [vpricemodal, setvpricemodal] = useState<boolean>(false);
    const navigate = useNavigate();
  
    const items: MenuProps["items"] = [
      getItem(
        "قیمت K",
        "mprice"
      ),
      getItem("قیمت ویزیت",
       "vprice"
        ),
    ];
    const onClick: MenuProps["onClick"] = (e) => {
      setIsProfilePopover(false);
      if (e.key == "mprice") setmpricemodal(true) ;
      if (e.key == "vprice") setvpricemodal(true) ;
    };
   
  return (
    <>
    {/* {mpricemodal&& (div)} */}
   <Modal isOpen={mpricemodal} children={<Mpricemodal onclose={()=>setmpricemodal(false)}/>}/>
   <Modal isOpen={vpricemodal} children={<Vpricemodal onclose={()=>setvpricemodal(false)}/>}/>
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
            className="bg-[#F9C310]">
            <Add size="26"  
            className="text-neutral-800"
            onClick={(e) => {
              e.stopPropagation();
              setIsProfilePopover(true);
            }}/>
            <Box
            className="z-10 flex justify-start"
            handleClickOutside={() => setIsProfilePopover(false)}>
              
            {isProfilePopover && (
              <Menu
                className="absolute left-0 top-16"
                onClick={onClick}
                style={{ width: 256, fontFamily: "IranYekan" }}
                mode="inline"
                items={items}
              />
            )}
          </Box>
            <Typography className="text-neutral-800">افزودن</Typography>
          </Button>
        </div>
      </div>


      <Tab
        data={[
          { title: "قیمت K", key: "1", route: "mprice" ,icon:<></>},
          { title: "قیمت ویزیت", key: "2", route: "vprice" ,icon:<></>},
        ]}
        className="mx-auto mt-4" 
         onClick={(tab) => {
          navigate(tab?.route ?? "/");
          console.log(tab, "tab");
        }}
      />
      <div className="flex justify-end gap-3">
      <ArrowRotateLeft
          size="30"
          className="cursor-pointer text-neutral-800"
        />
        <PopoverDialog
        renders={() => <Filteritems />}
        keysLabel="label"
        list={[{ id: 1, label: "jjjj" }]}
        children={
          <div className="flex items-center rounded-md border cursor-pointer text-neutral-800 p-1">
            <Sort className="text-neutral-800" />
            <Typography type="p" className="m-2">
              فیلترها
            </Typography>
          </div>
        }
      />
      </div>
    </>
  )
}
