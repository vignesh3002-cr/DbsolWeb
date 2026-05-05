import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (employeeId.trim() === "EMP001" && password === "1234") {
      setError("");
      navigate("/dashboard");
      return;
    }

    setError("Invalid employee id or password");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <section className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <Link to="/" className="mb-6 inline-block text-sm font-medium text-blue-600">
          Back 
        </Link>

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            EMP Portal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Employee Login
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Use Employee ID <strong>EMP001</strong> and password <strong>1234</strong>.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="employeeId" className="mb-2 block text-sm font-medium text-slate-700">
              Employee ID
            </label>
            <input
              id="employeeId"
              type="text"
              value={employeeId}
              onChange={(event) => setEmployeeId(event.target.value)}
              placeholder="EMP001"
              className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {error && (
            <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
