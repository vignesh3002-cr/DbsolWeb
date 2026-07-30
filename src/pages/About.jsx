import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import GlobePage from "../components/Globepage"
import TrustedClients from "../components/TrustedClient"
import GrowthJourney from "../components/GrowthHistory"
import LeadershipSection from "../components/Leadership"


export default function About(){
return(
<>
<div className="min-h-screen text-black transition-colors duration-500 bg-white dark:bg-gray-900 dark:text-white">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[420px]">

<img
src="/images/Aboutus.png"
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
<Link className="hover:text-blue-600" to="/">Home</Link> ➜ <span className="text-blue-600">About</span>
</p>

</div>

</section>

{/* COMPANY INTRO */}

<section className="py-24">

<div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">

<img
src="/images/About_2.jpg"
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


<LeadershipSection/>
{/* WHY CHOOSE US */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="mb-4 text-4xl font-bold text-center">
Why Choose Us
</h2>
<p className="max-w-2xl mx-auto mb-20 text-center">Build trust. Inspire loyalty. We deliver powerful Dynamics 365 solutions and high-impact web and mobile apps that drive results.</p>

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

<section className="py-8 bg-gray-100 dark:bg-gray-800">
<h2 className="mb-12 text-4xl font-bold text-center text-gray-800 dark:text-white">
Our Impact
</h2>
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
<GlobePage></GlobePage>
{/* FINAL CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-700 dark:from-gray-800">

<h2 className="mb-6 text-4xl font-bold dark:text-blue-600">
Ready to Transform Your Business?
</h2>

<p className="max-w-2xl mx-auto mb-8 text-blue-100">
We help companies implement ERP systems, automate workflows, and scale faster with modern digital solutions.
</p>

<div className="flex justify-center gap-6">

<Link className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
to="/contact"
>
Contact Us
</Link>

<Link className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
 to="/#clients-section">
Explore Services
</Link>

</div>

</section>

<Footer/>

</div>
</>

)
}