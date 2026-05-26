import { useSelector } from 'react-redux';
import { calculateSalary } from '../../utils/calculateSalary';
import Payslip from './Payslip';

function SalaryCalculator() {
  const employees = useSelector(
    state => state.employees.employees
  );

  const attendance = useSelector(
    state => state.attendance.records
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {employees.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow border">
          <p className="text-gray-500 text-center">
            No employees available for salary
            calculation.
          </p>
        </div>
      ) : (
        employees.map(emp => {
      
          const attendanceRecord = attendance.find(
            item =>
              Number(item.employeeId) ===
              Number(emp.id)
          );

          const daysPresent = attendanceRecord
            ? Number(attendanceRecord.daysPresent)
            : 0;

          const salary = calculateSalary(
            Number(emp.salary),
            daysPresent
          );

          const employeePayroll = {
            ...emp,
            daysPresent,
            grossSalary: salary.grossSalary,
            tax: salary.tax,
            pf: salary.pf,
            netSalary: salary.netSalary,
          };

          return (
            <div
              key={emp.id}
              className="bg-white rounded-xl shadow border p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {emp.name}
                  </h2>

                  <p className="text-gray-500">
                    {emp.department}
                  </p>
                </div>

                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  ID: {emp.id}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    Base Salary
                  </span>

                  <span>
                    ₹{' '}
                    {Number(emp.salary).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    Present Days
                  </span>

                  <span>{daysPresent} / 30</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">
                    Gross Salary
                  </span>

                  <span>
                    ₹{' '}
                    {salary.grossSalary.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-red-500">
                  <span className="font-medium">
                    Tax Deduction
                  </span>

                  <span>
                    - ₹ {salary.tax.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-red-500">
                  <span className="font-medium">
                    PF Deduction
                  </span>

                  <span>
                    - ₹ {salary.pf.toFixed(2)}
                  </span>
                </div>

                <hr />

                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold text-gray-800">
                    Net Salary
                  </span>

                  <span className="font-bold text-green-600 text-xl">
                    ₹{' '}
                    {salary.netSalary.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Payslip employee={employeePayroll} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default SalaryCalculator;