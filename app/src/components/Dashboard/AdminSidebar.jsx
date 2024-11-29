import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCogs,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-3 w-60">
      <div className="bg-teal-600 h-12 flex items-center justify-center">
        <h3 className="text-2xl text-center font-pacifico">Empluyee MS</h3>
      </div>

      <div>
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `${isActive ? "bg-teal-500 " : " "
            } flex items-center space-x-4 py-2.5 px-4 rounded`
          }
          end
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 py-2.5 px-4 rounded"
        >
          <FaUsers />
          <span>Employees</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard/departments"
          className={({ isActive }) =>
            `${isActive ? "bg-teal-500 " : " "
            } flex items-center space-x-4 py-2.5 px-4 rounded`
          }
        >
          <FaBuilding />
          <span>Departments</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 py-2.5 px-4 rounded"
        >
          <FaCalendarAlt />
          <span>Leaves</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 py-2.5 px-4 rounded"
        >
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded"
        >
          <FaCogs />
          <span>Setting</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
