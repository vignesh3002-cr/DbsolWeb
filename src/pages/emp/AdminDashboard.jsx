import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  UserRound,
  UsersRound,
  UserPlus,
} from "lucide-react";

const statusStyles = {
  Active: "bg-green-50 text-green-700",
  "On Leave": "bg-amber-50 text-amber-700",
  Pending: "bg-amber-50 text-amber-700",
  Approved: "bg-green-50 text-green-700",
  Rejected: "bg-red-50 text-red-700",
};

const formatLeaveDate = (dateValue) => {
  if (!dateValue) return "";

  const text = String(dateValue);
  const isoDate = text.match(/^(\d{4})-(\d{2})-(\d{2})/);

  if (isoDate) {
    return `${isoDate[3]}-${isoDate[2]}-${isoDate[1]}`;
  }

  return text.split("T")[0];
};

const formatLeaveRange = (fromDate, toDate) =>
  `${formatLeaveDate(fromDate)} to ${formatLeaveDate(toDate)}`;

const formatLeaveType = (request) => {
  if (request.RequestType === "Work From Home") {
    return "WFH";
  }

  if (request.RequestType === "Leave") {
    return request.LeaveType || "Leave";
  }

  // Support older records without RequestType
  const reason = String(request.Reason || "").toLowerCase();

  if (
    reason.includes("work from home") ||
    reason.includes("wfh")
  ) {
    return "WFH";
  }

  return request.LeaveType || "Leave";
};
const VISIBLE_EMPLOYEE_COUNT = 3;

const getEmployeeId = (employee) =>
  employee.EmpId ?? employee.EmpID ?? employee.empId;

const normalizeApiEmployee = (employee) => ({
  EmpId: getEmployeeId(employee),
  Name: employee.Name,
  Email: employee.Email,
  Role: employee.Role,
  Status: employee.Status || "Active",
  IsAdmin: employee.IsAdmin || 0,
});

const normalizeSavedEmployee = (employee) => ({
  EmpId: employee.empId,
  Name: `${employee.firstName || ""} ${employee.lastName || ""}`.trim(),
  Email: employee.email,
  Role: employee.designation || employee.department || "Employee",
  Status: employee.status || "Active",
  IsAdmin: 0,
});

const getSavedEmployees = () => {
  try {
    return JSON.parse(localStorage.getItem("employees")) || [];
  } catch {
    return [];
  }
};

const mergeEmployees = (apiEmployees, savedEmployees) => {
  const employeeMap = new Map();

  apiEmployees.map(normalizeApiEmployee).forEach((employee) => {
    employeeMap.set(String(employee.EmpId), employee);
  });

  savedEmployees.map(normalizeSavedEmployee).forEach((employee) => {
    employeeMap.set(String(employee.EmpId), employee);
  });

  return Array.from(employeeMap.values());
};

