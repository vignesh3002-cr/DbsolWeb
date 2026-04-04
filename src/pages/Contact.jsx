import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import React, { useRef } from "react";
import emailjs from "emailjs-com";
export default function Contact(){
 const form  = useRef();
   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

    const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:+91 9994883682";
    } else {
      navigator.clipboard.writeText("+91 9994883682");
      alert("Phone number copied! You can paste it to call.");
    }
  };

 const sendEmail = (e) =>{
    e.preventDefault();
 emailjs.sendForm(
        "service_zakxdhu",
        "template_f8if95g",
        form.current,
        "WqsGjD4ltQ3Kgu4PA"
    )
    .then(
        (result)=>{
            console.log(result.text);
            alert("Message sent successfully!");
        },
    (error)=>{
        console.log(error.text);
        alert("Failed to send message.");
    }
    );
 }
return(
<>
<Navbar/>
<div className="bg-gray-50 dark:bg-gray-900">

{/* Hero Section */}

<section className="relative flex items-center justify-center h-[350px]">

{/* Background Image */}

<img
src="/images/Contact_us.jfif"
alt="contact background"
className="absolute inset-0 object-cover w-full h-full"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-black/60"></div>

{/* Content */}

<div className="relative z-10 text-center text-white">

<h1 className="mb-3 text-4xl font-bold md:text-5xl">
Contact Us
</h1>

<p className="text-sm font-semibold text-gray-200">

<Link to="/" className="hover:text-blue-400">
Home
</Link>

<span className="mx-4 text-xl">»</span>

<span className="text-blue-400">
Contact Us
</span>

</p>

</div>

</section>

{/* Contact Info Cards */}

<section className="py-20">

<div className="grid max-w-6xl gap-10 px-6 mx-auto md:grid-cols-3 dark:text-white">

{/* Phone */}

<motion.div
whileHover={{scale:1.05}}
onClick={handleClick}
className="p-10 text-center bg-white shadow-lg cursor-pointer dark:bg-gray-800 rounded-2xl"
>

<FaPhoneAlt className="mx-auto mb-4 text-3xl text-blue-600"/>

<h3 className="mb-2 text-lg font-semibold">Phone</h3>

<p className="text-gray-500">+91 9994883682</p>

</motion.div>

{/* Email */}

<motion.div
whileHover={{scale:1.05}}
className="p-10 text-center bg-white shadow-lg cursor-pointer dark:bg-gray-800 rounded-2xl"
>
<a href="mailto:jayakumar.k@dbsoltechnologies.com">
<FaEnvelope className="mx-auto mb-4 text-3xl text-blue-600"/>

<h3 className="mb-2 text-lg font-semibold">Email</h3>

<p className="text-gray-500">jayakumar.k@dbsoltechnologies.com</p>
</a>
</motion.div>

{/* Address */}

<motion.div
whileHover={{scale:1.05}}
className="p-10 text-center bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
>
<a
  href="https://maps.app.goo.gl/khLbGNhEMZSXr7VH6"
  target="_blank"
  rel="noopener noreferrer"
>
<FaMapMarkerAlt className="mx-auto mb-4 text-3xl text-blue-600"/>

<h3 className="mb-2 text-lg font-semibold">Office</h3>

<p className="text-gray-500">VP Chindhan Ave
Chennai, Tamil Nadu, India</p>
</a>
</motion.div>

</div>

</section>

{/* Contact Form */}

<section className="py-4 bg-white dark:bg-gray-800">

<div className="max-w-5xl px-6 mx-auto">

<h2 className="mb-12 text-4xl font-bold text-center text-gray-800 dark:text-white">
Send Us a Message
</h2>


<form ref={form} onSubmit={sendEmail} className="grid gap-8 md:grid-cols-2">
<input
type="text"
name="name"
placeholder="Full Name"
className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<input
type="email"
name="email"
placeholder="Email Address"
className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<input
type="text"
name="company"
placeholder="Company Name"
className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<input
type="text"
name="phone"
placeholder="Phone Number"
className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<textarea
rows="5"
name="message"
placeholder="Describe your project or requirement..."
className="p-4 border rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>

<button type="submit"Send Message
className="py-4 font-semibold text-white transition bg-blue-600 rounded-lg md:col-span-2 hover:bg-blue-700"
>

Send Message

</button>

</form>

</div>

</section>

{/* Map */}

<section className="py-20">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="mb-10 text-3xl font-bold text-center text-gray-800 dark:text-white">
Our Location
</h2>

<div className="overflow-hidden shadow-lg rounded-2xl">

<iframe
title="company location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332101.68832345324!2d79.94720254802596!3d13.008628940473582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f638bae20f87%3A0x6e87491d6d266f6!2sVP%20Chindhan%20Ave%2C%20Senthil%20Nagar%2C%20Urapakkam%2C%20Tamil%20Nadu%20603210!5e0!3m2!1sen!2sin!4v1774953009145!5m2!1sen!2sin%22"
width="100%"
height="400"
className="border-0"
></iframe>

</div>

</div>

</section>

</div>
<Footer/>
</>
)

}