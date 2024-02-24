import { Box, Typography } from "../../components/atoms";
import { Add, Bag, Candle2, Home, Milk, Notepad, Notepad2, Notification1, Star1, User,  } from "iconsax-react";
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
          { title: "دارو", key: "2", route: "drags" ,icon:<Milk/>},
          { title: "تجهیزات", key: "3", route: "rig" ,icon:<Candle2/>},
          { title: "اوازم مصرفی", key: "4", route: "comsumables" ,icon:<Bag/>},
          { title: "خدمات", key: "5", route: "services" ,icon:<Notification1/>},
          { title: "پروانه", key: "6", route: "business" ,icon:<Notepad2/>},
          { title: "همکار", key: "7", route: "partners" ,icon:<User/>},
          { title: "نشان", key: "8", route: "sines" ,icon:<Star1/>},
        ]}
        onClick={(tab) => {
          navigate(tab?.route ?? "/");
          console.log(tab, "tab");
        }}
      />

      <Routes>
        <Route path="/cparty" element={<Cparty />} />
        <Route path="/business" element={<Business />} />
        <Route path="/comsumables" element={<Consumables />} />
        <Route path="/drags/*" element={<Drags />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/rig" element={<Rig />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sines" element={<Sines />} />
      </Routes>
      <Outlet />
    </div>
  );
}
