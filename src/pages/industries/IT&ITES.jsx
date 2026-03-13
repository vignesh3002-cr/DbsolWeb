import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaCloud,
FaServer,
FaLock,
FaChartLine,
FaNetworkWired,
FaLaptopCode
} from "react-icons/fa"

export default function ITITES(){

const challenges = [
"Managing complex IT infrastructure across multiple platforms",
"Ensuring cybersecurity and compliance across enterprise systems",
"Scaling digital platforms to handle growing business demands",
"Optimizing operational costs and improving productivity"
]

const solutions = [
{
icon:<FaCloud/>,
title:"Cloud Transformation",
desc:"We help IT companies migrate and modernize their systems using secure and scalable cloud platforms."
},
{
icon:<FaServer/>,
title:"Enterprise System Integration",
desc:"Integrate ERP, CRM, and internal applications to create a unified business ecosystem."
},
{
icon:<FaLock/>,
title:"Cybersecurity & Compliance",
desc:"Implement robust security frameworks to protect enterprise data and ensure compliance."
},
{
icon:<FaChartLine/>,
title:"Business Intelligence",
desc:"Advanced analytics solutions enabling organizations to make data-driven decisions."
},
{
icon:<FaNetworkWired/>,
title:"Infrastructure Optimization",
desc:"Improve system performance, reduce downtime, and optimize IT infrastructure."
},
{
icon:<FaLaptopCode/>,
title:"Custom Software Development",
desc:"Develop scalable enterprise applications tailored to IT industry requirements."
}
]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="https://images.unsplash.com/photo-1518770660439-4636190af475"
alt="IT industry"
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

IT / ITES Industry Solutions

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">IT / ITES</span>

</p>

</div>

</section>


{/* INDUSTRY OVERVIEW */}

<section className="py-20">

<div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>

<h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">

Digital Transformation for IT & ITES Companies

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

The IT and ITES sector is one of the fastest-growing industries,
driven by innovation, digital transformation, and global demand
for technology services.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our solutions empower IT companies with scalable infrastructure,
enterprise automation, advanced analytics, and secure cloud
platforms to drive innovation and operational excellence.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* INDUSTRY CHALLENGES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Key Industry Challenges
</h2>

<div className="grid gap-8 md:grid-cols-2">

{challenges.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-8 shadow-lg rounded-xl bg-gray-50 dark:bg-gray-900"
>

<p className="text-gray-600 dark:text-gray-300">
{item}
</p>

</motion.div>

))}

</div>

</div>

</section>


{/* SOLUTIONS */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Our IT Industry Solutions
</h2>

<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

{solutions.map((item,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="p-8 text-center bg-white shadow-lg rounded-xl dark:bg-gray-800"
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


{/* BENEFITS */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Business Benefits
</h2>

<div className="grid gap-10 md:grid-cols-4">

{["Faster Digital Transformation","Improved Operational Efficiency","Scalable Technology Infrastructure","Enhanced Data Security"].map((item,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-6 shadow-lg bg-gray-50 rounded-xl dark:bg-gray-900"
>

<p className="font-semibold">{item}</p>

</motion.div>
))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700">

<h2 className="mb-6 text-4xl font-bold">
Accelerate Your IT Innovation
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Partner with our experts to transform your IT operations
and build scalable digital platforms for future growth.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-gray-100"
>

Consult Our Experts

</Link>

</section>

<Footer/>

</div>

)

}