import React from "react";
import Navbar from "../.././src/components/Navbar"
import Footer from "../components/Footer";
export default function ContactPage() {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-slate-900 text-white">   
      {/* 🔥 TOP HERO IMAGE */}
      <div className="relative h-[300px] md:h-[400px]">

        {/* Background Image */}
        <img
          src="/images/contact-banner.jpg" // 👈 your image path
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text on Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Our Experts
          </h1>
          <p className="text-gray-300 mt-2">
            We’re here to help you grow your business
          </p>
        </div>
      </div>

      {/* 🔵 CONTACT FORM SECTION */}
      <div className="flex justify-center px-6 py-16">

        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-10">

          <h2 className="text-2xl font-semibold text-center mb-6">
            Get in Touch
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="md:col-span-2 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none"
            ></textarea>

            <div className="md:col-span-2 text-center">
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg transition">
                Contact Our Experts
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}