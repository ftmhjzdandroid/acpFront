import { useState } from "react";
import { Node } from "../node";
import { TreeDataModel } from "../../../../../models/treeModel/tree-infoModel";

type BranchProps = {
  item: TreeDataModel;
  level: number;
  formik: any;
  onRemoveHandle?: (id: number) => void;
  onToggle?: (selectedItem?: TreeDataModel) => void;
};
export const Branch = ({
  item,
  level,
  formik,
  onToggle = () => {},
  onRemoveHandle = () => {},
}: BranchProps) => {
  const [selected, setSelected] = useState<boolean>(item.isSelected ?? false);

  const onToggleHandle = (selectedItem?: TreeDataModel) => {
    if (selectedItem) {
      onToggle(selectedItem);
      if (!selectedItem.isSelected) setSelected(true);
    } else setSelected((prev) => !prev);
  };

  const hasChildren =
    item.children && item.children.length !== 0 ? true : false;

  const renderBranches = () => {
    if (hasChildren) {
      const newLevel = level + 1;

      return item.children?.map((child: any) => {
        return (
          <Branch
            key={child.id}
            item={child}
            level={newLevel}
            formik={formik}
            onToggle={onToggleHandle}
          />
        );
      });
    }
    return null;
  };

  return (
    <>
      <Node
        item={item}
        hasChildren={hasChildren}
        level={level}
        onToggle={onToggleHandle}
        selected={selected}
      />
      {selected && renderBranches()}
    </>
  );
};
