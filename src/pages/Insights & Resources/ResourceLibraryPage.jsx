import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResourceDownloads from "../../components/ResourceDownloads";
import ERPImplementationProcess from "../../components/ERP";

export default function ResourceLibraryPage() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-500 dark:bg-black">
      <Navbar />
      <div>
        <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden px-4 py-16 sm:min-h-[400px] lg:min-h-[420px]">
          <img
            src="/images/Knowledge&Resourses.jpg"
            alt="Knowledge & Resources"
            className="absolute inset-0 h-full w-full object-cover"
          />
             <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 max-w-3xl text-center text-white">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl">
              Knowledge & Resources
            </h1>
         
           <p className="mt-6 text-sm text-gray-200">
              <Link className="hover:text-blue-600" to="/">
                Home
              </Link>{" "}
              ➜ <span className="text-blue-600">Knowledge & Resources</span>
            </p>
          </div>
        </section>

        <ERPImplementationProcess />
        <div id="resources">
          <ResourceDownloads />
        </div>
        <section className="bg-gray-50 px-4 py-12 dark:bg-gray-900 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              ERP implementation FAQs
            </h2>
            <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-5 dark:divide-gray-700 dark:border-gray-800 dark:bg-gray-950 sm:px-7">
              <details className="py-5">
                <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                  How long does an ERP implementation take?
                </summary>
                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                  Timing depends on scope, process complexity, data readiness,
                  integrations, and how quickly decisions and testing can be
                  completed. A discovery phase helps build a realistic,
                  milestone-based plan.
                </p>
              </details>
              <details className="py-5">
                <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                  What should we plan for when migrating from AX 2012?
                </summary>
                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                  Assess customizations, integrations, data quality, historical
                  data requirements, security, testing, cutover, and user
                  training before committing to a migration approach.
                </p>
              </details>
              <details className="py-5">
                <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                  How are ERP integrations and testing handled?
                </summary>
                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                  Inventory each integration and its owner, define expected
                  data flows and exception handling, then validate end-to-end
                  business scenarios with representative users.
                </p>
              </details>
              <details className="py-5">
                <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                  What affects Dynamics 365 licensing costs?
                </summary>
                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                  Licensing depends on the selected applications, user roles,
                  and Microsoft's current licensing terms. Confirm requirements
                  and pricing with Microsoft or an authorized licensing
                  provider.
                </p>
              </details>
              <details className="py-5">
                <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                  What support is needed after go-live?
                </summary>
                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                  Plan support ownership, issue triage, user assistance,
                  release management, monitoring, and a stabilization period
                  that reflects the solution's operational needs.
                </p>
              </details>
            </div>
            <Link
              to="/blogs/"
              className="mt-7 inline-flex min-h-11 items-center font-semibold text-blue-700 hover:underline dark:text-blue-300"
            >
              Read all ERP articles <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}