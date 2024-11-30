import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.dep_name,
  },
  {
    name: "Description",
    selector: (row) => row.description,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartmentButtons = (DepId) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-1 text-white rounded bg-teal-600"
        onClick={() => navigate(`/admin-dashboard/department/${DepId}`)}
      >
        edit
      </button>
      <button className="px-3 py-1 text-white rounded bg-red-600">
        Delete
      </button>
    </div>
  );
};
