import { ArrowLeft } from "iconsax-react";
import { Typography } from "../../../../components/atoms";
import Folders from "../../../../components/organisms/folder-layout/folders";
import { useCustomNav } from "../../../../hook/useNavigate";
import { Items } from "../../../../components/organisms/folder-layout/items";
import { Button } from "../../../../components/molecules";
import { useNavigate } from "react-router-dom";

export default function Attributionitems() {
  const Navigate = useCustomNav();
  return (
    <>
      <div className="w-full py-3 flex text-[#3949AB] justify-between">
        <Typography type="p">دارو نبولایزر اولتراسونیک</Typography>
        <ArrowLeft
          color="#717376"
          className="cursor-pointer"
          onClick={() => Navigate.back()}
        />
      </div>
      <hr />
      <Typography type="h2" className="m-5">
        انتساب قانون
      </Typography>
      <Folders />
      <Items />
      <div className="w-full flex justify-end mt-5">
        <Button variant="primary" className="w-1/4 " onClick={()=>{}}>
          ثبت
        </Button>
      </div>
    </>
  );
}
