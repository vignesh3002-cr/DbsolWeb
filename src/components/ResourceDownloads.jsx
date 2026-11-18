import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { ArrowDownToLine, BookOpenCheck, ClipboardCheck, Rocket } from "lucide-react";

const guides = [
  {
    title: "ERP Readiness Assessment Checklist",
    description:
      "Assess process ownership, data quality, integrations, reporting, and team readiness before starting an ERP project.",
    file: "/resources/erp-readiness-assessment-checklist.html",
    icon: <ClipboardCheck size={24} />,
  },
  {
    title: "AX 2012 Migration Guide",
    description:
      "Use a phased planning guide for discovery, customization review, data migration, testing, cutover, and support.",
    file: "/resources/ax-2012-migration-guide.html",
    icon: <Rocket size={24} />,
  },
  {
    title: "ERP User Acceptance Testing Checklist",
    description:
      "Prepare business scenarios and sign-off criteria for a structured ERP user acceptance testing cycle.",
    file: "/resources/erp-uat-checklist.html",
    icon: <BookOpenCheck size={24} />,
  },
];

export default function ResourceDownloads() {
  const form = useRef(null);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [status, setStatus] = useState("idle");

  const selectGuide = (guide) => {
    setSelectedGuide(guide);
    setStatus("idle");
  };

  const submitLead = (event) => {
    event.preventDefault();
    if (!selectedGuide || !form.current) {
      return;
    }

    setStatus("sending");
    emailjs
      .sendForm(
        "service_zakxdhu",
        "template_f8if95g",
        form.current,
        "WqsGjD4ltQ3Kgu4PA",
      )
      .then(
        () => setStatus("sent"),
        (error) => {
          console.error("Failed to submit resource request:", error);
          setStatus("error");
        },
      );
  };

  return (
    <section className="bg-white px-4 py-12 dark:bg-gray-950 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
            Free practical tools
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Downloadable ERP guides
          </h2>
          <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
            Share a few details to access a checklist or guide for your ERP
            planning.
          </p>
          <Link
            to="/blogs/"
            className="mt-3 inline-flex min-h-11 items-center font-semibold text-blue-700 hover:underline dark:text-blue-300"
          >
            Browse ERP articles <span className="ml-2" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.file}
              className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900 sm:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 dark:bg-gray-800 dark:text-blue-300">
                {guide.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                {guide.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {guide.description}
              </p>
              {selectedGuide?.file === guide.file && status === "sent" ? (
                <a
                  href={guide.file}
                  download
                  className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
                >
                  <ArrowDownToLine size={18} />
                  Download guide
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => selectGuide(guide)}
                  className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  aria-expanded={selectedGuide?.file === guide.file}
                  aria-controls="resource-lead-form"
                >
                  Get this guide
                </button>
              )}
            </article>
          ))}
        </div>

        {selectedGuide && status !== "sent" && (
          <form
            id="resource-lead-form"
            ref={form}
            onSubmit={submitLead}
            className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-gray-700 dark:bg-gray-900 sm:p-7"
          >
            <div className="mb-5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Get: {selectedGuide.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Enter your details and we’ll make the guide available to
                download.
              </p>
            </div>
            <input
              type="hidden"
              name="resource_name"
              value={selectedGuide.title}
              readOnly
            />
            <input
              type="hidden"
              name="message"
              value={`Resource download request: ${selectedGuide.title}`}
              readOnly
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                Full name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  className="min-h-12 rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-700"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                Work email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="min-h-12 rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-700"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-gray-800 dark:text-gray-100">
                Company
                <input
                  name="company"
                  autoComplete="organization"
                  className="min-h-12 rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:border-gray-700"
                />
              </label>
            </div>
            <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                name="consent"
                value="I agree to be contacted about this resource request"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-blue-700"
              />
              <span>
                I agree that DBSol may use these details to respond to my
                resource request. See the{" "}
                <Link to="/security-privacy/" className="underline">
                  Security & Privacy
                </Link>{" "}
                page.
              </span>
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Submitting…" : "Submit and get guide"}
              </button>
              <button
                type="button"
                onClick={() => setSelectedGuide(null)}
                className="inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 font-medium text-gray-700 hover:bg-white dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
            </div>
            {status === "error" && (
              <p role="alert" className="mt-4 text-sm font-medium text-red-700 dark:text-red-300">
                We couldn’t submit your request. Please try again or{" "}
                <Link to="/contact-us/" className="underline">
                  contact us
                </Link>
                .
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
