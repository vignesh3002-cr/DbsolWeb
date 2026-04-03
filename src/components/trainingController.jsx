import { motion } from "framer-motion";
import { useState } from "react";

const warehouseSteps = [
  { title: "Receiving Inventory", desc: "Scan and record incoming goods in real-time.",
    image:"/images/WM_Step-1.jpg"
   },
  { title: "Put-away & Storage", desc: "System-guided bin allocation and storage.",
    image:"/images/WM_Step-2.jpg"
},
  { title: "Inventory Tracking", desc: "Maintain stock accuracy with live updates.",
    image:"/images/WM_Step-3.jpg"
  },
  { title: "Picking & Packing", desc: "Optimized picking routes and packing workflows.",
    image:"/images/WM_Step-4.jpg"
   },
  { title: "Shipping & Dispatch", desc: "Seamless shipment confirmation and tracking.",
    image:"/images/WM_Step-5.jpg"
   },
  { title: "Live Monitoring", desc: "Real-time dashboards and KPI visibility.",
    image:"/images/WM_Step-6.jpg"
   },
];

const controllerSteps = [
  { title: "Data Entry", desc: "Accurate journal entries and validation.",
    image:"/images/TC_Step-1.png"
   },
  { title: "AP & AR", desc: "Automated invoice and payment workflows.",
    image:"/images/TC_Step-2.jpg"
   },
  { title: "Budgeting", desc: "Forecasting and financial planning tools.",
    image:"/images/TC_Step-3.jpg"
   },
   { title: "Compliance", desc: "Audit trails and regulatory controls.",
    image:"/images/TC_Step-4.jpg"
    },
   { title: "Reporting", desc: "Real-time financial dashboards.",
    image:"/images/TC_Step-5.jpg"
    },
   { title: "Decision Support", desc: "Insights for strategic growth.",
    image:"/images/TC_Step-6.jpg"
    },
];

export default function PremiumERPSection() {
  const [activeTab, setActiveTab] = useState("warehouse");
  const steps = activeTab === "warehouse" ? warehouseSteps : controllerSteps;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dynamics 365 Role-Based Training Experience
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interactive, visual, and role-specific workflows designed for real business impact.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 flex gap-2">
            {["warehouse", "controller"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === tab
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-300"
                }`}
              >
                {tab === "warehouse" ? "Warehouse Manager" : "Controller"}
              </button>
            ))}
          </div>
        </div>

        {/* Sliding Steps */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="min-w-[280px] bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl"
              >
                <div className="h-auto mb-4 rounded-xl bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center text-sm overflow-hidden text-gray-300">
                  <img src={step.image} alt="My Image" className="object-contain" ></img>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-16">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
