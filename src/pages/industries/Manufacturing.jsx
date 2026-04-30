import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Testimonials from "../../components/Testimonial" 
import {
  FaIndustry,
  FaCogs,
  FaBoxes,
  FaChartLine,
  FaRobot,
  FaTruck
} from "react-icons/fa"
import { HashLink } from "react-router-hash-link"

export default function Manufacturing() {

  const solutions = [
    {
      icon: FaIndustry,
      title: "Smart Factory Enablement",
      desc: "Connect machines, systems, and people with intelligent manufacturing platforms.",
    },
    {
      icon: FaCogs,
      title: "Production Optimization",
      desc: "Improve throughput and reduce downtime using advanced planning & scheduling.",
    },
    {
      icon: FaBoxes,
      title: "Inventory Intelligence",
      desc: "Real-time inventory visibility across warehouses and plants.",
    },
    {
      icon: FaTruck ,
      title: "Supply Chain Visibility",
      desc: "End-to-end transparency from suppliers to customers.",
    },
    {
      icon: FaChartLine,
      title: "Predictive Analytics",
      desc: "Forecast demand and prevent disruptions with AI-driven insights.",
    },
    {
      icon: FaRobot,
      title: "Automation & Robotics",
      desc: "Integrate robotics and automation for faster, safer operations.",
    },
  ]
  
const cases = [
  {
    id: "manufacturing",
    title: "Manufacturing ERP Implementation",
    industry: "Manufacturing",
    desc: "Implemented Dynamics 365 to unify plant-floor and finance systems.",
    result: "40% improvement in operational efficiency",
    image: "/images/Manufacturing.jpeg",
    tag: "bg-blue-200 text-blue-900",
  },
]

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/MIS_1.jpeg"
            className="w-full h-full object-cover"
            alt="Manufacturing"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-40 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-bold max-w-3xl"
          >
            Manufacturing Solutions for the Digital Age
          </motion.h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl">
            Transform your manufacturing operations with intelligent platforms,
            real-time insights, and connected supply chains.
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
            ["40%+", "Efficiency Improvement"],
            ["30%+", "Inventory Reduction"],
            ["99%", "Operational Visibility"],
          ].map((item, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-blue-600">{item[0]}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-24  ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
            Manufacturing Challenges We Solve
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Lack of real-time shop-floor visibility",
              "Disconnected ERP and production systems",
              "Inefficient production planning",
              "Rising operational and logistics costs",
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
            Our Manufacturing Capabilities
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, i) => (
              <motion.div
                whileHover={{ scale: 1.04 }}
                key={i}
                className="rounded-2xl p-8 bg-white/10 backdrop-blur-lg border border-white/20 text-white"
              >
                <div className="text-3xl text-blue-400 mb-4">
                  {item.icon}
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

      {/* CASE STUDY CARD */}
      <section
      id="case-studies"
      className="py-16 max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[2px] uppercase text-gray-400 dark:text-gray-500 font-medium mb-2">Case Study</p>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Featured Project</h2>
        <div className="grid gap-5 md:grid-cols-1">
          {cases.map((item, index) => (
            <Link to={`/case-studies/${item.id}`} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
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
                  <br></br>
                  
                </div>
                
              </motion.div>
            </Link>
          ))}
          <Testimonials limit={2} />
        </div>
      </section>


      {/* CTA */}
      <section className="py-32 text-center bg-blue-600">
        <h2 className="text-4xl font-bold text-white">
          Ready to Transform Manufacturing?
        </h2>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Let’s modernize your factories, optimize operations, and drive measurable business outcomes.
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