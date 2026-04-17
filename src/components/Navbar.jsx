import { useState } from "react";
import { NavLink } from "react-router-dom"
import { FaChevronDown, FaChevronUp, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Header() {

const [servicesOpen,setServicesOpen] = useState(false);
const [industriesOpen,setIndustriesOpen] = useState(false);
const [solutionOpen,setSolutionOpen]=useState(false);
const toggleServices = () => {
  setServicesOpen(prev => !prev);
  setIndustriesOpen(false);
  setSolutionOpen(false);
};

const toggleIndustries = () => {
  setIndustriesOpen(prev => !prev);
  setServicesOpen(false);
  setSolutionOpen(false);
};

const toggleSolutions = () => {
  setSolutionOpen(prev => !prev);
  setServicesOpen(false);
  setIndustriesOpen(false);
};

const [darkMode,setDarkMode] = useState(
  document.documentElement.classList.contains("dark")
);
const [menu,setMenu] = useState(false)

const toggleDarkMode = () =>{
setDarkMode(!darkMode)
document.documentElement.classList.toggle("dark")
}

const resetMenu = () => {
  setMenu(false);
  setServicesOpen(false);
  setIndustriesOpen(false);
  setSolutionOpen(false);
};

useEffect(() => {
  if (menu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menu]);
return(
<div className="relative">
<header className="fixed z-40 w-full transition bg-white shadow-md dark:bg-gray-900">

<div className="flex items-center justify-between max-w-full px-4 py-2.5 mx-auto">

{/* LOGO */}
<div className="flex items-center gap-4 cursor-pointer md:gap-1 group">
  <button
onClick={()=>setMenu(!menu)}
className={`text-2xl lg:hidden ${
  darkMode ? "text-white" : "dark-text-black"
} `}
>
{menu? '✕' : '☰'}


</button>
 <h1 className="text-2xl font-bold tracking-wide text-blue-600 ">
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

<p className="text-sm font-medium text-gray-600 lg:text-base dark:text-gray-300">
Microsoft Partner
</p>

</div>

</div>

{/* NAVIGATION */}
<div className="flex gap-4">
<ul className="hidden font-medium 
lg:gap-3 lg:text-sm 
xl:gap-6 xl:text-base 
dark:text-white lg:flex">

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
transition={{duration:0.30}}
className="absolute left-0 w-64 p-6 space-y-3 font-['Montserrat'] rounded-lg shadow-md from-neutral-800 bg-white/60 backdrop-blur-md text-[18px] dark:bg-gray-800 dropdown"
>
  <li className="cursor-pointer">
    <NavLink
    to="/businessconsulting"
    className={({isActive}) =>
    isActive ?"text-blue-600 border-b-2 border-blue-600 pb-1" :""}>
  Business Consulting</NavLink>
  </li>

<li className="cursor-pointer">
 <NavLink  
 to="/finance-operation"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}>
Finance & Operations</NavLink>
</li>

<li className="cursor-pointer">
  <NavLink to="/Dynamics365Business"  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}>
Dynamics 365 Business & Fundamentals</NavLink>
</li>

<li className="cursor-pointer">
  <NavLink to="/Webdevelopment"  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}>
Web Development</NavLink>
</li>

<li className="cursor-pointer">
  <NavLink to="/MobileAppDevelopment" className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}>
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
className="absolute left-0 w-64 p-6 space-y-3 font-['Montserrat'] rounded-lg shadow-md from-neutral-800 bg-white/60 backdrop-blur-md text-[18px] dark:bg-gray-800 dropdown"
>

<li className="cursor-pointer ">
<NavLink to="/FinancialManagementSystem" className={({isActive}) =>
  isActive ? " border-b-2 border-blue-600 pb-1" : ""}>
Financial Management System</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/HumanResourceManagementSystem" className={({isActive}) =>
  isActive ? " border-b-2 border-blue-600 pb-1" : ""}>
Human Resource Management System</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/SCMS" className={({isActive}) =>
  isActive ? " border-b-2 border-blue-600 pb-1" : ""}>
Supply Chain Management System</NavLink>
</li>
<li className="cursor-pointer ">
  <NavLink to="/WMS"  className={({isActive}) =>
  isActive ? " border-b-2 border-blue-600 pb-1" : ""}>
Warehouse Management System</NavLink>
</li>
<li className="cursor-pointer ">
<NavLink to="/IMS" className={({isActive}) =>
  isActive ? " border-b-2 border-blue-600 pb-1" : ""}
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
className="absolute left-0 z-50 w-56 p-6 space-y-3 font-['Montserrat'] rounded-lg shadow-md from-neutral-800 bg-white/60 backdrop-blur-md text-[18px] dark:bg-gray-800 dropdown"
>
<li className="cursor-pointer">
  <NavLink
  to="/business-consulting"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}
>
Business-Consulting</NavLink>
</li>
<li className="cursor-pointer">
  <NavLink
  to="/FinanceBanking"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}
>
Finance & Banking</NavLink>
</li>
<li className="cursor-pointer ">
  <NavLink
  to="/IT.ITES"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}
>
IT / ITES</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/Manufacturing"
   className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}
   >
Manufacturing</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/Retail&Wholesale"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}
   >
Retail & Wholesale</NavLink>
</li>
<li className="cursor-pointer">
  <NavLink to="/LogisticsSupplyChain"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}
   >
Logistic Supply Chain</NavLink>
</li>
<li className="cursor-pointer">
  <NavLink to="/HealthCare"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}
   >
Health Care</NavLink>
</li>
<li className="cursor-pointer ">
  <NavLink to="/Education"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}
   >
Education Institute</NavLink>
</li>
<li className="cursor-pointer ">
    <NavLink to="/ProfessionalServices"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}
   > 
Professional Services</NavLink>
</li>
<li className="cursor-pointer ">
    <NavLink to="/Hospitality"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""}
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
to="/Careers"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
Careers
</NavLink>
</li>
{/* contact us */}
<li className="cursor-pointer hover:text-blue-600">
<NavLink
  to="/contact"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>Contact Us</NavLink>
</li>

</ul>


<button
onClick={toggleDarkMode}
className={`relative border-2 border-indigo-50 flex items-center w-14 h-7 rounded-full px-1 py-3.5 transition-all duration-500 ${
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
</header>
{menu && (

<motion.div initial={{opacity: 0,x: -60 }} whileInView={{opacity: 1, x: 0}} transition={{delay:0.3}} className="fixed left-1 z-40 w-9/12 px-6 py-6 pb-10 
bg-white dark:bg-gray-800 text-black dark:text-gray-200 border-b border-r border-gray-400 top-12 lg:hidden rounded-xl">
<ul className="flex flex-col gap-5 text-xl font-semibold ">
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

<div onClick={toggleServices}
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

<div onClick={toggleSolutions}className="flex items-center gap-2 cursor-pointer">
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

<div onClick={toggleIndustries} className="flex items-center gap-2 cursor-pointer hover:text-blue-600">

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
to="/Careers"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
Careers
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
</motion.div>

)}
</div>

)

}