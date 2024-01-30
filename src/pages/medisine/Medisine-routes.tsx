import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Medisine from '.'
import PriceManagement from './pages/pricemnagment'
import { EditMedisineStepper } from './pages/editingservises'

export const Medisineroutes =() => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Medisine/>} />
      <Route path="/editingservices" element={<EditMedisineStepper/>  } />
      <Route path="/PriceManagement" element={<PriceManagement/>} />
    </Routes>
    <Outlet />
  </>
  )
}
