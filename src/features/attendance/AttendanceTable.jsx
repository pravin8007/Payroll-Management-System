import {useDispatch,useSelector,} from 'react-redux';

import {deleteAttendance, setEditAttendance,} from './attendanceSlice';

function AttendanceTable() {
  const dispatch = useDispatch();

  const records = useSelector(
    state => state.attendance.records
  );

  return (
    <div className="bg-white rounded-xl shadow border p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Attendance Records
      </h2>

      {records.length === 0 ? (
        <p className="text-gray-500">
          No attendance records found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">
                  Employee ID
                </th>

                <th className="border p-3">
                  Present Days
                </th>

                <th className="border p-3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {records.map(record => (
                <tr
                  key={record.id}
                  className="text-center"
                >
                  <td className="border p-3">
                    {record.employeeId}
                  </td>

                  <td className="border p-3">
                    {record.daysPresent}
                  </td>

                  <td className="border p-3">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() =>
                          dispatch(
                            setEditAttendance(
                              record
                            )
                          )
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          dispatch(
                            deleteAttendance(
                              record.id
                            )
                          )
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
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

export default AttendanceTable;