import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaChartPie,
FaUsers,
FaCloud,
FaProjectDiagram,
FaSyncAlt,
FaMobileAlt
} from "react-icons/fa"

export default function Dynamics365Business(){

const features = [
{
icon:<FaChartPie/>,
title:"Business Intelligence",
desc:"Gain real-time insights into financial performance, sales trends, and operational efficiency."
},
{
icon:<FaUsers/>,
title:"Customer Management",
desc:"Manage leads, customers, and service operations efficiently with centralized CRM capabilities."
},
{
icon:<FaCloud/>,
title:"Cloud Integration",
desc:"Secure cloud infrastructure that enables seamless collaboration and data accessibility anywhere."
},
{
icon:<FaProjectDiagram/>,
title:"Business Process Optimization",
desc:"Streamline workflows across departments to increase productivity and operational transparency."
},
{
icon:<FaSyncAlt/>,
title:"Automated Workflows",
desc:"Automate repetitive business operations to reduce manual errors and improve efficiency."
},
{
icon:<FaMobileAlt/>,
title:"Mobile Accessibility",
desc:"Access your ERP and business systems securely from any device anywhere."
}
]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO SECTION */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="https://images.unsplash.com/photo-1454165205744-3b78555e5572"
alt="Dynamics 365"
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

Dynamics 365 Business & Fundamentals

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Dynamics 365 Business</span>

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

Smart ERP Solutions for Modern Businesses

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Microsoft Dynamics 365 Business solutions provide an integrated platform
to manage finance, sales, operations, and customer relationships.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our experts help organizations deploy scalable Dynamics 365
solutions tailored to their industry needs while ensuring
seamless integration and optimized performance.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* FEATURES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">

Key Business Capabilities

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


{/* BUSINESS MODULES */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">

Business Modules We Implement

</h2>

<div className="grid gap-10 md:grid-cols-4">

{["Finance","Sales","Supply Chain","Customer Service"].map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-8 text-center bg-white shadow-lg rounded-xl dark:bg-gray-800"
>

<div className="mb-3 text-3xl font-bold text-blue-600">
{index+1}
</div>

<h3 className="font-semibold">
{item}
</h3>

</motion.div>

))}

</div>

</div>

</section>


{/* CALL TO ACTION */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700">

<h2 className="mb-6 text-4xl font-bold">
Transform Your Business with Dynamics 365
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Empower your organization with intelligent ERP solutions
designed for scalability, efficiency, and long-term growth.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-gray-100"
>

Start Your Digital Transformation

</Link>

</section>

<Footer/>

</div>

)

}