import Navbar from "./Navbar"
import Footer from "./Footer"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { useRef, useState } from "react";

import { ChevronDown, Sparkles, Bot, Cloud, ShieldCheck, LayoutGrid,SignalMedium } from "lucide-react";
import { video } from "framer-motion/client";

const CustomIcon = ({ className = "w-10 h-20" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
    </svg>  );
};



const categories = [
  {
    id: "overview",
    label: "Elevate development",
    icon: LayoutGrid,
    features: [
      {
        title: "Plan smarter",
        description:
          "Quickly turn ideas into working solutions. Capture requirements, map processes, and shape data models in Power Apps, aligning your team before building a single component",
        video: "images/PowerAutomate/ElevateDevelopment/mapjourney.mp4" 
      },
      {
        title: "Define your vision",
        description:
          "Use natural language to outline goals, roles, and workflows. AI instantly translates your intent into structured solution blueprints.",
        video: "images/PowerAutomate/ElevateDevelopment/Define_Your_Vision.mp4" 
      },
      {
        title: "Map the journey",
        description:
          "Visualize processes and decision points to clarify logic and optimize automation paths.",
        video: "images/PowerAutomate/ElevateDevelopment/mapjourney.mp4"    
         },
      {
        title: "Structure your data",
        description:
          "Design secure, scalable data models with AI-assisted suggestions. Easily refine tables, relationships, and fields using a visual data workspace.",
        video:"images/PowerAutomate/ElevateDevelopment/Structure_Your_Data.mp4"
      },
    ],
  },
  {
    id: "AI to user",
    label: "Bring AI to user at every step",
    icon: CustomIcon,
    features: [
      {
        title: "Work with your trusted Copilot",
        description:
          "Bring Microsoft 365 Copilot into your custom apps to ground assistance in the real business context. Copilot delivers a seamless chat experience that travels with you across Microsoft 365 and your custom apps",
        video:"images/PowerAutomate/ElevateDevelopment/TrustCopilot.mp4",
      },
      {
        title: "Monitor agent activity in one place",
        description:
          "Oversee, collaborate with, and guide AI agents inside your apps. The agent feed gives users control and oversight, guiding them to the most valuable actions.",

        video:"images/PowerAutomate/ElevateDevelopment/MonitorAgent.mp4",
      },
      {
        title: "Work smarter",
        description:
          "Speed up data entry and reduce errors with AI that autofills forms from emails, chats, documents, and images, eliminating repetitive work and boosting productivity.",
        video:"images/PowerAutomate/ElevateDevelopment/WorkSmarter.mp4",
      },
    ],
  },
 {
    id: "ai-features",
    label: "Build with ease",
    icon: CustomIcon,
    features: [
      {
        title: "Move rapidly from concept to creation",
        description:
          "Build apps your way—drag and drop, generative AI, or custom code. Easily deploy across web and mobile. ",
        video:"images/PowerAutomate/ElevateDevelopment/RapidlyConcept.mp4",
      },
      {
        title: "Innovate faster",
        description:
          "Accelerate UI design and data modeling work with AI assistance using natural language instructions, templates, and reusable components.",

        video:"images/PowerAutomate/ElevateDevelopment/InnovateFaster.mp4",
      },
      {
        title: "Empower your teams",
        description:
          "Empower business users and developers to collaborate in one workspace. Business users can describe what they need in natural language and generate rich, custom app experiences, powered by reliable code and refined through conversation.",
        video:"images/PowerAutomate/ElevateDevelopment/EmpowerTeams.mp4",
      },
    ],
  },

];

const defaultCat = categories[0];

const PowerApps = () => {
  const [activeCat, setActiveCat] = useState(defaultCat.id);
  const [openFeature, setOpenFeature] = useState(defaultCat.features[0].title);
  const [activePanel, setActivePanel] = useState("powerBi");
  const sectionRef = useRef(null);

  const current = categories.find((c) => c.id === activeCat) || defaultCat;

  const handleCategoryChange = (id) => {
    const cat = categories.find((c) => c.id === id) || defaultCat;
    setActiveCat(cat.id);
    setOpenFeature(cat.features[0].title);

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeFeature =
    current.features.find((f) => f.title === openFeature) || current.features[0];

  const handlePanelChange = (panel) => {
    setActivePanel(panel);

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
       <section
        className="py-16 lg:py-0 bg-background dark:bg-gray-800 dark:text-gray-300"
      >
        <div className=" mx-auto px-4 lg:px-8">
          
          {activePanel === "powerBi" && (
            <>
        <section>
        <div className="grid items-center max-w-6xl gap-36 px-6 mx-auto md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-800 md:text-left dark:text-white">
              Power Apps 
            </h2>

            <p className="mb-4 text-center text-gray-600 md:text-left dark:text-gray-300">
              Power Apps is a suite of apps, services, and connectors, as well as a data platform, that provides a rapid development environment to build custom apps for your business needs.            </p>

            <p className="text-center text-gray-600 md:text-left dark:text-gray-300">
              With Power Apps, you can quickly build custom business apps that connect to your data stored either in the underlying data platform (Microsoft Dataverse) or in many online and on-premises data sources (such as SharePoint, Microsoft 365, Dynamics 365, SQL Server, and so on).            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            src="images/PowerAutomate/Powerapps_logo.png"
            className=" w-full h-full py-8 object-cover" 
          />
        </div>
      </section>
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-heading font-semibold text-sm tracking-wide uppercase">
              Power apps
            </span>
            <h2 className="mt-2 text-3xl font-display font-bold text-foreground lg:text-4xl dark:text-blue-600">
              “Transform your business with modern, AI-first applications.”
            </h2>
          </div>

        <span className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const active = cat.id === activeCat;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 lg:px-5 ${
                    active
                      ? "scale-105 border-green-300 bg-primary text-blue-600 shadow-md dark:border-gray-700 dark:text-green-400 dark:shadow-white/20"
                      : "border-border bg-background text-foreground hover:border-primary/40 hover:text-primary dark:border-gray-700"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 transition ${
                      active
                        ? "text-orange-400 scale-110"
                        : "text-gray-800"
                    }`}
/>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </span>
          <div
            key={activeCat}
            className="grid items-start gap-10 animate-fade-in lg:grid-cols-2"
          >
            <div className="space-y-3">
              {current.features.map((f) => {
                const open = f.title === openFeature;

                return (
                  <div
                    key={f.title}
                    className={`overflow-hidden rounded-2xl border bg-card transition-all duration-300 dark:border-slate-500/50 ${
                      open
                        ? "border-primary shadow-lg hover:border-cyan-500 hover:shadow-xl dark:hover:border-green-500 dark:shadow-gray-700/55"
                        : "border-border hover:border-primary/90"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFeature(f.title)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={open}
                    >
                      <h3
                        className={`text-lg font-bold font-display transition-colors duration-300 ${
                          open ? "text-blue-600 dark:text-green-400" : "text-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {f.title}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                          open ? "rotate-180 text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                          {f.description}
                        </p>
                    
                        <div className="px-5 pb-5 lg:hidden">
                          <img
                            src={f.image}
                            alt={f.title}
                            loading="lazy"
                            className="h-auto w-full rounded-lg border border-border"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="sticky top-24 hidden lg:block">
              <div className="rounded-2xl border border-border bg-secondary/40 p-4 shadow-xl">
                <video autoPlay loop muted playsInline
                  key={activeFeature.title}       
                  className="h-auto w-full rounded-xl animate-fade-in">
                  <source src={activeFeature.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
            </>
          )}
        </div>
      </section>  
    </div>
  );
};

export default PowerApps;

