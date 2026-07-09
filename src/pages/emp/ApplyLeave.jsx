import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

export default function ApplyLeave() {
  const [requestType, setRequestType] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  
  const empId = localStorage.getItem("empId"); // ✅ from login

const applyLeave = () => {
  if (!empId) {
    alert("Employee not logged in");
    return;
  }

  if (!requestType) {
  alert("Please select request type");
  return;
}

if (requestType === "Leave" && !leaveType) {
  alert("Please select leave type");
  return;
}

  if (new Date(toDate) < new Date(fromDate)) {
    alert("To Date cannot be earlier than From Date");
    return;
  }

  const days =
    Math.floor(
      (new Date(toDate) - new Date(fromDate)) /
      (1000 * 60 * 60 * 24)
    ) + 1;

   axios.post("http://localhost:5000/api/apply-leave", {
  empId: Number(empId),
  requestType,
  leaveType: requestType === "Leave" ? leaveType : null,
  fromDate,
  toDate,
  days,
  reason,
})
    .then((res) => {
      alert(res.data.message || "Leave applied successfully");

    setRequestType("");
setLeaveType("");
setFromDate("");
setToDate("");
setReason("");
    })
    .catch((err) => {
      console.error("Full error:", err);

      if (err.response) {
        console.log("Server error:", err.response.data);
        alert(err.response.data.message || JSON.stringify(err.response.data));
      } else {
        alert("Cannot connect to server.");
      }
    });
};

 
const handleSubmit = (event) => {
  event.preventDefault();
  applyLeave();
};

return (
    <main className="min-h-screen bg-[#f4f7fb] font-jakarta text-slate-900">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white">
              <CalendarDays className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-blue-700">
                EMP Portal
              </p>
              <h1 className="font-syne text-2xl font-bold text-slate-950">
                Apply Leave
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-blue-200 hover:text-blue-700"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              to="/emp-portal"
              className="hidden items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 sm:inline-flex"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-6 py-7 sm:px-8">
              <Link
                to="/dashboard"
                className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-100 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to dashboard
              </Link>
              <p className="text-sm font-semibold uppercase text-blue-100">
                Leave Request
              </p>
              <h2 className="mt-3 font-syne text-3xl font-bold sm:text-4xl">
                Submit Your Leave Request
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">
                Add your leave dates and reason. Your request will be ready for
                HR review after submission.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <ClipboardList className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase text-blue-700">
                  Request Details
                </p>
                <h3 className="mt-1 font-syne text-2xl font-bold text-slate-950">
                  Leave Information
                </h3>
              </div>
            </div>

            <div className="space-y-5">
          <div>
  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Request Type
  </label>

  <select
    value={requestType}
    onChange={(e) => {
      setRequestType(e.target.value);
      setLeaveType("");
    }}
    required
    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5"
  >
    <option value="">Select Request Type</option>
    <option value="Leave">Leave</option>
    <option value="Work From Home">Work From Home</option>
  </select>
</div>
{requestType === "Leave" && (
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      Leave Type
    </label>

    <select
      value={leaveType}
      onChange={(e) => setLeaveType(e.target.value)}
      required
      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
    >
      <option value="">Select Leave Type</option>
      <option value="Casual Leave">Casual Leave</option>
      <option value="Sick Leave">Sick Leave</option>
      <option value="Earned Leave">Earned Leave</option>
    </select>
  </div>
)}

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fromDate"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    From Date
                  </label>
                  <input
                   id="fromDate"
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-medium outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="toDate"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    To Date
                  </label>
                  <input
                     id="toDate"
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-medium outline-none transition focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Reason
                </label>
                <textarea
                  id="reason"
                  rows="5"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                  placeholder="Enter leave reason"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {submitted && (
                <p className="flex items-center gap-2 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  Leave request submitted successfully.
                </p>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 transition hover:border-blue-200 hover:text-blue-700"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  Submit 
                  <CalendarCheck className="h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
