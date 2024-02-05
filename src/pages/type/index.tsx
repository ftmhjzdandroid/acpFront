import { Box, Typography } from "../../components/atoms";
import { Add, Home,  } from "iconsax-react";
import { Button } from "../../components/molecules";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Tab from "../../components/molecules/tab";
import Cparty from "./cparty";
import Business from "./business";
import Consumables from "./consumables";
import Drags from "./drags";
import Partners from "./partners";
import Rig from "./rig";
import Services from "./services";
import Sines from "./sines";

export default function Type() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mb-5">
        <Typography type="h2">مدریت نوع</Typography>
        <Typography type="p" className="text-[#717376] mt-3">
          در این قسمت میتوان توضیحاتی در موردمدریت نوع نوشت.
        </Typography>
      </div>
      <Tab
        data={[
          { title: "مرکز", key: "1", route: "cparty" ,icon:<Home/>},
          { title: "دارو", key: "2", route: "drag" ,icon:<Home/>},
          { title: "تجهیزات", key: "3", route: "rig" ,icon:<Home/>},
          { title: "اوازم مصرفی", key: "4", route: "comsumables" ,icon:<Home/>},
          { title: "خدمات", key: "5", route: "services" ,icon:<Home/>},
          { title: "پروانه", key: "6", route: "business" ,icon:<Home/>},
          { title: "همکار", key: "7", route: "partners" ,icon:<Home/>},
          { title: "نشان", key: "8", route: "sines" ,icon:<Home/>},
        ]}
        onClick={(tab) => {
          navigate(tab?.route ?? "/");
          console.log(tab, "tab");
        }}
      />

      <div className="flex justify-end w-full">
        <Button className="bg-[#F9C310] min-w-[40px] md:min-w-[40px]">
          <Add size="26" className="text-neutral-800" />
        </Button>
      </div>

      <Routes>
        <Route path="/cparty" element={<Cparty />} />
        <Route path="/business" element={<Business />} />
        <Route path="/comsumables" element={<Consumables />} />
        <Route path="/drags" element={<Drags />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/rig" element={<Rig />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sines" element={<Sines />} />
      </Routes>
      <Outlet />
    </div>
  );
}
