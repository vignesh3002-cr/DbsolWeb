import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactExperts() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    alert("Message sent successfully!");

    form.current.reset();
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen text-white">

        {/* 🔥 HERO IMAGE */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src="/images/contact-banner.jpg"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] pointer-events-none"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Contact Our Experts
            </h1>
            <p className="text-gray-300 mt-2">
              We’re here to help you grow your business
            </p>
          </div>
        </div>

        {/* 🔵 IMAGE BOXES */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              { img: "/images/contact-1.jpg", title: "Expert Support", desc: "Talk to our specialists" },
              { img: "/images/contact-2.jpg", title: "Business Solutions", desc: "Tailored strategies" },
              { img: "/images/contact-3.jpg", title: "24/7 Assistance", desc: "We are always available" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg group bg-white/10 backdrop-blur-md">
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[250px] object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-900">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* 🔵 CONTACT FORM */}
        <div className="flex justify-center px-6 py-4">
          <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-10">

            <h2 className="text-4xl font-bold text-center mb-12 text-black">
              Contact Our Experts
            </h2>

            {/* ✅ FIXED FORM */}
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded-lg bg-gray-100 text-black outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 rounded-lg bg-gray-100 text-black outline-none"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="p-3 rounded-lg bg-gray-100 text-black outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="p-3 rounded-lg bg-gray-100 text-black   outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="md:col-span-2 p-3 rounded-lg bg-gray-100 text-black outline-none"
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg transition"
              >
                Get in Touch
              </button>
            </form>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}