import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaAndroid,
FaApple,
FaMobileAlt,
FaPaintBrush,
FaRocket,
FaShieldAlt
} from "react-icons/fa"

export default function MobileAppDevelopment(){

const features = [

{
icon:<FaMobileAlt/>,
title:"Custom Mobile Applications",
desc:"We build scalable and feature-rich mobile applications tailored to your business goals."
},

{
icon:<FaPaintBrush/>,
title:"Modern UI / UX Design",
desc:"Intuitive and visually engaging interfaces that deliver seamless user experiences."
},

{
icon:<FaRocket/>,
title:"High Performance Apps",
desc:"Optimized applications designed for speed, reliability, and smooth performance."
},

{
icon:<FaShieldAlt/>,
title:"Secure App Architecture",
desc:"Advanced security implementations ensuring safe data handling and protection."
},

{
icon:<FaAndroid/>,
title:"Android Development",
desc:"Native Android applications built with modern technologies for maximum performance."
},

{
icon:<FaApple/>,
title:"iOS Development",
desc:"Premium iOS applications designed to deliver a flawless Apple ecosystem experience."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO SECTION */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="/images/MobAppDev_img1.jpg"
alt="mobile development"
className="absolute inset-0 object-cover w-full h-full"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 text-center text-white">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.7}}
className="text-5xl font-bold"
>

Android & iOS App Development

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Mobile App Development</span>

</p>

</div>

</section>


{/* OVERVIEW */}

<section className="py-20">

<div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>

<h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">

Innovative Mobile Applications for Modern Businesses

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

We design and develop powerful mobile applications that enhance
customer engagement and streamline business processes.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our mobile development team builds scalable Android and iOS apps
using modern frameworks and technologies to deliver high-quality
digital experiences.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="/images/MobAppDev_img2.jpg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* FEATURES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-blue-600">
Our Mobile Development Expertise
</h2>

<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 dark:text-white">

{features.map((item,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="p-8 text-center transition shadow-lg rounded-xl bg-gray-50 dark:bg-gray-900"
>

<div className="mb-4 text-3xl text-blue-600">
{item.icon}
</div>

<h3 className="mb-2 text-lg font-semibold">
{item.title}
</h3>

<p className="text-sm text-gray-500">
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>


{/* DEVELOPMENT PROCESS */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-blue-600">
Our Mobile App Development Process
</h2>

<div className="grid gap-10 text-gray-400 md:grid-cols-4">

{["Idea & Strategy","UI/UX Design","Development","Launch & Support"].map((step,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-8 text-center bg-white shadow-lg rounded-xl dark:bg-gray-800"
>

<div className="mb-3 text-3xl font-bold text-blue-600">
{index+1}
</div>

<h3 className="font-semibold">
{step}
</h3>

</motion.div>

))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800">

<h2 className="mb-6 text-4xl font-bold dark:text-blue-600">
Launch Your Mobile App Today
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Partner with our experts to build innovative Android and iOS
applications that deliver exceptional user experiences.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-gray-100"
>

Discuss Your App Idea

</Link>

</section>

<Footer/>

</div>

)

}