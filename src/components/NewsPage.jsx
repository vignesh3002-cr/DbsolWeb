import { motion } from "framer-motion";

const newsData = [
  {
    date: "Jan 2026",
    title: "Dynamics 365 Implementation Success",
    desc: "Delivered a full-scale Dynamics 365 solution improving operational efficiency by 35%.",
    image: "/images/D365_implemented.png",
  },
  {
    date: "Oct 2025",
    title: "Azure Cloud Expansion",
    desc: "Enhanced services with secure and scalable Azure integrations.",
    image: "/images/Azure_cloud_expansion.png",
  },
  {
    date: "Aug 2025",
    title: "50+ Client Milestone",
    desc: "Successfully completed over 50 ERP and Dynamics 365 deployments.",
    image: "/images/50+clients_Milestones.png",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Latest News & Updates
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay updated with our latest achievements, client success stories,
            and innovations in Dynamics 365 solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover transform hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  {item.date}
                </span>

                <h3 className="text-lg font-semibold text-gray-800 mt-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-3">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition">
            View All News
          </button>
        </motion.div>

      </div>
    </section>
  );
}