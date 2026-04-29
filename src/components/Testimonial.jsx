import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Testimonials({ limit, minimal }) {

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Finance Director",
      company: "Enterprise Manufacturing Ltd",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "DBSol helped us successfully implement Dynamics 365 Finance & Operations. Their expertise and professionalism significantly improved our financial workflows."
    },
    {
      name: "Sarah Johnson",
      role: "IT Manager",
      company: "Retail Solutions Group",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "The DBSol team delivered a high-quality responsive website and enterprise integrations. Their team understands business requirements perfectly."
    },
    {
      name: "David Chen",
      role: "Operations Head",
      company: "Global Logistics Corp",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      review: "Outstanding consulting services. Their Dynamics 365 implementation streamlined our supply chain and improved operational efficiency."
    },
    {
      name: "Priya Nair",
      role: "CEO",
      company: "Healthcare Innovations",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review: "Professional team with deep technical expertise. They built our mobile app and enterprise backend perfectly."
    }
  ]

  // ✅ Apply limit
  const items = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className={`${minimal ? "" : "bg-gray-50 dark:bg-gray-900"}`}>
        <br></br>
      <div className={`${minimal ? "" : "px-6 mx-auto max-w-7xl rounded-xl"}`}>

        {/* ✅ Hide title in minimal mode */}
        {!minimal && (
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500">
              Trusted by businesses across industries for delivering reliable
              Dynamics 365 solutions, web platforms, and mobile applications.
            </p>
          </div>
        )}

        {/* Grid */}
        <div className={`grid gap-8 ${minimal ? "" : "md:grid-cols-2 lg:grid-rows-1"}`}>

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
            >

              {/* Review */}
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                "{item.review}"
              </p>

              {/* Stars */}
              <div className="flex mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* ✅ Hide CTA in minimal mode */}
      {/*{!minimal && (
        <section className="py-20 mt-12 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800">
          <h2 className="mb-6 text-4xl font-bold">
            Start Your Journey Today
          </h2>

          <p className="max-w-2xl mx-auto mb-10 text-blue-100">
            We empower enterprises with intelligent ERP, low-code platforms,
            automation, and insights that reduce complexity and accelerate digital transformation.
          </p>

          <Link
            to="/contact"
            className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
          >
            Get Started
          </Link>
        </section>
      )}*/}
<br></br>
    </section>
  )
}