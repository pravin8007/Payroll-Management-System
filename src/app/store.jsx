import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employees/employeeSlice';
import attendanceReducer from '../features/attendance/attendanceSlice';
import payrollReducer from '../features/payroll/payrollSlice';

export default configureStore({
  reducer: {
    employees: employeeReducer,
    attendance: attendanceReducer,
    payroll: payrollReducer,
  },
});