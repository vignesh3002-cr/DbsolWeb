import { motion } from "framer-motion";

const steps = [
  {
    title: "Business Analysis",
    desc: "Understand client requirements, workflows, and business objectives.",
  },
  {
    title: "Solution Design",
    desc: "Design the ERP architecture and define modules required for implementation.",
  },
  {
    title: "System Development",
    desc: "Configure and customize ERP modules based on business needs.",
  },
  {
    title: "Integration & Testing",
    desc: "Integrate ERP with existing systems and perform complete system testing.",
  },
  {
    title: "Deployment",
    desc: "Launch the ERP solution in the production environment.",
  },
  {
    title: "Training & Support",
    desc: "Train employees and provide ongoing system support and maintenance.",
  },
];

export default function ERPImplementationProcess() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-14 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-3xl">
            ERP Implementation Process
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-md">
            A clear path from understanding your business to supporting your
            team after launch.
          </p>
        </div>

        <ol className="relative space-y-5 before:absolute before:bottom-5 before:left-5 before:top-5 before:w-0.5 before:bg-blue-200 dark:before:bg-blue-900 md:space-y-6 md:before:left-1/2 md:before:-translate-x-1/2">
          {steps.map((step, index) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:gap-x-5"
            >
              <span className="z-10 col-start-1 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-sm font-bold text-white shadow dark:border-gray-900 md:col-start-2 md:justify-self-center">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div
                className={`col-start-2 row-start-1 rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-800 sm:p-6 ${
                  index % 2 === 0
                    ? "md:col-start-1 md:text-right"
                    : "md:col-start-3 md:text-left"
                }`}
              >
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                  {step.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}