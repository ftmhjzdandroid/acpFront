import { ArrowLeft } from "iconsax-react";
import { Box, Typography } from "../../atoms";
import { PopoverListModel } from "./model";

interface IProps {
  dataRenders: PopoverListModel[];
  position: "right" | "left";
  className?: string;
  useInNavbar?: boolean;
}
const PopoverMenu = ({
  dataRenders,
  position = "left",
  useInNavbar,
}: IProps) => {
  return (
    <Box
      className={`flex flex-col border border-gray-200 ${position}-0 ${useInNavbar
        ? "min-w-[256px] top-[20px] bg-[#ffffff]"
        : "min-w-[180px] top-6 bg-white"
        } shadow rounded-lg  absolute z-30`}
    >
      {dataRenders.map((data, index) => (
        <Box
          key={index}
          className={`flex items-center ${data.titleColor} justify-between gap-11 border-b last:border-none hover:bg-gray-100 px-2 py-3 transition-all duration-300`}
        >
          <Box
            className="flex items-center gap-2 cursor-pointer w-full"
            onClick={(e) => {
              data.onClick();
              e.stopPropagation();
            }}
          >
            {data.icon}
            <Typography type="h4" className=" font-semibold">
              {data.title}
            </Typography>
          </Box>
          <ArrowLeft/>
        </Box>
      ))}
    </Box>
  );
};

export default PopoverMenu;
