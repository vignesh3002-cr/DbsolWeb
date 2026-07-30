import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DataMigrationSection from "../DataMigrationSection";

export default function SecurityPrivacy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-white">
      <Navbar />

      <main>
        <section className="relative flex items-center justify-center h-[420px] overflow-hidden">
          <img
            src="/images/Security%20and%20privacy.jpeg"
            alt="SecurityPrivacy"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold"
            >
              Security & Privacy
            </motion.h1>

            <p className="mt-4 text-gray-200">
              <Link className="hover:text-blue-600" to="/">
                Home
              </Link>{" "}
              ➜ <span className="text-blue-600">Security & Privacy</span>
            </p>
          </div>
        </section>

        <DataMigrationSection />
      </main>

      <Footer />
    </div>
  );
}