import { motion } from "framer-motion";
import {Link, useNavigate } from "react-router-dom";
import {
  Download,
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Rocket,
  PlayCircle,
} from "lucide-react";
export default function ResourceLibrary() {
 
  
 const navigate = useNavigate();
 const resources = [
  {
    title: "ERP Implementation Blueprint",
    desc: "Learn the complete ERP implementation lifecycle from planning to go-live with best practices.",
    icon: <BookOpen size={24} />,
    button: "Read Guide",
    type: "page",
    link: "/erp-guide",
  },
  {
    title: "UAT Checklist",
    desc: "A practical checklist to ensure your testing phase is smooth and error-free.",
    icon: <ClipboardCheck size={24} />,
    button: "Download",
    type: "download",
    link: "/pdfs/uat-checklist.pdf",
  },
  {
    title: "D365 Migration Readiness Guide",
    desc: "Understand your system's readiness before transitioning to Microsoft Dynamics 365.",
    icon: <Rocket size={24} />,
    button: "Read Guide",
    type: "page",
    link: "/migration-guide",
  },
];
const handleResourceClick = (item) => {
  if (item.type === "page") {
    navigate(item.link);
  }

  if (item.type === "download") {
    window.open(item.link, "_blank");
  }

  if (item.type === "external") {
    window.open(item.link, "_blank");
  }
};

  return (
      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-white">
        <main>
          <section className="relative overflow-hidden bg-white px-4 py-12 dark:bg-black sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-6xl bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:py-12">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10 max-w-4xl sm:mb-14"
      >
       <h2 className="mt-2 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
          Learn Before You Decide.
          <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
            We Guide. You Succeed.
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
          Explore our curated resources designed to simplify your ERP and
          Microsoft Dynamics 365 journey—from planning and implementation
          to successful deployment.
        </p>
      </motion.div>

      {/* Resource List */}
      <div className="flex flex-col gap-4 sm:gap-6">

        {resources.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="group relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 sm:p-6"
          >
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

              <div className="flex min-w-0 flex-1 items-start gap-4 sm:gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-gray-800 sm:h-14 sm:w-14">
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug text-black transition dark:text-white group-hover:text-blue-600 sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                    {item.desc}
                  </p>
                </div>

              </div>
       <button
           onClick={() => handleResourceClick(item)}
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:w-auto"
        >
          {item.button}

         {item.button === "Download" ? (
        <Download size={18} />
        ) : (
        <ArrowRight size={18} />
        )}
       </button>

            </div>

          </motion.div>
        ))}

      </div>

      {/* Bottom Button */}
      <div className="mt-10 flex flex-col items-center gap-4 text-center sm:mt-14">
      
          <Link to="/knowledge-and-resources"
          className="inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:from-blue-700 hover:to-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto sm:px-8 sm:py-4"
        >
          View All Resources
          <ArrowRight size={20} />
       </Link>
        <Link
          to="/contact-us/"
          className="inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-xl border border-blue-600 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-blue-300 dark:hover:bg-gray-800 sm:w-auto"
        >
          Need help choosing? Contact us
        </Link>
      </div>
      </div>
          </section>
        </main>
      </div>
  );
}
