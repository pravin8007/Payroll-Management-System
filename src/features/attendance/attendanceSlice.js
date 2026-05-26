import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  records: [],
  editAttendance: null,
};

const attendanceSlice = createSlice({
  name: 'attendance',

  initialState,

  reducers: {
    
    markAttendance: (state, action) => {
      state.records.push(action.payload);
    },

    deleteAttendance: (state, action) => {
      state.records = state.records.filter(
        record => record.id !== action.payload
      );
    },

    setEditAttendance: (state, action) => {
      state.editAttendance = action.payload;
    },

    updateAttendance: (state, action) => {
      state.records = state.records.map(record =>
        record.id === action.payload.id
          ? action.payload
          : record
      );

      state.editAttendance = null;
    },
  },
});

export const {
  markAttendance,
  deleteAttendance,
  setEditAttendance,
  updateAttendance,
} = attendanceSlice.actions;

export default attendanceSlice.reducer;