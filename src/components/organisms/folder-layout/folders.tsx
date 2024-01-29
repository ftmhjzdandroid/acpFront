import React, { useState } from "react";
import { Typography } from "../../atoms";
import { ArrowDown2, ArrowLeft, Folder2, TickCircle } from "iconsax-react";
import { Badge } from "../../atoms/badge";
import { folderItem } from "./data";
import Breadcrumbs from "../../atoms/breadcrumbs";

function Folders() {
  const [showFolder, setShowFolder] = useState<boolean>(true);

  return (
    <>
      <div className="border-b mb-10 flex justify-between items-center cursor-pointer">
        <Breadcrumbs links={[{ text: "پوشه اصلی شریک کاری", to: "/" }]} />
        <ArrowLeft />
      </div>
      <div className="flex duration-100 trantion-all gap-4 items-center rounded-md  border-r-2 border-[#3949AB] pr-2 my-4">
        <Typography type="h4">پوشه</Typography>
        <Badge
          children={5}
          className="h-7 w-7 flex items-center justify-center text-[#3949AB] bg-[#EBECF6] rounded-full"
        />
        <ArrowDown2
          color="#717376"
          className={`${
            !showFolder && "rotate-180"
          } duration-300 trantion-all cursor-pointer`}
          onClick={() => setShowFolder((e) => !e)}
        />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-8">
        {showFolder &&
          folderItem.folder.map((folder) => (
            <div className="cursor-pointer bg-neutral-50 rounded-md p-2  border-neutral-200 border">
              <div className="flex items-center gap-2">
                <Folder2 variant="Bold" color="#3949AB" />
                <Typography type="h4" className="text-neutral-800">
                  {folder.name}
                </Typography>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <Typography className="text-neutral-500">
                  شناسه : <span className="text-[#3949AB]">{folder.id}</span>
                </Typography>
                <Typography className="text-neutral-500">
                  پوشه :
                  <span className="text-[#3949AB]">{folder.folderNumber}</span>
                </Typography>
                <Typography className="text-neutral-500">
                  قانون :
                  <span className="text-[#3949AB]">{folder.typeNumber}</span>
                </Typography>
                <Typography className="flex items-center gap-2 text-neutral-500">
                  معتبر :
                  <TickCircle
                    size={20}
                    className="text-center text-success-700"
                  />
                </Typography>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Folders;
