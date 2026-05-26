import { useDispatch } from 'react-redux';

import { generatePayslip } from '../../utils/generatePayslip';

import { addPayroll } from './payrollSlice';

function Payslip({ employee }) {
  const dispatch = useDispatch();

  const handleDownload = () => {

    generatePayslip(employee);
    
    dispatch(addPayroll(employee));

  };

  return (
    <div className="flex items-center justify-between bg-gray-50 border rounded-lg p-4">
      <div>
        <h3 className="text-lg font-bold text-gray-800">
          Payslip
        </h3>

        <p className="text-sm text-gray-500">
          Generate and download employee salary
          slip.
        </p>
      </div>

      <button
        onClick={handleDownload}
        className="bg-purple-600 hover:bg-purple-700 transition text-white px-5 py-2 rounded-lg font-medium"
      >
        Download PDF
      </button>
    </div>
  );
}

export default Payslip;