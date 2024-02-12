import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AssignmenLaw } from "./assignment-law";
import Services from ".";
import PriceManagement from "./assignment-law/pages";
import { EditServicesStepper } from "./assignment-law/pages/editingservises";
import Addservises from "./assignment-law/pages/addservises";


export const ServicesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/assignLaw/:id?" element={<AssignmenLaw />} />
        <Route path="/pricemanagement" element={<PriceManagement/>}/>
        <Route path="/editingservices" element={<EditServicesStepper/>}/>
        <Route path="/add" element={<Addservises/>}/>
      </Routes>
      <Outlet />
    </>
  );
};
