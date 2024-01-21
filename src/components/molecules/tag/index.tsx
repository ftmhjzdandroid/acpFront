import React from "react";
import { Typography } from "../../atoms";
import { Loading } from "../../atoms/loading";
import { Add, Box } from "iconsax-react";
interface IPros {
  children?: React.ReactNode;
  isLoading?: boolean;
  onSelect?: (packId?: number) => void;
  onRemove?: () => void;
  className?: string;
  orginalPackageId?: number;
  currentPackageId?: number;

  useForPackages?: boolean;
}
export const Tag = (props: IPros) => {
  const {
    children,
    isLoading,
    onRemove,
    onSelect,
    className,
    orginalPackageId,
    currentPackageId,
    useForPackages = false,
  } = props;
  return (
    <div
      className={`bg-[#00000014] px-2 rounded-xl flex items-center justify-center gap-2 cursor-pointer flex-none ${className}`}
    >
      {onRemove && (
        <span
          className="bg-[#00000042] rounded-full w-4 h-4 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
        >
          {isLoading && orginalPackageId === currentPackageId ? (
            <Loading size="w-4 h-4" />
          ) : (
            <Add className="w-4 h-4 text-white hover:text-red-500 transition-all duration-300 rotate-45"></Add>
          )}
        </span>
      )}
      <Typography onClick={onSelect} className="py-1 flex gap-2">
        {useForPackages && <Box className="text-gray-600" size="16px" />}
        {children}
      </Typography>
    </div>
  );
};
