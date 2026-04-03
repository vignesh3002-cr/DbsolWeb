import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaTruck,
FaWarehouse,
FaShippingFast,
FaRoute,
FaBoxes,
FaChartLine
} from "react-icons/fa"

export default function LogisticsSupplyChain(){

const challenges = [
"Managing complex global supply chains and transportation networks",
"Lack of real-time visibility into shipments and inventory",
"High operational costs due to inefficient logistics planning",
"Difficulty coordinating between warehouses, distributors, and retailers"
]

const solutions = [

{
icon:<FaTruck/>,
title:"Transportation Management",
desc:"Optimize delivery routes and reduce fuel costs using intelligent logistics platforms."
},

{
icon:<FaWarehouse/>,
title:"Warehouse Management",
desc:"Improve warehouse productivity through automation and real-time inventory tracking."
},

{
icon:<FaShippingFast/>,
title:"Last-Mile Delivery",
desc:"Enhance delivery speed and customer satisfaction with smart last-mile logistics solutions."
},

{
icon:<FaRoute/>,
title:"Route Optimization",
desc:"Use AI-powered analytics to determine the most efficient delivery routes."
},

{
icon:<FaBoxes/>,
title:"Inventory Tracking",
desc:"Maintain complete visibility of inventory across warehouses and distribution centers."
},

{
icon:<FaChartLine/>,
title:"Supply Chain Analytics",
desc:"Leverage predictive analytics to improve demand forecasting and supply chain efficiency."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO SECTION */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="/images/L&SC_1.jpeg"
alt="logistics industry"
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

Logistics & Supply Chain Solutions

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Logistics & Supply Chain</span>

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

Driving Digital Transformation in Logistics

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Modern logistics organizations must handle complex supply chains,
high delivery expectations, and rapidly changing market demands.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our digital solutions help logistics companies improve operational
efficiency, enhance shipment visibility, and optimize transportation
networks for faster and more reliable deliveries.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="/images/L&SC_2.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* CHALLENGES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-4 dark:text-white">
Logistics Industry Challenges
</h2>
<p className="text-gray-600 dark:text-gray-300 text-center mb-20 max-w-2xl mx-auto">Limited End-to-End Shipment Tracking, lack of Real-Time Logistics Insights, poor Coordination Across Stakeholders.</p>

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

<h2 className="text-4xl font-bold text-center text-gray-800 mb-4 dark:text-white">
Our Logistics Solutions
</h2>
<p className="text-gray-600 dark:text-gray-300 text-center mb-20 max-w-2xl mx-auto">Optimize route planning and delivery schedules using Dynamics 365 to reduce costs, improve delivery speed, and enhance overall transportation efficiency.</p>


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

<h3 className="mb-2 text-lg font-semibold dark:text-gray-300">
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

<section className="py-24 bg-white dark:bg-gray-700">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Key Benefits
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"Real-Time Shipment Tracking",
"Optimized Transportation Costs",
"Faster Delivery Operations",
"Improved Supply Chain Visibility"
].map((item,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className={`p-6 shadow-lg ${index%2==0?"bg-gradient-to-r from-yellow-500 to-yellow-800 dark:from-gray-800 dark:to-gray-800":"bg-gradient-to-r from-green-400 to-green-700 dark:from-gray-800 dark:to-gray-800"} dark:bg-gray-800 rounded-xl`}
>

<p className=" text-white text-lg font-serif">{item}</p>

</motion.div>
))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-800 text-blue-600 dark:text-blue-600">

<h2 className="mb-6 text-4xl font-bold">
Transform Your Logistics Operations
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Leverage intelligent logistics platforms and advanced analytics
to optimize supply chains and deliver exceptional customer experiences.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-gray-100"
>

Talk to Our Experts

</Link>

</section>

<Footer/>

</div>

)

}