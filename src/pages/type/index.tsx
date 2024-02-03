import { Typography } from "../../components/atoms";
import { Add, Home2 } from "iconsax-react";
import { Button } from "../../components/molecules";
import { TabView } from "../../components/organisms/tabview";

export default function Type() {
  return (
    <div>
      <div className="flex flex-col mb-5">
        
        <Typography type="h2">مدریت نوع</Typography>
        <Typography type="p" className="text-[#717376] mt-3">
          در این قسمت میتوان توضیحاتی در موردمدریت نوع نوشت.
        </Typography>
      </div>


      <TabView
        icon={<Home2 color="#3949AB" />}
        data={[
          { title: "مرکز", key: "1", route: "cparty" },
          { title: "دارو", key: "2", route: "drag" },
          { title: "تجهیزات", key: "3", route: "rig" },
          { title: "اوازم مصرفی", key: "4", route: "consumables" },
          { title: "خدمات", key: "5", route: "servicees" },
          { title: "پروانه", key: "6", route: "business" },
          { title: "همکار", key: "7", route: "partners" },
          { title: "نشان", key: "8", route: "sines" },
        ]}
      />
      <div className="flex justify-end w-full">
      <Button className="bg-[#F9C310] min-w-[40px] md:min-w-[40px]">
        <Add size="26" className="text-neutral-800" />
      </Button>
      </div>



    </div>
  );
}
