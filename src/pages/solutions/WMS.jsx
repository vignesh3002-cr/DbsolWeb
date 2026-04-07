import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import RoleBasedTraining from "../../components/trainingController"
import Integration from "../../components/IntegrationSteps"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


import {
FaWarehouse,
FaBoxes,
FaTruckLoading,
FaBarcode,
FaChartLine,
FaClipboardCheck
} from "react-icons/fa"

export default function WarehouseManagementSystem(){

const features=[

{
icon:<FaWarehouse/>,
title:"Warehouse Automation",
desc:"Automate warehouse processes including receiving, storage, and shipping operations."
},

{
icon:<FaBoxes/>,
title:"Inventory Visibility",
desc:"Track stock levels and inventory movement across warehouses in real time."
},

{
icon:<FaBarcode/>,
title:"Barcode & RFID Integration",
desc:"Improve inventory accuracy using barcode and RFID technology."
},

{
icon:<FaTruckLoading/>,
title:"Smart Picking & Packing",
desc:"Optimize picking routes and packing operations for faster fulfillment."
},

{
icon:<FaClipboardCheck/>,
title:"Order Fulfillment",
desc:"Manage and track customer orders with efficient fulfillment workflows."
},

{
icon:<FaChartLine/>,
title:"Warehouse Analytics",
desc:"Gain operational insights with real-time dashboards and reports."
}

]

const modules=[

"Inventory Control",
"Warehouse Operations",
"Barcode Management",
"Order Picking & Packing",
"Shipment Tracking",
"Warehouse Analytics",
"Supplier Integration",
"Demand Forecasting"

]

const workflow=[

"Goods Receiving",
"Inventory Storage",
"Order Picking",
"Packing & Labeling",
"Shipping & Delivery"

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[420px]">

<img
src="/images/WMS_1.jpeg"
alt="Warehouse"
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

Warehouse Management System

</motion.h1>

<p className="mt-4 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Warehouse Management</span>

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
Smart Warehouse Operations
</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

A Warehouse Management System (WMS) enables businesses
to manage warehouse operations efficiently by
optimizing inventory tracking, storage, and order
fulfillment.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our WMS platform improves warehouse productivity,
reduces operational costs, and enhances order
accuracy through automation and intelligent
inventory management.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="/images/WMS_2.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* FEATURES */}

<section className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-5 dark:text-white">
Key Warehouse Features
</h2>

<p className="max-w-3xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
    Optimize warehouse operations with automation, real-time inventory visibility, and intelligent picking and fulfillment processes. Enhance accuracy with advanced tracking technologies and gain actionable insights through data-driven analytics for improved efficiency and control.
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

<p className="text-sm text-gray-600 dark:text-gray-400">
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>


{/* WORKFLOW */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="text-4xl font-bold text-gray-800 mb-14 dark:text-white">
Warehouse Workflow
</h2>

<p className="max-w-3xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
    Optimize your warehouse operations with a seamless workflow that ensures accuracy, speed, and efficiency at every stage. From receiving goods and organizing inventory to precise order picking, secure packing, and timely shipping, this process is designed to enhance productivity, minimize errors, and ensure smooth delivery fulfillment.
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


{/* MODULES */}
{
    <Integration />
}
<section className="py-24 bg-gray-100 dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-5 dark:text-white">
Core WMS Modules
</h2>

<p className="max-w-3xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
    Streamline warehouse operations with core WMS modules that enhance inventory control, optimize processes, enable accurate tracking, and support smarter, data-driven decisions.
</p>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

{modules.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
className="p-6 text-center bg-white shadow-lg rounded-xl dark:bg-gray-900"
>

<p className="font-medium text-gray-700 dark:text-gray-200">
{item}
</p>

</motion.div>

))}



</div>

</div>

</section>

<RoleBasedTraining/>

{/* BUSINESS IMPACT */}

<section className="py-24 bg-white dark:bg-gray-900">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-5 text-4xl font-bold text-gray-800 dark:text-white">
Business Impact
</h2>

<p className="max-w-3xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
    Achieve significant business impact with faster order processing, improved inventory accuracy, reduced warehouse costs, and enhanced fulfillment speed—driving greater efficiency, better resource utilization, and overall operational excellence.
</p>

<div className="grid gap-10 md:grid-cols-4">

{[
"50% Faster Order Processing",
"40% Inventory Accuracy Improvement",
"35% Reduced Warehouse Costs",
"60% Increased Fulfillment Speed"
].map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className={`p-6 shadow-lg ${
  index % 2 == 0
    ? "bg-gradient-to-r from-purple-400 to-orange-300 dark:from-gray-800 dark:to-gray-800 text-black dark:text-gray-300"
    : "bg-green-200 dark:bg-gray-800 text-black dark:text-gray-300"
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

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-gray-800 dark:to-gray-900">

<h2 className="mb-6 text-4xl font-bold">
Transform Your Warehouse Operations
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Improve warehouse efficiency, increase inventory
accuracy, and streamline order fulfillment with
our advanced Warehouse Management System.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
>

Request WMS Demo

</Link>

</section>

<Footer/>

</div>

)

}