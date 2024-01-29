import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Medisine from '.'
import Editingservices from './pages/editingservises/Editingservices'
import Editingservusespage2 from './pages/editingservises/Editingservusespage2'
import PriceManagement from './pages/pricemnagment'
export const Medisineroutes =() => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Medisine/>} />
      <Route path="/editingservices" element={<Editingservices/>} />
      <Route path="/editingservusespage2" element={<Editingservusespage2/>} />
      <Route path="/PriceManagement" element={<PriceManagement/>} />

      {/* <Route path="/assignLaw" element={<AssignmenLaw />} />
      <Route path="/pricemanagement" element={<PriceManagement/>}/>
      <Route path="/editingservices" element={<Editingservices/>}/>
      <Route path="/editingservusespage2" element={<Editingservusespage2/>}/> */}
    </Routes>
    <Outlet />
  </>
  )
}
