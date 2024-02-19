import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "./App.css";
import UserRegister from "./components/UserRegister";
import CommerceRegister from "./components/CommerceRegister";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registrousuario' element={<UserRegister />} />
          <Route path='/registrocomercio' element={<CommerceRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
