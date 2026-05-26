import jsPDF from 'jspdf';

export const generatePayslip = employee => {
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text('Employee Payslip', 20, 20);  
  doc.setFontSize(14);

  doc.text(`Employee ID: ${employee.id}`,20,40);

  doc.text(`Employee Name: ${employee.name}`,20,50);

  doc.text(`Department: ${employee.department}`,20,60);

  doc.text(`Present Days: ${employee.daysPresent}`,20,70);

  doc.text(`Gross Salary: ₹ ${employee.grossSalary}`,20,90);

  doc.text(`Tax Deduction: ₹ ${employee.tax}`,20,100);

  doc.text(`PF Deduction: ₹ ${employee.pf}`,20,110);

  doc.text(`Net Salary: ₹ ${employee.netSalary}`,20,130);

  doc.save(`${employee.name}-Payslip.pdf`);
};