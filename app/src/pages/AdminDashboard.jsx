import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/Dashboard/AdminSidebar.jsx";
import Navbar from "../components/Dashboard/Navbar.jsx";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 ml-60 bg-gray-100 h-screen">
        <Navbar />
      </div>
    </div>
  );
};

export default AdminDashboard;
