import {
  ArrowDown,
  ArrowRotateLeft,
  ArrowUp,
  Sort,
} from "iconsax-react";
import { Typography } from "../../atoms";
import { ArrowBtn } from "../../molecules/arrow-botton";
import { PopoverDialog } from "../../molecules";
import Filteritems from "../../../pages/services/components/filteritems";

export default function MineNavbar() {
  return (
    <div className="h-12 my-3 w-full flex text-[#54575B] items-center justify-between">
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <Typography type="h4">کدخدمت </Typography>
          <ArrowBtn
            borderColo="border-brand-800"
            children={<ArrowUp className="text-brand-800" />}
            className="p-1"
          />
          <ArrowBtn
            children={<ArrowDown className="text-neutral-400" />}
            className="p-1 border-neutral-200"
          />
        </div>
        <div className="flex items-center gap-3">
          <Typography type="h4">قیمت پایه</Typography>
          <ArrowBtn
            borderColo="border-brand-800"
            children={<ArrowUp className="text-brand-800" />}
            className="p-1"
          />
          <ArrowBtn
            children={<ArrowDown className="text-neutral-400" />}
            className="p-1 border-neutral-200"
          />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center ">
        <ArrowRotateLeft
          size="30"
          className="cursor-pointer text-neutral-800"
        />

        <PopoverDialog
          renders={() => <Filteritems/>}
          position="bottom"
          keysLabel="label"
          size="w-80"
          list={[{ id: 1, label: "jjjj" }]}
          children={
            <div className="flex items-center rounded-md border text-neutral-800 p-1">
              <Sort className="text-neutral-800" />
              <Typography type="p" className="m-2">
                فیلترها
              </Typography>
            </div>
          }
        />
      </div>
    </div>
  );
}
