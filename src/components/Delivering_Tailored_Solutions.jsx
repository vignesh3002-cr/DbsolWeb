import { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";

const servicesData = {
  erp: {
    title: "ERP Solutions",
    subtitle: "Optimize Business Operations with Configured Solutions",
    description:
      "Unlock your business's potential with ERP systems that streamline processes, integrate workflows, and improve decision-making. Our solutions enhance efficiency across finance, supply chain, manufacturing, and operations.",
    benefits: [
      "Unified data across all departments",
      "Real-time financial reporting & analytics",
      "Automated supply chain management",
      "Scalable multi-entity and multi-currency support",
      "Reduced operational costs by up to 30%",
    ],
    technologies: [
      "Microsoft Dynamics 365 Business Central",
      "Microsoft Power Platform",
      "Microsoft 365 Integrations",
      "Microsoft Copilot",
    ],
    useCases: [
      "Manufacturing resource planning",
      "Financial consolidation & reporting",
      "Inventory & warehouse management",
      "Procurement & vendor management",
    ],
  },
  "process-automation": {
    title: "Process Automation",
    subtitle: "Automate Workflows & Boost Productivity",
    description:
      "Eliminate manual bottlenecks with intelligent process automation. We design and implement automation solutions that reduce errors, save time, and allow your team to focus on strategic initiatives.",
    benefits: [
      "80% reduction in manual data entry",
      "Faster approval workflows",
      "Error-free document processing",
      "Seamless integration with existing systems",
      "24/7 automated task execution",
    ],
    technologies: [
      "Microsoft Power Automate",
      "Azure Logic Apps",
      "Robotic Process Automation (RPA)",
      "AI Builder",
    ],
    useCases: [
      "Invoice processing automation",
      "Employee onboarding workflows",
      "Customer service ticket routing",
      "Report generation & distribution",
    ],
  },
  dms: {
    title: "Document Management System",
    subtitle: "Centralize & Secure Your Document Management",
    description:
      "Transform how your organization manages documents with a centralized, secure, and intelligent document management system. Improve collaboration, ensure compliance, and access information instantly.",
    benefits: [
      "Centralized document repository",
      "Version control & audit trails",
      "Automated document classification",
      "Compliance with regulatory standards",
      "Secure access controls & encryption",
    ],
    technologies: [
      "Microsoft SharePoint",
      "Microsoft Purview",
      "Azure Blob Storage",
      "Power Apps Portals",
    ],
    useCases: [
      "Contract lifecycle management",
      "Policy & procedure management",
      "Records retention & archival",
      "Collaborative document editing",
    ],
  },
  "app-development": {
    title: "App Development",
    subtitle: "Build Custom Applications That Drive Growth",
    description:
      "From concept to deployment, we create tailored web and mobile applications that solve your unique business challenges. Our agile approach ensures rapid delivery without compromising quality.",
    benefits: [
      "Custom-built for your exact needs",
      "Responsive across all devices",
      "Scalable cloud-native architecture",
      "Continuous integration & deployment",
      "Ongoing support & maintenance",
    ],
    technologies: [
      "React & .NET Core",
      "Microsoft Power Apps",
      "Azure App Services",
      "Progressive Web Apps (PWA)",
    ],
    useCases: [
      "Customer portals & self-service apps",
      "Internal productivity tools",
      "E-commerce platforms",
      "Field service mobile apps",
    ],
  },
  "business-intelligence": {
    title: "Business Intelligence",
    subtitle: "Turn Data into Actionable Business Insights",
    description:
      "Harness the power of your data with advanced analytics and visualization. Our BI solutions help you make informed decisions, identify trends, and uncover opportunities hidden in your data.",
    benefits: [
      "Interactive dashboards & reports",
      "Self-service analytics for all users",
      "Predictive analytics & forecasting",
      "Data-driven decision making",
      "Automated report scheduling",
    ],
    technologies: [
      "Microsoft Power BI",
      "Azure Synapse Analytics",
      "Azure Data Factory",
      "Microsoft Fabric",
    ],
    useCases: [
      "Sales performance tracking",
      "Financial KPI monitoring",
      "Customer behavior analytics",
      "Operational efficiency reporting",
    ],
  },
};

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600";

const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700";

export default function DeliveringTailoredSolutions({
  slug: slugProp,
  showNavbar = true,
  showBackLink = true,
  fallbackSlug = "erp",
}) {
  const { slug: routeSlug } = useParams();
  const [selectedSlug, setSelectedSlug] = useState(fallbackSlug);
  const contentRef = useRef(null);

  const serviceEntries = Object.entries(servicesData);
  const isLockedToSingleService = Boolean(slugProp ?? routeSlug);
  const resolvedSlug = isLockedToSingleService
    ? slugProp ?? routeSlug
    : selectedSlug;

  const service = servicesData[resolvedSlug];

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {showNavbar && <Navbar />}
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Service Not Found
          </h1>
          <Link to="/" className="text-blue-600 hover:underline dark:text-blue-400">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={showNavbar ? "min-h-screen bg-white dark:bg-gray-950" : "bg-white dark:bg-gray-950"}>
      {showNavbar && <Navbar />}

      <section
      id="clients-section"
      className="pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {showBackLink && (
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          )}

          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
              Our Services
            </span>
            <h1 className="mb-4 text-4xl font-black text-gray-900 dark:text-white lg:text-5xl">
              {service.title}
            </h1>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              {service.subtitle}
            </p>
          </div>

          {!isLockedToSingleService && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {serviceEntries.map(([serviceKey, serviceItem]) => {
                const isActive = serviceKey === resolvedSlug;

                return (
                  <button
                    key={serviceKey}
                    type="button"
                    onClick={() => {
                      setSelectedSlug(serviceKey);
                      setTimeout(() => {
                        if (contentRef.current) {
                          const yOffset = -120;
                          const y =
                            contentRef.current.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;

                          window.scrollTo({
                            top: y,
                            behavior: "smooth",
                          });
                        }
                      }, 100);
                    }}
                    className={`rounded-2xl border p-5 text-left transition-all ${
                      isActive
                        ? "border-blue-600 bg-blue-600 text-white shadow-lg dark:border-blue-500 dark:bg-blue-600"
                        : "border-gray-200 bg-white text-gray-900 hover:border-blue-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-blue-500/30"
                    }`}
                  >
                    <h3 className="mb-2 text-lg font-semibold">
                      {serviceItem.title}
                    </h3>
                    <p
                      className={`text-sm leading-6 ${
                        isActive ? "text-blue-100" : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {serviceItem.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section ref={contentRef} className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Overview
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <div className="pt-4">
                <Link to="/ContactExperts">
                  <button type="button" className={primaryButtonClass}>
                    Get Started <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Key Benefits
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50/60 py-16 lg:py-24 dark:bg-gray-900/80">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Technologies We Use
              </h2>
              <div className="grid gap-3">
                {service.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30"
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span className="font-medium text-gray-900 dark:text-white">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Use Cases
              </h2>
              <div className="grid gap-3">
                {service.useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30"
                  >
                    <ArrowRight className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-600 dark:text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}