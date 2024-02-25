import { Add } from "iconsax-react";
import { Input, Typography } from "../../../components/atoms";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Button } from "../../../components/molecules";
import { useFormik } from "formik";
import { useState } from "react";
import { typenoteYup } from "../../../hook/Useyuo";
type Prrops ={
  onclos : ()=> void
}
export const Typemodal = (props : Prrops) => {
   
  const [namefild, setNamefild] = useState<string>("");
  const [symblofild, setSymblofild] = useState<string>("");
  const [olderfild, setOlderfild] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName:namefild,
      symbol : symblofild,
      older:olderfild
    },
    onSubmit: () => {
 alert("type")
    },
    validationSchema: typenoteYup,
  });
  return (
    <div className="w-[550px]">
      <div className="flex items-center text-[#3949AB]">
        <Add />
        <Typography type="p">ثبت نوع جدید</Typography>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-between gap-5">
          <div className="flex flex-col my-5 w-1/2">
            <div className="flex my-2 ">
              <Typography type="p" className="pt-3 text-neutral-500">
                نام
              </Typography>
              <Typography type="p" className="pt-3 text-red-500">
                *
              </Typography>
            </div>
            
            <Input
            onChangeText={(e) => setNamefild(e)}
              name="firstName"
              type="text"
              id="firstName"
            />
            
            {formik.errors.firstName ? (
              <Typography className="text-rose-500 mt-2">
                {formik.errors.firstName}
              </Typography>
            ) : null}
          </div>

          <div className="flex flex-col my-5 w-1/2">
            <div className="flex my-2">
              <Typography type="p" className="pt-3 text-neutral-500">
                نماد
              </Typography>
              <Typography type="p" className="pt-3 text-red-500">
                *
              </Typography>
            </div>
            <Input 
                 onChangeText={(e) => setSymblofild(e)}
                 name="symbolfild"
                 type="text"
                 id="symbolfild"
            />
            
            {formik.errors.symbol ? (
              <Typography className="text-rose-500 mt-2">
                {formik.errors.symbol}
              </Typography>
            ) : null}
          </div>

          <div className="flex flex-col my-5 w-1/2">
            <div className="flex my-2">
              <Typography type="p" className="pt-3 text-neutral-500">
                ترتیب
              </Typography>
              <Typography type="p" className="pt-3 text-red-500">
                *
              </Typography>
            </div>
            <Input 
                onChangeText={(e) => setOlderfild(e)}
                name="olderfild"
                type="text"
                id="olderfild"
            />
            
            {formik.errors.older ? (
              <Typography className="text-rose-500 mt-2">
                {formik.errors.older}
              </Typography>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col ">
          <Typography type="p" className="pt-3 my-2 text-neutral-500">
            توضیحات
          </Typography>
          <Input placeholder="توضیحات" onChangeText={(e)=>setDescription(e)}/>
        </div>

        <div className="flex justify-between w-2/4 my-5 ">
          <form className="w-full">
            <Typography type="p" className="pt-3 my-2 text-neutral-500">
              نوع
            </Typography>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>یک مورد را انتخاب کنید</option>
              <option value="US">رشته</option>
              <option value="CA">عدد</option>
              <option value="FR">رشته فارسی</option>
              <option value="DE">متن</option>
              <option value="DE">چند گذینه ای</option>
              <option value="DE">دکمه رادیویی</option>
              <option value="DE">لیست</option>
            </select>
          </form>
        </div>

        <div className="flex justify-between w-3/4 my-5 ">
          <Typography type="p" className="pt-3 text-neutral-500">
            شاخه انتخاب شده
          </Typography>

          <Typography type="p" className="pt-3 text-neutral-500">
            شاخه اصلی
          </Typography>
        </div>

        <div className="flex justify-between w-3/4 my-5 ">
          <div className="flex gap-3">
            <Typography type="p">اجباری</Typography>
            <Checkbox />
          </div>
          <div className="flex gap-3">
            <Typography type="p">داخلی</Typography>
            <Checkbox />
          </div>
          <div className="flex gap-3">
            <Typography type="p">عمومی</Typography>
            <Checkbox />
          </div>
          <div className="flex gap-3">
            <Typography type="p">خواندنی</Typography>
            <Checkbox />
          </div>
        </div>

        <div className="flex  w-full">
          <Button className="w-1/2" type="submit">
            ثبت
          </Button>
          <Button variant="outline" className="w-1/2" onClick={props.onclos}>
            انصراف
          </Button>
        </div>
      </form>
    </div>
  );
};