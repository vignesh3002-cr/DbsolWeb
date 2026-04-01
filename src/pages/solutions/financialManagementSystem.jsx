import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Integration from "../../components/IntegrationSteps"
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
src="/images/FM_img_1.jpeg"
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

<h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white text-center md:text-left">
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
src="/images/FM_img_2.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* FEATURES */}

<section className="py-24 pt-14 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-5 dark:text-white">
Key Features
</h2>

<p className="max-w-2xl mx-auto mb-16 text-gray-600 dark:text-gray-300">
    enabling automated accounting, efficient budget and expense management, real-time analytics, centralized data access, secure transactions, and continuous performance monitoring.
</p>
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

<h3 className="mb-2 text-lg font-semibold dark:text-white ">
{item.title}
</h3>

<p className="text-sm text-black dark:text-gray-300">
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>

{/* FINANCIAL WORKFLOW */}

<section className="py-24 pt-14">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-5 dark:text-white">
Financial Workflow
</h2>

<p className="max-w-3xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
    Financial Workflow ensures smooth and accurate financial operations—from recording transactions and processing accounts to allocating budgets, generating reports, and analyzing performance for better decision-making.

</p>

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

<section className="py-24 pt-5">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-6 dark:text-white">
Core Financial Modules
</h2>

<p className="max-w-3xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
    Core Financial Modules provide a comprehensive foundation for managing enterprise finances—covering general ledger, payables and receivables, budget planning, cash flow management, reporting, tax management, and expense tracking for complete financial control.

</p>

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
<Integration/>
{/* BENEFITS */}

<section className="py-24 ">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-5 text-4xl font-bold text-gray-800 dark:text-white">
Business Benefits
</h2>

<p className="max-w-3xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
    Drive smarter financial operations with enhanced accuracy, real-time insights, and streamlined reporting processes—empowering organizations to improve efficiency, ensure compliance, and make confident data-driven decisions.
</p>

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
transition={{delay:index*0.3}}
className={`p-6 shadow-lg ${index%2==0?"bg-gradient-to-r from-purple-400 to-orange-300  dark:text-white dark:bg-gray-600":"bg-green-200  dark:text-white dark:bg-gray-600"}  rounded-xl`}
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

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-700">

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