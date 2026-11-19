import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  const slides = [
    {
      title: "Transform Your Enterprise with Microsoft Dynamics 365",
      desc: `DBSol Technologies helps businesses modernise their financial
             operations, supply chains and enterprise processes through Microsoft
             Dynamics 365 implementation, ERP consulting, data migration and
             customised technology solutions.`,
      img: "/images/Home1.jpg",
    },
];

  const [curnt, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen">
      <img
        src={slides[curnt].img}
        alt="Hero Background"
        className="absolute object-cover w-full h-full transition-all duration-1000"
        width="1920"
        height="1080"
        fetchPriority="high"
        decoding="async"
      />
      <div ref={scrollRef} className="absolute inset-0 bg-black/60 overflow-x-auto scrollbar-hide "></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 mx-auto max-w-7xl">
          
        {/* Sliding Steps */}
        
      <motion.div
          key={curnt}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 ,ease:"easeInOut"}}
          className="max-w-2xl text-white"
        >
          <h1 className="mb-6 text-4xl font-bold">
            {slides[curnt].title}
          </h1>

          <p className="mb-8 text-md text-gray-200 max-w-md">
            {slides[curnt].desc}
          </p>
          
          <div className="flex gap-4">


            <HashLink smooth to="/contact-us/">

              <button className="px-6 py-3 font-semibold bg-blue-600 rounded-lg hover:bg-blue-700">
                Book a Free D365 Assessment 
              </button>
            </HashLink>
            <HashLink smooth to="/#clients-section">
              <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black">
                Explore Our Solutions
              </button>
            </HashLink>
          </div>
        </motion.div>
        </div>
    </section>

      );
    };
    