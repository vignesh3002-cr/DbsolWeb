import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function ContactExperts() {

  const experts = [
    {
      title: "Expert Support",
      desc: "Talk to our specialists",
      image:"/images/COE-1.jpg",
      name: "Arun Kumar",
      role: "Finance Consultant",
      email: "arun@example.com",
    },
    {
      title: "Business Solutions",
      desc: "Tailored strategies",
      image:"/images/COE-1.jpg",
      name: "Priya Sharma",
      role: "Operations Specialist",
      email: "priya@example.com",
    },
    {
      title: "24/7 Assistance",
      desc: "We are always available",
      image:"/images/COE-1.jpg",
      name: "Rahul Verma",
      role: "Supply Chain Expert",
      email: "rahul@example.com",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen dark:bg-gray-200 text-white">

        {/* 🔥 HERO */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src="/images/contact-banner.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="mb-4 absolute inset-0 flex flex-col items-center justify-center">
            <motion.h1
            id=""
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="text-5xl font-bold mb-4"
            >
          Contact Our Experts

            </motion.h1>
           <p1>We’re here to help you grow your business
            </p1>
            <p2 className="text-gray-300 mt-3">
              <Link to="/" className="hover:text-blue-400">Home</Link>
               <span className="mx-2">➜</span>
               <span className="text-blue-400">Contact Our Experts</span>      
            </p2>
           
           
          
          
          </div>
        </div>

        {/* 🔵 EXPERT CARDS */}
       <div className="bg-gray-200 dark:bg-gray-800 grid grid-cols-1 md:grid-cols-3 gap-10 p-10 rounded-lg">

  {experts.map((item, index) => (
    <div
      key={index}
      className="bg-blue-500 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
    >

      {/* 🔹 TOP BLUE SECTION */}
     <div className="bg-blue-500 p-2 flex items-center justify-center">
         <img
           src={item.image}
           alt={item.name}
           className="w-[200px] h-[200px] object-cover border-4 border-white dark:border-black rounded-full"
           />

      </div>

      {/* 🔹 BOTTOM DETAILS */}
      <div className="bg-blue-200 p-6 rounded-b-2xl text-center relative">
          
                <h3 className="text-black font-semibold text-lg">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm">
          {item.desc}
        </p>

        <h2 className="text-blue-500 font-semibold mt-2">
          {item.name}
        </h2>

        <p className="text-gray-600 text-sm mb-4">
          {item.role}
        </p>

        {/* ✉️ EMAIL ICON */}
        <a
          href={`mailto:${item.email}`}
          className="absolute bottom-4 right-4 bg-blue-500 p-2 rounded-full "
        >
          <img
            src="/images/Emailicon.png"
            className="w-8 h-8 object-contain"
          />
        </a>

      </div>

    </div>
  ))}

</div>

        {/* 🔵 CONTACT FORM */}
        <div className="bg-blue-800 dark:bg-gray-800 flex justify-center px-8 py-10">
          <div className="dark:bg-gray-200 max-w-4xl w-full bg-white/90 p-10 rounded-xl text-black">

            <h2 className="text-2xl font-bold text-center mb-6">
              Contact Our Experts
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input placeholder="Name" className="p-3 bg-gray-100 rounded-lg" />
              <input placeholder="Email" className="p-3 bg-gray-100 rounded-lg" />
              <input placeholder="Phone" className="p-3 bg-gray-100 rounded-lg" />
              <input placeholder="Subject" className="p-3 bg-gray-100 rounded-lg" />

              <textarea
                placeholder="Message"
                className="md:col-span-2 p-3 bg-gray-100 rounded-lg"
              />

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg"
                >
                  Get in Touch
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}