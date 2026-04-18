import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from "react";

export default function BPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center h-[380px]">
        <img
          src="/images/BC-IMG.jpg"
          alt="Business Consulting"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Business Consulting Services
          </motion.h1>

           <p className="mt-4 text-gray-300">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <span className="mx-2">➜</span>
            <span className="text-blue-400">Business Consulting</span>
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Business Consulting Overview
      </h2>

      <p className="text-gray-600 mb-4 leading-relaxed">
        Our business consulting services help organizations adapt, scale,
        and compete in fast-changing markets. We partner with leadership teams
        to identify challenges, unlock opportunities, and deliver measurable impact.
      </p>

      <p className="text-gray-600 leading-relaxed">
        From process optimization to enterprise technology alignment,
        we create sustainable solutions that support long-term success.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <img
        src="/images/BC-IMG1.jpg"
        alt="Consulting"
        className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
      />
    </motion.div>

  </div>
</section>
      {/* VALUE PROPOSITION */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Strategic Growth</h3>
            <p className="text-gray-600">Focused strategies aligned with your business vision.</p>
          </div>
          <div className="p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Operational Excellence</h3>
            <p className="text-gray-600">Optimized processes to boost productivity and efficiency.</p>
          </div>
          <div className="p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Data‑Driven Decisions</h3>
            <p className="text-gray-600">Actionable insights for confident, informed leadership.</p>
          </div>
        </div>
      </section>

      {/* CONSULTING AREAS */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Consulting Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Process Transformation",
                desc: "Optimize and streamline workflows to improve productivity and reduce operational costs.",
              },
              {
                title: "Financial Management",
                desc: "Improve forecasting, budgeting, and financial visibility with integrated solutions.",
              },
              {
                title: "Supply Chain Optimization",
                desc: "Increase agility, visibility, and inventory efficiency across the supply chain.",
              },
              {
                title: "Customer Relationship Management",
                desc: "Enhance sales and service performance through customer‑centric processes.",
              },
              {
                title: "Data & Insights",
                desc: "Leverage analytics dashboards to guide smart, timely business decisions.",
              },
              {
                title: "Automation & Innovation",
                desc: "Automate repetitive tasks and introduce innovation to accelerate growth.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH & BENEFITS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Consulting Approach
            </h2>
            <p className="text-gray-600 mb-6">
              We follow a structured yet flexible methodology tailored to your
              business goals.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Business assessment & goal alignment</li>
              <li>✔ Process analysis & solution planning</li>
              <li>✔ Implementation & change management</li>
              <li>✔ Continuous optimization & support</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Increased operational efficiency</li>
              <li>✔ Scalable and adaptable processes</li>
              <li>✔ Improved profitability</li>
              <li>✔ Better customer experiences</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-indigo-700">25%</h3>
            <p className="text-gray-600">Operational Cost Reduction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-700">40%</h3>
            <p className="text-gray-600">Process Efficiency Gain</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-700">30%</h3>
            <p className="text-gray-600">Faster Decision Making</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-indigo-700">95%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="mb-6 text-lg opacity-90 max-w-2xl mx-auto">
          Partner with us to unlock efficiency, innovation, and long‑term value
          using modern enterprise solutions.
        </p>
        <button className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      <Footer />
    </div>
  );
}