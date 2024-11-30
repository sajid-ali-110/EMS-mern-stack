import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditDepartment = () => {
  const { id } = useParams();
  //   console.log("ID from useParams:", id);
  const params = useParams();
  console.log("Params Object:", params);
  const [department, setDepartment] = useState([]);
  const [depLoading, setDepLoading] = useState(false);

  useEffect(() => {
    const fetchDepartments = async () => {
      setDepLoading(true);
      try {
        const response = await axios.getItem(
          `http://localhost:5000/api/department/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // console.log(response.data);
        if (response.data.success) {
          setDepartment(response.data.department);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDepLoading(false);
      }
    };
    fetchDepartments();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  return (
    <>
      {depLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
          <div>
            <h3 className="text-2xl font-bold mb-6">Edit Department</h3>
            <form>
              <div>
                <label
                  htmlFor="dep_name"
                  className="text-sm font-medium text-gray-700"
                >
                  Department Name
                </label>
                <input
                  type="text"
                  name="dep_name"
                  placeholder="Enter Dep Name"
                  onChange={(e) => handleChange(e)}
                  value={department.dep_name}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={(e) => handleChange(e)}
                  value={department.description}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                update Department
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditDepartment;
