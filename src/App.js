import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Clients from './pages/Clients';
import Business from './pages/Business';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/clients" element={<Clients />} />
        <Route exact path="/business" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
