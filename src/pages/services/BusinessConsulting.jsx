import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import React from "react";

export default function BPage() {
  return (

     <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[380px]">

  <img
    src="/images/BC-IMG.jpg"
    alt="Business Consulting"
    className="absolute inset-0 object-cover w-full h-full"
  />
   <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 text-center text-white">

    <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Business Consulting Services
    </h1>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold"
    >
   
    </motion.h1>

    <p className="mt-3 text-gray-200">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <span className="mx-2">➜</span>
      <span className="text-blue-400">Business Consulting</span>
    </p>

  </div>

</section>

   <p className="md:text-left text-center mb-4 text-gray-600 dark:text-gray-300"></p>
  {/* OVERVIEW */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Business Consulting Overview
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          Our business consulting services are designed to help organizations
          achieve sustainable growth, improve operational efficiency, and adapt
          to evolving market demands. We work closely with businesses to
          understand their goals, identify challenges, and deliver strategic
          solutions that drive measurable results.
        </p>

        <p className="text-gray-600 leading-relaxed">
          By aligning business processes with modern enterprise solutions, we
          enable organizations to streamline workflows, enhance decision-making,
          and create a strong foundation for long-term success.
        </p>
      </div>

      {/* CONSULTING AREAS */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Consulting Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Business Process Transformation
              </h3>
              <p className="text-gray-600">
                Redesign and optimize core business processes to improve
                efficiency, reduce costs, and enhance productivity across
                departments.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Financial Management
              </h3>
              <p className="text-gray-600">
                Gain complete control over financial operations with improved
                reporting, budgeting, and real-time visibility into performance.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Supply Chain Optimization
              </h3>
              <p className="text-gray-600">
                Enhance supply chain visibility, streamline logistics, and
                ensure efficient inventory and warehouse management.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Customer Relationship Management
              </h3>
              <p className="text-gray-600">
                Strengthen customer engagement through improved sales,
                marketing, and service processes that build long-term
                relationships.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Data & Insights
              </h3>
              <p className="text-gray-600">
                Make informed decisions using real-time analytics, performance
                dashboards, and actionable business insights.
              </p>
            </div>

            {/* CARD 6 */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                Automation & Innovation
              </h3>
              <p className="text-gray-600">
                Automate repetitive processes and introduce innovative
                solutions to improve efficiency and accelerate business growth.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* APPROACH */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Our Consulting Approach
            </h2>

            <p className="text-gray-600 mb-4">
              We follow a structured and collaborative approach to deliver
              value-driven consulting services tailored to your business needs.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Understand business goals and challenges</li>
              <li>✔ Analyze current processes and systems</li>
              <li>✔ Design customized solutions</li>
              <li>✔ Implement and optimize continuously</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">
              Key Benefits
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Improved operational efficiency</li>
              <li>✔ Better decision-making capabilities</li>
              <li>✔ Scalable and flexible business processes</li>
              <li>✔ Enhanced customer satisfaction</li>
            </ul>
          </div>

        </div>
      </div>
      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-6 text-lg opacity-90">
          Let us help you unlock the full potential of Microsoft Dynamics 365 with cutting-edge web solutions.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      
      <Footer/>
    </div>
  );
}
