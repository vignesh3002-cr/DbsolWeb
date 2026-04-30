import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import RoleBasedTraining from "../components/trainingController"
import RoleplayScenario from "../components/roleplay"
import HyperCareSection from "../components/Post-Go-Live Support"

const cases = [
  {
    id: "manufacturing",
    title: "Manufacturing ERP Implementation",
    industry: "Manufacturing",
    desc: "Implemented Dynamics 365 Finance & Operations to unify plant-floor data with back-office finance, eliminating silos.",
    result: "40% improvement in operational efficiency",
    image: "/images/Manufacturing.jpeg",
    icon: "🏭",
    color: "bg-blue-50",
    tag: "bg-blue-200 text-blue-900",
  },
    {
    id: "Finance",
    title: "Finance & Banking Solutions",
    industry: "Finance",
    desc: "Microsoft Dynamics 365 helps banks manage financial operations like accounting, reporting, and compliance in one system.",
    result: "20–40% reduction in manual workload due to automation.",
    image: "/images/F&B_2.jpeg",
    icon: "🏭",
    color: "bg-blue-50",
    tag: "bg-blue-200 text-blue-900",
  },
  {
    id: "retail",
    title: "Retail Inventory Optimization",
    industry: "Retail",
    desc: "Developed an intelligent inventory management solution with real-time demand forecasting and automated replenishment.",
    result: "35% reduction in inventory costs",
    image: "/images/Retail_1.jpeg",
    icon: "🛍️",
    color: "bg-amber-50",
    tag: "bg-amber-200 text-amber-900",
  },
  {
    id: "healthcare",
    title: "Healthcare ERP Transformation",
    industry: "Healthcare",
    desc: "Implemented a unified healthcare ERP platform consolidating patient billing, compliance, and financial reporting.",
    result: "50% faster financial reporting",
    image: "/images/Healthcare_1.jfif",
    icon: "🏥",
    color: "bg-emerald-50",
    tag: "bg-emerald-200 text-emerald-900",
  },
  {
    id: "logistics",
    title: "Logistics Supply Chain Automation",
    industry: "Logistics",
    desc: "Designed an advanced supply chain system with end-to-end visibility, route optimization, and predictive analytics.",
    result: "60% faster order fulfillment",
    image: "/images/Logistics_1.jpeg",
    icon: "🚚",
    color: "bg-violet-50",
    tag: "bg-violet-200 text-violet-900",
  },
  {
    id: "education",
    title: "Education Digital Transformation Platform",
    industry: "Education",
    desc: "Implemented an integrated learning and student management platform with real-time analytics, digital classrooms, and centralized academic records.",
    result: "65% increase in student engagement",
    image: "/images/ET_2.jpeg",
    icon: "🎓",
    color: "bg-indigo-50",
    tag: "bg-indigo-200 text-indigo-900",
  },
    {
    id: "professional-services",
    title: "Professional Services ERP Transformation",
    industry: "Professional_Services",
    desc: "Implemented Dynamics 365 to unify project, finance, and CRM systems.",
    result: "45% faster project delivery",
    image: "/images/PS_2.jpeg",
    icon: "🎓",
    color: "bg-indigo-50",
    tag: "bg-indigo-200 text-indigo-900",
  },
{
  id: "hospitality",
  title: "Dynamics 365 Hospitality Services Transformation",
  industry: "Hospitality Services",
  desc: "Implemented Microsoft Dynamics 365 to unify property operations, guest CRM, finance, and service management into a single connected platform.",
  result: "45% faster service fulfillment and improved guest satisfaction",
  image: "/images/HT_2.jpeg",
  icon: "🏨",
  color: "bg-indigo-50",
  tag: "bg-indigo-200 text-indigo-900",
},
{
  id: "it_ites",
  title: "Dynamics 365 IT & ITES Services Transformation",
  industry: "IT & ITES Services",
  desc: "Implemented Microsoft Dynamics 365 to unify service delivery, CRM, finance, and project operations, enabling end-to-end visibility across IT services, resource management, and customer engagements.",
  result: "45% faster service delivery and improved operational efficiency",
  image: "/images/IT_2.jfif",
  icon: "💻",
  color: "bg-indigo-50",
  tag: "bg-indigo-200 text-indigo-900",
}
]


const metrics = [
  { num: "50+", label: "Projects delivered" },
  { num: "10+", label: "Industries served" },
  { num: "95%", label: "Client satisfaction" },
  { num: "30%", label: "Avg. efficiency increase" },
]

export default function CaseStudies() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[340px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
        <img
        src="/images/Casestudy.jpeg"
        alt="Case Studies"
        className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 40px)" }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-3xl md:text-5xl font-bold text-white text-center font-serif"
        >
          Client Success Stories
        </motion.h1>
        <p className="relative z-10 mt-3 text-blue-300 text-sm">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-blue-200">Case Studies</span>
        </p>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[2px] uppercase text-gray-400 dark:text-gray-500 font-medium mb-2">Our work</p>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Real business impact</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xl mb-10 leading-relaxed">
          Streamlining manufacturing and financial processes through automation — reducing manual overhead and increasing productivity across industries.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {cases.map((item, index) => (
            <Link to={`/case-studies/${item.id}`} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Card image / icon area */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <span className={`absolute bottom-3 left-4 text-xs font-medium px-3 py-1 rounded-full ${item.tag}`}>
                    {item.industry}
                  </span>
                </div>
                
                <div className="p-5">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium px-3 py-2 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    {item.result}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <RoleplayScenario />
      <HyperCareSection />
      <RoleBasedTraining />

      {/* METRICS */}
      <section className="border-t border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 text-center"
            >
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">{m.num}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-snug">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-20 text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-3">Become our next success story</h2>
        <p className="text-blue-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Our team helps businesses implement powerful ERP and digital transformation solutions tailored to your industry.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-900 font-medium text-sm px-7 py-3 rounded-lg hover:bg-blue-100 transition-colors"
        >
          Start your project <bold>→</bold>
        </Link>
      </section>

      <Footer />
    </div>
  )
}