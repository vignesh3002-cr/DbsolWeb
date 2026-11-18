import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { d365Modules } from "../../data/d365Modules";
import Modules from "../../components/modules";

/* ------------------------------------------------------------------ */
/* SEO CONFIG – change SITE_URL to your real domain                    */
/* ------------------------------------------------------------------ */
const SITE_URL = "https://www.yourdomain.com";
const PAGE_PATH = "/dynamics-365-business-central"; // new clean URL (301 redirect the old /Dynamics365Business here)
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const SEO_TITLE = "Dynamics 365 Business Central Partner | DBSol";
const SEO_DESCRIPTION =
  "Dynamics 365 Business Central implementation, migration and support for growing businesses. Get expert ERP consulting from DBSol.";

/* ------------------------------------------------------------------ */
/* CONTENT DATA                                                        */
/* ------------------------------------------------------------------ */
const deliveryModules = d365Modules.filter((m) =>
  ["sales", "manufacturing", "project-operations"].includes(m.slug)
);

const implementationSteps = [
  { title: "Discovery", desc: "We study your processes, goals, and current systems." },
  { title: "Design", desc: "We map your requirements to Business Central features." },
  { title: "Configuration", desc: "We set up modules, workflows, and user roles." },
  { title: "Data Migration", desc: "We move data safely from your existing ERP or spreadsheets." },
  { title: "Training", desc: "We train your team so they can use the system confidently." },
  { title: "Go-Live & Support", desc: "We launch, monitor, and support you after go-live." },
];

const integrations = [
  { title: "Microsoft 365", desc: "Work with Excel, Outlook, Teams, and SharePoint directly from Business Central." },
  { title: "Power BI", desc: "Build live dashboards from your finance, sales, and inventory data." },
  { title: "Power Automate", desc: "Automate approvals, notifications, and repetitive tasks." },
  { title: "Third-party systems", desc: "Connect e-commerce, CRM, banking, and custom applications through APIs." },
];

const businessCentralCapabilities = [
  { title: "Financial management", desc: "Manage general ledger, payables, receivables, cash flow, budgets and financial reporting in one connected ERP solution." },
  { title: "Inventory and supply chain", desc: "Track inventory across locations, manage purchasing and replenishment, and improve visibility from order to delivery." },
  { title: "Sales and customer management", desc: "Manage customer accounts, quotes, sales orders and service activity alongside your financial and inventory data." },
  { title: "Projects and operations", desc: "Plan project work, monitor budgets and costs, and give teams a shared view of operational performance." },
];

const whyChoose = [
  "End-to-end implementation, from planning to go-live",
  "Focus on your industry processes, not just software setup",
  "Smooth migration and integration with your existing systems",
  "Ongoing support and optimization after launch",
];

const faqs = [
  {
    q: "How long does a Business Central implementation take?",
    a: "The timeline depends on your company size, number of modules, data migration, and customization needs. We confirm a clear schedule after the discovery phase.",
  },
  {
    q: "Can you migrate data from my current ERP or accounting software?",
    a: "Yes. We plan, clean, and migrate your master data and transactions from your existing system, then validate them with your team before go-live.",
  },
  {
    q: "Does Business Central integrate with Microsoft 365 and Power BI?",
    a: "Yes. Business Central works with Microsoft 365, Power BI, and Power Automate, and can connect to other systems through APIs.",
  },
  {
    q: "Do you provide support after go-live?",
    a: "Yes. We offer ongoing support, user training, and optimization so your system keeps up with your business.",
  },
  {
    q: "Is Business Central suitable for growing businesses?",
    a: "Yes. It supports multiple companies, currencies, and users, so it can scale as your business grows.",
  },
];

