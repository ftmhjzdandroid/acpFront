import { useState } from "react";
import { Button } from "../../../components/molecules";
import { Typography } from "../../../components/atoms";
import ContryModalitem from "./modalsitems/contrymodalitems";
import CityModalitem from "./modalsitems/citymodalitems";
import Visitcontrymodalitems from "./modalsitems/visitcontrymodalitems";
import Visitcitymodalitem from "./modalsitems/visitcitymodalitem";
type Props = {
  onclose: () => void;
};
export default function Vpricemodal(props: Props) {
  const [contry, setcontry] = useState<boolean>(true);
  const [city, setcity] = useState<boolean>(false);
  return (
    <div>
      <Typography type="h2" className="text-badgeTextColor mb-2">
        افزودن قیمت ویزیت
      </Typography>
      <Typography className="mb-3">
        تعرفه قیمت ویزیت مربوط به 1402 را وارو کنید
      </Typography>
      <div className="flex flex-col justify-center items-center">
        <div className="flex p-2 gap-1 bg-background-300 rounded-md">
          <Button
            className={`${
              contry
                ? "bg-[#3949AB] text-white"
                : "text-slate-600 bg-background-300 "
            } rounded-md`}
            variant="none"
            onClick={() => {
              setcontry(true);
              setcity(false);
            }}
          >
            کشوری
          </Button>
          <div className="border-l-2 border-background-800"></div>
          <Button
            variant="none"
            className={`${
              city
                ? "bg-[#3949AB] text-white"
                : "text-slate-600 bg-background-300"
            } rounded-md`}
            onClick={() => {
              setcontry(false);
              setcity(true);
            }}
          >
            استانی
          </Button>
        </div>
        {contry && (
          <div className="">
            <Visitcontrymodalitems />
          </div>
        )}
        {city && (
          <div className="">
            <Visitcitymodalitem />
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-5">
        <Button
          onClick={props.onclose}
          className="text-slate-600 border-[#E8E8E9] border-2 bg-background-800"
        >
          انصراف
        </Button>
        <Button onClick={props.onclose}>ثبت</Button>
      </div>
    </div>
  );
}
