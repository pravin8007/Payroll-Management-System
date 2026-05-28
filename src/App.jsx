import { Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <nav className="w-full bg-white shadow-md fixed top-0 z-50 ">
        <div className="max-w-full mx-10 py-2.5 flex flex-col md:flex-row sm:items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-700 text-center sm:text-left">
            Payroll Management System
          </h1>

          <div className="flex items-center justify-center sm:justify-end mt-3 md:mt-0 gap-2 sm:gap-4">
            {[
              { to: "/", label: "Dashboard" },
              { to: "/employees", label: "Employees" },
              { to: "/attendance", label: "Attendance" },
              { to: "/payroll", label: "Payroll" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm sm:text-base font-medium transition-all duration-200
                    ${isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

     <main className="pt-28 md:pt-20 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payroll" element={<Payroll />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
