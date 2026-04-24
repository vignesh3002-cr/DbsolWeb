import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
const warehouseSteps = [
  { title: "Receiving Inventory", desc: "Scan and record incoming goods in real-time.",
    image:"/images/WM_Step-1.jpg",
    step:"01" 
   },
  { title: "Put-away & Storage", desc: "System-guided bin allocation and storage.",
    image:"/images/WM_Step-2.jpg",
    step:"02"
},
  { title: "Inventory Tracking", desc: "Maintain stock accuracy with live updates.",
    image:"/images/WM_Step-3.jpg",
    step:"03"
  },
  { title: "Picking & Packing", desc: "Optimized picking routes and packing workflows.",
    image:"/images/WM_Step-4.jpg",
    step:"04"
   },
  { title: "Shipping & Dispatch", desc: "Seamless shipment confirmation and tracking.",
    image:"/images/WM_Step-5.jpg",
    step:"05"
   },
  { title: "Live Monitoring", desc: "Real-time dashboards and KPI visibility.",
    image:"/images/WM_Step-6.jpg",
    step:"06"
   },
];

const controllerSteps = [
  { title: "Data Entry", desc: "Accurate journal entries and validation.",
    image:"/images/TC_Step-1.jpg",
    step:"01"
   },
  { title: "AP & AR", desc: "Automated invoice and payment workflows.",
    image:"/images/TC_Step-2.jpg",
    step:"02"
   },
  { title: "Budgeting", desc: "Forecasting and financial planning tools.",
    image:"/images/TC_Step-3.jpg",
    step:"03"
   },
   { title: "Compliance", desc: "Audit trails and regulatory controls.",
    image:"/images/TC_Step-4.jpg",
    step:"04"
    },
   { title: "Reporting", desc: "Real-time financial dashboards.",
    image:"/images/TC_Step-5.png",
    step:"05"
    },
   { title: "Decision Support", desc: "Insights for strategic growth.",
    image:"/images/TC_Step-6.jpg",
    step:"06"
    },
];

export default function PremiumERPSection() {
  const [activeTab, setActiveTab] = useState("warehouse");
  const steps = activeTab === "warehouse" ? warehouseSteps : controllerSteps;
const scrollRef = useRef(null);

const scrollLeft = () => {
  scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
};

const scrollRight = () => {
  scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
};
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-800 to-slate-800  dark:bg-gradient-to-br dark:from-slate-900 dark:via-black-900 dark:to-slate-800 text-white dark:text-white py-20 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-white-600 mb-4">
            Dynamics 365 Role-Based Training Experience
          </h2>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
            Interactive, visual, and role-specific workflows designed for real business impact.
          </p>
        </motion.div>
      
        {/* Tabs */}
        <div className="flex justify-center mb-2">
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
      <div className="flex justify-between items-center px-6 mb-4">

  {/* LEFT BUTTON */}
 

  {/* RIGHT BUTTON */}


</div>



  <div className="relative"> 
             <button
    onClick={scrollLeft}
    className="bg-black/40 dark:bg-white/40 w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-2xl absolute top-[40%] left-4 z-50 hover:bg-gray-800 transition "
  >
    <svg className="w-5 h-5 rotate-180 fill-current text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
  </button>  
  <button
    onClick={scrollRight}
    className="bg-black/40 dark:bg-white/40  dark:text-black w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-2xl absolute top-[40%] right-4 z-50 hover:bg-gray-800 transition"
  >
   <svg className="w-5 h-5 fill-current text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg> 
  </button>
        {/* Sliding Steps */}
        <div ref={scrollRef} className="overflow-hidden py-11">

          <div className="flex gap-6 px-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="min-w-[280px] bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-black/20 shadow-xl"
              >
                <div className="h-auto mb-4 rounded-xl bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center text-sm overflow-hidden text-gray-300">
                  <img src={step.image} alt="My Image" className="object-contain" ></img>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/85 max-w-44 text-sm z-50">{step.desc}</p>
               <div className="absolute bottom-2 opacity-75 right-4 text-6xl font-bold text-gray-500 pointer-events-none -z-50">
  {step.step}
</div>
               
               </motion.div> ))} 
              </div>
        </div>

   </div>
      
      {/* Progress Bar */}
      </div>
    </section>
  );
}