export default function AdminDashboard() {

    const [employees, setEmployees] = useState([]);
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [activeView, setActiveView] = useState("dashboard");
    const [showAll, setShowAll] = useState(false);

    const fetchLeaveRequests = () => {
      axios.get("http://localhost:5000/api/leave-requests")
    .then((res) => {
    console.log("First Record:", res.data[0]);
    console.log("All Records:", res.data); // ✅ DEBUG
      setLeaveRequests(res.data);
    })
    .catch((err) => console.log(err));
    };
    useEffect(() => {
    const savedEmployees = getSavedEmployees();

    axios
    .get("http://localhost:5000/api/employees")
    .then((res) => {
      console.log("EMPLOYEES DATA:", res.data);
      setEmployees(mergeEmployees(res.data, savedEmployees));
    })
    .catch((err) => {
      console.log(err);
      setEmployees(mergeEmployees([], savedEmployees));
    });
  }, []);
  
useEffect(() => {
  fetchLeaveRequests();
}, []);

 const stats = useMemo(() => {
    const pendingLeaves = leaveRequests.filter(
      (request) => request.Status === "Pending"
    ).length;
    const approvedLeaves = leaveRequests.filter(
      (request) => request.Status === "Approved"
    ).length;
    const activeEmployees = employees.filter(
      (employee) => employee.Status === "Active"
    ).length;
   
  
    return [
      { label: "Total Employees", value: employees.length, icon: UsersRound },
      { label: "Active Employees", value: activeEmployees, icon: UserRound },
      { label: "Pending Leaves", value: pendingLeaves, icon: CalendarDays },
      { label: "Approved Leaves", value: approvedLeaves, icon: CalendarCheck },
    ];
  }, [employees,leaveRequests]);

 const updateLeaveStatus = (requestLeaveID, status) => {
  setLeaveRequests((requests) =>
    requests.map((request) =>
      request.LeaveID === requestLeaveID   // ✅ Use LeaveID consistently
        ? { ...request, Status: status }
        : request
    )
  );
};

const displayedEmployees = showAll
  ? employees
  : employees.slice(0, VISIBLE_EMPLOYEE_COUNT);

 const saveLeaveStatus = async (requestLeaveID, status) => {
  try {
    await axios.patch(
      `http://localhost:5000/api/leave-requests/${requestLeaveID}/status`,
      { status }
    );

    updateLeaveStatus(requestLeaveID, status);
  } catch (err) {
    console.log(err);
    alert("Unable to update leave status");
  }
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
                  Leave Request
                </h2>
              </div>
              <span className="w-fit rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-500">
                {leaveRequests.length} request
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
                    <tr key={request.LeaveID} className="bg-slate-50">
                      <td className="rounded-l-2xl px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                            <UserRound className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-slate-950">
                              {request.Name}
                            </p>
                            <p className="mt-1 text-xs font-semibold text-slate-500">
                              {request.EmpId}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-slate-600">
                        {formatLeaveType(request)}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold text-slate-600">
                       {formatLeaveRange(request.FromDate, request.ToDate)}
                      </td>
                      <td className="px-4 py-4 text-center text-sm font-semibold text-slate-600">
                        {request.Days}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex min-w-20 justify-center rounded-full px-3 py-1 text-xs font-bold ${
                            statusStyles[request.Status]
                          }`}
                        >
                          {request.Status}
                        </span>
                      </td>
                      <td className="rounded-r-2xl px-4 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              saveLeaveStatus(request.LeaveID, "Approved")
                            }
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-700 transition hover:bg-green-100"
                            aria-label="Approve request"
                          >
                            <CheckCircle2 className="h-5 w-5" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              saveLeaveStatus(request.LeaveID, "Rejected")
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
            
          <button
           onClick={() => {
              setActiveView("dashboard");
             setShowAll(false);
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
           onClick={() => setActiveView("leave")}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold ${
            activeView === "leave"
             ? "bg-blue-700 text-white"
               : "text-slate-600 hover:bg-slate-50"
             }`}
           >
             <ClipboardList className="h-5 w-5" />
            LeaveRequest
            </button>



            <button
              onClick={() => {
              setActiveView("employees");
                 setShowAll(true);
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


            <Link
             to="/employee-master"
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold text-slate-600"
           >
            <UserPlus className="h-5 w-5" />
             Employee Master
             </Link>
      
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
             
             {employees.length === 0 ? (
             <p className="text-sm text-gray-500">No employees found</p>
             ) : (
            displayedEmployees.map((employee) => (
               <article
                  key={employee.EmpId}
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
                        {employee.Name}
                         </h3>

                        {employee.IsAdmin === 1 && (
                         <span className="inline-block mt-1 rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-700">
                          Admin
                         </span>
                          )}

                        <p className="mt-1 text-xs font-semibold text-slate-500">
                         EmpID: {employee.EmpId} | {employee.Role}
                        </p>

                          <p className="text-xs text-slate-500">
                            {employee.Email}
                          </p>
                      </div>
                        <span
                          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                            statusStyles[employee.Status]
                          }`}
                        >
                          {employee.Status}
                        </span>
                      </div>
                     
                    </div>
                  </div>
                </article>
              ))
            )}
            </div>
            
             {employees.length > VISIBLE_EMPLOYEE_COUNT && !showAll && (
              <button
               onClick={() => {
               setShowAll(true);
               setActiveView("employees");
                }}
               className="mt-4 w-full rounded-xl bg-blue-600 py-2 text-white font-semibold"
              >
             See More
             </button>
                )}

             {employees.length > VISIBLE_EMPLOYEE_COUNT && showAll && (
            <button
               onClick={() => {
               setShowAll(false);
               setActiveView("dashboard");
                  }}
              className="mt-4 w-full rounded-xl bg-gray-600 py-2 text-white font-semibold"
             >
               Show Less
            </button>
            )}

          </section>
        </aside>
      </section>
    </main>
  );
}
