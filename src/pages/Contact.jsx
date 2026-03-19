import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function Contact(){

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
className="p-10 text-center bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
>

<FaPhoneAlt className="mx-auto mb-4 text-3xl text-blue-600"/>

<h3 className="mb-2 text-lg font-semibold">Phone</h3>

<p className="text-gray-500">+91 98765 43210</p>

</motion.div>

{/* Email */}

<motion.div
whileHover={{scale:1.05}}
className="p-10 text-center bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
>

<FaEnvelope className="mx-auto mb-4 text-3xl text-blue-600"/>

<h3 className="mb-2 text-lg font-semibold">Email</h3>

<p className="text-gray-500">contact@dbsol.in</p>

</motion.div>

{/* Address */}

<motion.div
whileHover={{scale:1.05}}
className="p-10 text-center bg-white shadow-lg dark:bg-gray-800 rounded-2xl"
>

<FaMapMarkerAlt className="mx-auto mb-4 text-3xl text-blue-600"/>

<h3 className="mb-2 text-lg font-semibold">Office</h3>

<p className="text-gray-500">Chennai, Tamil Nadu, India</p>

</motion.div>

</div>

</section>

{/* Contact Form */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-5xl px-6 mx-auto">

<h2 className="mb-12 text-4xl font-bold text-center text-gray-800 dark:text-white">
Send Us a Message
</h2>

<form className="grid gap-8 md:grid-cols-2">

<input
type="text"
placeholder="Full Name"
className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<input
type="email"
placeholder="Email Address"
className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<input
type="text"
placeholder="Company Name"
className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<input
type="text"
placeholder="Phone Number"
className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<textarea
rows="5"
placeholder="Describe your project or requirement..."
className="p-4 border rounded-lg md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
></textarea>

<button
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
src="https://www.google.com/maps?q=Chennai&output=embed"
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