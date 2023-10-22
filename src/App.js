import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Mission from './pages/Mission';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="mission" element={<Mission />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
