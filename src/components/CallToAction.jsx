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

  // phone click handler
  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:+919994883682";
    } else {
      navigator.clipboard.writeText("+91 9994883682");

      Swal.fire({
        title: "Copied!",
        text: "Phone number copied to clipboard",
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
        () => Swal.fire("Success", "Message sent successfully!", "success"),
        () => Swal.fire("Error", "Failed to send message", "error")
      );
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 dark:bg-gray-900">


      </div>
    </>
  );
}