import {
  Cloud,
  Network,
  Rocket,
  Bot,
  Handshake,
  Factory,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function WhyDbsol() {


  return (
   <section className="bg-slate-50 dark:bg-gray-900 py-24 overflow-visible">

  {/* Badge */}
  <div className="flex justify-center -mt-12">
    <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
      Microsoft Dynamics 365 Specialists
    </span>
  </div>

  {/* Heading */}
  <div className="text-center mb-16">

    <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white font-bold mb-6">
      Why Leading Businesses Choose DBSOL
    </h2>

    <p className="max-w-4xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
      Helping Retail, Manufacturing and Distribution businesses transform
      Finance, Supply Chain and Warehouse Operations through Microsoft
      Dynamics 365, Power Platform, Azure Cloud Services and Enterprise
      Integrations.
    </p>

  </div>

  {/* Wheel Section */}
  <div className="relative h-[800px] hidden lg:block">

    {/* Center Circle */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col items-center justify-center shadow-2xl">

        <h3 className="text-3xl font-bold">
          DBSOL
        </h3>

        <p className="text-center mt-4 text-blue-100 font-medium leading-relaxed">
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
    <line
      x1="500"
      y1="325"
      x2="500"
      y2="100"
      stroke="#2563eb"
      strokeOpacity="0.4"
      strokeWidth="3"
    />

    <line
      x1="500"
      y1="325"
      x2="820"
      y2="200"
      stroke="#2563eb"
      strokeOpacity="0.4"
      strokeWidth="3"
    />

    <line
      x1="500"
      y1="325"
      x2="820"
      y2="470"
      stroke="#2563eb"
      strokeOpacity="0.4"
      strokeWidth="3"
    />

    <line
      x1="500"
      y1="325"
      x2="500"
      y2="560"
      stroke="#2563eb"
      strokeOpacity="0.4"
      strokeWidth="3"
    />

    <line
      x1="500"
      y1="325"
      x2="180"
      y2="470"
      stroke="#2563eb"
      strokeOpacity="0.4"
      strokeWidth="3"
    />

    <line
      x1="500"
      y1="325"
      x2="180"
      y2="200"
      stroke="#2563eb"
      strokeOpacity="0.4"
      strokeWidth="3"
    />
  </svg>

  {/* NODES */}
 <Node
  className="left-1/2 -top-10 -translate-x-1/2 z-10"
  icon={<Network size={32} />}
  title="Dynamics 365 F&O"
  description="Finance, Supply Chain, Procurement, Inventory and ERP transformation solutions."
/>

<Node
  className="right-40 top-24 z-10"
  icon={<Rocket size={32} />}
  title="Finance Transformation"
  description="Modernize financial operations, reporting, budgeting and business processes."
/>

<Node
  className="right-40 bottom-24 z-10"
  icon={<Bot size={32} />}
  title="Power Platform"
  description="Power Apps, Power Automate, Power BI and intelligent workflow automation."
/>

<Node
  className="left-1/2 -bottom-6 -translate-x-1/2 z-10"
  icon={<Handshake size={32} />}
  title="Enterprise Integrations"
  description="Integrate Dynamics 365 with Salesforce, SAP, eCommerce platforms and third-party systems."
/>

<Node
  className="left-40 bottom-24 z-10"
  icon={<Factory size={32} />}
  title="Warehouse & Retail"
  description="Warehouse Management, Retail Operations, Inventory Visibility and Logistics Solutions."
/>

<Node
  className="left-40 top-24 z-10"
  icon={<Cloud size={32} />}
  title="Azure & Cloud Services"
  description="Cloud migration, infrastructure management, security and scalable business solutions."
/>
</div>

</section>
  );
}
function Node({ icon, title, description, className }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="group flex flex-col items-center relative">
        
        <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>

        <h4 className="mt-4 font-semibold text-gray-800 dark:text-white text-center max-w-[150px]">
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

      

