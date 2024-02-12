import { Box, Typography } from "../../../components/atoms";
import { Checkbox, Menu, MenuProps } from "antd";
import {
  ArrowCircleLeft,
  Box1,
  Edit2,
  Link21,
  More,
  Tag,
  Timer1,
  Trash,
} from "iconsax-react";
import { Button } from "../../../components/molecules";
import { useState } from "react";
import { useCustomNav } from "../../../hook/useNavigate";
import { getItem } from "../../../models/menu";

export default function Filteritems() {
  const navigate = useCustomNav();

  const items: MenuProps["items"] = [
    getItem(
      "نوع دارو",
      "sub1",
      <Link21 size="18" className="text-neutral-700" />,
      [
        getItem("انتخاب همه", "law",<Checkbox/>),
        getItem("دارو", "type", <Checkbox/>),
        getItem("تجهیزات", "attr", <Checkbox/>),
      ]
    ),
    getItem("موارد جستوجو", "", <Trash size="18" className="text-neutral-700" />, [
      getItem("جستوجوی همه", "", <Checkbox/>),
      getItem("برسی عینی متن جستوجو", "Rules", <Checkbox/>),
      getItem("کد نتیکی", "service", <Checkbox/>),
      getItem("کد IRC", "service", <Checkbox/>),
      getItem("نام", "service", <Checkbox/>), 
      getItem("نماد", "service", <Checkbox/>),
      getItem("جستوجوی همه", "service", <Checkbox/>),
    ]),
  ];
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
      <div className="flex items-center">
        <Button variant="none" className="text-blue-800">
          اعمال فیلتر ها
        </Button>
      </div>
    </div>
  );
}
