import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AssignmenLaw } from "./assignment-law";
import Services from ".";
import PriceManagement from "./assignment-law/pages";

export const ServicesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/assignLaw" element={<AssignmenLaw />} />
        <Route path="/pricemanagement" element={<PriceManagement/>}/>
      </Routes>
      <Outlet />
    </>
  );
};
