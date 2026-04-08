import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaCloud } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Finance & Operations",
      desc: "Optimize enterprise financial management and streamline operations using advanced ERP solutions powered by Microsoft Dynamics.",
      icon: <FaChartLine size={40} />,
      path: "/finance-operation",
    },
    {
      title: "Dynamics 365 Business & Fundamentals",
      desc: "Transform business productivity with Microsoft Dynamics 365 solutions that integrate CRM, ERP, and cloud services seamlessly.",
      icon: <FaCloud size={40} />,
      path: "/Dynamics365Business",
    },
    {
      title: "Responsive Website Development",
      desc: "We design modern, scalable and fully responsive websites that deliver high performance and outstanding user experience.",
      icon: <FaLaptopCode size={40} />,
      path: "/Webdevelopment",
    },
    {
      title: "Android & iOS App Development",
      desc: "Build powerful mobile applications with intuitive UI and high performance for Android and iOS platforms.",
      icon: <FaMobileAlt size={40} />,
      path: "/MobileAppDevelopment",
    },
  ];

  return (
    <section
      id="services"   // 🔥 IMPORTANT TARGET ID
      className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="px-6 mx-auto max-w-7xl">

        {/* TITLE */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold dark:text-blue-600">
            Our Professional Services
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            We deliver innovative technology solutions that help businesses transform,
            scale and succeed in the digital era.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 dark:text-white">
          {services.map((service, index) => (
            <NavLink to={service.path} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col h-full p-8 bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:shadow-2xl group"
              >
                <div className="mb-6 text-blue-600">
                  {service.icon}
                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {service.desc}
                </p>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              </motion.div>
            </NavLink>
          ))}
        </div>

      </div>
    </section>
  );
}