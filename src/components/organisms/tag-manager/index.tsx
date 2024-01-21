import React, { useState } from "react";
import { Loading, Typography } from "../../atoms";
import { Modal, Tag } from "../../molecules";

export interface ITags {
  name?: string;
  id?: string | number;
  type?:string
}

interface IProps<T> {
  title?: string;
  isLoading?: boolean;
  isLoadingRemove?: boolean;
  activeTagForRemove?: string;
  data?: T[];
  className?: string;
  onSelect?: (item: T) => void;
  onRemove?: (id?: string | number) => void;
}
export const TagManager = <T extends ITags>(props: IProps<T>) => {
  // const [openPackageModal, setOpenPackageModal] = useState<boolean>(false);
  // const [packId, setPaackId] = useState<number>(0);
  const {
    title,
    isLoading,
    onSelect = () => {},
    data,
    onRemove = () => {},
    isLoadingRemove,
    activeTagForRemove,
    className,
  } = props;

  // const onClick = (tag_id?: number) => {
  //   // setPaackId(packageId)
  //   // setOpenPackageModal(true);
  // };
  return (
    <div className={`flex items-center gap-1 overflow-x-auto ${className}`}>
      <Typography>{title}</Typography>
      
      {isLoading && <Loading className="mr-3" />}
      {data?.map((tag, index) => {
        return (
          <Tag
            key={index}
            isLoading={isLoadingRemove && activeTagForRemove === tag.id}
            onRemove={() => onRemove(tag.id)}
            onSelect={() => onSelect(tag)}
          >
            {tag.name}
          </Tag>
        );
      })}
    </div>
  );
};
