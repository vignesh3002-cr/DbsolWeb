import { useState } from "react";

const leaders = [
  {
    initials: "RN",
    name: "Remapriya Nanjappan",
    role: "Strategic Consultant",
    department: "Executive",
    deptColor: "bg-blue-100 text-blue-800 border-blue-200",
    avatarBg: "bg-blue-100",
    avatarText: "text-blue-800",
    ringColor: "ring-blue-200",
    image: "/images/rema-nanjappan.jpg",
    lines: [
      {
        icon: "🏆",
        text: "ERP Implementation & Digital Transformation Expert specializing in the design and deployment of global HR and Payroll solutions. Skilled in bridging the gap between technical infrastructure and business operations, transforming fragmented global units into streamlined digital ecosystems.",
      },
      {
        icon: "📈",
        text: " Former Digital Transformation Manager at Wipro with 16+ years of global experience, exclusively specialized in orchestrating cross-platform ecosystems—including PeopleSoft, Salesforce, and Power Platform—to unify global business units. Expert in leveraging GenAI (Copilot Studio) and high-integrity functional design to automate complex workflows for multi-national entities. Expert in synchronizing complex global business units into unified digital ecosystems. ",
      },

    ],
    linkedin: "#",
  },
  {
    initials: "MJ",
    name: "Maruthanayagam Jeyachandran",
    role: "Business Analyst",
    department: "Technology",
    deptColor: "bg-orange-100 text-orange-800 border-orange-200",
    avatarBg: "bg-purple-100",
    avatarText: "text-purple-800",
    ringColor: "ring-purple-200",
    image: "/images/maruthanayagam.jpg",
    lines: [
      {
        icon: "⚙️",
        text: "ERP Implementation & Supply Chain Transformation Expert delivering Microsoft Dynamics 365 solutions for warehouse, inventory, and production, focused on streamlining operations and scalable process improvement.",
      },
      {
        icon: "🔀",
        text: "Formerly developed across supply chain operations, SAP, and Microsoft Dynamics 365 environments, with 12+ years of experience in ERP implementation, rollout, support, and process optimization across manufacturing and warehouse functions. Skilled in functional design, warehouse management, business process mapping, UAT, training, and post-go-live support, delivering efficient, business-aligned solutions.",
      },

    ],
    linkedin: "#",
  },
  {
    initials: "AK",
    name: "Arun Kumar Babu",
    role: "D365 functional consultant",
    department: "Product",
    deptColor: "bg-purple-100 text-purple-800 border-purple-200",
    avatarBg: "bg-orange-100",
    avatarText: "text-orange-800",
    ringColor: "ring-orange-200",
    image: "/images/arunkumar.jpg",

    lines: [
      {
        icon: "🔭",
        text: "Results-driven D365 Finance & Operations Functional Consultant with strong expertise in Finance and Supply Chain Management modules, focused on process optimization and ERP solution delivery. Proven ability in requirement analysis, system configuration, user support, and delivering scalable business solutions aligned with organizational objectives. Passionate about leveraging technology to improve operational efficiency and support digital transformation initiatives.",
      },
      {
        icon: "💡",
        text: "Launched 3 flagship features that each added over $5M in annual recurring revenue.",
      },

    ],
    linkedin: "#",
  },
];

function HiringDot() {
  return (
    <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
    </span>
  );
}

function LeaderCard({ leader, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 overflow-hidden flex flex-col
        transition-all duration-300 ease-out
        ${hovered ? "shadow-xl -translate-y-1.5 border-gray-200" : "shadow-sm"}
      `}
      style={{ animationDelay: `${index * 120}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top section */}
      <div className="flex flex-col items-center text-center px-6 pt-8 pb-6 border-b border-gray-100">
        {/* Avatar */}
        <div className="relative mb-4">
          {leader.image ? (
            <img
              src={leader.image}
              alt={leader.name}
              className={`w-20 h-20 rounded-full object-cover object-top ring-4 ${leader.ringColor}`}
            />
          ) : (
            <div
              className={`
                w-20 h-20 rounded-full flex items-center justify-center
                text-2xl font-semibold ring-4 ${leader.avatarBg} ${leader.avatarText} ${leader.ringColor}
                font-serif tracking-tight
              `}
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {leader.initials}
            </div>
          )}
          <HiringDot />
        </div>

        {/* Name & Role */}
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 tracking-tight">
          {leader.name}
        </h3>
        <p className="text-xs text-gray-400 dark:text-gray-300 mb-4 font-medium uppercase tracking-widest">
          {leader.role}
        </p>
      </div>

      {/* Description lines */}
      <div className="flex-1 px-6 py-5 space-y-4">
        {leader.lines.map((line, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-base mt-0.5 flex-shrink-0">{line.icon}</span>
            <p className="text-xs text-gray-500 dark:text-gray-300 leading-relaxed text-justify">{line.text}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-300 flex items-center justify-between">
<span
  className={`text-xs px-3 py-1 rounded-full font-medium border ${leader.deptColor}`}
>
  {leader.department}
</span>
        
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-blue-900 dark:via-gray-800  dark:to-black-900 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Meet the leadership
          </span>

          <h2
            className="text-4xl font-normal text-gray-900 dark:text-white leading-tight mb-3 tracking-tight"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            The people behind our mission
          </h2>
          <p className="text-sm text-gray-400 dark:text-gray-300 max-w-md leading-relaxed">
            Experienced leaders driving growth — and actively growing their teams.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <LeaderCard key={leader.name} leader={leader} index={i} />
          ))}
        </div>


      </div>
    </section>
  );
}
