import { useNavigate } from "react-router-dom";

export type RoutesType =
  | "/"
  | "/notice"
  | "/education"
  | "/conversation"
  | "/cummon-questions"
  | "/notice/detail"
  | "/notice/create-new-notice";

export const useCustomNav = () => {
  const navigation = useNavigate();

  const to = (route: RoutesType) => navigation(route);
  const toNoticeDetail = (data: { itemId: string }) => {
    const { itemId } = data;
    navigation("/notice/detail/" + itemId);
  };
  const toParam = (route: RoutesType, param?: string | object) =>
    navigation(route + "/" + param);
  const toHome = () => navigation("/");
  const back = () => navigation(-1);

  return { to, toParam, toHome, back, toNoticeDetail };
};
