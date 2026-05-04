import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              EMP Portal
            </p>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          </div>
          <Link to="/" className="text-sm font-medium text-slate-600 hover:text-blue-600">
            Website
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Employee ID</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">EMP001</h2>
          </article>
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Leave Balance</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">12 Days</h2>
          </article>
          <article className="rounded-lg bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Pending Requests</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">0</h2>
          </article>
        </div>

        <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Leave Management</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Apply for leave, add your dates and reason, then submit the request.
          </p>
          <button
            onClick={() => navigate("/apply-leave")}
            className="mt-6 rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Apply Leave
          </button>
        </div>
      </section>
    </main>
  );
}
