import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import UATSection from "../components/UAT"

/* Animated Counter */
function Counter({ value, suffix = "", duration = 1.6 }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.span
        initial={{ value: 0 }}
        animate={{ value }}
        transition={{ duration, ease: "easeOut" }}
      >
        {Math.round(value)}
      </motion.span>
      {suffix}
    </motion.span>
  )
}

export default function CaseStudyDetail() {
  const { id } = useParams()

  const cases = {
    manufacturing: {
      title: "Manufacturing ERP Implementation",
      Link: "/manufacturing",
      industry: "Manufacturing Case Study",
      image: "/images/Manufacturing.jpeg",
      challenge:
        "The client faced operational inefficiencies due to disconnected financial and production systems.",
      solution:
        "We implemented Microsoft Dynamics 365 Finance & Operations to unify financial management, production planning, and supply chain processes.",
      result:
        "40% increase in operational efficiency and improved reporting visibility.",
    },
    Finance: {
    title: "Finance & Banking",
    Link:   "/FinanceBanking",
    industry: "Finance Case Study",
    image: "/images/F&B_2.jpeg",
    challenge:
        "The bank faced inefficiencies due to siloed customer data, manual loan processing, and limited real-time financial visibility.",
    solution:
        "We implemented Microsoft Dynamics 365 to centralize customer data, automate loan workflows, enhance compliance tracking, and enable real-time financial reporting.",
    result:
        "35% reduction in manual workload, faster loan processing, and improved decision-making with real-time insights."
    },

    retail: {
      title: "Retail Inventory Optimization",
      Link: "/Retail&Wholesale",
      industry: "Retail",
      image: "/images/Retail_1.jpeg",
      challenge:
        "Retail chain struggled with stock management across multiple warehouses.",
      solution:
        "We built an advanced inventory management system integrated with ERP.",
      result:
        "35% reduction in inventory costs and improved stock accuracy.",
    },

    healthcare: {
      title: "Healthcare ERP Transformation",
      Link: "/HealthCare",
      industry: "Healthcare",
      image: "/images/Healthcare_1.jfif",
      challenge:
        "Healthcare provider had slow financial reporting and manual processes.",
      solution:
        "Implemented ERP automation and real-time reporting dashboards.",
      result:
        "50% faster financial reporting and better operational transparency.",
    },

    logistics: {
      title: "Logistics Supply Chain Automation",
      industry: "Logistics",
      image: "/images/Logistics_1.jpeg",
      challenge:
        "Manual logistics operations caused delays in order fulfillment.",
      solution:
        "Implemented supply chain automation with real-time tracking.",
      result:
        "60% faster order processing and improved delivery performance.",
    },
    education: {
      title: "Education Technology",
      Link: "/Education",
      industry: "Education",
      image: "/images/ET_1.jpeg",
      challenge:
        "Disconnected academic systems and manual processes made it difficult to manage student records, learning delivery, and performance tracking efficiently.",
      solution:
        "Implemented an integrated education platform combining Learning Management Systems (LMS), student information systems, and real-time analytics.",
      result:
        "50% faster academic administration and significantly improved student engagement.",
    },
hospitality: {
  title: "Hospitality",
  Link: "/hospitality",
  industry: "Hospitality  Dynamics Case Study",
  image: "/images/HT_2.jpeg",

  challenge:
    "Fragmented reservation systems, disconnected guest data, and manual service workflows limited real-time visibility across hotel operations, finance, and guest engagement teams. This resulted in inconsistent guest experiences, revenue leakage, and slow operational decision-making.",

  solution:
    "Implemented Microsoft Dynamics 365 to unify reservations, guest CRM, finance, and service operations on a single platform. Enabled real-time guest insights, automated service workflows, and seamless integration across front desk, housekeeping, restaurant, and finance teams to deliver personalized and efficient guest experiences.",

  result:
    "55% faster reservation and service processing, improved guest satisfaction and loyalty, reduced operational inefficiencies, enhanced revenue visibility, and greater agility in managing peak demand and seasonal fluctuations."
},
it_ites: {
  title: "IT & ITES",
  Link: "/it-ites",
  industry: "IT & ITES – Dynamics 365 Case Study",
  image: "/images/IT_2.jfif",

  challenge:
    "Disparate service management tools, disconnected customer and project data, and manual financial processes limited real-time visibility across IT operations, delivery teams, and finance. This led to delayed service delivery, SLA breaches, cost overruns, and reduced customer satisfaction.",

  solution:
    "Implemented Microsoft Dynamics 365 to unify service delivery, customer engagement, project operations, and financial management on a single platform. Enabled real-time visibility into service requests, resource utilization, SLAs, and financial performance while automating workflows across IT operations, support, and billing teams.",

  result:
    "45% faster service delivery, improved SLA compliance, reduced operational costs, enhanced visibility across projects and finance, and increased agility in scaling IT and ITES service operations."
}
  }

  const caseData = cases[id]

  if (!caseData) {
    return (
      <div className="p-20 text-center text-xl">
        Case Study Not Found
      </div>
    )
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative flex items-center justify-center h-[420px]">
        <img
          src={caseData.image}
          className="absolute inset-0 object-cover w-full h-full"
          alt={caseData.title}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold"
          >
            {caseData.title}
          </motion.h1>

          <p className="mt-4 text-gray-200">
            <Link to="/" className="hover:text-blue-300">Home</Link> ➜{" "}
            <Link to={caseData.Link}className="hover:text-blue-300"> {caseData.title} </Link> ➜
            <span>{caseData.industry}</span>
          </p>
        </div>
      </section>

      {/* KPI IMPACT SECTION */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Project Impact
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Operational Efficiency", value: 40, suffix: "%" },
              { label: "Cost Reduction", value: 30, suffix: "%" },
              { label: "Process Automation", value: 65, suffix: "%" },
              { label: "Reporting Accuracy", value: 99, suffix: "%" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-8 text-center rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-lg"
              >
                <p className="text-4xl font-bold text-blue-600">
                  <Counter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UAT */}
      <UATSection />

      {/* CHALLENGE */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Challenge
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {caseData.challenge}
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            Solution
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {caseData.solution}
          </p>
        </div>
      </section>

      {/* WHY IT WORKED */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Why This Worked
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Unified Platform",
                desc: "All core manufacturing, finance, and supply chain data brought under one ERP system.",
              },
              {
                title: "Real-Time Insights",
                desc: "Decision-makers gained dashboards for production, costs, and inventory.",
              },
              {
                title: "Scalable Design",
                desc: "Solution scaled easily across plants and geographies.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-700 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-3">
              Measurable Business Outcome
            </h2>
            <p className="text-lg">{caseData.result}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center bg-gradient-to-r from-blue-700 to-indigo-700">
        <h2 className="text-4xl font-bold text-white mb-6">
          Start Your Own Success Story
        </h2>
        <p className="text-blue-100 mb-10">
          Let us help you drive measurable transformation with ERP solutions.
        </p>
        <Link
          to="/contact"
          className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100"
        >
          Contact Our Experts
        </Link>
      </section>

      <Footer />
    </div>
  )
}