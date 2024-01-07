import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Clients from './pages/Clients';
import ClientsEdit from './pages/ClientsEdit';
import Business from './pages/Business';
import RawMaterialGrape from './pages/RawMaterialGrape';
import RawMaterialBarrel from './pages/RawMaterialBarrel';
import Employee from './pages/Employee';
import SelectionCoreReservas from './pages/SelectionCoreReservas';
import SelectionCoreBodegas from './pages/SelectionCoreBodegas';
import Orders from './pages/Orders';
import OrdersEdit from './pages/OrdersEdit';
import Products from './pages/Products';
import ProductsEdit from './pages/ProductsEdit';
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="corereservas/list" element={<SelectionCoreReservas />} />
        <Route exact path="corebodega/list" element={<SelectionCoreBodegas />} />
        <Route exact path="/client/:id" element={<Clients />} />
        <Route exact path="/client/:id/edit" element={<ClientsEdit />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/order/:id" element={<Orders />} />
        <Route exact path="/order/:id/edit" element={<OrdersEdit />} />
        <Route exact path="/product/:id" element={<Products />} />
        <Route exact path="/product/:id/edit" element={<ProductsEdit />} />
        <Route exact path="/rawmaterial/grape" element={<RawMaterialGrape />} />
        <Route exact path="/rawmaterial/barrel" element={<RawMaterialBarrel />} />
        <Route exact path="/employee" element={<Employee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
