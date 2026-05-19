import { useState } from "react";

const leaders = [
  {
    initials: "RN",
    name: "Remapriya Nanjappan",
    role: "Strategic Consultant",
    department: "Executive", avatarBg: "bg-blue-100",
    avatarText: "text-blue-800",
    ringColor: "ring-blue-200",
    image: "/images/rema-nanjappan.jpg",
    lines: [
      {
        icon: "🏆",
        text: "ERP Implementation & Digital Transformation Expert in designing and deploying global HR and Payroll solutions with 16+ years of experience. I bridge the gap between technical infrastructure and business operations, transforming fragmented global units into streamlined digital ecosystems.",
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
    role: "Senior Functional Consultant",
    department: "Technology",
    avatarBg: "bg-purple-100",
    avatarText: "text-purple-800",
    ringColor: "ring-purple-200",
    image: "/images/maruthanayagam.jpg",
    lines: [
      {
        icon: "⚙️",
        text: "Expert in ERP implementation, warehouse management, production planning, inventory control, and business process improvement with 12+ years of experience.",
      },
      {
        icon: "🔀",
        text: "Former principal engineer at Infosys and Thoughtworks with expertise in distributed systems.",
      },

    ],
    linkedin: "#",
  },
  {
    initials: "AK",
    name: "Arun Kumar Babu",
    role: "D365 functional consultant",
    department: "Product",
    avatarBg: "bg-orange-100",
    avatarText: "text-orange-800",
    ringColor: "ring-orange-200",
    image: "/images/arunkumar.jpg",

    lines: [
      {
        icon: "🔭",
        text: "Expert in Finance and Supply Chain Management modules with 9+ years of experience, specializing in process optimization and ERP solution delivery.",
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
        bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col
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
        <h3 className="text-base font-semibold text-gray-900 mb-1 tracking-tight">
          {leader.name}
        </h3>
        <p className="text-xs text-gray-400 mb-4 font-medium uppercase tracking-widest">
          {leader.role}
        </p>
      </div>

      {/* Description lines */}
      <div className="flex-1 px-6 py-5 space-y-4">
        {leader.lines.map((line, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-base mt-0.5 flex-shrink-0">{line.icon}</span>
            <p className="text-xs text-gray-500 leading-relaxed">{line.text}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full font-medium">
          {leader.department}
        </span>
        <a
          href={leader.linkedin}
          className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-6 font-sans">
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
            className="text-4xl font-normal text-gray-900 leading-tight mb-3 tracking-tight"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            The people behind our mission
          </h2>
          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            Experienced leaders driving growth — and actively growing their teams.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, i) => (
            <LeaderCard key={leader.name} leader={leader} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100 pt-10">
          <div>
            <p className="text-sm font-semibold text-gray-800">
              We're expanding our leadership team
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              6 senior roles open across product, engineering, and finance.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors">
              View open roles →
            </button>
            <button className="border border-gray-200 hover:border-gray-300 text-gray-600 text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors">
              Our culture
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
