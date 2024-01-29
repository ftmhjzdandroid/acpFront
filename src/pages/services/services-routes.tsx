import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AssignmenLaw } from "./assignment-law";
import Services from ".";
import PriceManagement from "./assignment-law/pages";
import Editingservices from "./assignment-law/pages/editingservises/Editingservices";
import Editingservusespage2 from "./assignment-law/pages/editingservises/Editingservusespage2";

export const ServicesRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/assignLaw/:id?" element={<AssignmenLaw />} />
        <Route path="/pricemanagement" element={<PriceManagement/>}/>
        <Route path="/editingservices" element={<Editingservices/>}/>
        <Route path="/editingservusespage2" element={<Editingservusespage2/>}/>
      </Routes>
      <Outlet />
    </>
  );
};
