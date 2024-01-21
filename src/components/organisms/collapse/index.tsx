import React, { useState } from "react";
import { Card } from "../../atoms";
import { Add } from "iconsax-react";

interface Iprops {
  openMode?: React.ReactNode;
  closeMode?: React.ReactNode;
  handleOpenBox?: () => void;
  className?: string;
}

export const Collapse = (props: Iprops) => {
  const { openMode, closeMode, handleOpenBox, className } = props;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Card className={`p-2 ${className}`}>
        <div
          className="cursor-pointer relative"
          onClick={handleOpenBox ? handleOpenBox : () => setOpen(!open)}
        >
          {open ? <Add className="absolute left-0 rotate-45" /> : null}

          {closeMode}
        </div>
        {open ? <>{openMode}</> : null}
      </Card>
    </>
  );
};
