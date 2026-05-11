import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  UserRound,
  UsersRound,
} from "lucide-react";

const employees = [
  {
    id: "EMP001",
    name: "Arun Kumar",
    role: " Manager",
    department: "Delivery",
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Priya Sharma",
    role: "Developer",
    department: "Engineering",
    status: "Active",
  },
  {
    id: "EMP003",
    name: "Rahul Verma",
    role: "Tester",
    department: "Human Resources",
    status: "On Leave",
  },
  {
    id: "EMP004",
    name: "Sneha Iyer",
    role: "HR",
    department: "Consulting",
    status: "Active",
  },
];

const initialLeaveRequests = [
  {
    id: 1,
    employeeId: "EMP002",
    name: "Priya Sharma",
    type: "Casual Leave",
    dates: "May 9 - May 10",
    days: 2,
    status: "Pending",
  },
  {
    id: 2,
    employeeId: "EMP003",
    name: "Rahul Verma",
    type: "Sick Leave",
    dates: "May 6",
    days: 1,
    status: "Approved",
  },
  {
    id: 3,
    employeeId: "EMP004",
    name: "Sneha Iyer",
    type: "Work From Home",
    dates: "May 12",
    days: 1,
    status: "Pending",
  },
];

const statusStyles = {
  Active: "bg-green-50 text-green-700",
  "On Leave": "bg-amber-50 text-amber-700",
  Pending: "bg-amber-50 text-amber-700",
  Approved: "bg-green-50 text-green-700",
  Rejected: "bg-red-50 text-red-700",
};

export default function AdminDashboard() {
  const [leaveRequests, setLeaveRequests] = useState(initialLeaveRequests);

  const stats = useMemo(() => {
    const pendingLeaves = leaveRequests.filter(
      (request) => request.status === "Pending"
    ).length;
    const approvedLeaves = leaveRequests.filter(
      (request) => request.status === "Approved"
    ).length;
    const activeEmployees = employees.filter(
      (employee) => employee.status === "Active"
    ).length;

    return [
      { label: "Total Employees", value: employees.length, icon: UsersRound },
      { label: "Active Employees", value: activeEmployees, icon: UserRound },
      { label: "Pending Leaves", value: pendingLeaves, icon: CalendarDays },
      { label: "Approved Leaves", value: approvedLeaves, icon: CalendarCheck },
    ];
  }, [leaveRequests]);

  const updateLeaveStatus = (requestId, status) => {
    setLeaveRequests((requests) =>
      requests.map((request) =>
        request.id === requestId ? { ...request, status } : request
      )
    );
  };

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
                Admin Portal
              </p>
              <h1 className="font-syne text-2xl font-bold text-slate-950">
                Admin Dashboard
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
                Welcome back, Admin
              </p>
              <h2 className="mt-3 font-syne text-3xl font-bold sm:text-4xl">
                Manage Employee Portal
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">
                Review leave requests, monitor team status, and keep employee
                records organized from one workspace.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-blue-700">
                  Approvals
                </p>
                <h2 className="mt-1 font-syne text-2xl font-bold text-slate-950">
                  Leave Requests
                </h2>
              </div>
              <span className="w-fit rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-500">
                {leaveRequests.length} requests
              </span>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[720px] border-separate border-spacing-y-3 text-left">
                <thead>
                  <tr className="text-xs font-bold uppercase text-slate-400">
                    <th className="px-4">Employee</th>
                    <th className="px-4">Leave Type</th>
                    <th className="px-4">Dates</th>
                    <th className="px-4 text-center">Days</th>
                    <th className="px-4">Status</th>
                    <th className="px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveRequests.map((request) => (
                    <tr key={request.id} className="bg-slate-50">
                      <td className="rounded-l-2xl px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                            <UserRound className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-slate-950">
                              {request.name}
                            </p>
                            <p className="mt-1 text-xs font-semibold text-slate-500">
                              {request.employeeId}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-slate-600">
                        {request.type}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-slate-600">
                        {request.dates}
                      </td>
                      <td className="px-4 py-4 text-center text-sm font-semibold text-slate-600">
                        {request.days}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex min-w-20 justify-center rounded-full px-3 py-1 text-xs font-bold ${
                            statusStyles[request.status]
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="rounded-r-2xl px-4 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              updateLeaveStatus(request.id, "Approved")
                            }
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-700 transition hover:bg-green-100"
                            aria-label="Approve request"
                          >
                            <CheckCircle2 className="h-5 w-5" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              updateLeaveStatus(request.id, "Rejected")
                            }
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-700 transition hover:bg-red-100"
                            aria-label="Reject request"
                          >
                            <LogOut className="h-4 w-4 rotate-180" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
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
                <ClipboardList className="h-5 w-5" />
                Leave Requests
              </button>
              <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold text-slate-600 transition hover:bg-slate-50 hover:text-blue-700">
                <UsersRound className="h-5 w-5" />
                Employees
              </button>
            </nav>
          </div>

          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-blue-700">
                  Directory
                </p>
                <h2 className="mt-1 font-syne text-xl font-bold text-slate-950">
                  Employees
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
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold text-slate-950">
                            {employee.name}
                          </h3>
                          <p className="mt-1 text-xs font-semibold text-slate-500">
                            {employee.id} | {employee.role}
                          </p>
                        </div>
                        <span
                          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                            statusStyles[employee.status]
                          }`}
                        >
                          {employee.status}
                        </span>
                      </div>
                      <p className="mt-3 text-xs font-semibold text-slate-400">
                        {employee.department}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}