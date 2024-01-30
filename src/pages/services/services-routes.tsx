import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AssignmenLaw } from "./assignment-law";
import Services from ".";
import PriceManagement from "./assignment-law/pages";
import Editingservices from "./assignment-law/pages/editingservises/services-property";
import Editingservusespage2 from "./assignment-law/pages/editingservises/services-type-assignment";
import { EditServicesStepper } from "./assignment-law/pages/editingservises";

export const ServicesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/assignLaw/:id?" element={<AssignmenLaw />} />
        <Route path="/pricemanagement" element={<PriceManagement/>}/>
        <Route path="/editingservices" element={<EditServicesStepper/>}/>
      </Routes>
      <Outlet />
    </>
  );
};
