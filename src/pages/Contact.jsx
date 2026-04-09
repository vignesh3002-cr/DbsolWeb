import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Consultation from "../components/Consultation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import bg from "/images/schedule_consultant.png";

export default function Contact() {
  const form = useRef();
  const { hash } = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  // Scroll to section
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [hash]);

  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:+919994883682";
    } else {
      navigator.clipboard.writeText("+91 9994883682");
      alert("Phone number copied!");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zakxdhu",
        "template_f8if95g",
        form.current,
        "WqsGjD4ltQ3Kgu4PA"
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message.")
      );
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 dark:bg-gray-900">

        {/* Hero */}
        <section className="relative flex items-center justify-center h-[350px]">
          <img
            src="/images/Contact_us.jfif"
            alt="contact background"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 text-center text-white">
            <h1 className="mb-3 text-4xl font-bold md:text-5xl">
              Contact Us
            </h1>

            <p className="text-sm font-semibold text-gray-200">
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
              <span className="mx-4">»</span>
              <span className="text-blue-400">Contact Us</span>
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20">
          <div className="grid max-w-6xl gap-10 px-6 mx-auto md:grid-cols-3 dark:text-white">

            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={handleClick}
              className="p-10 text-center bg-white shadow-lg cursor-pointer dark:bg-gray-800 rounded-2xl"
            >
              <FaPhoneAlt className="mx-auto mb-4 text-3xl text-blue-600" />
              <h3 className="mb-2 font-semibold">Phone</h3>
              <p className="text-gray-500">+91 9994883682</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-10 text-center bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
            >
              <a href="mailto:jayakumar.k@dbsoltechnologies.com">
                <FaEnvelope className="mx-auto mb-4 text-3xl text-blue-600" />
                <h3>Email</h3>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-10 text-center bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
            >
              <a
                href="https://www.google.com/maps/place/Indran+Tower/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="mx-auto mb-4 text-3xl text-blue-600" />
                <h3>Office</h3>
              </a>
            </motion.div>

          </div>
        </section>

        {/* Contact Form */}
        <section className="py-10 bg-white dark:bg-gray-800">
          <div className="max-w-5xl px-6 mx-auto">

            <h2 className="mb-10 text-3xl font-bold text-center dark:text-white">
              Send Us a Message
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid gap-6 md:grid-cols-2"
            >
              <input className="p-3 border rounded" placeholder="Full Name" />
              <input className="p-3 border rounded" placeholder="Email" />
              <input className="p-3 border rounded" placeholder="Company" />
              <input className="p-3 border rounded" placeholder="Phone" />

              <textarea className="p-3 border rounded md:col-span-2" />

              <button className="py-3 text-white bg-blue-600 rounded md:col-span-2">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* 🔥 MAP + CONSULTATION */}
        <section
          style={{ backgroundImage: `url(${bg})` }}   // ✅ FIXED
          className="w-full bg-cover bg-center relative py-20 px-4"
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">

            {/* LEFT → Map */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white">
                Our Location
              </h2>

              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d239551.76369653767!2d80.01036403796768!3d12.846903928877058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f638bae20f87%3A0x6e87491d6d266f6!2sVP%20Chindhan%20Ave%2C%20Senthil%20Nagar%2C%20Urapakkam%2C%20Tamil%20Nadu%20603210%2C%20India!5e0!3m2!1sen!2sus!4v1775712495981!5m2!1sen!2sus"
                className="w-full h-[400px] rounded-2xl shadow-lg"
              />
            </div>

            {/* RIGHT → Consultation */}
            <div id="form-selection"
            className="flex justify-end">
              <Consultation />
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}