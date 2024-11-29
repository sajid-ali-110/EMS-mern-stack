import AdminSidebar from "../components/Dashboard/AdminSidebar.jsx";
import Navbar from "../components/Dashboard/Navbar.jsx";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 ml-60 bg-gray-100 h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
