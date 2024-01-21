import { TreeDataModel } from "../../../../../models/treeModel/tree-infoModel";
import {
  ArrowDown2,
  ArrowUp2,
  DirectNormal,
  Folder2,
  FolderOpen,
  TickSquare,
} from "iconsax-react";
import { Box, Typography } from "../../../../atoms";

type NodeProps = {
  item: TreeDataModel;
  hasChildren: boolean;
  level: number;
  onToggle: (selectedItem?: TreeDataModel) => void;
  selected: boolean;
};
export const Node = ({
  item,
  hasChildren,
  level,
  onToggle = () => { },
  selected,
}: NodeProps) => {
  let levelCalc = level * 16;
  const iconStyle = "text-blue-800 w-4 h-4 md:w-5 md:h-5 cursor-pointer";
  const UnTickSquare = () => (
    <Box
      className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] border border-blue-800 rounded hover:shadow cursor-pointer ml-[3px]"
      onClick={() => onToggle(item)}
    ></Box>
  );

  return (
    <div className="mt-3" style={{ paddingRight: `${levelCalc}px` }}>
      {hasChildren ? (
        <div className="flex justify-between items-center border border-gray-100 shadow p-3 rounded-md hover:border hover:border-blue-500 hover:text-blue-500">
          <div className="flex items-center gap-2">
            {item.isSelected ? (
              <TickSquare
                variant="Bold"
                className={iconStyle}
                onClick={() => onToggle(item)}
              />
            ) : (
              <UnTickSquare />
            )}
            {selected ? (
              <FolderOpen className={iconStyle} onClick={() => onToggle()} />
            ) : (
              <Folder2 className={iconStyle} onClick={() => onToggle()} />
            )}
            <Typography
              type="h4"
              className="text-gray-500 font-medium cursor-pointer"
              onClick={() => onToggle()}
            >
              {item.name}
            </Typography>
          </div>
          <ArrowUp2
            className={`transform duration-300 ${selected ? "rotate-0" : "rotate-[-180deg] "
              } ${iconStyle}`}
            onClick={() => onToggle()}
          />
        </div>
      ) : (
        <div className="flex items-center gap-2 border border-gray-100 shadow p-3 rounded-md hover:border hover:border-blue-500 hover:text-blue-500">
          {item.isSelected ? (
            <TickSquare
              variant="Bold"
              className={iconStyle}
              onClick={() => onToggle(item)}
            />
          ) : (
            <UnTickSquare />
          )}
          <DirectNormal className={iconStyle} onClick={() => onToggle(item)} />
          <Typography
            type="h4"
            className="text-gray-500 font-medium cursor-pointer"
            onClick={() => onToggle(item)}
          >
            {item.name}
          </Typography>
        </div>
      )}
    </div>
  );
};
