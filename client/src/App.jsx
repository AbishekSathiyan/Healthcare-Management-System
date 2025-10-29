import { useState } from "react";
import { HeartPulse, Stethoscope, Users, CalendarCheck } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 flex flex-col items-center justify-center text-gray-800">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3">
          <HeartPulse className="text-blue-600 w-10 h-10" />
          <h1 className="text-4xl font-extrabold text-blue-700">
            Healthcare Management System
          </h1>
        </div>
        <p className="text-gray-600 mt-2 text-lg">
          Manage patients, doctors, and appointments efficiently
        </p>
      </header>

      {/* Main Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96 flex flex-col items-center space-y-6 transition hover:scale-105 duration-300">
        <Stethoscope className="text-blue-500 w-12 h-12" />

        <h2 className="text-2xl font-bold text-blue-600">Welcome Admin</h2>
        <p className="text-gray-500 text-center">
          This is your Healthcare dashboard. Keep track of all your hospital
          data in one place.
        </p>

        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300"
        >
          Notifications: {count}
        </button>

        <div className="grid grid-cols-3 gap-4 text-center w-full">
          <div className="bg-blue-100 rounded-xl p-3 hover:bg-blue-200">
            <Users className="mx-auto text-blue-600" />
            <p className="text-sm mt-1 font-medium">Patients</p>
          </div>
          <div className="bg-blue-100 rounded-xl p-3 hover:bg-blue-200">
            <Stethoscope className="mx-auto text-blue-600" />
            <p className="text-sm mt-1 font-medium">Doctors</p>
          </div>
          <div className="bg-blue-100 rounded-xl p-3 hover:bg-blue-200">
            <CalendarCheck className="mx-auto text-blue-600" />
            <p className="text-sm mt-1 font-medium">Appointments</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-600 text-sm">
        © 2025 AS Healthcare | Designed with ❤️ using React + Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