/* FAQ schema is generated from the same data, so page text and schema always match */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */
export default function BusinessCentral() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={CANONICAL_URL} />

        {/* FAQ rich results */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* HERO – the only H1 on the page */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
        <img
          src="/images/BusinessCentral.jpg"
          alt="Business team reviewing Microsoft Dynamics 365 Business Central"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
          <h1 className="mb-5 text-4xl font-bold">
            Microsoft Dynamics 365 Business Central Implementation & Consulting
          </h1>
          <p className="mx-auto max-w-3xl text-md leading-relaxed text-slate-200 md:text-md">
            DBSol Technologies helps growing businesses implement and optimise
            Microsoft Dynamics 365 Business Central. Our solutions support
            financial management, inventory control, purchasing, sales and
            business operations through a unified ERP platform. We help
            organisations streamline processes, improve visibility and make
            informed business decisions.
          </p>

          <nav aria-label="Breadcrumb" className="mt-6 text-slate-300">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">
              ➜
            </span>
            <span className="text-blue-400" aria-current="page">
              Business Central
            </span>
          </nav>
        </div>
      </section>

      {/* H2 #1 */}
      <section className="py-10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white md:text-3xl">
              What is Microsoft Dynamics 365 Business Central?
            </h2>
            <p className="mb-4 leading-relaxed md:text-md text-gray-600 dark:text-gray-300">
              Microsoft Dynamics 365 Business Central is a cloud-based ERP
              platform that brings finance, operations, sales, customer service,
              and supply chain into one system. It helps small and mid-sized
              businesses replace disconnected tools with a single source of
              truth. As a Business Central ERP solution, it gives growing
              organisations a practical foundation for managing everyday work.
            </p>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              With integrated financial management, inventory control, project
              management, and multi-company support, Business Central helps
              organisations scale efficiently and adapt to changing business
              needs.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
              If you are comparing Microsoft Business Central partners or
              looking for experienced Business Central consultants, DBSol can
              help assess requirements, plan delivery and provide ongoing
              Business Central support.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <img
              src="/images/BusinessCentral-1.jpg"
              alt="Microsoft Dynamics 365 Business Central dashboard overview"
              width="640"
              height="360"
              loading="lazy"
              className="h-[360px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-10 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-white">
              Business Central Modules and Functionality
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              Configure the Business Central modules your organisation needs,
              with connected information across finance, purchasing, inventory,
              sales and projects. Our Business Central consulting services help
              map these capabilities to your processes and priorities.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessCentralCapabilities.map((item) => (
              <article key={item.title} className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-900">
                <h3 className="mb-2 text-lg font-bold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related modules (heading is rendered inside <Modules />) */}
      <section className="bg-gray-50 py-8 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Modules modules={deliveryModules} showAllLink={false} />
        </div>
      </section>

      {/* H2 #3 */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800 md:p-10">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
                Our Business Central Implementation Services
              </h2>
              <p className="leading-8 text-gray-600 dark:text-gray-300">
                Our Dynamics 365 Business Central implementation process is
                planned around your workflows, data and team, so your people
                are prepared for go-live.
              </p>
            </div>

            <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {implementationSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900"
                >
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-gray-800 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
                </li>
              ))}
            </ol>

          </div>
        </div>
      </section>

      {/* H2 #4 */}
      <section className="bg-gray-100 py-10 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
              Business Central Migration and Integration
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Move from your existing ERP or accounting software without
              disrupting daily work, and connect Business Central to the tools
              your team already uses. Business Central migration includes
              data mapping, validation and a planned cutover with support for
              your users after launch.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {integrations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

       
        </div>
      </section>

      {/* H2 #5 */}
      <section className="py-10">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-white">
            Why Choose DBSol Technologies?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-gray-600 dark:text-gray-300">
            Our solutions are designed for real-world business needs, helping
            organisations streamline operations, improve efficiency, and enhance
            customer experiences with scalable, user-friendly systems.
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {whyChoose.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-xl bg-white p-5 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-300"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-100 py-10 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
            ERP Client Case Studies
          </h2>
          <p className="mx-auto mb-6 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">
            Explore how DBSol has helped organisations improve reporting,
            connect operational data and streamline ERP workflows across
            industries. See project context, solution approaches and outcomes
            in our client case studies.
          </p>
          <Link to="/case-studies/" className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Explore ERP Case Studies
          </Link>
        </div>
      </section>

      {/* H2 #6 */}
      <section className="bg-white py-10 dark:bg-gray-800">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-gray-200 p-5 dark:border-gray-700"
              >
                <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white">
                  {f.q}
                </summary>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 px-6 py-10 text-center text-white dark:bg-gray-800">
        <h2 className="mb-4 text-3xl font-bold">
          Talk to a Business Central Consultant
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-base text-blue-100">
          Tell us about your business and we will show you how Business Central
          can improve efficiency, visibility, and growth.
        </p>
        <Link
          to="/contact-us/"
          className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
        >
          Book a Free Consultation
        </Link>
      </section>

      <Footer />
    </div>
  );
}
