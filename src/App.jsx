import { Route, Routes } from "react-router-dom"
import Home from "./pages/frontend/home"
import Login from "./pages/frontend/login"
import Register from "./pages/frontend/register"
import Nofound from "./pages/frontend/nofound"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<Nofound/>}/>
    </Routes>
    
     
    </>
  )
}

export default App
