import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Integration from "../../components/IntegrationSteps" 
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import {
FaTruck,
FaWarehouse,
FaBoxes,
FaChartLine,
FaClipboardList,
FaGlobe
} from "react-icons/fa"
import HyperCareSection from "../../components/Post-Go-Live Support"

export default function SupplyChainManagementSystem(){

const features = [

{
icon:<FaTruck/>,
title:"Logistics Management",
desc:"Monitor transportation activities and optimize delivery operations across the supply chain."
},

{
icon:<FaWarehouse/>,
title:"Warehouse Integration",
desc:"Integrate warehouse systems to track inventory movement and stock levels in real time."
},

{
icon:<FaBoxes/>,
title:"Inventory Optimization",
desc:"Maintain optimal stock levels and reduce inventory holding costs."
},

{
icon:<FaClipboardList/>,
title:"Order Management",
desc:"Automate order processing, fulfillment, and delivery tracking."
},

{
icon:<FaChartLine/>,
title:"Supply Chain Analytics",
desc:"Analyze supply chain performance with real-time dashboards and analytics."
},

{
icon:<FaGlobe/>,
title:"Global Supply Visibility",
desc:"Track supply chain operations across multiple locations and suppliers."
}

]

const modules = [

"Procurement Management",
"Supplier Relationship Management",
"Inventory Management",
"Order Processing",
"Transportation Management",
"Warehouse Operations",
"Demand Forecasting",
"Supply Chain Analytics"

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[420px]">

<img
src="/images/SCMS_1.jpeg"
alt="Supply Chain"
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

Supply Chain Management System

</motion.h1>

<p className="mt-4 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Supply Chain Management</span>

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

<h2 className="mb-6 text-center md:text-left text-4xl font-bold text-gray-800 dark:text-white">
Smart Supply Chain Platform
</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

A Supply Chain Management System helps organizations
manage procurement, inventory, logistics, and supplier
operations efficiently.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our solution enables businesses to improve supply
visibility, optimize inventory levels, and enhance
logistics efficiency with advanced analytics tools.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="/images/SCMS_2.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* FEATURES */}

<section className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-5 dark:text-white">
Key Supply Chain Features
</h2>

<p className="max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-300 text-center">
    Enhance end-to-end supply chain efficiency with integrated logistics, real-time inventory tracking, and intelligent order management. Leverage advanced analytics and global visibility to optimize operations, reduce costs, and ensure seamless coordination across every stage of the supply chain.
</p>
<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

{features.map((item,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="p-8 border border-gray-200 shadow-lg backdrop-blur-lg bg-white/70 dark:bg-gray-800/60 rounded-xl dark:border-gray-700"
>

<div className="mb-4 text-3xl text-blue-600">
{item.icon}
</div>

<h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
{item.title}
</h3>

<p className="text-sm text-gray-500 dark:text-gray-300">
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>

{/* SUPPLY CHAIN WORKFLOW */}

<section className="py-10 mb-10">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="text-4xl font-bold text-gray-800 mb-5 dark:text-white">
Supply Chain Workflow
</h2>

<p className="max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-300 text-center">
supply chain with a structured, end-to-end workflow that ensures efficiency, visibility, and control at every stage. From sourcing reliable suppliers and optimizing inventory levels to managing orders, logistics, and timely deliveries, this process is designed to enhance coordination, reduce costs, and improve overall operational performance.
</p>

<div className="grid gap-10 md:grid-cols-5">

{[
"Supplier Procurement",
"Inventory Planning",
"Order Processing",
"Logistics Management",
"Delivery & Fulfillment"
].map((step,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className={`p-6 shadow-lg ${index%2==0?"bg-green-50":"bg-indigo-50"} dark:bg-gray-800 rounded-xl`}
>

<p className="font-medium text-gray-700 dark:text-gray-200">
{step}
</p>

</motion.div>

))}

</div>

</div>

</section>
{/* MODULES */}
{
    <Integration />
}
<section className="py-24">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-5 dark:text-white">
Core SCM Modules
</h2>

<p className="max-w-2xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
    Streamline supply chain operations with integrated modules that manage procurement, suppliers, inventory, and logistics. Enhance efficiency with intelligent demand forecasting, optimized transportation, and data-driven analytics for better decision-making and operational control.
</p>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

{modules.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
className="p-6 text-center bg-white shadow-lg rounded-xl dark:bg-gray-800"
>

<p className="font-medium text-gray-700 dark:text-gray-200">
{item}
</p>

</motion.div>

))}

</div>

</div>

</section>


{/* BUSINESS IMPACT */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-5 text-4xl font-bold text-gray-800 dark:text-white">
Business Impact
</h2>

<p className="max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-300">
    Accelerate order fulfillment, reduce inventory costs, and improve logistics efficiency with enhanced visibility across the entire supply chain for smarter, faster decision-making.
</p>

<div className="grid gap-10 md:grid-cols-4">

{[
"45% Faster Order Fulfillment",
"40% Reduced Inventory Costs",
"50% Improved Logistics Efficiency",
"70% Better Supply Chain Visibility"
].map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className={`p-6 shadow-lg ${
  index % 2 == 0
    ? "bg-gradient-to-r from-purple-400 to-orange-300 dark:from-gray-900 dark:to-gray-900 text-black dark:text-gray-300"
    : "bg-green-200 dark:bg-gray-900 text-black dark:text-gray-300"
} rounded-xl`}>

<p className="font-semibold">
{item}
</p>

</motion.div>

))}

</div>

</div>

</section>

<HyperCareSection/>

{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-indigo-700 to-blue-600 dark:from-gray-800 dark:to-gray-900">

<h2 className="mb-6 text-4xl font-bold">
Optimize Your Supply Chain Operations
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Improve supply chain visibility, reduce operational
costs, and enhance logistics performance with our
advanced supply chain management platform.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
>

Request SCM Demo

</Link>

</section>

<Footer/>

</div>

)

}