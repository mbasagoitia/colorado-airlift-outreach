import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Mission from './pages/Mission';
import WhatWeDo from './pages/WhatWeDo';
import ClinicSchedule from './pages/ClinicSchedule';
import Checklist from './pages/resources/Checklist';
import EmergencyContacts from './pages/resources/EmergencyContacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mission" element={<Mission />} />
        <Route path="what-we-do" element={<WhatWeDo />} />
        <Route path="clinic-schedule" element={<ClinicSchedule />} />
        <Route path="resources/clinic-trip-checklist" element={<Checklist />} />
        <Route path="resources/emergency-contacts" element={<EmergencyContacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
