import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  CalendarDays,
  LayoutDashboard,
  LogOut,
  UserRound,
  UsersRound,
} from "lucide-react";

const stats = [
  { label: "Employee ID", value: localStorage.getItem("empId") || "1", icon: UserRound },
  { label: "Role", value: "Employee", icon: UserRound },
  { label: "Status", value: "Active", icon: CalendarDays },
];
const VISIBLE_EMPLOYEE_COUNT = 3;

const defaultEmployees = [
  {
    empId: 1,
    name: "Admin User",
    role: "Administrator",
    status: "Active",
    isAdmin: 1,
  },
  {
    empId: 2,
    name: "John Smith",
    role: "Developer",
    status: "Active",
    isAdmin: 0,
  },
  {
    empId: 3,
    name: "Mary Johnson",
    role: "Tester",
    status: "Active",
    isAdmin: 0,
  },
  {
    empId: 4,
    name: "David Brown",
    role: "HR Executive",
    status: "Active",
    isAdmin: 0,
  },
  {
    empId: 5,
    name: "Sarah Wilson",
    role: "Project Manager",
    status: "Active",
    isAdmin: 1,
  },
];

const formatLeaveDate = (dateValue) =>
  new Date(dateValue).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const formatLeaveRange = (fromDate, toDate) =>
  `${formatLeaveDate(fromDate)} to ${formatLeaveDate(toDate)}`;

const getSavedEmployees = () => {
  try {
    return JSON.parse(localStorage.getItem("employees")) || [];
  } catch {
    return [];
  }
};

const normalizeSavedEmployee = (employee) => ({
  empId: employee.empId,
  name: `${employee.firstName || ""} ${employee.lastName || ""}`.trim(),
  role: employee.designation || employee.department || "Employee",
  status: employee.status || "Active",
  isAdmin: 0,
});

const mergeEmployees = (savedEmployees) => {
  const employeeMap = new Map();

  defaultEmployees.forEach((employee) => {
    employeeMap.set(String(employee.empId), employee);
  });

  savedEmployees.map(normalizeSavedEmployee).forEach((employee) => {
    employeeMap.set(String(employee.empId), employee);
  });

  return Array.from(employeeMap.values());
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("dashboard");
  const [showAllEmployees, setShowAllEmployees] = useState(false);
  const [employees, setEmployees] = useState(() =>
    mergeEmployees(getSavedEmployees())
  );
  const empId = Number(localStorage.getItem("empId") || 0);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [leaveLoading, setLeaveLoading] = useState(true);
  const [leaveError, setLeaveError] = useState("");

  useEffect(() => {
    const refreshEmployees = () => {
      setEmployees(mergeEmployees(getSavedEmployees()));
    };

    refreshEmployees();
    window.addEventListener("focus", refreshEmployees);
    window.addEventListener("storage", refreshEmployees);

    return () => {
      window.removeEventListener("focus", refreshEmployees);
      window.removeEventListener("storage", refreshEmployees);
    };
  }, []);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      if (!empId) {
        setLeaveError("Employee not logged in");
        setLeaveLoading(false);
        return;
      }

      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/leave-requests"
        );

        setLeaveRequests(
          Array.isArray(data)
            ? data.filter((request) => Number(request.EmpID) === empId)
            : []
        );
      } catch (err) {
        console.error("Leave Requests Fetch Error:", err);
        setLeaveError("Unable to load leave requests");
      } finally {
        setLeaveLoading(false);
      }
    };

    fetchLeaveRequests();
  }, [empId]);

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

            <button
             onClick={() => {
              localStorage.removeItem("empId");
              localStorage.removeItem("isAdmin");
              navigate("/emp-portal");
            }}
             className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
            <LogOut className="h-4 w-4" />
              Logout
           </button>
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

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <p className="text-sm font-bold uppercase text-blue-700">
                  My Leave Requests
                </p>
                <h2 className="mt-2 font-syne text-2xl font-bold text-slate-950">
                 Leave Details
                </h2>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                {leaveRequests.length} request{leaveRequests.length === 1 ? "" : "s"}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {leaveLoading ? (
                <p className="text-sm text-slate-500">Loading leave requests…</p>
              ) : leaveError ? (
                <p className="text-sm text-rose-600">{leaveError}</p>
              ) : leaveRequests.length === 0 ? (
                <p className="text-sm text-slate-500">
                  No leave requests found. Apply for leave to see them here.
                </p>
              ) : (
                leaveRequests.map((leave) => (
                  <article
                    key={leave.LeaveID}
                    className="rounded-3xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          {leave.LeaveType}
                        </p>
                        <h3 className="mt-1 text-lg font-bold text-slate-950">
                          {formatLeaveRange(leave.FromDate, leave.ToDate)}
                        </h3>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          leave.Status === "Approved"
                            ? "bg-emerald-100 text-emerald-700"
                            : leave.Status === "Rejected"
                            ? "bg-rose-100 text-rose-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {leave.Status || "Pending"}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div>
                        <p className="text-xs uppercase text-slate-500">Days</p>
                        <p className="font-semibold text-slate-950">{leave.Days}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-slate-500">Applied</p>
                        <p className="font-semibold text-slate-950">
                          {leave.AppliedDate
                            ? new Date(leave.AppliedDate).toLocaleDateString()
                            : "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-slate-500">Reason</p>
                        <p className="font-semibold text-slate-950">
                          {leave.Reason || "Not provided"}
                        </p>
                      </div>
                    </div>
                  </article>
                ))
              )}
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="px-2 text-xs font-bold uppercase text-slate-400">
              Menu
            </p>
            <nav className="mt-3 space-y-2">
        
            <button
              onClick={() => {
               setActiveView("dashboard");
               setShowAllEmployees(false);
               }}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold ${
             activeView === "dashboard"
              ? "bg-blue-700 text-white"
             : "text-slate-600 hover:bg-slate-50"
             }`}
             >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </button>

             <button
              onClick={() => {
              setActiveView("employees");
               setShowAllEmployees(true);
               }}

               className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold ${
              activeView === "employees"
              ? "bg-blue-700 text-white"
              : "text-slate-600 hover:bg-slate-50"
             }`}
              >
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
              
              {
             (
              activeView === "employees"
                ? employees
                : showAllEmployees
                  ? employees
                  : employees.slice(0, VISIBLE_EMPLOYEE_COUNT)
               ).map((employee) => (
               <article
                  key={employee.empId}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                      <UserRound className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                     <div className="flex items-center gap-2">
                 <h3 className="truncate text-sm font-bold text-slate-950">
                   {employee.name}
                  </h3>

                    {employee.isAdmin === 1 && (
                  <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-700">
                    Admin
                  </span>
                     )}
                  </div>
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        EmpID: {employee.empId} · {employee.role}
                      </p>
                      <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600">
                        {employee.status}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
             {employees.length > VISIBLE_EMPLOYEE_COUNT && (
              <button
               onClick={() => {
                 setShowAllEmployees((current) => !current);
                 setActiveView("dashboard");
               }}
               className="mt-3 w-full rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100"
               >
              {showAllEmployees ? "Show Less" : "See More"}
             </button>
              )}
          </div>
        </aside>
      </section>
    </main>
  );
}
