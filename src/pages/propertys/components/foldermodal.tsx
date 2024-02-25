import { Add } from "iconsax-react";
import { Input, Typography } from "../../../components/atoms";
import { Button } from "../../../components/molecules";
import { useFormik } from "formik";
import { noteYup } from "../../../hook/Useyuo";
import { useState } from "react";
type Prrops ={
  onclos :()=>void
}

export const Foldermodal = (props:Prrops) => { 
    
  const [namefild, setNamefild] = useState<string>("");
  const [symbolfild, setSymbolfild] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName:namefild,
      symbol : symbolfild
    },
    onSubmit: () => {
 alert("folder")
    },
    validationSchema: noteYup,
  });

  return (
    <div className="w-[550px]">
      <div className="flex items-center text-[#3949AB]">
        <Add />
        <Typography type="p">ثبت پوشه جدید</Typography>
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
                 onChangeText={(e) => setSymbolfild(e)}
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
        </div>

        <div className="flex flex-col ">
          <Typography type="p" className="pt-3 my-2 text-neutral-500">
            توضیحات
          </Typography>
          <Input placeholder="توضیحات" onChangeText={(e)=>setDescription(e)}/>
        </div>

        <div className="flex justify-between w-3/4 my-5 ">
          <Typography type="p" className="pt-3 text-neutral-500">
            شاخه انتخاب شده
          </Typography>

          <Typography type="p" className="pt-3 text-neutral-500">
            شاخه اصلی
          </Typography>
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
