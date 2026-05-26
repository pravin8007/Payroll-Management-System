export const calculateSalary = (salary, daysPresent) => {
  const totalDays = 30;

  const perDaySalary = salary / totalDays;

  const grossSalary = perDaySalary * daysPresent;

  const tax = grossSalary * 0.1;
  const pf = grossSalary * 0.05;

  const netSalary = grossSalary - tax - pf;

  return {grossSalary,tax,pf,netSalary};
};
