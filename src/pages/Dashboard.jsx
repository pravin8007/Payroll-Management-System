import { useSelector } from 'react-redux';
import {Users,CalendarCheck,IndianRupee,FileText,} from 'lucide-react';

function Dashboard() {
  const employees = useSelector(
    state => state.employees.employees
  );

  const attendance = useSelector(
    state => state.attendance.records
  );

  const payrolls = useSelector(
    state => state.payroll.payrolls
  );

  const totalEmployees = employees.length;

  const totalAttendance = attendance.length;

  const totalPayroll = employees.reduce(
    (acc, emp) => acc + Number(emp.salary),
    0
  );

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Payroll Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage employees, attendance, payroll,
          and payslips.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Total Employees
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {totalEmployees}
              </h2>
            </div>

            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Attendance Records
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {totalAttendance}
              </h2>
            </div>

            <div className="bg-green-100 p-3 rounded-full">
              <CalendarCheck className="text-green-600" />
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Monthly Payroll
              </p>

              <h2 className="text-3xl font-bold mt-2">
                ₹ {totalPayroll.toLocaleString()}
              </h2>
            </div>

            <div className="bg-yellow-100 p-3 rounded-full">
              <IndianRupee className="text-yellow-600" />
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Generated Payslips
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {payrolls.length}
              </h2>
            </div>

            <div className="bg-purple-100 p-3 rounded-full">
              <FileText className="text-purple-600" />
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white rounded-xl shadow border p-6">
        <h2 className="text-2xl font-bold mb-4">
          Employee Overview
        </h2>

        {employees.length === 0 ? (
          <p className="text-gray-500">
            No employees added yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border">
                    ID
                  </th>

                  <th className="text-left p-3 border">
                    Name
                  </th>

                  <th className="text-left p-3 border">
                    Department
                  </th>

                  <th className="text-left p-3 border">
                    Salary
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map(emp => (
                  <tr key={emp.id}>
                    <td className="p-3 border">
                      <div className="flex items-center gap-3">
                        <span>{emp.id}</span>
                        <button
                          onClick={() =>
                            navigator.clipboard.writeText(
                              emp.id
                            )
                          }
                          className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-2 py-1 rounded text-sm"
                        >
                          Copy
                        </button>
                      </div>
                    </td>

                    <td className="p-3 border">
                      {emp.name}
                    </td>

                    
                    <td className="p-3 border">
                      {emp.department}
                    </td>

                    <td className="p-3 border">
                      ₹{' '}
                      {Number(emp.salary).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;