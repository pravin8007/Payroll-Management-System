import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  editEmployee: null,
};

const employeeSlice = createSlice({
  name: 'employees',

  initialState,

  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },

    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        emp => emp.id !== action.payload
      );
    },

    setEditEmployee: (state, action) => {
      state.editEmployee = action.payload;
    },

    updateEmployee: (state, action) => {
      state.employees = state.employees.map(emp =>
        emp.id === action.payload.id
          ? action.payload
          : emp
      );

      state.editEmployee = null;
    },
  },
});

export const {
  addEmployee,
  deleteEmployee,
  setEditEmployee,
  updateEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;