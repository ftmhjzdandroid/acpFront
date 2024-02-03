import React from "react";
import { RoutesType } from "../hook/useNavigate";
import Agreedtraiff from "../pages/agreedtraiff";
import Classification from "../pages/Classification";
import Feature from "../pages/Feature";
import Medisine from "../pages/medisine";
import Packing from "../pages/Packing";
import Proposal from "../pages/Proposal";
import Rules from "../pages/Rules";
import Services from "../pages/services/services-routes";
import Setting from "../pages/Setting";
import Sine from "../pages/Sine";
import Type from "../pages/Type";

export const paths: {
  route: RoutesType;
  element: React.ReactNode;
  id: number;
}[] = [
  {
    route: "/sine",
    element: <Sine />,
    id: 1,
  },
  {
    route: "/type",
    element: <Type />,
    id: 2,
  },
  {
    route: "/services",
    element: <Services />,
    id: 3,
  },
  {
    route: "/setting",
    element: <Setting />,
    id: 4,
  },
  {
    route: "/rules",
    element: <Rules />,
    id: 5,
  },
  {
    route: "/proposal",
    element: <Proposal />,
    id: 6,
  },
  {
    route: "/packing",
    element: <Packing />,
    id: 7,
  },
  {
    route: "/medicine",
    element: <Medisine />,
    id: 8,
  },
  {
    route: "/feature",
    element: <Feature />,
    id: 9,
  },
  {
    route: "/agreedtraiff",
    element: <Agreedtraiff />,
    id: 10,
  },
  {
    route: "/classification",
    element: <Classification />,
    id: 11,
  },
];
