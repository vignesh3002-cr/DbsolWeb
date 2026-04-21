import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Settings } from "lucide-react";

const HyperCareSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post-Go-Live Support (Hyper-care)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We don’t disappear after launch — we stay with you to ensure your system runs smoothly and delivers real value.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {[
            {
              icon: ShieldCheck,
              title: "Immediate Support",
              desc: "Quick issue resolution to keep your operations running without disruption."
            },
            {
              icon: Users,
              title: "User Guidance",
              desc: "Hands-on support to help your team confidently adopt the system."
            },
            {
              icon: Settings,
              title: "Continuous Optimization",
              desc: "Fine-tuning based on real usage to maximize performance."
            }
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                viewport={{ once: false }}
                className="group p-6 bg-blue-100 dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.7)] border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              >

                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-blue-300 dark:bg-blue-900 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 text-green-800 dark:text-blue-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}
        </div>

        {/* KPI Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          {[
            "40% Faster Issue Resolution",
            "60% Faster User Adoption",
            "50% Reduced Downtime",
            "95% Client Satisfaction"
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: "easeInOut"
              }}
              viewport={{ once: false }}
              className="p-4 bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.7)] border border-gray-200 dark:border-gray-400"
            >
              <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
                {stat}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="mt-16"
        >
          <p className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
            “We don’t just implement — we stay until it works.”
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default HyperCareSection;