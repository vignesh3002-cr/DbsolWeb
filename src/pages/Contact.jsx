import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Consultation from "../components/Consultation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import bg from "/images/schedule_consultant.png";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  // phone click
  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:+919994883682";
    } else {
      navigator.clipboard.writeText("+91 9994883682");

      Swal.fire({
        title: "Copied!",
        text: "Phone number copied",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });
    }
  };

  // email send
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
        () => Swal.fire("Success", "Message sent!", "success"),
        () => Swal.fire("Error", "Failed to send", "error")
      );
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 dark:bg-gray-900">

        {/* HERO */}
        <section className="relative flex items-center justify-center h-[350px]">
          <img
            src="/images/Contact_us.jfif"
            alt="contact"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>

            <p className="mt-2 text-sm text-gray-200">
              <Link to="/" className="hover:text-blue-400">Home</Link>
              <span className="mx-2">»</span>
              <span className="text-blue-400">Contact</span>
            </p>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto py-10 px-6 dark:text-white">

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              className="p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center cursor-pointer"
            >
              <FaPhoneAlt className="mx-auto mb-4 text-3xl text-blue-600" />
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-500">+91 9994883682</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center"
            >
              <a href="mailto:jayakumar.k@dbsoltechnologies.com">
                <FaEnvelope className="mx-auto mb-4 text-3xl text-blue-600" />
                <h3>Email</h3>
                <p className="text-gray-500">jayakumar.k@dbsoltechnologies.com</p>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center"
            >
              <a
                href="https://maps.app.goo.gl/iyoA9bjw5LJsXjNB8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="mx-auto mb-4 text-3xl text-blue-600" />
                <h3>Office</h3>
              </a>
            </motion.div>

          </div>
        </section>

        {/* FORM */}
        <section className="py-10 bg-white dark:bg-gray-600">
          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
              Send Us a Message
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid gap-6 md:grid-cols-2"
            >
              <input name="name" className="p-3 border rounded" placeholder="Full Name" />
              <input name="email" className="p-3 border rounded" placeholder="Email" />
              <input name="company" className="p-3 border rounded" placeholder="Company" />
              <input name="phone" className="p-3 border rounded" placeholder="Phone" />

              <textarea
                name="message"
                className="p-3 border rounded md:col-span-2"
                placeholder="Message"
              />

              <button className="bg-blue-600 text-xl text-white py-3 px-32 place-self-center md:col-span-2 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* MAP + CONSULTATION */}
<section
  style={{ backgroundImage: `url(${bg})` }}
  className="relative w-full bg-cover bg-center py-20 px-4"
>
  {/* overlay (FIXED properly layered) */}
  <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />

  <div className="relative z-10 max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">

    {/* LEFT → MAP */}
    <div className="relative z-20">
      <h2 className="mb-6 text-2xl font-bold text-white">
          Our Location
      </h2>

      <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497627.8411701208!2d80.06340834936829!3d12.989911365722172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f76bd9c2f359%3A0xce8dc31fdb6a9b84!2sIndran%20Tower!5e0!3m2!1sen!2sus!4v1776076059117!5m2!1sen!2sus"
          className="w-full h-[400px] rounded-2xl shadow-lg"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    {/* RIGHT → CONSULTATION */}
    <div className="relative z-20 flex justify-end">
      <Consultation />
    </div>

  </div>
</section>

      </div>

      <Footer />
    </>
  );
}