import React from "react";
import { Add } from "iconsax-react";

interface Iprops {
  summary: React.ReactNode;
  detail: React.ReactNode;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlusBtn = (props: Iprops) => {
  const { summary, detail, setOpen, isOpen } = props;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3  gap-4 mt-4">
      <div
        className={`${isOpen ? "col-span-4" : ""} ${
          !isOpen ? "cursor-pointer" : ""
        } shadow-md transition-all rounded-lg`}
        onClick={() => setOpen(true)}
      >
        {!isOpen ? (
          <div className="flex flex-col items-center justify-center">
            <Add className="text-cyan-600" />
            {summary}
          </div>
        ) : (
          <>{detail}</>
        )}
      </div>
    </div>
  );
};
export default PlusBtn;
