import { useEffect } from 'react';

import { useForm } from 'react-hook-form';

import {useDispatch,useSelector,} from 'react-redux';

import {markAttendance,updateAttendance,} from './attendanceSlice';

function AttendanceForm() {
  const dispatch = useDispatch();

  const editAttendance = useSelector(
    state => state.attendance.editAttendance
  );

  const {register,handleSubmit,reset,setValue,} = useForm({
    defaultValues: {
      employeeId: '',
      daysPresent: '',
    },
  });

  useEffect(() => {
    if (editAttendance) {
      setValue(
        'employeeId',
        editAttendance.employeeId
      );

      setValue(
        'daysPresent',
        editAttendance.daysPresent
      );
    }
  }, [editAttendance, setValue]);

  const onSubmit = data => {
  
    if (editAttendance) {
      dispatch(
        updateAttendance({
          id: editAttendance.id,
          ...data,
        })
      );
    }

    else {
      dispatch(
        markAttendance({
          id: crypto.randomUUID(),
          ...data,
        })
      );
    }

    reset({
      employeeId: '',
      daysPresent: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-5 rounded-xl shadow space-y-4"
    >
      <h2 className="text-2xl font-bold">
        {editAttendance
          ? 'Update Attendance'
          : 'Mark Attendance'}
      </h2>

      <input
        type="number"
        placeholder="Employee ID"
        className="border p-3 w-full rounded"
        {...register('employeeId', {
          required: true,
        })}
      />

      <input
        type="number"
        placeholder="Present Days"
        className="border p-3 w-full rounded"
        {...register('daysPresent', {
          required: true,
        })}
      />

      <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
        {editAttendance
          ? 'Update Attendance'
          : 'Mark Attendance'}
      </button>
    </form>
  );
}

export default AttendanceForm;