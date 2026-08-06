import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ERPGuide() {
  const benefits = [
    "Understand the complete ERP implementation lifecycle",
    "Reduce project risks and delays",
    "Improve user adoption and training",
    "Learn ERP best practices",
    "Ensure successful go-live planning",
    "Optimize long-term business performance",
  ];

  const phases = [
    "Project Planning",
    "Requirements Gathering",
    "Solution Design",
    "System Configuration",
    "User Acceptance Testing (UAT)",
    "Go-Live Deployment",
    "Continuous Support & Optimization",
  ];

  return (

      <div className="min-h-screen bg-white text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-white">
      <Navbar />

      {/* Hero Banner */}
       <section className="relative flex items-center justify-center h-[420px] overflow-hidden">
        <img
          src="/Erpguide.jpg"
          alt="ERP Implementation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl  font-bold"
          >
            ERP Implementation Blueprint
          </motion.h1>
          </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl px-6 py-16 mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Complete ERP Deployment Roadmap
        </h2>

        <p className="text-lg leading-8 text-gray-600">
          ERP implementation is a structured process that
          helps organizations integrate business functions
          such as finance, operations, supply chain,
          inventory, sales, and customer service into a
          single platform. This blueprint guides your team
          through every stage required for a successful ERP
          transformation.
        </p>
      </section>

      {/* Lifecycle */}
      <section className="bg-white py-16">
        <div className="max-w-7xl px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">
            ERP Implementation Lifecycle
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl font-bold text-blue-600">
                  0{index + 1}
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  {phase}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl px-6 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">
            Why Read This Guide?
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="p-6 bg-white shadow rounded-xl"
              >
                <CheckCircle
                  size={30}
                  className="mb-4 text-green-500"
                />

                <p className="text-gray-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-white bg-gray-900">
        <div className="max-w-6xl px-6 py-24 mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Ready to Start Your ERP Journey?
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            Speak with our Dynamics 365 implementation
            experts and accelerate your digital
            transformation.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 mt-8 font-medium text-white transition bg-blue-600 rounded-xl hover:bg-blue-700"
          >
            Contact Experts
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}