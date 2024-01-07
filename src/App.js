import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Clients from './pages/Clients';
import ClientsEdit from './pages/ClientsEdit';
import Business from './pages/Business';
import BusinessEdit from './pages/BusinessEdit';
import RawMaterialGrape from './pages/RawMaterialGrape';
import RawMaterialGrapeEdit from './pages/RawMaterialGrapeEdit';
import RawMaterialBarrel from './pages/RawMaterialBarrel';
import RawMaterialBarrelEdit from './pages/RawMaterialBarrelEdit';
import Employee from './pages/Employee';
import EmployeeEdit from './pages/EmployeeEdit';
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
        <Route exact path="/business/:id" element={<Business />} />
        <Route exact path="/business/:id/edit" element={<BusinessEdit />} />
        <Route exact path="/order/:id" element={<Orders />} />
        <Route exact path="/order/:id/edit" element={<OrdersEdit />} />
        <Route exact path="/product/:id" element={<Products />} />
        <Route exact path="/product/:id/edit" element={<ProductsEdit />} />
        <Route exact path="/rawmaterial/grape/:id" element={<RawMaterialGrape />} />
        <Route exact path="/rawmaterial/grape/:id/edit" element={<RawMaterialGrapeEdit />} />
        <Route exact path="/rawmaterial/barrel/:id" element={<RawMaterialBarrel />} />
        <Route exact path="/rawmaterial/barrel/:id/edit" element={<RawMaterialBarrelEdit />} />
        <Route exact path="/employee/:id" element={<Employee />} />
        <Route exact path="/employee/:id/edit" element={<EmployeeEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
