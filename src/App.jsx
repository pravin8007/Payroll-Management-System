import { Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Payroll from './pages/Payroll';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="w-full bg-white shadow-md p-4 flex items-center justify-between">

        <h1 className="font-semibold text-gray-600">Payroll Management System</h1>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
          {[
            { to: '/', label: 'Dashboard' },
            { to: '/employees', label: 'Employees' },
            { to: '/attendance', label: 'Attendance' },
            { to: '/payroll', label: 'Payroll' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={{ textDecoration: 'none' }}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

      </nav>

      <main className="p-6">
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