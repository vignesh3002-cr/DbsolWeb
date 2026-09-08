import { useState } from "react";
import { motion } from "framer-motion";

export default function LeadershipSection() {
  const [activeTab, setActiveTab] = useState("founders");

  const tabs = [
    { id: "board", label: "Founders" },
    { id: "executive", label: "Advisor" },
    { id: "founders", label: "Executive Leadership team" },
  ];

  const leadershipData = {
    board: [
      {
        name: "John Smith",
        role: "Chairman",
        image: "/images/board1.jpg",
        bio: "John has steered the company’s strategic direction with a focus on long-term growth, governance, and value creation for clients and partners.",
      },
    ],
    executive: [
      {
        name: "David Wilson",
        role: "Chief Executive Officer",
        image: "/images/executive1.jpg",
        bio: "David leads the company’s strategic execution and customer-first transformation initiatives across global digital programs.",
      },
    ],
    founders: [
      {
        name: "Remapriya Nanjappan",
        role: "Strategic Consultant",
        image: "/images/rema-nanjappan.jpg",
        bio: "ERP Implementation & Digital Transformation Expert specializing in the design and deployment of global HR and Payroll solutions. Skilled in bridging the gap between technical infrastructure and business operations, transforming fragmented global units into streamlined digital ecosystems.",
      },
      {
        name: "Maruthanayagam Jeyachandran",
        role: "Business Analyst",
        image: "/images/maruthanayagam.jpg",
        bio: "ERP Implementation & Supply Chain Transformation Expert delivering Microsoft Dynamics 365 solutions for warehouse, inventory, and production, focused on streamlining operations and scalable process improvement.",
      },
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

        <div className="space-y-8">
          {leadershipData[activeTab].map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="overflow-hidden bg-white shadow-lg rounded-2xl"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-[350px]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="object-cover w-full h-full min-h-[350px]"
                  />
                </div>

                <div className="flex-1 p-8 md:p-12">
                  <h3 className="mb-2 text-3xl font-semibold text-gray-900">
                    {person.name}
                  </h3>

                  <p className="mb-4 text-xl text-gray-600">{person.role}</p>

                  <button className="mb-6 text-xl font-medium text-indigo-900 underline">
                    Read Bio ↗
                  </button>

                  <p className="max-w-2xl leading-8 text-gray-600">{person.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}