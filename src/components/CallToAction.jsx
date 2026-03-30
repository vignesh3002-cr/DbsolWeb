import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

export default function CallToAction(){

return(

<section className="relative py-8 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">

{/* Animated background circles */}

<div className="absolute inset-0 overflow-hidden dark:bg-gray-900">

<div className="absolute rounded-full w-72 h-72 bg-white/10 blur-3xl top-10 left-10 animate-pulse"></div>

<div className="absolute rounded-full w-96 h-96 bg-purple-400/20 blur-3xl bottom-10 right-10 animate-pulse"></div>

</div>

<div className="relative max-w-6xl px-6 mx-auto text-center">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
className="p-16 border shadow-2xl bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl"
>

{/* Heading */}

<h2 className="mb-6 text-4xl font-bold text-white dark:text-blue-600 md:text-5xl">

Ready to Transform Your Business?

</h2>

{/* Sub text */}

<p className="max-w-2xl mx-auto mb-12 text-lg text-blue-100">

Empower your enterprise with advanced solutions including 
Dynamics 365 Finance & Operations, modern web platforms,
and scalable mobile applications.

Partner with us to accelerate digital transformation
and unlock operational excellence.

</p>

{/* Buttons */}

<div className="flex flex-col justify-center gap-6 md:flex-row">

{/* Contact Button */}

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="flex items-center justify-center gap-3 px-8 py-4 font-semibold text-blue-700 transition bg-white shadow-lg rounded-xl hover:shadow-xl"
>

Contact Us

<FaArrowRight/>

</motion.button>

{/* Consultation Button */}

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="px-8 py-4 font-semibold text-white transition border border-white rounded-xl hover:bg-white hover:text-blue-700"
>

Schedule Consultation

</motion.button>

</div>

</motion.div>

</div>

</section>

)

}