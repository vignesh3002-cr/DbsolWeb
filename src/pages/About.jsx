import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import CountUp from "react-countup"
import TrustedClients from "../components/TrustedClient"

export default function About(){
  
return(

<div className="min-h-screen text-black transition-colors duration-500 bg-white dark:bg-gray-900 dark:text-white">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[420px]">

<img
src="/images/About_1.jfif"
className="absolute inset-0 object-cover w-full h-full"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 text-center text-white">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
className="text-5xl font-bold"
>

About Our Company

</motion.h1>

<p className="mt-4 text-gray-200">
<Link to="/">Home</Link> ➜ <span className="text-blue-400">About</span>
</p>

</div>

</section>


{/* COMPANY INTRO */}

<section className="py-24">

<div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">

<img
src="/images/About_2.jfif"
className="shadow-lg rounded-xl"
/>

<div>

<h2 className="mb-6 text-4xl font-bold">
Who We Are
</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">
We are a leading ERP consulting and digital transformation company specializing in Microsoft Dynamics 365 Finance & Operations, Business Central, and enterprise-grade web and mobile applications.
</p>

<p className="text-gray-600 dark:text-gray-300">
Our mission is to help businesses streamline operations, improve financial visibility, and achieve scalable growth using cutting-edge technology solutions.
</p>

</div>

</div>

</section>

{/* MISSION & VISION - PREMIUM */}

<section className="relative overflow-hidden py-28 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

{/* Background Glow */}
<div className="absolute w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
<div className="absolute w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

<div className="relative z-10 max-w-6xl px-6 mx-auto">

<h2 className="mb-20 text-4xl font-bold text-center">
Our Mission & Vision
</h2>

<div className="grid gap-16 md:grid-cols-2">

{/* MISSION */}

<motion.div
initial={{opacity:0, x:-60}}
whileInView={{opacity:1, x:0}}
transition={{duration:0.8}}
className="relative p-10 overflow-hidden bg-white shadow-2xl dark:bg-gray-900 rounded-2xl"
>

{/* Floating Icon */}
<div className="absolute text-6xl text-blue-500 opacity-10 top-4 right-6">
🚀
</div>

<h3 className="mb-4 text-2xl font-semibold text-blue-600">
Our Mission
</h3>

<p className="mb-4 text-gray-600 dark:text-gray-300">
Our mission is to empower businesses by delivering intelligent ERP solutions that streamline operations, enhance productivity, and enable data-driven decision-making.
</p>

<p className="text-gray-600 dark:text-gray-300">
We focus on building scalable, secure, and future-ready systems using modern technologies like Microsoft Dynamics 365, cloud computing, and automation frameworks.
</p>

{/* Highlights */}
<ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
<li>✔ Optimize business processes</li>
<li>✔ Deliver scalable ERP solutions</li>
<li>✔ Enable digital transformation</li>
</ul>

</motion.div>


{/* VISION */}

<motion.div
initial={{opacity:0, x:60}}
whileInView={{opacity:1, x:0}}
transition={{duration:0.8}}
className="relative p-10 overflow-hidden bg-white shadow-2xl dark:bg-gray-900 rounded-2xl"
>

{/* Floating Icon */}
<div className="absolute text-6xl text-indigo-500 opacity-10 top-4 right-6">
🌍
</div>

<h3 className="mb-4 text-2xl font-semibold text-indigo-600">
Our Vision
</h3>

<p className="mb-4 text-gray-600 dark:text-gray-300">
Our vision is to become a global leader in ERP consulting and digital innovation by helping organizations achieve operational excellence and sustainable growth.
</p>

<p className="text-gray-600 dark:text-gray-300">
We aim to bridge the gap between technology and business by delivering world-class solutions that drive efficiency, innovation, and long-term success.
</p>

{/* Highlights */}
<ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
<li>✔ Global ERP leadership</li>
<li>✔ Innovation-driven solutions</li>
<li>✔ Long-term client success</li>
</ul>

</motion.div>

</div>

</div>

</section>


{/* WHY CHOOSE US */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="mb-16 text-4xl font-bold text-center">
Why Choose Us
</h2>

<div className="grid gap-10 md:grid-cols-3">

{[
"Expert Dynamics 365 Consultants",
"End-to-End Implementation",
"Custom Business Solutions",
"Industry-Specific Expertise",
"Scalable Cloud Solutions",
"24/7 Support & Maintenance"
].map((item,index)=>(

<motion.div
key={index}
whileHover={{y:-10}}
className="p-8 text-center bg-gray-100 shadow-lg dark:bg-gray-800 rounded-xl"
>

<p className="text-lg font-semibold">{item}</p>

</motion.div>

))}

</div>

</div>

</section>

<TrustedClients/>

{/* STATS */}

<section className="py-24 bg-gray-100 dark:bg-gray-800">

<div className="grid max-w-6xl gap-10 px-6 mx-auto text-center md:grid-cols-4">

{[
"50+ Projects",
"10+ Industries",
"95% Satisfaction",
"5+ Years Experience"
].map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
className="p-6 bg-white shadow-lg dark:bg-gray-900 rounded-xl"
>

<p className="text-xl font-bold">{item}</p>

</motion.div>

))}

</div>

</section>

{/* FINAL CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-700 dark:from-gray-800">

<h2 className="mb-6 text-4xl font-bold dark:text-blue-600">
Ready to Transform Your Business?
</h2>

<p className="max-w-2xl mx-auto mb-8 text-blue-100">
We help companies implement ERP systems, automate workflows, and scale faster with modern digital solutions.
</p>

<div className="flex justify-center gap-6">

<a
href="/contact"
className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
>
Contact Us
</a>

<a
href="/services"
className="px-8 py-4 font-semibold border border-white rounded-lg hover:bg-white hover:text-blue-600"
>
Explore Services
</a>

</div>

</section>

<Footer/>

</div>

)
}