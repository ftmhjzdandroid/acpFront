import { PartnerDataType } from "../../../models";
import { TreeDataModel } from "../../../models/treeModel/tree-infoModel";
import { CpartyDataType } from "../../cparty/model";

export const updateObject = (
  arr: TreeDataModel[],
  idToUpdate: number | string,
  updatedObject: Partial<TreeDataModel>
): TreeDataModel[] => {
  const updatedArray = arr.map((obj) => {
    if (obj.itemId === idToUpdate) {
      return { ...obj, ...updatedObject };
    } else if (obj.children) {
      return {
        ...obj,
        children: updateObject(obj.children, idToUpdate, updatedObject),
      };
    } else {
      return obj;
    }
  });
  return updatedArray;
};
export const onSelectDataHandler = (
  status: boolean,
  item: TreeDataModel,
  data: TreeDataModel[]
) => {
  const obj = { ...item, isSelected: !status };

  const updateChildren = (children: TreeDataModel[]): TreeDataModel[] => {
    if (!children || children.length === 0) return [];
    const childItem = children.map((m) => {
      return {
        ...m,
        isSelected: !status,
        children: updateChildren(m.children),
      };
    });
    return childItem;
  };

  const arr = updateChildren(obj.children);
  obj.children = arr;

  return updateObject(data, item.itemId, obj);
};

export const receiversListUpdater = (
  data: TreeDataModel[],
  sourceData: TreeDataModel[]
): TreeDataModel[] => {
  let updatedData: TreeDataModel[] = [];
  data.map((item) => {
    if (updatedData.length === 0)
      updatedData = onSelectDataHandler(!item.isSelected, item, sourceData);
    else updatedData = onSelectDataHandler(!item.isSelected, item, updatedData);
  });
  return updatedData;
};

export const cpartyPartnerListUpdater = <
  T extends CpartyDataType | PartnerDataType
>(
  data: T[],
  sourceData: T[]
): T[] => {
  let updatedData: T[] = [
    ...sourceData.map((obj) => {
      return { ...obj, isSelected: false };
    }),
  ];
  data.map((dataItem) => {
    if (sourceData.filter((s) => s.itemId === dataItem.itemId)) {
      const index = updatedData.findIndex((u) => u.itemId === dataItem.itemId);
      const item: T = {
        ...updatedData[index],
        isSelected: true,
      };
      updatedData[index] = item;
    }
  });
  return updatedData;
};
