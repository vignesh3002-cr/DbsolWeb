import { useState } from "react";
import { Link } from "react-router-dom";

export default function ApplyLeave() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12">
      <section className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg">
        <Link to="/dashboard" className="mb-6 inline-block text-sm font-medium text-blue-600">
          Back to dashboard
        </Link>

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Leave Request
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Apply Leave</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="fromDate" className="mb-2 block text-sm font-medium text-slate-700">
                From Date
              </label>
              <input
                id="fromDate"
                type="date"
                required
                className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label htmlFor="toDate" className="mb-2 block text-sm font-medium text-slate-700">
                To Date
              </label>
              <input
                id="toDate"
                type="date"
                required
                className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="mb-2 block text-sm font-medium text-slate-700">
              Reason
            </label>
            <textarea
              id="reason"
              rows="5"
              required
              placeholder="Enter leave reason"
              className="w-full resize-none rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {submitted && (
            <p className="rounded-md bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              Leave request submitted successfully.
            </p>
          )}

          <button
            type="submit"
            className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Submit Leave
          </button>
        </form>
      </section>
    </main>
  );
}
