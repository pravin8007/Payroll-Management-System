import { useSelector, useDispatch } from "react-redux";

import { deleteEmployee, setEditEmployee } from "./employeeSlice";

function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees);

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {employees.map((emp) => (
        <div key={emp.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">{emp.name}</h2>

          <p>{emp.department}</p>

          <p>₹ {emp.salary}</p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => dispatch(setEditEmployee(emp))}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => dispatch(deleteEmployee(emp.id))}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
