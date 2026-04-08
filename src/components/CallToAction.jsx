import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative py-8 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">

        {/* Background */}
        <div className="absolute inset-0 overflow-hidden dark:bg-gray-900">
          <div className="absolute rounded-full w-72 h-72 bg-white/10 blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute rounded-full w-96 h-96 bg-purple-400/20 blur-3xl bottom-10 right-10 animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-16 border shadow-2xl bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl"
          >

            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Ready to Transform Your Business?
            </h2>

            <p className="max-w-2xl mx-auto mb-12 text-lg text-blue-100">
              Empower your enterprise with advanced solutions including 
              Dynamics 365 Finance & Operations, modern web platforms,
              and scalable mobile applications.
            </p>

            <div className="flex flex-col justify-center gap-6 md:flex-row">

              {/* Contact */}
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-8 py-4 font-semibold text-blue-700 bg-white rounded-xl"
              >
                Contact Us <FaArrowRight />
              </motion.button>

              {/* Consultation */}
              <motion.button
                onClick={() => navigate("/contact#form-selection")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 font-semibold text-white border border-white rounded-xl hover:bg-white hover:text-blue-700"
              >
                Schedule Consultation
              </motion.button>

            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}