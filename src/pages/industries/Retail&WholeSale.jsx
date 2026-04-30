import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Testimonials from "../../components/Testimonial"

import {
  FaShoppingCart,
  FaStore,
  FaTruck,
  FaChartLine,
  FaUsers,
  FaBoxOpen
} from "react-icons/fa"

export default function RetailWholesale() {

  const solutions = [
    {
      icon: FaStore,
      title: "Omnichannel Retail Platforms",
      desc: "Integrate online, in-store, and mobile commerce into one seamless retail experience.",
    },
    {
      icon: FaShoppingCart,
      title: "Smart Inventory Management",
      desc: "Maintain real-time inventory visibility across stores and warehouses.",
    },
    {
      icon: FaTruck,
      title: "Supply Chain Optimization",
      desc: "Reduce delivery delays and improve logistics efficiency end-to-end.",
    },
    {
      icon: FaChartLine,
      title: "Retail Analytics",
      desc: "Analyze customer behavior, demand patterns, and sales performance.",
    },
    {
      icon: FaUsers,
      title: "Customer Experience Management",
      desc: "Deliver personalized shopping experiences using CRM and AI insights.",
    },
    {
      icon: FaBoxOpen,
      title: "Warehouse Automation",
      desc: "Optimize warehouse operations with smart automation and tracking.",
    },
  ]

  const cases = [
    {
      id: "retail",
      title: "Retail Inventory Optimization",
      industry: "Retail & Wholesale",
      desc: "Unified multi-store inventory using Dynamics 365 with real-time stock visibility.",
      result: "35% reduction in inventory holding costs",
      image: "/images/R&W_2.jpeg",
      tag: "bg-purple-200 text-purple-900",
    },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/R&W_1.jpeg"
            alt="Retail industry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-40 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-bold max-w-3xl"
          >
            Retail & Wholesale Solutions
          </motion.h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl">
            Modernize retail operations with unified commerce, intelligent inventory,
            and customer-centric digital platforms.
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
            ["35%+", "Inventory Cost Reduction"],
            ["45%+", "Faster Order Fulfillment"],
            ["99%", "Stock Accuracy"],
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
            Retail Challenges We Solve
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Managing inventory across multiple stores and warehouses",
              "Lack of real-time product availability visibility",
              "Inconsistent customer experiences across channels",
              "Complex logistics and supply chain operations",
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
            Our Retail & Wholesale Capabilities
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
        <p className="text-xs tracking-[2px] uppercase text-gray-400 font-medium mb-2">
          Case Study
        </p>

        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Featured Project
        </h2>

        <div className="grid gap-5">
          {cases.map((item, index) => (
            <Link to={`/case-studies/${item.id}`} key={item.id}>
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

      {/* CTA */}
      <section className="py-32 text-center bg-blue-600">
        <h2 className="text-4xl font-bold text-white">
          Transform Your Retail Operations
        </h2>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Enable unified commerce, optimize inventory, and deliver exceptional
          customer experiences.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 px-10 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Talk to Our Experts
        </Link>
      </section>

      <Footer />
    </div>
  )
}
``