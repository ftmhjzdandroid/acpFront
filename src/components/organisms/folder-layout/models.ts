export interface IItemFolderModel {
  id?: string;
  name?: string;
  symbol?: string;
  isValid?: boolean;
}
export interface IFolderDataModel {
  folder: {
    id?: string;
    name?: string;
    folderNumber?: string;
    typeNumber?: string;
    isValid?: boolean;
  }[];
  item: IItemFolderModel[];
}
