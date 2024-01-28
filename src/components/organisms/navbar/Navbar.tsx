import { Avatar, InputIcon } from "../../molecules";
import { SearchNormal1 } from "iconsax-react";
import userImg from "../../../assets/image/avatar3.jfif";

export default function Navbar() {
  return (
    <div className=" w-full flex justify-between items-center px-5 py-3">
      <div>
        <InputIcon
          className="w-50"
          placeholder="جستجو"
          leftIcon={<SearchNormal1 size="22" color="#3949AB" />}
        />
      </div>
      <Avatar src={userImg} className="h-16 w-16" />
    </div>
  );
}
