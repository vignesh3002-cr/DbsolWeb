import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaLaptopCode,
FaMobileAlt,
FaSearch,
FaRocket,
FaPalette,
FaServer
} from "react-icons/fa"

export default function WebDevelopment(){

const features = [

{
icon:<FaLaptopCode/>,
title:"Modern UI Development",
desc:"We design visually stunning and interactive websites using modern UI frameworks."
},

{
icon:<FaMobileAlt/>,
title:"Fully Responsive Design",
desc:"Websites that adapt seamlessly across mobile, tablet, and desktop devices."
},

{
icon:<FaSearch/>,
title:"SEO Optimized",
desc:"Our websites are optimized for search engines to increase visibility and traffic."
},

{
icon:<FaRocket/>,
title:"High Performance",
desc:"Fast loading and optimized websites for excellent user experience."
},

{
icon:<FaPalette/>,
title:"Creative UI/UX Design",
desc:"Engaging user experiences designed to convert visitors into customers."
},

{
icon:<FaServer/>,
title:"Secure Backend",
desc:"Reliable and scalable backend systems ensuring security and performance."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO SECTION */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
alt="web development"
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

Responsive Website Development

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Web Development</span>

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

Build Powerful Digital Experiences

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Our web development services focus on creating visually appealing,
high-performance websites that drive engagement and business growth.

</p>

<p className="text-gray-600 dark:text-gray-300">

From corporate websites to complex web applications,
we build scalable and secure platforms tailored to
your business needs.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* FEATURES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Our Web Development Expertise
</h2>

<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

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

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Our Development Process
</h2>

<div className="grid gap-10 md:grid-cols-4">

{["Planning","Design","Development","Launch"].map((step,index)=>(

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


{/* CALL TO ACTION */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700">

<h2 className="mb-6 text-4xl font-bold">
Build Your Digital Presence Today
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Let us help you create a high-performing website that
drives traffic, engagement, and business growth.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-gray-100"
>

Start Your Project

</Link>

</section>

<Footer/>

</div>

)

}