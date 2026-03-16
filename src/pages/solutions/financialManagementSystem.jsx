import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import {
FaChartLine,
FaFileInvoiceDollar,
FaBalanceScale,
FaChartPie,
FaDatabase,
FaShieldAlt
} from "react-icons/fa"

export default function FinancialManagementSystem(){

const features = [

{
icon:<FaFileInvoiceDollar/>,
title:"Automated Accounting",
desc:"Automate journal entries, invoices, payments, and financial reports with intelligent accounting workflows."
},

{
icon:<FaBalanceScale/>,
title:"Budget & Expense Management",
desc:"Track budgets, monitor expenses, and ensure financial control across departments."
},

{
icon:<FaChartPie/>,
title:"Financial Analytics",
desc:"Gain real-time financial insights through dashboards and advanced analytics."
},

{
icon:<FaDatabase/>,
title:"Centralized Financial Data",
desc:"Manage all financial records in a secure centralized system with easy accessibility."
},

{
icon:<FaShieldAlt/>,
title:"Secure Transactions",
desc:"Ensure financial security and compliance with advanced security protocols."
},

{
icon:<FaChartLine/>,
title:"Performance Monitoring",
desc:"Monitor company financial performance with powerful reporting tools."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="https://images.pexels.com/photos/6693656/pexels-photo-6693656.jpeg"
className="absolute inset-0 object-cover w-full h-full"
alt="financial management"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 text-center text-white">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.7}}
className="text-5xl font-bold"
>

Financial Management System

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<Link to="/solutions" className="hover:text-blue-400">Solutions</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Financial Management System</span>

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
Smart Financial Management
</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

A Financial Management System helps organizations
manage accounting, budgeting, reporting, and financial
operations efficiently.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our solution provides modern tools for financial
automation, reporting, and business insights,
allowing companies to improve financial control
and make data-driven decisions.

</p>

</motion.div>

<motion.img
src="https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* FEATURES */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Key Features
</h2>

<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

{features.map((item,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="p-8 text-center shadow-lg bg-gray-50 rounded-xl dark:bg-gray-900"
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

{/* FINANCIAL WORKFLOW */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="text-4xl font-bold text-gray-800 mb-14 dark:text-white">
Financial Workflow
</h2>

<div className="grid gap-10 md:grid-cols-5">

{[
"Transaction Recording",
"Accounts Processing",
"Budget Allocation",
"Financial Reporting",
"Performance Analysis"
].map((step,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-6 bg-white shadow-lg dark:bg-gray-800 rounded-xl"
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

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Core Financial Modules
</h2>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

{[
"General Ledger",
"Accounts Payable",
"Accounts Receivable",
"Budget Planning",
"Cash Flow Management",
"Financial Reporting",
"Tax Management",
"Expense Tracking"
].map((module,index)=> (

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
className="p-6 text-center bg-white shadow-lg dark:bg-gray-800 rounded-xl"
>

<p className="font-medium text-gray-700 dark:text-gray-200">
{module}
</p>

</motion.div>

))}

</div>

</div>

</section>

{/* BENEFITS */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Business Benefits
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"60% Faster Financial Reporting",
"40% Reduced Accounting Errors",
"50% Improved Financial Visibility",
"70% Better Compliance Management"
].map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-6 bg-white shadow-lg rounded-xl dark:bg-gray-800"
>

<p className="font-semibold">
{item}
</p>

</motion.div>

))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700">

<h2 className="mb-6 text-4xl font-bold">
Transform Your Financial Operations
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Empower your business with modern financial tools
that automate accounting, improve reporting,
and enhance financial decision-making.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
>

Request a Demo

</Link>

</section>

<Footer/>

</div>

)
}