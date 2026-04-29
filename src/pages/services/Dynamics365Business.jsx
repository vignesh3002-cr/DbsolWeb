import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChartPie,
  FaCloud,
  FaMobileAlt,
  FaProjectDiagram,
  FaSyncAlt,
  FaUsers,
} from "react-icons/fa";
import Footer from "../../components/Footer";
import Integration from "../../components/IntegrationSteps";
import Modules from "../../components/modules";
import Navbar from "../../components/Navbar";

const features = [
  {
    icon: <FaChartPie />,
    title: "Business Intelligence",
    desc: "Gain real-time insights into financial performance, sales trends, and operational efficiency.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Management",
    desc: "Manage leads, customers, and service operations efficiently with centralized CRM capabilities.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Integration",
    desc: "Secure cloud infrastructure that enables seamless collaboration and data accessibility anywhere.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Business Process Optimization",
    desc: "Streamline workflows across departments to increase productivity and operational transparency.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Automated Workflows",
    desc: "Automate repetitive business operations to reduce manual errors and improve efficiency.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Accessibility",
    desc: "Access your ERP and business systems securely from any device anywhere.",
  },
];

const deliveryModules = ["Finance", "Sales", "Supply Chain", "Customer Service"];

export default function Dynamics365Business() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Navbar />

      <section className="relative overflow-hidden border-b border-gray-200 pt-16 dark:border-gray-800">
        <div className="absolute inset-0">
          <img
            src="/images/Ms365_img2.jpg"
            alt="Dynamics 365 Business solutions"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-blue-900/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.28),_transparent_28%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
              Our Services
            </span>

            <h1 className="text-4xl font-black tracking-tight text-white lg:text-5xl">
              Dynamics 365 Business Solutions
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50/90">
              Smart ERP and connected business applications built to streamline operations,
              improve visibility, and support scalable growth.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-blue-100/90">
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Dynamics 365 Business</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Talk to Our Experts
              </Link>
              <Link
                to="/modules"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15"
              >
                Explore Modules
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              Overview
            </span>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
              Smart ERP Solutions for Modern Businesses
            </h2>
            <p className="mb-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Microsoft Dynamics 365 Business solutions provide an integrated platform to
              manage finance, sales, operations, and customer relationships.
            </p>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our experts help organizations deploy scalable Dynamics 365 solutions tailored
              to their industry needs while ensuring seamless integration and optimized
              performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900"
          >
            <img
              src="/images/Dynamics-365-logo.png"
              alt="Dynamics 365 logo"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-blue-50/60 py-16 dark:bg-gray-900/80 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm dark:bg-gray-800 dark:text-blue-300">
              Capabilities
            </span>
            <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
              Key Business Capabilities
            </h2>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              Empowering organizations with integrated tools and intelligent solutions to
              streamline operations, enhance decision-making, and drive business growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-blue-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500/30"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-4 text-2xl text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Modules />
      <Integration />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              Delivery Scope
            </span>
            <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
              Business Modules We Implement
            </h2>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              Empowering your business with integrated modules for finance, sales, supply
              chain, and customer service to ensure smooth operations and enhanced
              productivity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {deliveryModules.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15 }}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-center text-white dark:from-gray-900 dark:to-blue-950 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
            Transform Your Business with Dynamics 365
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-blue-100">
            Empower your organization with intelligent ERP solutions designed for
            scalability, efficiency, and long-term growth.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Start Your Digital Transformation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
