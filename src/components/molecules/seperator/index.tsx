import React from "react";
import { Loading, Typography } from "../../atoms";
import { ArrowDown2, Edit2, Trash } from "iconsax-react";
interface IProps {
  children?: React.ReactNode;
  className?: string;
  arrowDown?: boolean;
  removeLine?: boolean;
  open?: boolean;
  isLoading?: boolean;
  position?: "center" | "right";
  onRemove?: () => void;
  onEdit?: () => void;
  onClick?: () => void;
}
export const Seperator = (props: IProps) => {
  const {
    className,
    children,
    arrowDown,
    open,
    onRemove,
    onEdit,
    isLoading,
    position = "right",
    onClick,
  } = props;
  return (
    <div className={`flex gap-3 items-center justify-center ${className}`}>
      {position === "center" && (
        <span className={`h-[1px] w-full bg-br-200`}></span>
      )}
      <div className="flex gap-2" onClick={onClick}>
        <Typography type="h2" className="th-primary-color whitespace-nowrap">
          {children}
        </Typography>
        {arrowDown && (
          <span
            className={` transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <ArrowDown2 />
          </span>
        )}
      </div>
      <div className="w-full flex items-center justify-end gap-1">
        <span
          className={`h-[1px] w-full ${
            props.removeLine ? "bg-white" : "bg-br-200"
          }`}
        ></span>
        {onEdit && (
          <span onClick={onEdit} className="w-6">
            <Edit2 />
          </span>
        )}
        {onRemove && (
          <span
            onClick={(e) => {
              e.preventDefault();
              onRemove();
            }}
            className="w-6"
          >
            {isLoading ? (
              <Loading className="mr-2" />
            ) : (
              <Trash
                className="inline mr-2 cursor-pointer"
                onClick={() => onRemove()}
              ></Trash>
            )}
          </span>
        )}
      </div>
    </div>
  );
};
