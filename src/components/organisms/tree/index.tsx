import { TreeDataModel } from "../../../models/treeModel/tree-infoModel";
import { Branch } from "./tree/branch";

type TreeProps = {
  data: TreeDataModel[];
  formik?: any;
  onToggle?: (selectedItem?: TreeDataModel) => void;
};
export const Tree = ({ data, formik, onToggle = () => {} }: TreeProps) => {
  return (
    <div>
      {data.map((item) => (
        <>
          <Branch
            key={item.itemId}
            item={item}
            level={0}
            formik={formik}
            onToggle={onToggle}
          />
        </>
      ))}
    </div>
  );
};
