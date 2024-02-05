import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Sine from "./pages/Sine";
import Type from "./pages/Type";
import Setting from "./pages/Setting";
import Rules from "./pages/Rules";
import Proposal from "./pages/Proposal";
import Packing from "./pages/Packing";
import { ServicesRoutes } from "./pages/services/services-routes";
import { Medisineroutes } from "./pages/medisine/Medisine-routes";
import Agreedtraiff from "./pages/agreedtraiff";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/services" />} />
        <Route path="/services/*" element={<ServicesRoutes />} />
        <Route path="/sine/*" element={<Sine />} />
        <Route path="/type/*" element={<Type />} />
        <Route path="/agreedtraiff/*" element={<Agreedtraiff />} />
        <Route path="/setting/*" element={<Setting />} />
        <Route path="/rules/*" element={<Rules />} />
        <Route path="/proposal/*" element={<Proposal />} />
        <Route path="/packing/*" element={<Packing />} />
        <Route path="/medisine/*" element={<Medisineroutes />} />
      </Routes>
      <Outlet />
    </>
  );
};
