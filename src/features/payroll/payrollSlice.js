import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payrolls: [],
};

const payrollSlice = createSlice({
  name: "payroll",
  initialState,
  reducers: {
    addPayroll: (state, action) => {
      const exists = state.payrolls.find(
        (item) => item.id === action.payload.id,
      );

      if (!exists) {
        state.payrolls.push(action.payload);
      }
    },
  },
});

export const { addPayroll } = payrollSlice.actions;

export default payrollSlice.reducer;
