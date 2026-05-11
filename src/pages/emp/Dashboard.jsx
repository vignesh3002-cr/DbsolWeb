import { Link, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  LayoutDashboard,
  LogOut,
  UserRound,
  UsersRound,
} from "lucide-react";


const stats = [
  { label: "Employee ID", value: "EMP001", icon: UserRound },
  { label: "Role", value: " Manager", icon: UserRound },
  { label: "Status", value: "Active", icon: CalendarDays },
];

const employees = [
  {
    id: "EMP001",
    name: "Arun Kumar",
    role: " Manager",
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Priya Sharma",
    role: "Developer",
    status: "Active",
  },
  {
    id: "EMP003",
    name: "Rahul Verma",
    role: "Tester",
    status: "On Leave",
  },
  {
    id: "EMP004",
    name: "Sneha Iyer",
    role: "HR",
    status: "Active",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f4f7fb] font-jakarta text-slate-900">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-blue-700">
                EMP Portal
              </p>
              <h1 className="font-syne text-2xl font-bold text-slate-950">
                Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:text-blue-700 sm:inline-flex"
            >
              Website
            </Link>
            <Link
              to="/emp-portal"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-6 lg:grid-cols-[1fr_340px] lg:px-8">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-6 py-7 sm:px-8">
              <p className="text-sm font-semibold uppercase text-blue-100">
                Welcome back
              </p>
              <div className="mt-3">
                <div>
                  <h2 className="font-syne text-3xl font-bold sm:text-4xl">
                    Employee Overview
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">
                    Track leave balance, requests, and employee details from one
                    neatly organized dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-slate-500">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950">
                    {item.value}
                  </h3>
                </article>
              );
            })}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-blue-700">
                  Quick Action
                </p>
                <h2 className="mt-2 font-syne text-2xl font-bold text-slate-950">
                  Apply Leave
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Submit a leave request from one dedicated place.
                </p>
              </div>
              <button
                onClick={() => navigate("/apply-leave")}
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                Apply Leave
                <CalendarDays className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="px-2 text-xs font-bold uppercase text-slate-400">
              Menu
            </p>
            <nav className="mt-3 space-y-2">
              <button className="flex w-full items-center gap-3 rounded-2xl bg-blue-700 px-4 py-3 text-left text-sm font-bold text-white">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </button>
              <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold text-slate-600 transition hover:bg-slate-50 hover:text-blue-700">
                <UsersRound className="h-5 w-5" />
                Employees
              </button>
            </nav>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-blue-700">
                  Employees
                </p>
                <h2 className="mt-1 font-syne text-xl font-bold text-slate-950">
                  Team List
                </h2>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                {employees.length}
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {employees.map((employee) => (
                <article
                  key={employee.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                      <UserRound className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold text-slate-950">
                        {employee.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        {employee.id} · {employee.role}
                      </p>
                      <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600">
                        {employee.status}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
