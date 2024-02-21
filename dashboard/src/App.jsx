import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import LoginCommerce from "./components/LoginCommerce";
import UserRegister from "./components/UserRegister";
import CommerceRegister from "./components/CommerceRegister";
import AdminPanel from "./components/AdminPanel";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/logincomercio' exact element={<LoginCommerce />} />
          <Route path='/registrousuario' element={<UserRegister />} />
          <Route path='/registrocomercio' element={<CommerceRegister />} />
          <Route path='/panelcontrol' element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
