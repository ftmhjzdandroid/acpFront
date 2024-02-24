import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Medisine from '.'
import PriceManagement from './pages/pricemnagment'
import { EditMedisineStepper } from './pages/editingservises'
import Attributionitems from './pages/attribution'
import Addservises from './addservises'

export const Medisineroutes =() => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Medisine/>} />
      <Route path="/editingservices" element={<EditMedisineStepper/>} />
      <Route path="/PriceManagement" element={<PriceManagement/>} />
      <Route path="/law" element={<Attributionitems/>} />
      <Route path="/add" element={<Addservises/>} />
    </Routes>
    <Outlet />
  </>
  )
}
