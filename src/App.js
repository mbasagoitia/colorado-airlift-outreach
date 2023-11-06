import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Mission from './pages/Mission';
import WhatWeDo from './pages/WhatWeDo';
import ClinicSchedule from './pages/ClinicSchedule';
import Checklist from './pages/resources/Checklist';
import EmergencyContacts from './pages/resources/EmergencyContacts';
import VideosAndPhotos from './pages/resources/VideosAndPhotos';
import PhotoCollection1 from './components/PhotoCollection';
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
        <Route path="resources/videos-and-photos/team-of-airplanes" element={<Collection1 />} />
        <Route path="resources/videos-and-photos/colorado-team" element={<Collection2 />} />
        <Route path="resources/videos-and-photos/flying-to-mexico" element={<Collection3 />} />
        <Route path="resources/videos-and-photos/patients-waiting-for-eye-clinic" element={<Collection4 />} />
        <Route path="resources/videos-and-photos/optometry-clinic" element={<Collection5 />} />
        <Route path="resources/videos-and-photos/eye-surgery-clinic" element={<Collection6 />} />
        <Route path="resources/videos-and-photos/spiritual-ministry" element={<Collection7 />} />
        <Route path="resources/videos-and-photos/celebrating-a-successful-clinic" element={<Collection8 />} />
        <Route path="resources/links" element={<Links />} />
        <Route path="pilot-information" element={<PilotInformation />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
