import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Mission from './pages/Mission';
import WhatWeDo from './pages/WhatWeDo';
import ClinicSchedule from './pages/ClinicSchedule';
import Checklist from './pages/resources/Checklist';
import EmergencyContacts from './pages/resources/EmergencyContacts';
import VideosAndPhotos from './pages/resources/VideosAndPhotos';
import PhotoCollection1 from './pages/resources/videos-photos/collection1';
import Links from './pages/resources/Links';
import PilotInformation from './pages/PilotInformation';
import Contact from './pages/Contact';

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
        <Route path="resources/videos-and-photos" element={<VideosAndPhotos />} />
        <Route path="resources/videos-and-photos/collection1" element={<PhotoCollection1 />} />
        <Route path="resources/links" element={<Links />} />
        <Route path="pilot-information" element={<PilotInformation />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
