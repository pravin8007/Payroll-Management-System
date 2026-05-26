import AttendanceForm from '../features/attendance/AttendanceForm';
import AttendanceTable from '../features/attendance/AttendanceTable';

function Attendance() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Attendance Management
      </h1>

      <AttendanceForm />
      <AttendanceTable />
    </div>
  );
}

export default Attendance;