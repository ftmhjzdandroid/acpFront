import React, { useEffect, useState } from "react";
import { Typography } from "../../atoms";
import { PopoverDialog } from "../../molecules";
import { DocumentFilter } from "iconsax-react";

interface IProps<T> {
  data?: T[];
  tab?: "deliver" | "refer" | "order" | "orderDeliver" | "none";
  onSelectAll?: () => void;
  onChangeFilteredTags?: () => void;
  onChangeFilter?: (index?: number) => void;
}

export const PopoverFilter = <T extends { checked: boolean; label: string }>(
  props: IProps<T>
) => {
  const {
    data = [],
    onSelectAll = () => {},
    onChangeFilteredTags = () => {},
    onChangeFilter = () => {},
    tab,
  } = props;

  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    if (!isFirstLoad) onChangeFilteredTags();
  }, [data]);

  const onChangeFilterHandle = (index: number) => {
    onChangeFilter(index);
    setIsFirstLoad(false);
  };

  return (
    <PopoverDialog
      position="bottom"
      className="w-6"
      list={data}
      keysLabel="name"
      onSelectAll={onSelectAll}
      useMode="filtering"
      renders={(item, index) => {
        return (
          <label className="p-2 flex items-center gap-2 w-full border-b-1 cursor-pointer hover:bg-gray-200 duration-300">
            <input
              disabled={data.length === 1}
              checked={item.checked}
              type="checkbox"
              onChange={() => onChangeFilterHandle(index ?? 0)}
            />
            <Typography type="h3">{item.label}</Typography>
          </label>
        );
      }}
    >
      <DocumentFilter size={20} className="cursor-pointer" fill="grey" />
    </PopoverDialog>
  );
};
