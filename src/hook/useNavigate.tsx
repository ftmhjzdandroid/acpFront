import { useNavigate } from "react-router-dom";

export type RoutesType =
  | "/"
  | "/classification"
  | "/agreedtraiff"
  | "/feature"
  | "/medicine"
  | "/packing"
  | "/proposal"
  | "/setting"
  | "/rules"
  | "/services"
  | "/type"
  | "/sine"
  | "/assignLaw"
  | "/services/assignLaw"
  | "/services/history"
  |"/services/pricemanagement"
  |"/services/editingservices"
  |"/services/editingservusespage2"
  |"/medisine/pricemanagement"
  |"/medisine/editingservices"
  |"/medisine/editingservusespage2"

export const useCustomNav = () => {
  const navigation = useNavigate();

  const to = (route: RoutesType) => navigation(route);

  const toAssignLaw = (id?: string) => {
    navigation("/services/assignLaw", {
      state: {
        id: id,
      },
    });
  };
  const toParam = (route: RoutesType, param?: string | object) =>
    navigation(route + "/" + param);
  const toHome = () => navigation("/");
  const back = () => navigation(-1);

  return { to, toParam, toHome, back, toAssignLaw };
};
