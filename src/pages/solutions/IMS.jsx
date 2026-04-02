import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Integration from "../../components/IntegrationSteps"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import {
FaBoxes,
FaBarcode,
FaChartLine,
FaClipboardList,
FaSyncAlt,
FaWarehouse
} from "react-icons/fa"

export default function InventoryManagementSystem(){

const features=[

{
icon:<FaBoxes/>,
title:"Real-Time Inventory Tracking",
desc:"Track stock levels across warehouses and locations in real time."
},

{
icon:<FaBarcode/>,
title:"Barcode & RFID Support",
desc:"Improve inventory accuracy with barcode scanning and RFID integration."
},

{
icon:<FaWarehouse/>,
title:"Multi-Warehouse Management",
desc:"Manage inventory across multiple warehouses from a centralized system."
},

{
icon:<FaClipboardList/>,
title:"Automated Stock Replenishment",
desc:"Automatically reorder stock when inventory levels reach predefined thresholds."
},

{
icon:<FaChartLine/>,
title:"Inventory Analytics",
desc:"Gain insights into stock movement, demand trends, and inventory performance."
},

{
icon:<FaSyncAlt/>,
title:"Inventory Synchronization",
desc:"Synchronize inventory data across ERP, e-commerce platforms, and POS systems."
}

]

const modules=[

"Stock Tracking",
"Purchase Management",
"Supplier Integration",
"Inventory Forecasting",
"Stock Auditing",
"Inventory Reporting",
"Demand Planning",
"Inventory Optimization"

]

const workflow=[

"Stock Receiving",
"Inventory Recording",
"Stock Monitoring",
"Order Processing",
"Stock Replenishment"

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[420px]">

<img
src="/images/IMS_1.jpeg"
alt="Inventory Management"
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

Inventory Management System

</motion.h1>

<p className="mt-4 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Inventory Management</span>

</p>

</div>

</section>


{/* PRODUCT DASHBOARD PREVIEW (SaaS Style Section) */}

<section className="py-24">

<div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>

<h2 className="mb-6 md:text-left text-center text-4xl font-bold text-gray-800 dark:text-white">
Smart Inventory Control
</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Our Inventory Management System helps businesses
track stock levels, manage suppliers, and automate
inventory processes efficiently.

</p>

<p className="text-gray-600 dark:text-gray-300">

With advanced analytics and real-time dashboards,
organizations can make smarter inventory decisions
and avoid stockouts or overstocking.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="/images/IMS_2.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* FEATURES */}

<section className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-5 dark:text-white">
Key Inventory Features
</h2>

<p className="max-w-3xl mx-auto mb-14 text-center text-gray-600 dark:text-gray-300">
    Enhance inventory management with powerful features that provide real-time visibility, improve accuracy through barcode and RFID support, enable seamless multi-warehouse control, automate stock replenishment, and deliver actionable insights with advanced analytics and synchronized data across all locations.
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


{/* INVENTORY WORKFLOW */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="text-4xl font-bold text-gray-800 mb-5 dark:text-white">
Inventory Workflow
</h2>

<p className="max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-300">
    Streamline inventory operations with a structured workflow that ensures accurate stock handling from receiving and recording to continuous monitoring, efficient order processing, and timely replenishment for uninterrupted business operations.
</p>

<div className="grid gap-10 md:grid-cols-5">

{workflow.map((step,index)=>(

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


{/* CORE MODULES */}
{
    <Integration />
}
<section className="py-24 bg-gray-100 dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-5 dark:text-white">
Core Inventory Modules
</h2>

<p className="max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-300">
    Strengthen inventory management with core modules that enable accurate stock tracking, efficient purchasing, seamless supplier integration, demand forecasting, auditing, and insightful reporting—ensuring optimized inventory levels and smarter decision-making.
</p>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

{modules.map((module,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
className="p-6 text-center bg-white shadow-lg dark:bg-gray-900 rounded-xl"
>

<p className="font-medium text-gray-700 dark:text-gray-200">
{module}
</p>

</motion.div>

))}

</div>

</div>

</section>


{/* BUSINESS IMPACT */}

<section className="py-24 bg-white dark:bg-gray-900">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-5 text-4xl font-bold text-gray-800 dark:text-white">
Business Impact
</h2>

<p className="max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-300">
Drive strong business performance with reduced stockouts, lower inventory costs, improved accuracy, and faster order processing—ensuring better efficiency, optimized stock levels, and enhanced customer satisfaction.
</p>

<div className="grid gap-10 md:grid-cols-4">

{[
"40% Reduced Stockouts",
"35% Lower Inventory Costs",
"50% Improved Inventory Accuracy",
"60% Faster Order Processing"
].map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className={`p-6 shadow-lg ${
  index % 2 == 0
    ? "shadow-lg bg-gradient-to-r from-purple-400 to-orange-300 dark:from-gray-800 dark:to-gray-800 text-black dark:text-gray-300"
    : "shadow 1g bg-green-200 dark:bg-gray-800 text-black dark:text-gray-300"
} rounded-xl`}>

<p className="font-semibold">
{item}
</p>

</motion.div>

))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-indigo-700 to-blue-700 dark:from-gray-800 dark:bg-gray-900">

<h2 className="mb-6 text-4xl font-bold">
Gain Full Control of Your Inventory
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Optimize stock levels, reduce inventory costs,
and improve operational efficiency with our
advanced Inventory Management System.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
>

Request Inventory Demo

</Link>

</section>

<Footer/>

</div>

)

}