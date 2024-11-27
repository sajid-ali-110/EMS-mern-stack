import React from "react";
import { useAuth } from "../context/AuthContext.jsx";

const AdminDashboard = () => {
  const { user } = useAuth();
  return <div>AdminDashboard {user.name} </div>;
};

export default AdminDashboard;
