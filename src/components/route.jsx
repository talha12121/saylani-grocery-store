import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup";
import Admin from "./admin/Admin";
import AdminAddItem from "./admin/adminAddItem";
import AdminAccount from "./admin/adminAccount";
import Order from "./admin/adminOrder";
import User from "./user/user";
function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/additem" element={<AdminAddItem />} />
        <Route path="/admin/account" element={<AdminAccount />} />
        <Route path="/admin/orders" element={<Order />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Approuter;