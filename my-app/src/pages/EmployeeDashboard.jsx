import React from "react";
import { useAuth } from "../context/AuthContext.jsx";

const EmployeeDashboard = () => {
  const { user } = useAuth();
  return <div>EmployeeDashboard {user?.name}</div>;
};

export default EmployeeDashboard;
