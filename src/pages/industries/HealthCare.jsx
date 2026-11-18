import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Testimonials from "../../components/Testimonial"
import { Helmet } from "react-helmet-async"

import {
  FaHospital,
  FaUserMd,
  FaHeartbeat,
  FaShieldAlt,
  FaDatabase,
  FaChartLine
} from "react-icons/fa"

export default function Healthcare() {

  const healthcareWorkflows = [
    { title: "Hospital and clinic operations", desc: "Connect finance and back-office workflows across facilities, departments and care teams. Improve coordination for purchasing, supplies, billing and operational reporting." },
    { title: "Healthcare procurement", desc: "Standardise purchasing workflows, approvals and supplier records. Track spend and purchasing activity to support timely access to the supplies teams need." },
    { title: "Healthcare inventory management", desc: "Improve visibility of stock across sites and stores, monitor replenishment needs and coordinate inventory records with procurement and finance." },
    { title: "Healthcare financial management", desc: "Bring budgets, payables, receivables and financial reporting into connected workflows to support clearer oversight of costs and operational performance." },
  ]

  const healthcareFaqs = [
    { q: "What are healthcare ERP solutions used for?", a: "Healthcare ERP solutions connect back-office processes such as finance, procurement, inventory and operational reporting. They can help hospitals, clinics and healthcare suppliers improve coordination and visibility." },
    { q: "How can Dynamics 365 support healthcare organisations?", a: "Dynamics 365 can support connected finance, purchasing, inventory and reporting workflows. The right configuration depends on each organisation’s systems, processes and integration requirements." },
    { q: "Can DBSol help with healthcare ERP implementation and integration?", a: "DBSol can assess requirements, plan implementation, configure relevant workflows, support data migration and coordinate integrations with existing business systems." },
    { q: "Does a healthcare ERP replace clinical systems?", a: "An ERP typically supports business operations such as finance, procurement and inventory. Clinical and patient record systems have separate needs, so integration scope should be defined during discovery." },
  ]

  const solutions = [
    {
      icon: FaHospital,
      title: "Hospital Management Systems",
      desc: "Integrated platforms to streamline hospital operations and patient care.",
    },
    {
      icon: FaUserMd,
      title: "Digital Patient Records",
      desc: "Secure electronic health records with real-time patient data access.",
    },
    {
      icon: FaHeartbeat,
      title: "Remote Healthcare Services",
      desc: "Telemedicine and remote patient monitoring solutions.",
    },
    {
      icon: FaShieldAlt,
      title: "Healthcare Data Security",
      desc: "Advanced security frameworks to protect sensitive medical data.",
    },
    {
      icon: FaDatabase,
      title: "Healthcare Data Platforms",
      desc: "Centralized data platforms for analytics and interoperability.",
    },
    {
      icon: FaChartLine,
      title: "Medical Analytics",
      desc: "Insights-driven analytics to improve treatment and operations.",
    },
  ]

  const cases = [
    {
      id: "healthcare",
      title: "Healthcare ERP Transformation",
      industry: "Healthcare",
      desc: "Implemented ERP automation and analytics for hospital operations.",
      result: "50% faster reporting & improved patient outcomes",
      image: "/images/HC_2.jpg",
      tag: "bg-rose-200 text-rose-900",
    },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Dynamics 365 for Healthcare Organisations | DBSol Technologies</title>
        <meta name="description" content="Explore healthcare ERP solutions from DBSol. Connect financial management, procurement, inventory and operational workflows with Microsoft Dynamics 365." />
        <link rel="canonical" href="https://www.dbsoltechnologies.com/industries/healthcare/" />
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/HC_1.jpg"
            alt="Healthcare Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-40 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-4xl font-bold max-w-3xl"
          >
            Microsoft Dynamics 365 Solutions for Healthcare Organisations
          </motion.h1>

          <p className="mt-6 text-md text-gray-200 max-w-2xl">
            DBSol Technologies helps healthcare organisations streamline
            financial management, procurement, inventory and operational
            processes through Microsoft Dynamics 365. Our ERP solutions support hospitals, clinics and healthcare suppliers with integrated business workflows, improved reporting and better operational visibility.

          </p>

          <div className="mt-10 flex gap-4">
            <Link
              to="/contact-us/"
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
            ["50%+", "Faster Patient Data Access"],
            ["40%+", "Operational Efficiency Improvement"],
            ["99%", "Healthcare Data Security"],
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-16">
            What Are the ERP Challenges Faced by Healthcare Organisations?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Coordinating finance, purchasing and inventory across hospitals, clinics and multiple locations",
              "Maintaining visibility of healthcare supplies, stock levels and replenishment needs",
              "Reducing manual hand-offs between procurement, operations and finance teams",
              "Producing timely financial and operational reports from disconnected systems",
            ].map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <p className="text-gray-700 dark:text-gray-300 text-md">
                  {c}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-28 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-20">
            How Can Dynamics 365 Improve Healthcare Operations?
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

                <h3 className="text-xl text-black dark:text-white font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Healthcare ERP Implementation and Integration
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              Our healthcare ERP implementation approach starts with discovery
              and process mapping, followed by solution design, configuration,
              data migration, integration planning, user testing, training and
              go-live support. Scope is tailored to the organisation and its
              existing clinical and business systems.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Discovery and design", "Document current workflows, reporting needs, systems and implementation priorities."],
              ["Configuration and migration", "Configure agreed ERP processes and plan data preparation, migration and validation."],
              ["Integration and testing", "Define interfaces with relevant existing systems and test end-to-end business workflows."],
              ["Training and support", "Prepare users for launch and provide post-implementation support for the delivered solution."],
            ].map(([title, desc]) => (
              <article key={title} className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Financial Management and Procurement Automation
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed text-gray-600 dark:text-gray-300">
            Healthcare financial management connects budgets, purchasing,
            supplier activity and reporting. Healthcare procurement solutions
            can organise requisitions, approvals and purchasing records, while
            inventory management helps teams see stock and replenishment needs
            across locations.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {healthcareWorkflows.map((item) => (
              <article key={item.title} className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
                <h3 className="mb-3 font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section
        id="case-studies"
        className="py-16 max-w-5xl mx-auto px-6"
      >
        <p className="text-xs tracking-[2px] uppercase text-gray-400 font-medium mb-2">
          Case Study
        </p>

        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Healthcare ERP Case Study
        </h2>

        <div className="grid gap-5">
          {cases.map((item, index) => (
            <Link to={`/case-studies/${item.id}/`} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span className={`absolute bottom-3 left-4 text-xs px-3 py-1 rounded-full ${item.tag}`}>
                    {item.industry}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
                  <div className="text-xs bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg">
                    {item.result}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}

          <Testimonials limit={2} />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Why Choose DBSol for Healthcare ERP?
          </h2>
          <p className="mb-8 text-center leading-relaxed text-gray-600 dark:text-gray-300">
            DBSol brings Microsoft Dynamics 365 implementation experience to
            healthcare business processes. We work with your stakeholders to
            define practical scope, connect relevant workflows and plan
            adoption around your operational requirements.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Healthcare-focused process discovery", "ERP configuration aligned to agreed requirements", "Data migration and integration planning", "User training and post-go-live support"].map((item) => (
              <div key={item} className="rounded-xl bg-white p-5 text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {healthcareFaqs.map(({ q, a }) => (
              <details key={q} className="rounded-xl border border-gray-200 p-5 dark:border-gray-700">
                <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">{q}</summary>
                <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-indigo-700 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-white">
          Transform Healthcare with Digital Innovation
        </h2>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Improve patient care, streamline operations, and secure healthcare
          data with modern digital platforms.
        </p>

        <Link
          to="/contact-us/"
          className="inline-block mt-10 px-10 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Talk to Our Experts
        </Link>
      </section>

      <Footer />
    </div>
  )
}
