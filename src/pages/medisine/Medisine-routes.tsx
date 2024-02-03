import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Medisine from '.'
import PriceManagement from './pages/pricemnagment'
import { EditMedisineStepper } from './pages/editingservises'
import Attributionitems from './pages/attribution'

export const Medisineroutes =() => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Medisine/>} />
      <Route path="/editingservices" element={<EditMedisineStepper/>  } />
      <Route path="/PriceManagement" element={<PriceManagement/>} />
      <Route path="/law" element={<Attributionitems/>} />
    </Routes>
    <Outlet />
  </>
  )
}
