import { createContext, useContext, useState } from "react";

type BreadcrumbModel = { text: string; to?: string };

const ShareManagment = createContext<{
  notifTitle?: string;
  breadcrumb?: BreadcrumbModel[];
  onSetBreadcrumb: (pack: BreadcrumbModel[]) => void;
  onSetNotifTitle: (pack: string) => void;
}>({ onSetBreadcrumb: () => { }, onSetNotifTitle: () => { } });

interface IProps {
  children: React.ReactNode;
}
export function ShareManagmentProvider(props: IProps) {
  const { children } = props;
  const [notifTitle, setTitle] = useState<string>();
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbModel[]>([]);
  const onSetNotifTitle = (title_: string) => {
    setTitle(title_);
  };

  const onSetBreadcrumb = (breadcrumb_: BreadcrumbModel[]) => {
    setBreadcrumb(breadcrumb_);
  };

  const values = {
    notifTitle,
    onSetNotifTitle,
    breadcrumb,
    onSetBreadcrumb,
  };

  return <ShareManagment.Provider value={values}>{children}</ShareManagment.Provider>;
}

export default function useShareManagment() {
  return useContext(ShareManagment);
}
