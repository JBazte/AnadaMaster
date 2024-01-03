import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Clients from './pages/Clients';
import Business from './pages/Business';
import RawMaterialGrape from './pages/RawMaterialGrape';
import RawMaterialBarrel from './pages/RawMaterialBarrel';
import Employee from './pages/Employee';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/rawmaterial/grape" element={<RawMaterialGrape />} />
        <Route exact path="/rawmaterial/barrel" element={<RawMaterialBarrel />} />
        <Route exact path="/employee" element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
