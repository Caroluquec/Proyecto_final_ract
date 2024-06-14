import { Route, Routes } from "react-router-dom"
import Home from "./pages/frontend/home"
import Login from "./pages/frontend/login"
import Register from "./pages/frontend/register"
import Nofound from "./pages/frontend/nofound"
import Dashboard from "./pages/admin_DE/dashboard"
import Crearpro from "./pages/admin_DE/crear-pro"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/crear-pro" element={<Crearpro/>}/>
      <Route path="*" element={<Nofound/>}/>
    </Routes>
    
     
    </>
  )
}

export default App
