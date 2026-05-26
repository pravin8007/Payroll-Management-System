import {useCallback,useEffect,} from 'react';

import { useForm } from 'react-hook-form';

import {useDispatch,useSelector,} from 'react-redux';

import {addEmployee,updateEmployee,} from './employeeSlice';

function EmployeeForm() {
  const dispatch = useDispatch();

  const editEmployee = useSelector(
    state => state.employees.editEmployee
  );

  const {register,handleSubmit,reset,setValue,} = useForm();


  useEffect(() => {
    if (editEmployee) {
      setValue('name', editEmployee.name);

      setValue(
        'department',
        editEmployee.department
      );

      setValue(
        'salary',
        editEmployee.salary
      );
    }
  }, [editEmployee, setValue]);

  const onSubmit = useCallback(
    data => {
   
      if (editEmployee) {
        dispatch(
          updateEmployee({
            id: editEmployee.id,
            ...data,
          })
        );
      }
      else {
        dispatch(
          addEmployee({
            id: Date.now(),
            ...data,
          })
        );
      }

      reset();
    },

    [dispatch, reset, editEmployee]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-5 rounded-xl shadow space-y-4"
    >
      <h2 className="text-2xl font-bold">
        {editEmployee
          ? 'Update Employee'
          : 'Add Employee'}
      </h2>

      <input
        {...register('name')}
        placeholder="Employee Name"
        className="border p-3 w-full rounded"
        required
      />

      <input
        {...register('department')}
        placeholder="Department"
        className="border p-3 w-full rounded"
        required
      />

      <input
        type="number"
        {...register('salary')}
        placeholder="Salary"
        className="border p-3 w-full rounded"
        required
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
        {editEmployee
          ? 'Update Employee'
          : 'Add Employee'}
      </button>
    </form>
  );
}

export default EmployeeForm;