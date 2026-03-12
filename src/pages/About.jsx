import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function About(){

return(
    <>
<Navbar/>
<div className="bg-gray-50 dark:bg-gray-900">

{/* Hero Section */}

<section className="relative flex items-center justify-center h-[350px]">

{/* Background Image */}

<img
src="https://images.unsplash.com/photo-1552664730-d307ca884978"
alt="about background"
className="absolute inset-0 object-cover w-full h-full"
/>

{/* Dark Overlay */}

<div className="absolute inset-0 bg-black/60"></div>

{/* Content */}

<div className="relative z-10 text-center text-white">

<h1 className="mb-3 text-4xl font-bold md:text-5xl">
About Us
</h1>

<p className="text-sm font-semibold text-gray-200">

<Link to="/" className="hover:text-blue-400">
Home
</Link>

<span className="mx-4 text-xl">»</span>

<span className="text-blue-400">
About Us
</span>

</p>

</div>

</section>
{/* Company Story */}

<section className="py-20">

<div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">

<motion.img
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.7}}
src="https://images.unsplash.com/photo-1552664730-d307ca884978"
className="shadow-xl rounded-2xl"
/>

<motion.div
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.7}}
>

<h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
Our Story
</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

DBSol was founded with a clear vision — to help organizations
modernize their business operations through intelligent digital
solutions.

</p>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Our team combines deep expertise in enterprise systems, cloud
technology, and application development to deliver solutions
that are both powerful and user-friendly.

</p>

<p className="text-gray-600 dark:text-gray-300">

From startups to large enterprises, we partner with clients
to build technology that drives measurable business results.

</p>

</motion.div>

</div>

</section>

{/* Mission Vision Values */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto mb-16 text-center">

<h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
Our Core Values
</h2>

<p className="text-gray-500">
The principles that guide everything we build.
</p>

</div>

<div className="grid max-w-6xl gap-10 px-6 mx-auto md:grid-cols-3">

{/* Innovation */}

<motion.div
whileHover={{scale:1.05}}
className="p-10 text-center shadow-lg bg-gray-50 dark:bg-gray-900 rounded-2xl"
>

<FaLightbulb className="mx-auto mb-4 text-4xl text-blue-600"/>

<h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
Innovation
</h3>

<p className="text-gray-500">

We continuously explore new technologies and creative
solutions to help our clients stay ahead in a rapidly
evolving digital landscape.

</p>

</motion.div>

{/* Trust */}

<motion.div
whileHover={{scale:1.05}}
className="p-10 text-center shadow-lg bg-gray-50 dark:bg-gray-900 rounded-2xl"
>

<FaHandshake className="mx-auto mb-4 text-4xl text-blue-600"/>

<h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
Trust & Transparency
</h3>

<p className="text-gray-500">

We build long-term partnerships based on honesty,
accountability, and consistent delivery of value.

</p>

</motion.div>

{/* Excellence */}

<motion.div
whileHover={{scale:1.05}}
className="p-10 text-center shadow-lg bg-gray-50 dark:bg-gray-900 rounded-2xl"
>

<FaRocket className="mx-auto mb-4 text-4xl text-blue-600"/>

<h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
Execution Excellence
</h3>

<p className="text-gray-500">

Our team focuses on quality engineering and efficient
project delivery to ensure every solution meets
enterprise standards.

</p>

</motion.div>

</div>

</section>

{/* Stats */}

<section className="py-20">

<div className="grid max-w-6xl gap-10 px-6 mx-auto text-center md:grid-cols-4">

<div>
<h3 className="text-4xl font-bold text-blue-600">50+</h3>
<p className="text-gray-500">Projects Delivered</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">20+</h3>
<p className="text-gray-500">Enterprise Clients</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">8+</h3>
<p className="text-gray-500">Industries Served</p>
</div>

<div>
<h3 className="text-4xl font-bold text-blue-600">5+</h3>
<p className="text-gray-500">Years Experience</p>
</div>

</div>

</section>

</div>
<Footer/>

</>
)

}