import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Testimonials from "../../components/Testimonial"
import { HashLink } from "react-router-hash-link"

import {
  FaTruck,
  FaWarehouse,
  FaShippingFast,
  FaRoute,
  FaBoxes,
  FaChartLine,
  FaClipboardList,
  FaCog,
  FaArrowRight,
} from "react-icons/fa"

export default function LogisticsSupplyChain() {
  const challenges = [
    "Fragmented warehouse and transportation visibility",
    "Manual inventory tracking and poor stock accuracy",
    "Inefficient procurement and supplier coordination",
    "High logistics costs and delayed order fulfilment",
  ]

  const solutions = [
    {
      icon: FaTruck,
      title: "Transportation Management",
      desc: "Reduce freight costs, improve route planning, and gain full control over shipment movements.",
    },
    {
      icon: FaWarehouse,
      title: "Warehouse Optimization",
      desc: "Streamline receiving, storage, picking, packing, and dispatch across warehouses and distribution centers.",
    },
    {
      icon: FaShippingFast,
      title: "Last-Mile Delivery",
      desc: "Improve tracking, customer communication, and delivery performance across the final mile.",
    },
    {
      icon: FaRoute,
      title: "Route Optimization",
      desc: "Plan efficient delivery routes to reduce fuel use, travel time, and operational delays.",
    },
    {
      icon: FaBoxes,
      title: "Inventory Intelligence",
      desc: "Create real-time inventory visibility across locations for better working capital and service levels.",
    },
    {
      icon: FaChartLine,
      title: "Supply Chain Analytics",
      desc: "Use predictive insights to improve forecasting, monitor KPIs, and minimize disruption risks.",
    },
  ]

  const implementationSteps = [
    "Process assessment and requirement mapping",
    "Warehouse and inventory workflow design",
    "System configuration and integration",
    "Data migration and user training",
    "Go-live support and performance optimization",
  ]

  const faqs = [
    {
      q: "How does Dynamics 365 improve supply chain visibility?",
      a: "It connects warehouse, inventory, purchasing, transportation, and sales data in one view so teams can monitor performance and make faster decisions.",
    },
    {
      q: "Can DBSol support warehouse management and procurement processes?",
      a: "Yes. We design solutions for warehouse workflows, vendor management, replenishment, stock movement, and end-to-end logistics execution.",
    },
    {
      q: "What types of logistics businesses benefit from this solution?",
      a: "Manufacturing, distribution, third-party logistics, retail, and service businesses can all benefit from better visibility and process automation.",
    },
    {
      q: "Do you provide support after implementation?",
      a: "Yes. We offer post-go-live optimization, training, integration support, and continuous improvement based on your business goals.",
    },
  ]

  const cases = [
    {
      id: "logistics",
      title: "Integrated Logistics Platform Deployment",
      industry: "Logistics & Supply Chain",
      desc: "Unified transportation, warehouse, and inventory systems using Dynamics 365 to improve delivery control and operational efficiency.",
      result: "35% reduction in logistics costs",
      image: "/images/L&SC_2.jpg",
      tag: "bg-indigo-200 text-indigo-900",
    },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/L&SC_1.jpg"
            className="h-full w-full object-cover"
            alt="Logistics supply chain management"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-40 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-4xl font-black tracking-tight lg:text-4xl"
          >
            Microsoft Dynamics 365 for Logistics & Supply Chain Management
          </motion.h1>

          <p className="mt-6 max-w-3xl text-md leading-8 text-gray-200">
            DBSol Technologies helps logistics and supply chain businesses improve operational visibility through Microsoft Dynamics 365 solutions. From warehouse management and inventory tracking to procurement and transportation workflows, our ERP implementation services help businesses connect processes, improve coordination and make data-driven decisions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact-us/"
              className="rounded-lg bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Talk to Experts
            </Link>
            <HashLink
              to="#case-studies"
              className="rounded-lg border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              View Case Studies
            </HashLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                 Common Challenges in Logistics and Supply Chain Management
              </h2>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
                {challenges.map((challenge) => (
                  <li key={challenge}>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
              <div className="mb-5 flex items-center gap-3">
                <FaClipboardList className="text-2xl text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Why operations slow down
                </h3>
              </div>
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                Many logistics businesses rely on disconnected tools across procurement, warehousing, sales, and transport. Without unified data, teams struggle to track inventory movement, reconcile shipments, and respond to delays in time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white lg:text-3xl">
             How Dynamics 365 Improves Supply Chain Visibility
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Real-time inventory visibility across locations",
              "Improved forecasting and demand planning",
              "Connected workflows between warehouse, sales, and procurement teams",
            ].map((item) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={item}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-slate-700"
              >
                <FaChartLine className="mb-4 text-3xl text-blue-600" />
                <p className="text-lg leading-7 text-gray-700 dark:text-gray-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white lg:text-3xl">
             Warehouse and Inventory Management
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 3).map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
                  <Icon className="mb-5 text-3xl text-blue-600" />
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white lg:text-3xl">
             Procurement and Transportation Management
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(3).map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
                  <Icon className="mb-5 text-3xl text-blue-600" />
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white lg:text-3xl">
             Our Implementation Approach
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {implementationSteps.map((step, index) => (
              <div key={step} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-slate-700">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  {index + 1}
                </div>
                <p className="text-base leading-7 text-gray-700 dark:text-gray-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-3xl">
             Frequently Asked Questions
          </h2>
          <div className="hidden items-center gap-2 text-blue-600 md:flex">
            <FaCog />
            <span className="font-medium">Logistics ERP expertise</span>
          </div>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-slate-700">
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{faq.q}</h3>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-white shadow-xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">Logistics transformation</p>
              <h2 className="text-3xl font-bold">Ready to improve your supply chain operations?</h2>
            </div>
            <Link
              to="/contact-us/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Talk to Our Experts <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section id="case-studies" className="mx-auto max-w-5xl px-6 pb-20">
        <p className="mb-2 text-xs font-medium uppercase tracking-[2px] text-gray-500">Case Study</p>
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Featured Project</h2>

        <div className="grid gap-6">
          {cases.map((item, index) => (
            <Link to={`/case-studies/${item.id}/`} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="relative h-44">
                  <img src={item.image} className="h-full w-full object-cover" alt={item.title} />
                  <span className={`absolute bottom-3 left-4 rounded-full px-3 py-1 text-xs font-medium ${item.tag}`}>
                    {item.industry}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>

                  <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {item.result}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}

          <Testimonials limit={2} />
        </div>
      </section>

      <Footer />
    </div>
  )
}