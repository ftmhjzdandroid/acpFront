import { Box, Typography } from "../../../components/atoms";
import { Checkbox, Menu, MenuProps } from "antd";
import { ArrowCircleLeft } from "iconsax-react";
import { Button } from "../../../components/molecules";
import { useEffect, useState } from "react";
import { useCustomNav } from "../../../hook/useNavigate";
import { getItem } from "../../../models/menu";

type pop ={
  saya : (e:string)=>void
}

const Filter=(propps:pop)=> {

const [status , setStatus] = useState<string>("");
  const navigate = useCustomNav();
  // (preveState) => !preveState)
  const chageHandler = (e:any) => {
    setStatus(e.target.name)
    // console.log(status);
    
  }
  const items: MenuProps["items"] = [
    getItem("نوع ","sub1",null,
      [
        getItem("انتخاب همه", "law",<Checkbox name="0"  onChange={chageHandler}/>),
        getItem("دارو", "type", <Checkbox name="1" onChange={chageHandler}/>),
        getItem("تجهیزات", "attr", <Checkbox name="2" onChange={chageHandler}/>),
      ]
      ),
      getItem("وضعیت", "", null, [
      getItem("انتخاب همه", "", <Checkbox/>),
      getItem("تایید شده های سیستمی", "Rules", <Checkbox/>),
      getItem("تایید شده", "service", <Checkbox/>),
      getItem("رد شده", "service", <Checkbox/>),
      getItem("مشاهده شده", "service", <Checkbox/>), 
      getItem("در انتضار تایید", "service", <Checkbox/>),
    ]),
  ];
 useEffect(()=>{
  propps.saya(status);
 },[status])
  const onClick: MenuProps["onClick"] = (e) => {
    if (e.key == "services") navigate.to("/medisine/editingservices");
  };
  return (
    <div className="p-2">
      <div className="flex items-center justify-between w-full text-neutral-800">
        <Typography type="h2">فیلترها</Typography>
        <ArrowCircleLeft className="cursor-pointer" />
      </div>
      <Menu
        onClick={onClick}
        style={{ fontFamily: "IranYekan" }}
        mode="inline"
        items={items}
      />
      <div className="flex w-full items-center">
        <Button variant="none" className="text-blue-800">
          اعمال فیلتر ها
        </Button>
      </div>
    </div>
  );
}


export default Filter