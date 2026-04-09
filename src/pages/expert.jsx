import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactExperts() {

  const experts = [
    {
      title: "Expert Support",
      desc: "Talk to our specialists",
      image: "/images/contact-1.jpg",
      name: "Arun Kumar",
      role: "D365 Finance Consultant",
      email: "arun@example.com",
    },
    {
      title: "Business Solutions",
      desc: "Tailored strategies",
      image: "/images/contact-2.jpg",
      name: "Priya Sharma",
      role: "D365 Operations Specialist",
      email: "priya@example.com",
    },
    {
      title: "24/7 Assistance",
      desc: "We are always available",
      image: "/images/contact-3.jpg",
      name: "Rahul Verma",
      role: "Supply Chain Expert",
      email: "rahul@example.com",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen text-white">

        {/* 🔥 HERO */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src="/images/contact-banner.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Contact Our Experts</h1>
            <p className="text-gray-300 mt-2">
              We’re here to help you grow your business
            </p>
          </div>
        </div>

        {/* 🔵 EXPERT CARDS */}
        <div className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
          <div className="bg-black/10 grid grid-cols-1 md:grid-cols-3 gap-6">

            {experts.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden relative group">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-400">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>

                  <div className="mt-3">
                    <p className="text-blue-400 font-semibold">
                      {item.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {item.role}
                    </p>
                   <a
    href={`mailto:${item.email}`}
    className="absolute bottom-2 right-4 p-2">
    <img src="/images/Emailicon.png" className="w-12 h-12 object-contain" />
  </a>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* 🔵 CONTACT FORM */}
        <div className="flex justify-center px-6 py-10">
          <div className="max-w-4xl w-full bg-white p-10 rounded-xl text-black">

            <h2 className="text-2xl font-bold text-center mb-6">
              Contact Our Experts
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <input placeholder="Name" className="p-3 bg-gray-100 rounded" />
              <input placeholder="Email" className="p-3 bg-gray-100 rounded" />
              <input placeholder="Phone" className="p-3 bg-gray-100 rounded" />
              <input placeholder="Subject" className="p-3 bg-gray-100 rounded" />

              <textarea
                placeholder="Message"
                className="md:col-span-2 p-3 bg-gray-100 rounded"
              />

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded"
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