import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaCloud } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  // ✅ Scroll to hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 80, // 🔥 navbar offset
            behavior: "smooth",
          });
        } else {
          setTimeout(scrollToElement, 100);
        }
      };

      scrollToElement();
    }
  }, [location]);

  const services = [
    {
      title: "Finance & Operations",
      desc: "Optimize enterprise financial management...",
      icon: <FaChartLine size={40} />,
      path: "/finance-operation",
    },
    {
      title: "Dynamics 365 Business",
      desc: "Transform business productivity...",
      icon: <FaCloud size={40} />,
      path: "/Dynamics365Business",
    },
    {
      title: "Responsive Website",
      desc: "We design modern websites...",
      icon: <FaLaptopCode size={40} />,
      path: "/Webdevelopment",
    },
    {
      title: "Mobile App Development",
      desc: "Build powerful mobile apps...",
      icon: <FaMobileAlt size={40} />,
      path: "/MobileAppDevelopment",
    },
  ];

  return (
    <div>
      
      {/* SERVICES SECTION */}
      <section
        id="clients-section"   // 🎯 TARGET ID (IMPORTANT)
        className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
      >
        <div className="px-6 mx-auto max-w-7xl">

          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold dark:text-blue-600">
              Our Professional Services
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              We deliver innovative technology solutions.
            </p>
          </div>

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

    </div>
  );
}