import { useSelector } from 'react-redux';

function PayrollTable() {
  const payrolls = useSelector(
    state => state.payroll.payrolls
  );

  return (
    <div className="bg-white rounded-xl shadow border p-6 mt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Payroll Records
        </h2>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          Total Records: {payrolls.length}
        </span>
      </div>

      {payrolls.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">
            No payroll records found.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">
                  Employee ID
                </th>

                <th className="border p-3 text-left">
                  Employee Name
                </th>

                <th className="border p-3 text-left">
                  Department
                </th>

                <th className="border p-3 text-left">
                  Present Days
                </th>

                <th className="border p-3 text-left">
                  Gross Salary
                </th>

                <th className="border p-3 text-left">
                  Tax
                </th>

                <th className="border p-3 text-left">
                  PF
                </th>

                <th className="border p-3 text-left">
                  Net Salary
                </th>
              </tr>
            </thead>

            <tbody>
              {payrolls.map(payroll => (
                <tr
                  key={payroll.id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="border p-3">
                    {payroll.id}
                  </td>

                  <td className="border p-3 font-medium">
                    {payroll.name}
                  </td>

                  <td className="border p-3">
                    {payroll.department}
                  </td>

                  <td className="border p-3">
                    {payroll.daysPresent}
                  </td>

                  <td className="border p-3">
                    ₹{' '}
                    {Number(
                      payroll.grossSalary
                    ).toLocaleString()}
                  </td>

                  <td className="border p-3 text-red-500">
                    ₹{' '}
                    {Number(
                      payroll.tax
                    ).toLocaleString()}
                  </td>

                  <td className="border p-3 text-red-500">
                    ₹{' '}
                    {Number(
                      payroll.pf
                    ).toLocaleString()}
                  </td>

                  <td className="border p-3 font-bold text-green-600">
                    ₹{' '}
                    {Number(
                      payroll.netSalary
                    ).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PayrollTable;