import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const slides = [
    {
      title: "Microsoft Dynamics 365 Finance & Operations Solutions",
      desc: "Empowering enterprises with scalable ERP solutions, seamless financial management, and operational excellence.",
      img: "/images/Home1.jpg",
    },
    {
      title: "Professional Web Development",
      desc: "Building modern, responsive, and scalable websites for businesses using cutting-edge technologies.",
      img: "/images/Home2.jpg",
    },
    {
      title: "Mobile App Development",
      desc: "Creating powerful Android and iOS applications designed to deliver exceptional user experiences.",
      img: "/images/Home3.jpg",
    },
  ];

  const [curnt, setCurrent] = useState(0);
 const scrollRef = useRef(null);
const scrollLeft = () => {
  setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
};

const scrollRight = () => {
  setCurrent((prev) => (prev + 1) % slides.length);
};
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen">
      {/* Background */}
       <button
    onClick={scrollLeft}
    className="bg-black/40 dark:bg-white/40 w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-2xl absolute top-[40%] left-4 z-30 hover:bg-gray-800 transition "
  >
    <svg className="w-5 h-5 rotate-180 fill-current text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
  </button>  
  <button
    onClick={scrollRight}
    className="bg-black/40 dark:bg-white/40  dark:text-black w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-2xl absolute top-[40%] right-4 z-30 hover:bg-gray-800 transition"
  >
   <svg className="w-5 h-5 fill-current text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg> 
  </button>
      <img
        src={slides[curnt].img}
        alt="Hero Background"
        className="absolute object-cover w-full h-full transition-all duration-1000"
      />
      <div ref={scrollRef} className="absolute inset-0 bg-black/60 overflow-x-auto scrollbar-hide "></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 mx-auto max-w-7xl">
          
        {/* Sliding Steps */}
        

  
        <motion.div
          key={curnt}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            {slides[curnt].title}
          </h1>

          <p className="mb-8 text-lg text-gray-200 max-w-md">
            {slides[curnt].desc}
          </p>
          
          <div className="flex gap-4">


            {/* 🔥 THIS BUTTON WORKS 
            <HashLink smooth to="/services#services">

            {/* Services button */}
            <HashLink smooth to="/#clients-section">

              <button className="px-6 py-3 font-semibold bg-blue-600 rounded-lg hover:bg-blue-700">
                Explore Services
              </button>
            </HashLink>

       
            {/* Contact button */}
            <button
              onClick={() => navigate("/Contact")}
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
        </div>

      {/* Indicators */}
      <div className="absolute flex gap-3 -translate-x-1/2 bottom-10 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              curnt === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
      
    </section>
  )
}
