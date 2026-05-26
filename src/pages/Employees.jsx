import EmployeeForm from '../features/employees/EmployeeForm';
import EmployeeList from '../features/employees/EmployeeList';

function Employees() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Employee Management
      </h1>

      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}

export default Employees;