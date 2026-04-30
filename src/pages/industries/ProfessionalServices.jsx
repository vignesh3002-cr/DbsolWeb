import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Testimonials from "../../components/Testimonial"

import {
  FaBriefcase,
  FaUsers,
  FaProjectDiagram,
  FaHandshake,
  FaChartPie,
  FaFileInvoiceDollar
} from "react-icons/fa"

export default function ProfessionalServices() {

  const solutions = [
    {
      icon: FaBriefcase,
      title: "Project & Engagement Management",
      desc: "Plan, deliver, and track client engagements with full project visibility."
    },
    {
      icon: FaUsers,
      title: "Client Relationship Management",
      desc: "Centralize client data, interactions, and engagement history."
    },
    {
      icon: FaProjectDiagram,
      title: "Resource Planning",
      desc: "Optimize allocation of consultants across projects and timelines."
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Billing & Invoicing Automation",
      desc: "Automate time tracking, billing cycles, and revenue recognition."
    },
    {
      icon: FaHandshake,
      title: "Collaboration Platforms",
      desc: "Enable real-time collaboration between teams and clients."
    },
    {
      icon: FaChartPie,
      title: "Business Analytics",
      desc: "Gain insights into profitability, utilization, and project health."
    },
  ]

  const cases = [
    {
      id: "professionalservices",
      title: "Professional Services ERP Transformation",
      industry: "Professional_Services",
      desc: "Implemented Dynamics 365 to unify project, finance, and CRM systems.",
      result: "45% faster project delivery",
      image: "/images/PS_2.jpeg",
      tag: "bg-indigo-200 text-indigo-900",
    },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/PS_1.jpeg"
            className="w-full h-full object-cover"
            alt="Professional Services"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-40 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-bold max-w-3xl"
          >
            Technology Solutions for Professional Services
          </motion.h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl">
            Empower consulting and service organizations with intelligent project,
            client, and financial management platforms.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Talk to Experts
            </Link>
            <HashLink
              to="#case-studies"
              className="px-8 py-4 border border-white/30 rounded-lg hover:bg-white/10 transition"
            >
              View Case Studies
            </HashLink>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            ["45%", "Faster Project Delivery"],
            ["60%", "Improved Client Satisfaction"],
            ["70%", "Better Business Insights"],
          ].map((item, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-blue-600">{item[0]}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Professional Services Challenges We Solve
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Managing multiple client projects simultaneously",
              "Tracking billable hours and service profitability",
              "Maintaining strong client relationships",
              "Disconnected finance, HR, and project systems",
            ].map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  {c}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-28 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-20">
            Our Professional Services Capabilities
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, i) => (
              <motion.div
                whileHover={{ scale: 1.04 }}
                key={i}
                className="rounded-2xl p-8 bg-white/10 backdrop-blur-lg border border-white/20 text-white"
              >
                <div className="text-3xl text-blue-400 mb-4">
                  <item.icon />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section
        id="case-studies"
        className="py-16 max-w-5xl mx-auto px-6"
      >
        <p className="text-xs tracking-[2px] uppercase text-gray-400 mb-2">
          Case Study
        </p>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Featured Project
        </h2>

        {cases.map((item, index) => (
          <Link to={`/case-studies/${item.id}`} key={item.id}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="relative h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className={`absolute bottom-3 left-4 text-xs font-medium px-3 py-1 rounded-full ${item.tag}`}>
                  {item.industry}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg">
                  {item.result}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}

        <Testimonials limit={2} />
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-blue-600">
        <h2 className="text-4xl font-bold text-white">
          Ready to Elevate Your Professional Services?
        </h2>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Deliver projects faster, build stronger client relationships,
          and improve profitability with modern technology.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 px-10 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Start Your Transformation
        </Link>
      </section>

      <Footer />
    </div>
  )
}
