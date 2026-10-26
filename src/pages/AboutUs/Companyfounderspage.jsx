import { useState } from "react";
import { motion } from "framer-motion";

export default function LeadershipSection() {
  const [activeTab, setActiveTab] = useState("board");

 const tabs = [
  { id: "board", label: "Founders" },
  { id: "executive", label: "Advisor" },
  { id: "leadership", label: "Executive Leadership Team" },
];
const leadershipData = {
  board: [
    {
      name: "John Smith",
      role: "Founder",
      bio: "...",
    },
  ],

  executive: [
    {
      name: "David Wilson",
      role: "Advisor",
      bio: "...",
    },
  ],

  leadership: [
    {
      name: "Remapriya Nanjappan",
      role: "Strategic Consultant",
      image: "/images/rema-nanjappan.jpg",
      bio: ["ERP Implementation & Digital Transformation Expert specializing in the design and deployment of global HR and Payroll solutions. Skilled in bridging the gap between technical infrastructure and business operations, transforming fragmented global units into streamlined digital ecosystems.",
        "Former Digital Transformation Manager at Wipro with 16+ years of global experience, exclusively specialized in orchestrating cross-platform ecosystems—including PeopleSoft, Salesforce, and Power Platform—to unify global business units. Expert in leveraging GenAI (Copilot Studio) and high-integrity functional design to automate complex workflows for multi-national entities. Expert in synchronizing complex global business units into unified digital ecosystems.",]
      },
    {
      name: "Maruthanayagam Jeyachandran",
      role: "Business Analyst",
      image: "/images/maruthanayagam.jpg",
      bio: ["ERP Implementation & Supply Chain Transformation Expert delivering Microsoft Dynamics 365 solutions for warehouse, inventory, and production, focused on streamlining operations and scalable process improvement.",
           "Formerly developed across supply chain operations, SAP, and Microsoft Dynamics 365 environments, with 12+ years of experience in ERP implementation, rollout, support, and process optimization across manufacturing and warehouse functions. Skilled in functional design, warehouse management, business process mapping, UAT, training, and post-go-live support, delivering efficient, business-aligned solutions.",
      ],},
  ],
};
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl px-6 mx-auto">
       <h2 className="mb-4 text-4xl font-bold text-center">
          Founders & Leadership
           </h2>

           <p className="max-w-3xl mx-auto mb-12 text-center text-gray-500 dark:text-gray-300">
              Meet the founders, advisors, and leadership team driving DBSol
              Technologies' vision, innovation, and long-term growth.
            </p>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="flex overflow-hidden rounded-full bg-[#31259f] text-white w-full max-w-4xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 text-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-[#8FA4C5] text-white"
                    : "hover:bg-[#1b1168]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section Title */}
        <motion.h3
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-5xl font-bold"
        >
          {tabs.find((tab) => tab.id === activeTab)?.label}
        </motion.h3>

        <motion.div
          key={`${activeTab}-content`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {leadershipData[activeTab].map((person) => (
            <article
              key={person.name}
              className="p-8 bg-white shadow-lg dark:bg-gray-800 rounded-xl"
            >
              {person.image && (
                <img
                  src={person.image}
                  alt={person.name}
                  className="object-cover w-32 h-32 mx-auto mb-6 rounded-full"
                />
              )}
              <h4 className="mb-2 text-2xl font-semibold text-center">
                {person.name}
              </h4>
              <p className="mb-4 text-center text-gray-500 dark:text-gray-300">
                {person.role}
              </p>
              <div className="space-y-4 text-center text-gray-600 dark:text-gray-300">
                {(Array.isArray(person.bio) ? person.bio : [person.bio]).map(
                  (paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ),
                )}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
