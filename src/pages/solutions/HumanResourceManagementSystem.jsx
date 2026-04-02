import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Integration from "../../components/IntegrationSteps"
import {
FaUsers,
FaUserCheck,
FaMoneyCheckAlt,
FaChartLine,
FaClock,
FaLaptop
} from "react-icons/fa"

export default function HumanResourceManagementSystem(){

const features = [

{
icon:<FaUsers/>,
title:"Employee Management",
desc:"Centralized employee database with complete workforce information and records."
},

{
icon:<FaUserCheck/>,
title:"Recruitment & Onboarding",
desc:"Automate hiring workflows and streamline onboarding processes."
},

{
icon:<FaClock/>,
title:"Attendance & Leave Tracking",
desc:"Track employee attendance, working hours, and leave requests efficiently."
},

{
icon:<FaMoneyCheckAlt/>,
title:"Payroll Management",
desc:"Automated payroll processing with compliance and tax calculations."
},

{
icon:<FaChartLine/>,
title:"Performance Analytics",
desc:"Monitor employee performance with advanced HR analytics dashboards."
},

{
icon:<FaLaptop/>,
title:"Remote Workforce Management",
desc:"Manage remote teams and hybrid work environments seamlessly."
}

]

const modules = [
"Employee Information System",
"Recruitment Management",
"Payroll Processing",
"Performance Management",
"Attendance & Leave Management",
"Training & Development",
"Compliance Management",
"HR Analytics Dashboard"
]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[420px]">

<img
src="/images/HR_1.jpeg"
alt="Human Resource Management"
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

Human Resource Management System

</motion.h1>

<p className="mt-4 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">HR Management System</span>

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
Modern HR Management Platform
</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

A Human Resource Management System helps organizations
automate HR processes such as recruitment, employee
management, payroll, and performance tracking.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our HRMS solution enables businesses to streamline
HR operations, enhance employee engagement, and
make data-driven workforce decisions.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="/images/HR_1.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* FEATURES */}

<section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-5 dark:text-white">
Key HR Features
</h2>

<p className="max-w-3xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300"> 
    enabling efficient employee records, automated recruitment and onboarding, accurate attendance and payroll processing, insightful performance analytics, and seamless management of remote teams.
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

<p className="text-sm text-gray-500 dark:text-gray-400">
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>

{/* HR WORKFLOW */}

<section className="py-20 pt-10">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="text-4xl mx-auto mb-5 font-bold text-gray-800 mb-14 dark:text-white">
HR Management Workflow
</h2>

<p className="max-w-3xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
    HR Management Workflow ensures a structured employee lifecycle—from candidate recruitment and onboarding to attendance tracking, payroll processing, performance management, and continuous employee development.
</p>

<div className="grid gap-10 md:grid-cols-5">

{[
"Candidate Recruitment",
"Employee Onboarding",
"Attendance & Payroll",
"Performance Management",
"Employee Development"
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

<section className="py-24 pt-10">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl mb-5 font-bold text-center text-gray-800 mb-14 dark:text-white">
Core HR Modules
</h2>

<p className="max-w-3xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-300">
    Core HR Modules provide a complete framework for managing the workforce—covering employee information, recruitment, payroll, performance, attendance, training, compliance, and HR analytics for informed decision-making.
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
<Integration/>

{/* BUSINESS IMPACT */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-5 text-4xl font-bold text-gray-800 dark:text-white">
Business Impact
</h2>

<p className="max-w-2xl mx-auto mb-14 text-gray-600 dark:text-gray-300">
    HR operations with intelligent automation, faster recruitment processes, and enhanced workforce productivity. Gain deeper insights into employee performance and organizational efficiency, enabling smarter decision-making and a more agile, data-driven workplace.
</p>
<div className="grid gap-10 md:grid-cols-4">

{[
"50% Faster Recruitment",
"40% Improved Employee Productivity",
"60% Automated HR Processes",
"70% Better Workforce Insights"
].map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className={`p-6 shadow-lg ${
  index % 2 == 0
    ? "bg-gradient-to-r from-purple-400 to-orange-300 dark:from-gray-700 dark:to-gray-900 text-black dark:text-gray-300"
    : "bg-green-200 dark:bg-gray-900 md:text-black dark:text-gray-300"
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

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-900">

<h2 className="mb-6 text-4xl font-bold">
Empower Your Workforce with Smart HR Technology
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Digitally transform HR operations with intelligent tools
for workforce management, recruitment, payroll, and analytics.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold  bg-white text-blue-700 rounded-lg hover:bg-gray-100"
>

Request HRMS Demo

</Link>

</section>

<Footer/>

</div>

)

}