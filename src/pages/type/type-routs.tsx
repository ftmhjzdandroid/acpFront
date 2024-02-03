import { Outlet, Route, Routes } from 'react-router-dom';
import Business from './pages/business';
import Consumables from './pages/consumables';
import Cparty from './pages/cparty';
import Drags from './pages/drags';
import Partners from './pages/partners';
import Rig from './pages/rig';
import Services from './pages/services';
import Sines from './pages/sines';
import Type from '.';

export default function Typerouts() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Type/>} />
        <Route path="/business" element={<Business/>} />
        <Route path="/comsumables" element={<Consumables/>} />
        <Route path="/cparty" element={<Cparty/>} />
        <Route path="/drags" element={<Drags/>} />
        <Route path="/partners" element={<Partners/>} />
        <Route path="/rig" element={<Rig/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/sines" element={<Sines/>} />
      </Routes>
      <Outlet />

    </>
  )
}
