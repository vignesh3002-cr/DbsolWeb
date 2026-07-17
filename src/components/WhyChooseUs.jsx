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
  const strengths = [
    {
      icon: <Network size={28} />,
      title: "ERP Expertise",
      position: "top",
    },
    {
      icon: <Rocket size={28} />,
      title: "Digital Transformation",
      position: "rightTop",
    },
    {
      icon: <Bot size={28} />,
      title: "Business Automation",
      position: "rightBottom",
    },
    {
      icon: <Handshake size={28} />,
      title: "Long-Term Partnership",
      position: "bottom",
    },
    {
      icon: <Factory size={28} />,
      title: "Industry Expertise",
      position: "leftBottom",
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud Solutions",
      position: "leftTop",
    },
  ];

  return (
    <section className="bg-slate-50 dark:bg-gray-900 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold text-2xl tracking-widest uppercase">
            Why DBSOL
          </span>

          <h2 className="text-4xl text-gray-800 dark:text-white font-bold mt-4 mb-4">
           Technology That Drives Business Growth
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Delivering enterprise ERP, cloud, automation and digital
            transformation solutions that help organizations innovate,
            scale and succeed.
          </p>
        </div>

      
<div className="relative h-[750px] hidden lg:block">

  {/* CENTER */}
 
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white dark:text-black dark:bg-gray-800 flex flex-col items-center justify-center shadow-2xl">
              <h3 className="text-3xl font-bold">DBSOL</h3>
              <p className="text-center mt-2 text-blue-100 dark:text-gray-900">
                Digital Transformation
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
    className="left-1/2 top-4 -translate-x-1/2 z-10"
    icon={<Network size={32} />}
    title="ERP Expertise"
    description="ERP implementation, customization, integration and support."
   /> 
  <Node
    className="right-24 top-36 z-10"
     icon={<Rocket size={32} />}
    title="Digital Transformation"
    description="Modernize business processes using digital technologies."
  />

  <Node
    className="right-24 bottom-44 z-10"
   icon={<Bot size={32} />}
  title="Business Automation"
  description="Automate workflows and improve operational efficiency."
  />

  <Node
    className="left-1/2 bottom-6 -translate-x-1/2 z-10"
    icon={<Handshake size={32} />}
    title="Long-Term Partnership"
    description="Reliable support, consulting and continuous improvement."
  />

  <Node
    className="left-24 bottom-36 z-10"
     icon={<Factory size={32} />}
    title="Industry Expertise"
    description="Industry-specific solutions for manufacturing, retail and more."
  />

  <Node
    className="left-24 top-36 z-10"
    icon={<Cloud size={32} />}
    title="Cloud Solutions"
    description="Azure, cloud migration, infrastructure management and security."
  />
</div>
</div>
</section>
  );
}
function Node({ icon, title, description, className }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="group flex flex-col items-center relative">
        
        <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
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

      

