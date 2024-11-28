import React from "react";
import { useAuth } from "../../context/AuthContext.jsx";

const Navbar = () => {
  // Fix: Call useAuth as a function
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center h-12 bg-teal-600 px-5">
      <p className="text-white">Welcome {user?.name || "Guest"}</p>
      <button className="px-4 py-1 bg-white text-teal-700 rounded hover:bg-gray-100">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
