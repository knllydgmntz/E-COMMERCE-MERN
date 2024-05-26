import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AddProduct from "../components/AddProduct";
import listProduct from "../components/listProduct";

const Admin = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<listProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
