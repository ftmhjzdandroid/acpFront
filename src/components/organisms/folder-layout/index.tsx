import { ArrowLeft } from "iconsax-react";
import Breadcrumbs from "../../atoms/breadcrumbs";
import Folders from "./folders";
import { Items } from "./items";
import { useCustomNav } from "../../../hook/useNavigate";

export const FolderLayout = () => {
  const history = useCustomNav()
  return (
    <>
    <div className="border-b mb-10 flex justify-between items-center cursor-pointer">
        <Breadcrumbs links={[{ text: "پوشه اصلی شریک کاری" }]} />
        <ArrowLeft className="cursor-pointer" onClick={() => history.back()} />
      </div>
      <Folders />
      <Items />
    </>
  );
};
