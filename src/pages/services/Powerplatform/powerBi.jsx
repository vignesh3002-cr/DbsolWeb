import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles, Bot, Cloud, ShieldCheck, LayoutGrid,SignalMedium } from "lucide-react";

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
    label: "Power Bi Ability",
    icon: LayoutGrid,
    features: [
      {
        title: "Insight with AI",
        description:
          "Transform your data into meaningful visual insights using advanced analytics tools, AI-driven capabilities, and an intuitive reporting experience.",
        image:
          "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ProductOverview_PBICapabilities_1.1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&qlt=95&fit=constrain",
      },
      {
        title: "Bring Data Together",
        description:
          "Build datasets from any source and centralize them in OneLake to deliver a single source of truth for your data",
        image:
          "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ProductOverview_PBICapabilities_1.2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&qlt=97&fit=constrain",
      },
      {
        title: "Turn insights into action",
        description:
          "power users to make informed decisions by embedding actionable insights directly into the everyday applications they use, including Microsoft 365",
        image:
          "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ProductOverview_PBICapabilities_1.3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&qlt=95&fit=constrain",
      },
      {
        title: "Dynamic data experiences",
        description:
          "Create and share personalized data experiences with Power BI apps, paginated reports, and data stories to empower everyone in your organization to make data-driven decisions.",
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Y7B6dC0LI2r3dgOWeZq9Gw.png",
      },
    ],
  },
  {
    id: "ai-features",
    label: "Why Power BI",
    icon: CustomIcon,
    features: [
      {
        title: "Transform Raw Data into Meaningful Insights",
        description:
          "Better insights lead to smarter decisions, faster problem-solving, and improved business performance.",
        image:
          "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/1028714-Accordion-2.1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1000&hei=623&qlt=100&fit=constrain",
      },
      {
        title: "Real-Time Data Monitoring & Decision Making",
        description:
          `Power BI connects to multiple data sources (Excel, databases, cloud services) and updates automatically. This means you always see the latest data without manual refresh.
            Real-time dashboards and alerts help you monitor key metrics and make informed decisions quickly.`,

        image:
          "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ProductOverview_WhyPBI_2.1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&qlt=95&fit=constrain",
      },
      {
        title: "Share Data Everywhere",
        description:
          "Easily share your data insights with other microsoft 365 apps like teams, excel, and powerpoint. Collaborate on data-driven decisions across your organization and empower everyone to make informed choices.",
        image:
          "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ProductOverview_WhyPBI_2.2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&qlt=95&fit=constrain",
      },
    ],
  },


];

const defaultCat = categories[0];

const Powerbi = () => {
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
        ref={sectionRef}
        id="selectRef"
        className="py-16 lg:py-14 bg-background dark:bg-gray-800 dark:text-gray-300"
      >
        <div className=" mx-auto px-4 lg:px-8">
          
          {activePanel === "powerBi" && (
            <>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-heading font-semibold text-sm tracking-wide uppercase">
              Power Bi
            </span>
            <h2 className="mt-2 text-3xl font-display font-bold text-foreground lg:text-4xl dark:text-blue-600">
              “Turn data-driven insights into real, results‑driven outcomes.”
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
                <img
                  key={activeFeature.image}
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="h-auto w-full rounded-xl animate-fade-in"
                />
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

export default Powerbi;
