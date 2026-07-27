import {
  Cloud,
  Network,
  Rocket,
  Bot,
  Handshake,
  Factory,
} from "lucide-react";

const FEATURES = [
  {
    icon: Network,
    title: "Dynamics 365 F&O",
    description:
      "Finance, Supply Chain, Procurement, Inventory and ERP transformation solutions.",
    wheelClassName: "left-1/2 top-2 -translate-x-1/2 z-10",
  },
  {
    icon: Rocket,
    title: "Finance Transformation",
    description:
      "Modernize financial operations, reporting, budgeting and business processes.",
    wheelClassName: "right-40 top-24 z-10",
  },
  {
    icon: Bot,
    title: "Power Platform",
    description:
      "Power Apps, Power Automate, Power BI and intelligent workflow automation.",
    wheelClassName: "right-40 bottom-24 z-10",
  },
  {
    icon: Handshake,
    title: "Enterprise Integrations",
    description:
      "Integrate Dynamics 365 with Salesforce, SAP, eCommerce platforms and third-party systems.",
    wheelClassName: "left-1/2 -bottom-6 -translate-x-1/2 z-10",
  },
  {
    icon: Factory,
    title: "Warehouse & Retail",
    description:
      "Warehouse Management, Retail Operations, Inventory Visibility and Logistics Solutions.",
    wheelClassName: "left-40 bottom-24 z-10",
  },
  {
    icon: Cloud,
    title: "Azure & Cloud Services",
    description:
      "Cloud migration, infrastructure management, security and scalable business solutions.",
    wheelClassName: "left-40 top-24 z-10",
  },
];

export default function WhyDbsol() {
  return (
    <section className="bg-slate-50 dark:bg-gray-900 py-6 overflow-visible">

      {/* Badge */}
      <div className="flex justify-center -mt-2">
        <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
          Microsoft Dynamics 365 Specialists
        </span>
      </div>

      {/* Heading */}
      <div className="text-center mb-4">

        <h2 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-bold mb-2">
          Why Choose DBSOL
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          Helping Retail, Manufacturing and Distribution businesses transform
          Finance, Supply Chain and Warehouse Operations through Microsoft
          Dynamics 365, Power Platform, Azure Cloud Services and Enterprise
          Integrations.
        </p>

      </div>

      {/* Wheel Section — desktop / large screens only */}
      <div className="relative h-[560px] hidden lg:block">

        {/* Center Circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center shadow-2xl">

            <h3 className="text-2xl font-bold">
              DBSOL
            </h3>

            <p className="text-center mt-2 text-sm text-blue-100 font-medium leading-snug">
              Dynamics 365
              <br />
              Finance & Operations
              <br />
              Experts
            </p>

          </div>
        </div>

        {/* CONNECTION LINES */}
        <svg
          className="absolute inset-0 w-full h-full z-0"
          viewBox="0 0 1000 650"
          preserveAspectRatio="none"
        >
          <line x1="500" y1="325" x2="500" y2="100" stroke="#2563eb" strokeOpacity="0.4" strokeWidth="3" />
          <line x1="500" y1="325" x2="820" y2="200" stroke="#2563eb" strokeOpacity="0.4" strokeWidth="3" />
          <line x1="500" y1="325" x2="820" y2="470" stroke="#2563eb" strokeOpacity="0.4" strokeWidth="3" />
          <line x1="500" y1="325" x2="500" y2="560" stroke="#2563eb" strokeOpacity="0.4" strokeWidth="3" />
          <line x1="500" y1="325" x2="180" y2="470" stroke="#2563eb" strokeOpacity="0.4" strokeWidth="3" />
          <line x1="500" y1="325" x2="180" y2="200" stroke="#2563eb" strokeOpacity="0.4" strokeWidth="3" />
        </svg>

        {/* NODES */}
        {FEATURES.map((feature) => (
          <Node
            key={feature.title}
            className={feature.wheelClassName}
            icon={<feature.icon size={26} />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      {/* Feature Grid — tablet / mobile fallback (wheel is desktop-only) */}
      <div className="grid grid-cols-1 gap-6 px-6 max-w-4xl mx-auto sm:grid-cols-2 lg:hidden">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                <Icon size={26} />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-800 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

function Node({ icon, title, description, className }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="group flex flex-col items-center relative">

        <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>

        <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white text-center max-w-[140px]">
          {title}
        </h4>

        {/* Tooltip */}
        <div
          className="
            absolute
            top-full
            mt-3
            w-64
            rounded-xl
            bg-white
            dark:bg-gray-800
            p-4
            shadow-2xl
            border
            border-gray-100
            dark:border-gray-700
            opacity-0
            invisible
            group-hover:opacity-100
            group-hover:visible
            transition-all
            duration-300
            z-50
          "
        >
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}
