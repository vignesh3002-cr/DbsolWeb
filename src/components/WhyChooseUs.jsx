import { useEffect, useRef, useState } from "react";
import { Cloud, Network, Rocket, Bot, Handshake, Factory, ArrowUpRight } from "lucide-react";


const FEATURES = [
  {
    icon: Network,
    title: "Dynamics 365 F&O",
    description: "Finance, Supply Chain, Procurement, Inventory and ERP transformation solutions.",
    color: "#2563eb",
  },
  {
    icon: Rocket,
    title: "Finance Transformation",
    description: "Modernize financial operations, reporting, budgeting and business processes.",
    color: "#4f46e5",
  },
  {
    icon: Bot,
    title: "Power Platform",
    description: "Power Apps, Power Automate, Power BI and intelligent workflow automation.",
    color: "#7c3aed",
  },
  {
    icon: Handshake,
    title: "Enterprise Integrations",
    description: "Integrate Dynamics 365 with Salesforce, SAP, eCommerce platforms and third-party systems.",
    color: "#9333ea",
  },
  {
    icon: Factory,
    title: "Warehouse & Retail",
    description: "Warehouse Management, Retail Operations, Inventory Visibility and Logistics Solutions.",
    color: "#0d9488",
  },
  {
    icon: Cloud,
    title: "Azure & Cloud Services",
    description: "Cloud migration, infrastructure management, security and scalable business solutions.",
    color: "#0284c7",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVis(true), { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function FeatureRow({ feature, index, isLast }) {
  const [ref, visible] = useInView(0.25);
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className="relative flex gap-6 pb-10 group last:pb-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 80}ms`,
      }}
    >
      {/* Connecting line + node */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="flex items-center justify-center transition-transform duration-300 rounded-full w-14 h-14 group-hover:scale-110"
          style={{ background: `${feature.color}14`, border: `1.5px solid ${feature.color}40`, color: feature.color }}
        >
          <Icon size={24} />
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: "linear-gradient(to bottom, currentColor, transparent)", color: `${feature.color}50`, minHeight: "40px" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pt-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest" style={{ color: feature.color }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-1 mb-2 text-lg font-bold text-gray-900 dark:text-white">{feature.title}</h4>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-md">{feature.description}</p>
          </div>
          <ArrowUpRight
            className="transition-transform duration-300 shrink-0 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1"
            size={20}
            style={{ color: feature.color }}
          />
        </div>
      </div>
    </div>
  );
}

export default function WhyDbsol() {
  const [headerRef, headerVisible] = useInView(0.3);
  const [bannerRef, bannerVisible] = useInView(0.2);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:py-24">
      {/* Decorative glow blobs */}
      <div className="absolute rounded-full pointer-events-none -left-24 -top-32 h-96 w-96 bg-blue-400/20 blur-3xl dark:bg-blue-600/10" />
      <div className="absolute rounded-full pointer-events-none -right-24 top-1/2 h-96 w-96 -translate-y-1/2 bg-purple-400/20 blur-3xl dark:bg-purple-600/10" />
      <div className="absolute rounded-full pointer-events-none -bottom-32 left-1/3 h-80 w-80 bg-teal-400/10 blur-3xl dark:bg-teal-600/10" />

      <div className="relative max-w-6xl px-6 mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="max-w-3xl mx-auto mb-14 text-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="inline-block px-5 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900/40 dark:text-blue-300">
            Microsoft Dynamics 365 Specialists
          </span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Why Choose{" "}
            <span className="text-3xl font-bold text-gray-900 dark:text-white bg-clip-text">
              DBSOL
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Helping Retail, Manufacturing and Distribution businesses transform Finance, Supply Chain and Warehouse
            Operations through Microsoft Dynamics 365, Power Platform, Azure Cloud Services and Enterprise
            Integrations.
          </p>
        </div>

        {/* Identity Banner */}
        <div
          ref={bannerRef}
          className="relative p-8 mb-16 overflow-hidden shadow-2xl rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 shadow-blue-900/30 sm:p-10"
          style={{
            opacity: bannerVisible ? 1 : 0,
            transform: bannerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute rounded-full pointer-events-none -right-10 -top-10 h-56 w-56 bg-white/10 blur-2xl" />
          <div className="absolute rounded-full pointer-events-none -bottom-16 left-10 h-48 w-48 bg-white/10 blur-2xl" />

          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">DBSOL</h3>
              <p className="max-w-md mt-2 text-sm font-medium leading-relaxed text-blue-100 sm:text-base">
                Dynamics 365 Finance &amp; Operations Experts — one partner for every pillar of your enterprise
                transformation.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center justify-center w-12 h-12 text-white rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm"
                  title={feature.title}
                >
                  <feature.icon size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Timeline — replaces the boxed grid */}
        <div className="grid gap-x-16 md:grid-cols-2">
          <div>
            {FEATURES.slice(0, 3).map((feature, i) => (
              <FeatureRow key={feature.title} feature={feature} index={i} isLast={i === 2} />
            ))}
          </div>
          <div>
            {FEATURES.slice(3, 6).map((feature, i) => (
              <FeatureRow key={feature.title} feature={feature} index={i + 3} isLast={i === 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}