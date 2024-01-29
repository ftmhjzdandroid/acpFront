import { Button, Typography } from "antd";
import { Trash } from "iconsax-react";
import React from "react";
type Props = {
  onclose: () => void;
};

export default function Deletedmodal(props: Props) {
  return (
    <div className="w-[500px]">
      <div className="flex gap-3 mb-5">
        <Trash color="#3949AB" variant="Bold" />
        <Typography className="text-[#3949AB]">حزف خدمت</Typography>
      </div>
      <div className="flex gap-1 pb-4 pr-5 mb-5">
        <Typography typeof="h6" className="text-success-300">
          خدمت:
        </Typography>
        <Typography>مهدیس نرگسی</Typography>
      </div>
      <Typography typeof="h6" className=" mb-5">آیا مایل به حذف خدمت انتخاب شده هستید؟</Typography>
      <div className="  grid grid-cols-2 mt-3 gap-4 mb-3">
        <Button
          className="text-neutral-800 border-2 border-success-300 "
          size="large"
          onClick={props.onclose}
        >
          انصراف
        </Button>
        <Button className="text-[#eee] bg-[#3949AB]  w-full " size="large">
          {" "}
          ثبت
        </Button>
      </div>
    </div>
  );
}
