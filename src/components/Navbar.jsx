import { useState } from "react";
import { NavLink } from "react-router-dom"
import { FaChevronDown, FaChevronUp, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {

const [servicesOpen,setServicesOpen] = useState(false);
const [industriesOpen,setIndustriesOpen] = useState(false);
const [solutionOpen,setSolutionOpen]=useState(false);
const [darkMode,setDarkMode] = useState(false);
const [menu,setMenu] = useState(false)

const toggleDarkMode = () =>{
setDarkMode(!darkMode)
document.documentElement.classList.toggle("dark")
}

return(

<header className="fixed z-50 w-full transition bg-white shadow-md dark:bg-gray-900">

<div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">

{/* LOGO */}
<div className="flex items-center gap-3 cursor-pointer group">
 <h1 className="text-2xl font-bold tracking-wide text-blue-600">
  <NavLink
  to="/">
Dbsol
</NavLink>
</h1> 

{/* Divider */}

<div className="w-px h-6 bg-gray-300"></div>

{/* Microsoft Partner Badge */}

<div className="flex items-center gap-2 transition-all duration-300 group-hover:scale-105">

<img
src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
alt="Microsoft Logo"
className="w-5 h-5"
/>

<p className="text-xs font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">
Microsoft Partner
</p>

</div>

</div>

{/* NAVIGATION */}
<div className="flex gap-4 md:gap-8">
<ul className="items-center hidden gap-10 font-medium dark:text-white md:flex">

<li className="cursor-pointer hover:text-blue-600">
<NavLink
  to="/"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Home
</NavLink>
</li>


{/* SERVICES MENU */}

<li
className="relative"
onMouseEnter={()=>setServicesOpen(true)}
onMouseLeave={()=>setServicesOpen(false)}
>

<div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">

Services

{servicesOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}

</div>

<AnimatePresence>

{servicesOpen && (

<motion.ul
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
transition={{duration:0.25}}
className="absolute left-0 w-64 p-6 space-y-3 bg-white rounded-lg shadow-xl dark:bg-gray-800"
>

<li className="cursor-pointer hover:text-blue-600">
 <NavLink  
 to="/finance-operation"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Finance & Operations</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/Dynamics365Business"  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Dynamics 365 Business & Fundamentals</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/Webdevelopment"  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Web Development</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/MobileAppDevelopment" className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
App Development</NavLink>
</li>

</motion.ul>

)}

</AnimatePresence>

</li>
{/*Solution */}
<li
className="relative"
onMouseEnter={()=>setSolutionOpen(true)}
onMouseLeave={()=>setSolutionOpen(false)}
>

<div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
Solutions

{solutionOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}

</div>

<AnimatePresence>

{solutionOpen && (

<motion.ul
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
transition={{duration:0.25}}
className="absolute left-0 w-56 p-4 space-y-3 bg-white rounded-lg shadow-xl dark:bg-gray-800"
>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/FinancialManagementSystem" className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Financial Management System</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/HumanResourceManagementSystem" className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Human Resource Management System</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/SCMS" className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Supply Chain Management System</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/WMS"  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Warehouse Management System</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/IMS" className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
 >Inventory Management System</NavLink>
</li>



</motion.ul>

)}

</AnimatePresence>
</li>



{/* INDUSTRIES MENU */}

<li
className="relative"
onMouseEnter={()=>setIndustriesOpen(true)}
onMouseLeave={()=>setIndustriesOpen(false)}
>

<div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">

Industries

{industriesOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}

</div>

<AnimatePresence>

{industriesOpen && (

<motion.ul
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
transition={{duration:0.25}}
className="absolute left-0 w-56 p-4 space-y-3 bg-white rounded-lg shadow-xl dark:bg-gray-800"
>

<li className="cursor-pointer hover:text-blue-600">
  <NavLink
  to="/FinanceBanking"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Finance & Banking</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
  <NavLink
  to="/IT.ITES"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
IT / ITES</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/Manufacturing"
   className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
   >
Manufacturing</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/Retail&Wholesale"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
   >
Retail & Wholesale</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/LogisticsSupplyChain"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
   >
Logistic Supply Chain</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/HealthCare"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
   >
Health Care</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
  <NavLink to="/Education"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
   >
Education Institute</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
    <NavLink to="/ProfessionalServices"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
   > 
Professional Services</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
    <NavLink to="/Hospitality"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
   >
Hospitality</NavLink>
</li>


</motion.ul>

)}

</AnimatePresence>

</li>


<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/aboutUs"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
About Us
</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/CaseStudies"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
Case Studies
</NavLink>
</li>
{/*
<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/careers"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
Careers
</NavLink>
</li>
*/}
<li className="cursor-pointer hover:text-blue-600">
<NavLink
  to="/contact"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>Contact Us</NavLink>
</li>

</ul>
<button
onClick={()=>setMenu(!menu)}
className="text-xl md:hidden"
>
{menu? '✕' : '☰'}


</button>

<button
onClick={toggleDarkMode}
className={`relative flex items-center w-14 h-7 rounded-full p-1 transition-all duration-500 ${
darkMode ? "bg-black" : "bg-yellow-400"
}`}
>

<motion.div
layout
transition={{type:"spring", stiffness:700, damping:30}}
className={`right-0 flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-md ${
  darkMode? "absolute right-1":""
}`
}>

{darkMode ? (

<svg
xmlns="http://www.w3.org/2000/svg"
fill="white"
viewBox="0 0 24 24"
stroke="white"
className="w-4 h-4"
>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
d="M21 12.79A9 9 0 0111.21 3
7 7 0 1018 21
9 9 0 0021 12.79z"
/>
</svg>

) : (

<svg
xmlns="http://www.w3.org/2000/svg"
fill="orange"
viewBox="0 0 24 24"
stroke="orange"
className="w-4 h-4"
>
<circle cx="12" cy="12" r="5"/>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.46 6.46 5.05 5.05m12.9 0-1.41 1.41M6.46 17.54l-1.41 1.41"/>
</svg>

)}

</motion.div>

</button>
</div>
</div>
{menu && (

<div className="px-6 pb-4 bg-white md:hidden">
<ul className="flex flex-col gap-6 font-medium">
<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Home
</NavLink>
</li>


{/* SERVICES MENU */}

<li
className="relative"
>

<div onClick={()=>setServicesOpen(!servicesOpen)}
className="flex items-center gap-2 cursor-pointer hover:text-blue-600">

Services

{servicesOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}

</div>

<AnimatePresence>

{servicesOpen && (

<motion.ul
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
transition={{duration:0.25}}
className="mt-3 ml-4 space-y-3">

<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/finance-operation"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Finance & Operations</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/Dynamics365Business" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Dynamics 365 Business & Fundamentals</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/Webdevelopment" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Web Development</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/MobileAppDevelopment" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
App Development</NavLink>
</li>

</motion.ul>

)}

</AnimatePresence>

</li>
{/*Solution */}
<li
className="relative"
>

<div onClick={()=>setSolutionOpen(!solutionOpen)} className="flex items-center gap-2 cursor-pointer">
Solutions

{solutionOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}

</div>

<AnimatePresence>

{solutionOpen && (

<motion.ul
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
transition={{duration:0.25}}
className="mt-3 ml-4 space-y-3"
>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/FinancialManagementSystem" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Financial Management System</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/HumanResourceManagementSystem" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Human Resource Management System</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/SCMS" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Supply Chain Management System</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/WMS" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Warehouse Management System</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/IMS" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Inventory Management System</NavLink>
</li>



</motion.ul>

)}

</AnimatePresence>
</li>



{/* INDUSTRIES MENU */}

<li
className="relative"
>

<div onClick={()=>setIndustriesOpen(!industriesOpen)} className="flex items-center gap-2 cursor-pointer hover:text-blue-600">

Industries

{industriesOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}

</div>

<AnimatePresence>

{industriesOpen && (

<motion.ul
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
transition={{duration:0.25}}
className="mt-3 ml-4 space-y-3"
>
<li className="cursor-pointer hover:text-blue-600">
  <NavLink
  to="/FinanceBanking"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Finance & Banking</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/IT.ITES" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>

IT / ITES</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
  <NavLink
  to="/Manufacturing"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Manufacturing</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
  <NavLink
  to="/Retail&Wholesale"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Retail & Wholesale</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/LogisticsSupplyChain" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Logistics Supply Chain</NavLink>

</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/Hospitality"
 className={({isActive}) =>
 isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"} 
>
 Hospitality </NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/Education" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Education Institute</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/ProfessionalServices" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
> 
Professional Services</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/Healthcare" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Health Care</NavLink>
</li>


</motion.ul>

)}

</AnimatePresence>

</li>


<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/aboutUs"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
About Us</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/CaseStudies"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
Case Studies
</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink
 to="/Contact"  
className={({isActive})=>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Contact Us</NavLink>
</li>

</ul>
</div>

)}
</header>

)

}