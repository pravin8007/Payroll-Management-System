import SalaryCalculator from '../features/payroll/SalaryCalculator';

function Payroll() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Payroll Management
        </h1>

        <p className="text-gray-500 mt-2">
          Calculate employee salaries, deductions,
          and generate payslips.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-bold mb-2">
          Salary Processing
        </h2>

        <p className="text-gray-600">
          This module automatically calculates:
        </p>

        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">
          <li>Gross Salary</li>
          <li>Attendance-based Salary</li>
          <li>Tax Deductions</li>
          <li>Provident Fund (PF)</li>
          <li>Net Salary</li>
          <li>Payslip Generation</li>
        </ul>
      </div>

  
      <SalaryCalculator />
    </div>
  );
}

export default Payroll;