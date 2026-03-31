import { motion } from "framer-motion";
import { Download } from "lucide-react";
export default function ResourceLibrary() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 md:px-16 lg:px-24 py-4">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-yellow-400/20 blur-[180px] -translate-x-1/2"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Learn Before You Decide.
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            We Guide. You Succeed.
          </span>
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          Explore our curated resources designed to simplify your ERP and D365 journey — from planning to execution.
        </p>
      </motion.div>

      {/* Resources List */}
      <div className="flex flex-col gap-12">

        {[
          {
            title: "UAT Checklist",
            desc: "A practical checklist to ensure your testing phase is smooth and error-free.",
            file: "/files/uat.pdf",
          },
          {
            title: "D365 Migration Readiness Guide",
            desc: "Understand your system’s readiness before transitioning to Dynamics 365.",
            file: "/files/d365.pdf",
          },
          {
            title: "ERP Implementation Blueprint",
            desc: "Step-by-step strategy to execute ERP implementation successfully.",
            file: "/files/erp.pdf",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group relative border-b border-white/10 pb-6"
          >

            {/* Title + Hover Effect */}
            <div 
              className="flex justify-between items-center"
            >
              <div>
                <h3 className="text-2xl font-semibold group-hover:text-yellow-400 transition">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2 max-w-xl">
                  {item.desc}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-2xl transition-transform duration-500 group-hover:translate-x-2">
                      <a
              href={item.file}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white transition-transform duration-5000
                         group-hover:bg-yellow-400 group-hover:text-black font-medium 
                         "
            >
              <Download size={18} />
              Download
            </a>
              </span>
            </div>

            {/* Animated underline */}
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-400 
                             scale-x-0 origin-left group-hover:scale-x-100 
                             transition-transform duration-500">
            </span>

          </motion.div>
        ))}

      </div>

    </section>
  );
}