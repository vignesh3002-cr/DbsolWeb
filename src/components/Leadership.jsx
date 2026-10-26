import { useState } from "react";
import {
  FaChessQueen,
  FaProjectDiagram,
  FaCogs,
  FaChartLine,
  FaTasks,
  FaLightbulb,
} from "react-icons/fa";
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
        icon:  FaChessQueen,
        text: "ERP Implementation & Digital Transformation Expert specializing in the design and deployment of global HR and Payroll solutions. Skilled in bridging the gap between technical infrastructure and business operations, transforming fragmented global units into streamlined digital ecosystems.",
      },
      {
        icon: FaProjectDiagram,
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
        icon: FaCogs,
        text: "ERP Implementation & Supply Chain Transformation Expert delivering Microsoft Dynamics 365 solutions for warehouse, inventory, and production, focused on streamlining operations and scalable process improvement.",
      },
      {
        icon: FaChartLine,
        text: "Formerly developed across supply chain operations, SAP, and Microsoft Dynamics 365 environments, with 12+ years of experience in ERP implementation, rollout, support, and process optimization across manufacturing and warehouse functions. Skilled in functional design, warehouse management, business process mapping, UAT, training, and post-go-live support, delivering efficient, business-aligned solutions.",
      },

    ],
    linkedin: "#",
  },
  {
    initials: "AP",
    name: "Aravind Periyanayagam",
    role: "Technology & Digital Transformation Leader",
    department: "Product",
    deptColor: "bg-purple-100 text-purple-800 border-purple-200",
    avatarBg: "bg-orange-100",
    avatarText: "text-orange-800",
    ringColor: "ring-orange-200",
    image: "/images/Aravind.png",

    lines: [
      {
        icon: FaTasks,
        text: "With over 18 years of experience in enterprise IT and digital transformation, he brings a strong combination of technology expertise, project leadership, and business acumen. His experience spans Microsoft Dynamics 365, ERP, Identity and Access Management (IAM), Microsoft Entra ID, Active Directory, SailPoint, IT Infrastructure, and Service Delivery.",
      },
      {
        icon: FaLightbulb,
        text: "Formerly involved in leading enterprise IT and digital transformation initiatives,he specializes in understanding business challenges, translating them into effective technology solutions, and leading teams through implementation, integration, support, and continuous improvement. His focus is on delivering scalable, secure, efficient, and business-driven solutions that create measurable value for organizations.",
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
        bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700overflow-hidden flex flex-col
        transition-all duration-300 
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

        {/* Founder Message */}
<div className="mb-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
  <div className="max-w-4xl">
<span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Founding Team
          </span>


    <h3
      className="text-3xl font-normal text-gray-900 dark:text-white mb-2"
      style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
    >
      DBSol Technologies
    </h3>

    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
      A technology professional and entrepreneur with a strong vision for
      helping organizations leverage technology to simplify business operations
      and accelerate digital transformation. As the Founder of DBSol
      Technologies, he drives the company’s strategic direction, focusing on
      delivering practical, scalable, and business-focused technology
      solutions.
    </p>

    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
      With extensive experience across Microsoft Dynamics 365, ERP solutions,
      business applications, cloud technologies, automation, and enterprise IT,
      he works closely with clients to understand their business challenges and
      transform them into effective technology solutions.
    </p>

    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
      His leadership philosophy is centered on customer success, innovation,
      continuous learning, and long-term partnerships, with a commitment to
      building a technology organization that delivers measurable value to
      every client.
    </p>
  </div>
</div>

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
