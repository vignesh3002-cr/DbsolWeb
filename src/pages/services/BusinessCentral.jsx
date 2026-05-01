import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Integration from "../../components/IntegrationSteps"
import { d365Modules } from "../../data/d365Modules";
import Modules from "../../components/modules";
import {
  FaArrowRight,
  FaIndustry,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

const connectedModules = [
  {
    title: "Sales",
    tagline: "Close more deals with intelligent selling",
    desc: "Lead and opportunity management, quotes, orders, customer relationships, and sales analytics.",
    icon: <FaUsers />,
    iconClass: "bg-violet-100 text-violet-600",
    href: "/module/sales",
    tags: ["Leads", "Opportunities", "Quotes", "Sales Orders"],
  },
  {
    title: "Manufacturing",
    tagline: "Modernize the shop floor with connected operations",
    desc: "Production control, BOM management, shop floor tracking, routes, and quality control.",
    icon: <FaIndustry />,
    iconClass: "bg-orange-100 text-orange-600",
    href: "/module/manufacturing",
    tags: ["Production Orders", "BOM Management", "Shop Floor", "Quality Control"],
  },
  {
    title: "Project Operations",
    tagline: "Plan and deliver projects with better control",
    desc: "Project planning, resource scheduling, job costing, milestones, billing, and profitability tracking.",
    icon: <FaProjectDiagram />,
    iconClass: "bg-emerald-100 text-emerald-600",
    href: "/module/project-operations",
    tags: ["Project Planning", "Resources", "Job Costing", "Billing"],
  },
];
const deliveryModules = d365Modules.filter((m) =>
  ["sales", "manufacturing", "project-operations"]
    .includes(m.slug)
);
const businessCentralFramework = [
  "Connect finance, sales, purchasing, inventory, and service data in one ERP system.",
  "Reduce manual work with approval flows, alerts, and repeatable operating processes.",
  "Give teams real-time visibility into cash flow, orders, stock, projects, and service requests.",
  "Improve customer response time with connected quotes, invoices, cases, and account history.",
  "Use Power BI, Microsoft 365, and Power Platform integrations to extend daily workflows.",
  "Support growth with scalable cloud access, controlled permissions, and cleaner reporting.",
];

export default function BusinessCentral() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
        <img
          src="/images/BusinessCentral.jpg"
          alt="Business Central "
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
         
          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
             Business Central
          </h1>
           <p className="mt-6 text-slate-300">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
            <span className="mx-2">➜</span>
            <span className="text-blue-400">Business Central </span>
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
           
            <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
            Build Powerful Web Experiences with Business Central
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
               Microsoft Dynamics 365 Business Central is a cloud-based ERP solution that connects finance, sales, service, and operations. Extend its capabilities with modern web applications like customer portals, product catalogs, service requests, and
               real-time dashboards—all aligned with your business data.
            </p>
                
            </div>

          <div className="rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <img
              src="/images/BusinessCentral-1.jpg"
              alt="Microsoft Dynamics 365"
              className="h-[360px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-4 bg-white pt-4 pb-16 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
              Business Central Framework
            </h2>
            
          </div>

        <ul className="mx-auto grid max-w-5xl gap-x-10 gap-y-5 text-gray-700 dark:text-gray-300 md:grid-cols-2">
            {businessCentralFramework.map((point) => (
              <li key={point} className="flex gap-4 text-base leading-7">
                <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
       
             <section className="bg-gray-50 py-16 dark:bg-gray-900">
               <div className="mx-auto max-w-7xl px-6 text-center">
                 <Modules modules={deliveryModules} showAllLink={false} />
               </div>
             </section>
      
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
                  Business Central Delivery Model
                </h2>
                <p className="leading-8 text-gray-600 dark:text-gray-300">
                  We begin by understanding the business goal, then shape the
                  Business Central integration, design the user experience, build
                  the React interface, and prepare the solution for launch. The
                  result is a practical web experience that supports real work,
                  live ERP data, and day-to-day team decisions.
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-7 text-white">
                <h3 className="mb-4 text-2xl font-bold">Business Impact</h3>
                <p className="leading-8 text-slate-200">
                  Teams get faster access to information, customers receive
                  smoother self-service, sales and support teams work with better
                  context, and leadership gains clearer visibility into key
                  operations.
                </p>

                <div className="mt-8 h-2 rounded-full bg-slate-700">
                  <div className="h-2 w-full rounded-full bg-blue-500" />
                </div>
                <div className="mt-4 flex flex-wrap justify-between gap-3 text-sm font-semibold text-blue-100">
                  <span>Discover</span>
                  <span>Design</span>
                  <span>Build</span>
                  <span>Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
              Built for real teams
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              The page can be used as a landing page for Business Central website work,
              a product page for ERP-connected web applications, or a service page that
              explains how your digital front end fits into the Dynamics 365 ecosystem.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
              Common page modules
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>Hero section with CTA</li>
              <li>Business Central integration overview</li>
              <li>Feature grid and workflow steps</li>
              <li>Outcomes and benefits section</li>
              <li>Contact call to action</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-16 text-center text-white dark:bg-gray-800">
        <h2 className="mb-4 text-3xl font-bold">
         Start Your Business Central Web Journey
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-blue-100">
         Create a modern web experience that connects directly to your Business Central data—improving efficiency, visibility, and customer engagement.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </section>

      <Footer />
    </div>
  );
}
