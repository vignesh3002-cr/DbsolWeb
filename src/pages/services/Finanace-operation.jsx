import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaChartLine, FaCogs, FaDatabase, FaShieldAlt } from "react-icons/fa"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function FinanceOperations() {
const features = [
{
icon:<FaChartLine/>,
title:"Financial Intelligence",
desc:"Advanced analytics and reporting tools that help organizations gain deep insights into financial performance."
},
{
icon:<FaCogs/>,
title:"Process Automation",
desc:"Automate repetitive finance operations such as invoicing, budgeting, and financial consolidations."
},
{
icon:<FaDatabase/>,
title:"Centralized Data Management",
desc:"Manage enterprise financial data in a single secure environment for better decision making."
},
{
icon:<FaShieldAlt/>,
title:"Compliance & Security",
desc:"Ensure regulatory compliance and financial transparency with built-in security frameworks."
}
]

const steps = [
{
  title: "Legacy Systems",
  desc: "AX 2012 / Custom ERP",
  img:"/images/Legacy.png"
},
{
  title: "Data Migration",
  desc: "Secure Transfer",
  img: "/images/Data_Migration.png"
},
{
  title: "Dynamics 365",
  desc: "Finance & Operations",
  img: "/images/Dynamics.png"
},
{
  title: "Azure APIs",
  desc: "Integration Layer",
  img: "/images/API's.png"
},
{
  title: "3rd Party Apps",
  desc: "CRM / Payment",
  img: "/images/3rdParty.png"
},
{
  title: "Analytics",
  desc: "Power BI",
  img: "/images/Analytics.png"
}
]
return (
<>
<Navbar/>
<div className="bg-gray-50 dark:bg-gray-900">

{/* HERO SECTION */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="/images/F&O_img1.jpg"
alt="finance operations"
className="absolute inset-0 object-cover w-full h-full"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 text-center text-white">

<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-5xl font-bold"
>

Finance & Operations

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Finance & Operations</span>

</p>

</div>

</section>


{/* SERVICE OVERVIEW */}

<section className="py-20">

<div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>

<h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">

Microsoft Dynamics 365 Finance & Operations

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Our Finance & Operations solutions empower enterprises with
intelligent financial management, real-time insights, and automated
business processes.

</p>

<p className="text-gray-600 dark:text-gray-300">

We help organizations implement, customize, and optimize
Microsoft Dynamics 365 Finance & Operations to improve
operational efficiency and financial transparency.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="/images/F&O_img2.jpg"
className="shadow-xl rounded-xl"
/>

</div>

</section>

{/* INTEGRATION ARCHITECTURE */}

{/* INTEGRATION ARCHITECTURE */}

<section className="py-28 bg-gray-50 dark:bg-gray-900">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-6 text-4xl font-bold">
How We Integrate With Your Existing Systems
</h2>

<p className="max-w-2xl mx-auto mb-16 text-gray-500">
We seamlessly connect Microsoft Dynamics 365 with your legacy systems,
third-party tools, and cloud infrastructure for a unified business ecosystem.
</p>

<div className="grid items-center gap-6 md:grid-cols-3">

{steps.map((item, index) => (

  <div key={index} className="flex items-center gap-4">

    {/* Card */}
    <div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative h-32 p-6 overflow-hidden bg-white shadow-lg w-72 rounded-xl"
    >

      {/* Background Image */}
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative text-white">
      </div>

    </motion.div>
    <div>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm">{item.desc}</p>
    </div>
    </div>

    {/* Arrow (only if not last item) */}
    {index !== steps.length - 1 && index!==2 && (
      <div><img className="w-36"src="/images/right.png"/></div>
    )}
  
  </div>

))}

</div>

</div>

</section>

{/* KEY FEATURES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-blue-600">
Core Capabilities
</h2>

<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 dark:text-white">

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

{/* IMPLEMENTATION PROCESS 

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-blue-600">
Our Implementation Process
</h2>

<div className="grid gap-10 md:grid-cols-4">

{["Consulting","Planning","Implementation","Optimization"].map((step,index)=>(
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

<h3 className="text-lg font-semibold dark:text-gray-400">
{step}
</h3>

</motion.div>
))}

</div>

</div>

</section>


{/* REAL PROJECT FLOW 

<section className="py-28">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="mb-16 text-4xl font-bold text-center">
How We Deliver Successful Projects
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"Requirement Analysis",
"System Design",
"Implementation",
"Go Live & Support"
].map((step,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-8 text-center bg-white shadow-lg dark:bg-gray-800 rounded-xl"
>

<div className="mb-4 text-3xl font-bold text-blue-600">
0{index+1}
</div>

<p className="font-semibold">{step}</p>

</motion.div>

))}

</div>

</div>

</section>
{/* TRUST SECTION 

<section className="py-24 text-gray-800 bg-gradient-to-r dark:from-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold">
Why Clients Trust Us
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"Microsoft Certified Experts",
"Secure Data Migration",
"24/7 Support",
"On-Time Delivery"
].map((item,index)=>(

<motion.div
key={index}
whileHover={{scale:1.1}}
className="p-6 bg-white/10 backdrop-blur-md rounded-xl"
>

<p className="text-lg font-semibold">{item}</p>

</motion.div>

))}

</div>

</div>

</section>*/}
{/* CALL TO ACTION */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800">

<h2 className="mb-6 text-4xl font-bold dark:text-blue-600">
Transform Your Financial Operations
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Unlock the power of intelligent finance management with our
Dynamics 365 Finance & Operations expertise.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-gray-100"
>

Contact Our Experts

</Link>

</section>

</div>
<Footer/>
</>
)

}