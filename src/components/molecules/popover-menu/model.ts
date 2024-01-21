import { ReactNode } from "react";
export interface PopoverListModel {
  title: string;
  titleColor: string;
  icon: ReactNode;
  child: ReactNode;
  onClick: () => void;
}
