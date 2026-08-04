import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Rocket,
  PlayCircle,
} from "lucide-react";

export default function ResourceLibrary() {
  const resources = [
    {
      title: "ERP Implementation Blueprint",
      desc: "Learn the complete ERP implementation lifecycle from planning to go-live with best practices.",
      icon: <BookOpen size={24} />,
      file: "/files/erp.pdf",
      button: "Read Guide",
    },
    {
      title: "UAT Checklist",
      desc: "A practical checklist to ensure your testing phase is smooth and error-free.",
      icon: <ClipboardCheck size={24} />,
      file: "/files/uat.pdf",
      button: "Download",
    },
    {
      title: "D365 Migration Readiness Guide",
      desc: "Understand your system's readiness before transitioning to Microsoft Dynamics 365.",
      icon: <Rocket size={24} />,
      file: "/files/d365.pdf",
      button: "Read Guide",
    },
    {
      title: "Webinars & Learning",
      desc: "Watch product demos, implementation strategies, and expert sessions from DBSol.",
      icon: <PlayCircle size={24} />,
      file: "#",
      button: "Watch Now",
    },
  ];

  return (
    <section className="relative px-6 py-16 overflow-hidden bg-white dark:bg-black md:px-16 lg:px-24">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-yellow-400/20 blur-[180px] -translate-x-1/2"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mb-14"
      >
       

        <h2 className="mt-6 text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl">
          Learn Before You Decide.
          <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
            We Guide. You Succeed.
          </span>
        </h2>

        <p className="max-w-2xl mt-6 text-lg text-gray-600 dark:text-gray-400">
          Explore our curated resources designed to simplify your ERP and
          Microsoft Dynamics 365 journey—from planning and implementation
          to successful deployment.
        </p>
      </motion.div>

      {/* Resource List */}
      <div className="flex flex-col gap-8">

        {resources.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="relative pb-6 border-b border-gray-200 dark:border-gray-800 group"
          >
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

              <div className="flex gap-5">

                <div className="flex items-center justify-center w-14 h-14 text-blue-600 bg-blue-100 rounded-xl dark:bg-gray-800">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-black transition dark:text-white group-hover:text-yellow-500">
                    {item.title}
                  </h3>

                  <p className="max-w-2xl mt-2 text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>

              </div>

              <a
                href={item.file}
                download={item.button === "Download"}
                className="inline-flex items-center gap-2 px-5 py-3 font-medium text-white transition bg-blue-600 rounded-lg hover:bg-yellow-400 hover:text-black"
              >
                {item.button}

                {item.button === "Download" ? (
                  <Download size={18} />
                ) : (
                  <ArrowRight size={18} />
                )}
              </a>

            </div>

            <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-500 group-hover:scale-x-100"></span>
          </motion.div>
        ))}

      </div>

      {/* Bottom Button */}
      <div className="mt-14 text-center">
        <a
          href="/learnwithus"
          className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:scale-105"
        >
          View All Resources
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}