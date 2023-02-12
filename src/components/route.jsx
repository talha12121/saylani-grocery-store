import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup";
import Admin from "./Admin";
function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Approuter;