import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { FaChevronDown, FaChevronUp, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Home from "./Hero";
import lightLogo from "../assets/LOGO dbsol.png";
import darkLogo from "../assets/Dbsol logo.dark.png";
export default function Header() {
const navigate = useNavigate();

const [powerPlatformOpen, setPowerPlatformOpen] = useState(false);
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

const goHome = (event) => {
  event.preventDefault();
  setMenu(false);
  setServicesOpen(false);
  setIndustriesOpen(false);
  setSolutionOpen(false);
  setPowerPlatformOpen(false);
  navigate("/");
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
};

const toggleDarkMode = () =>{
setDarkMode(!darkMode)
document.documentElement.classList.toggle("dark")
}

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
void motion;
return(
<div className="relative">
<header className="fixed z-40 w-full transition bg-white dark:bg-gray-900">

<div className="flex items-center justify-between max-w-full px-4 mx-auto">

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
{/* LOGO */}
<div className="flex items-center gap-4 cursor-pointer md:gap-1 group">
  
  {/* Menu Button */}
  

  {/* Logo Image */}
 <NavLink
  to="/"
  onClick={() => {
    window.location.href = "/";
  }}
>
<img
  src={darkMode ? darkLogo : lightLogo}
  alt="Dbsol Technologies"
  className={`object-contain transition-all duration-300 ${
    darkMode
      ? "h-20 md:h-16 lg:h-24"
      : "h-14 md:h-10 lg:h-20"
  }`}
/>
</NavLink>

</div> 
</div>
{/* NAVIGATION */}
<div className="flex gap-4">
<ul className="hidden font-medium lg:gap-3 lg:text-sm xl:gap-6 xl:text-base dark:text-white lg:flex">

<li className="cursor-pointer hover:text-blue-600">
<NavLink
  to="/" onClick={() => {
  window.location.href = "/";
}}
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Home
</NavLink>
</li>


{/* SERVICES MENU */}

{/* Services Dropdown */}
      <li className="relative"
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => { setServicesOpen(false); setPowerPlatformOpen(false); }}
      >              
      <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
        Our Services
        {servicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </div>

      <AnimatePresence>
        {servicesOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
        className="absolute left-0 w-64 p-6 space-y-3 font-semibold rounded-lg
      bg-white/80 dark:bg-black/45 text-black dark:text-white dropdown"
          >
            <li >
              <NavLink
                to="/Dynamics365Business"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
                
                Dynamics 365 Business
              </NavLink> 
            </li>
           
            
            <li>
              <NavLink to="/BusinessConsulting" className={({ isActive }) => 
                  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
      
                Business Consulting
              </NavLink>
            </li>

            {/* Power Platform Nested */}
       { /* <li className="relative">
          <div
            className="flex justify-between cursor-pointer hover:text-black dark:hover:text-white"
            onClick={() => setPowerPlatformOpen(prev => !prev)}
          >
            Power Platform
            {powerPlatformOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}
          </div>

         <AnimatePresence>
            {powerPlatformOpen && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <li className="mt-4">
                  <NavLink
                    to="/power-platform-solutions"
                    className={({ isActive }) =>
                  isActive ? "border-b-2 border-blue-600 pb-1 text-black dark:text-white"
                    : "hover:text-black dark:hover:text-white"
                }>
                    Power Platform Solutions
                  </NavLink>
                </li>
          
               
              </motion.ul>
            )}
          </AnimatePresence>
        </li>*/}
       <li className="mt-4">
                  <NavLink
                    to="/power-platform-solutions"
                    className={({ isActive }) =>
                  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
                    Power Platform Solutions
                  </NavLink>
                </li>
            <li>
              <NavLink to="/WebDevelopment" className={({ isActive }) => 
                isActive ? "text-blue-600 dark:text-white border-b-2 border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"
              }>
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink to="/MobileAppDevelopment" className={({ isActive }) => 
                isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
                App Development
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
{/*Solution */}

{/*<li
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
className="absolute left-0 w-64 p-6 space-y-3 font-semibold rounded-lg
      bg-white/90 dark:bg-black/45 text-black dark:text-white dropdown"
>

<li className="cursor-pointer ">
<NavLink to="/FinancialManagementSystem" className={({isActive}) =>
  isActive ? " text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
Financial Management System</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/HumanResourceManagementSystem" className={({isActive}) =>
  isActive ? " text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
Human Resource Management System</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/SCMS" className={({isActive}) =>
  isActive ? " text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
Supply Chain Management System</NavLink>
</li>
<li className="cursor-pointer ">
  <NavLink to="/WMS"  className={({isActive}) =>
  isActive ? " text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white "}>
Warehouse Management System</NavLink>
</li>
<li className="cursor-pointer ">

<NavLink to="/IMS" className={({isActive}) =>
  isActive ? " text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}
 >Inventory Management System</NavLink>
</li>



</motion.ul>

)}

</AnimatePresence>
</li>
*/}



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
className="absolute left-0 w-64 p-6 space-y-3 font-semibold rounded-lg
      bg-white/90 dark:bg-black/45 text-black dark:text-white dropdown "
>

<li className="cursor-pointer">
  <NavLink
  to="/FinanceBanking"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
>
Finance & Banking</NavLink>
</li>
<li className="cursor-pointer ">
  <NavLink
  to="/IT.ITES"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
>
IT / ITES</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/Manufacturing"
   className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Manufacturing</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/Retail&Wholesale"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Retail & Wholesale</NavLink>
</li>
<li className="cursor-pointer">
  <NavLink to="/LogisticsSupplyChain"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Logistic Supply Chain</NavLink>
</li>
<li className="cursor-pointer">
  <NavLink to="/HealthCare"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Health Care</NavLink>
</li>
<li className="cursor-pointer ">
  <NavLink to="/Education"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Education Institute</NavLink>
</li>
<li className="cursor-pointer ">
    <NavLink to="/ProfessionalServices"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   > 
Professional Services</NavLink>
</li>
<li className="cursor-pointer ">
    <NavLink to="/Hospitality"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
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

{/*

Case Study Nav Desktop

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

*/}
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

{/* 

// Careers Navbar Desktop  

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
*/}
{/* contact us */}
<li className="cursor-pointer hover:text-blue-600">
<NavLink
  to="/contact"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>Contact Us</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/emp-portal"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Login</NavLink>
</li>
</ul>


<button
onClick={toggleDarkMode}
className={`relative border-2 border-indigo-50 flex items-center w-16 h-8 rounded-full p-1 transition-all duration-500 ${
darkMode ? "bg-black" : "bg-blue-300"
}`}
>

<motion.div
layout
transition={{ type:"spring", stiffness:700, damping:30 }}
className={`flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-md ${
darkMode ? "absolute right-1" : ""
}`}
>

{darkMode ? (
  <FaMoon className="w-3 h-3 text-gray-800" />
) : (
  <FaSun className="w-3 h-3 text-yellow-500" />
)}

</motion.div>

</button>
</div>
</div>
</header>
{
  /* Mobile View */
}
{menu && (

<motion.div initial={{opacity: 0,x: -60 }} whileInView={{opacity: 1, x: 0}} transition={{delay:0.3}} className="fixed z-40 w-9/12 px-6 py-6 pb-10 text-black bg-white border-b border-r border-gray-400 left-1 dark:bg-gray-800 dark:text-gray-200 top-12 lg:hidden rounded-xl">
<ul className="flex flex-col gap-5 text-xl font-semibold ">
<li className="cursor-pointer hover:text-blue-600">
<NavLink
  to="/" onClick={() => {
  window.location.href = "/";
}}
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Home
</NavLink>
</li>


{/* SERVICES MENU */}

<li className="relative">

  <div 
    onClick={toggleServices}
    className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
  >
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
        className="mt-3 ml-4 space-y-3"
      >
       
        {/* Business */}
        <li className="cursor-pointer hover:text-blue-600">
          <NavLink
            to="/Dynamics365Business"
            className={({isActive}) =>
              isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
          >
            Dynamics 365 Business
          </NavLink>
        </li>

       

        {/* 🔽 Power Platform (Nested) */}
       {/* <li>

          <div
            onClick={() => setPowerPlatformOpen(prev => !prev)}
            className="flex items-center justify-between cursor-pointer hover:text-blue-600"
          >
            Power Platform
            {powerPlatformOpen ? <FaChevronUp size={12}/> : <FaChevronDown size={12}/>}
          </div>

          <AnimatePresence>
            {powerPlatformOpen && (
              <motion.ul
                initial={{opacity:0, height:0}}
                animate={{opacity:1, height:"auto"}}
                exit={{opacity:0, height:0}}
                transition={{duration:0.2}}
                className="mt-2 ml-4 space-y-2 overflow-hidden"
              >
                
              </motion.ul>
            )}
          </AnimatePresence>

        </li>*/}
        {/* Power Platform Solutions */}
        <li className="cursor-pointer hover:text-blue-600">
                  <NavLink
                    to="/power-platform-solutions"
                    className={({isActive}) =>
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "hover:text-blue-600"}
                  >
                    Power Platform Solutions
                  </NavLink>
                </li>
                
              

        {/* Web */}
        <li className="cursor-pointer hover:text-blue-600">
          <NavLink
            to="/WebDevelopment"
            className={({isActive}) =>
              isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
          >
            Web Development
          </NavLink>
        </li>

        {/* App */}
        <li classNamCe="cursor-pointer hover:text-blue-600">
          <NavLink
            to="/MobileAppDevelopment"
            className={({isActive}) =>
              isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
          >
            App Development
          </NavLink>
        </li>

      </motion.ul>

    )}
  </AnimatePresence>

</li>
{/*Solution 
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
*/}


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
{/*

Case Study Navbar Mobile

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
*/}

{/*

Careers Navbar Mobile

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
*/}
<li className="cursor-pointer hover:text-blue-600">
<NavLink
 to="/Contact"  
className={({isActive})=>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Contact Us</NavLink>
</li>


<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/emp-portal"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Login</NavLink>
</li>



</ul>
</motion.div>

)}
</div>

)

}