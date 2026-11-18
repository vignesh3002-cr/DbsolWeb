import { useState } from "react";
import { NavLink } from "react-router-dom"
import { FaChevronDown, FaChevronUp, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import lightLogo from "../assets/LOGO dbsol.png";
export default function Header() {

const [learnOpen, setLearnOpen] = useState(false);  
const [aboutOpen, setAboutOpen] = useState(false);
const [, setPowerPlatformOpen] = useState(false);
const [servicesOpen,setServicesOpen] = useState(false);
const [industriesOpen,setIndustriesOpen] = useState(false);
const [,setSolutionOpen]=useState(false);
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

const [darkMode,setDarkMode] = useState(
  document.documentElement.classList.contains("dark")
);
const [menu,setMenu] = useState(false)

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
<header className="fixed top-0 left-0 z-40 flex h-[80px] w-full items-center bg-white shadow-sm dark:bg-gray-900">



  {/* LEFT SIDE (Logo + White curve) */}
 <div className="flex items-center relative flex-shrink-0">
{/*S Curve Shape*/}
<div className="absolute left-0 top-0 h-full w-full overflow-visible -z-10">
  <div className="w-[650px] sm:w-[520px] md:w-[420px] h-full ">
    <svg
      viewBox="0 0 500 120"
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      <path
        d="
          M0,120
          H260
          C340,120 380,80 420,40
          C450,10 470,0 500,0
          H0 Z
        "
        fill="#ffffff"
      />
    </svg>
  </div>
</div>
<div className="flex items-center gap-4 cursor-pointer pl-2 md:pl-4">
  <button
  onClick={() => setMenu(!menu)}
  className="text-2xl lg:hidden text-black  ml-2"
>
  {menu ? "✕" : "☰"}
</button>
</div>
{/* LOGO */}
<div className="flex items-center gap-4 cursor-pointer pl-2 md:pl-4">
  
  <NavLink
    to="/"
    onClick={() => {
      window.location.href = "/";
    }}
  >
    <img
      src={darkMode ? lightLogo : lightLogo}
      alt="Dbsol Technologies"
      className="object-contain h-16 md:h-14 lg:h-20 transition-all duration-300"
    />
  </NavLink>

</div>
</div>

{/* NAVIGATION */}
<div className="flex-1 flex justify-end pr-4 lg:pr-8">

  {/* LEFT MENU */}
  <ul className="hidden lg:flex items-center gap-8 text-sm lg:text-base font-medium text-gray-200 ">
<li className="cursor-pointer text-blue-600 whitespace-nowrap">
<NavLink
to="/"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-blue-600" :"text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-600"}
>
Home
</NavLink>
</li>


<li
className="relative"
onMouseEnter={() => setAboutOpen(true)}
onMouseLeave={() => setAboutOpen(false)}
>
<div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 text-black dark:text-white dark:hover:text-blue-600">
About Us
{aboutOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
</div>

<AnimatePresence>
{aboutOpen && (
<motion.ul
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -10 }}
className="absolute left-0 w-48 p-6 space-y-3 font-semibold text-black rounded-lg bg-white/80 dark:bg-black/45 dark:text-white dropdown"
>
<li>
<NavLink
to="/about-us/"
className={({ isActive }) =>
isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
>
Company
</NavLink>
</li>
<li>
<NavLink
to="/careers"
className={({ isActive }) =>
isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
>
Careers
</NavLink>
</li>
</motion.ul>
)}
</AnimatePresence>
</li>

{/* SERVICES MENU */}

{/* Services Dropdown */}
     <li className="relative whitespace-nowrap"

        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => { setServicesOpen(false); setPowerPlatformOpen(false); }}
      >              
      <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 text-black dark:text-white dark:hover:text-blue-600">
        Our Services
        {servicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </div>

      <AnimatePresence>
        {servicesOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
        className="absolute left-0 w-64 p-6 space-y-3 font-semibold text-black rounded-lg bg-white/80 dark:bg-black/45 dark:text-white dropdown"
          >
            <li >
              <NavLink
                to="/dynamics-365-business/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
                
                Dynamics 365 Business
              </NavLink> 
            </li>
           
            
            <li>
              <NavLink to="/business-consulting/" className={({ isActive }) =>
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
                    to="/power-platform-solutions/"
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
                    to="/power-platform-solutions/"
                    className={({ isActive }) =>
                  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
                    Power Platform Solutions
                  </NavLink>
                </li>
            <li>
              <NavLink to="/web-development/" className={({ isActive }) =>
                isActive ? "text-blue-600 dark:text-white border-b-2 border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"
              }>
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink to="/mobile-app-development/" className={({ isActive }) =>
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

<div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 dark:hover:text-white">
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
className="absolute left-0 w-64 p-6 space-y-3 font-semibold text-black rounded-lg bg-white/90 dark:bg-black/45 dark:text-white dropdown"
>

<li className="cursor-pointer ">
<NavLink to="/solutions/financial-management-system/" className={({isActive}) =>
  isActive ? " text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
Financial Management System</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/solutions/human-resource-management-system/" className={({isActive}) =>
  isActive ? " text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
Human Resource Management System</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/solutions/supply-chain-management-system/" className={({isActive}) =>
  isActive ? " text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white"}>
Supply Chain Management System</NavLink>
</li>
<li className="cursor-pointer ">
  <NavLink to="/solutions/warehouse-management-system/"  className={({isActive}) =>
  isActive ? " text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : " hover:text-black dark:hover:text-white "}>
Warehouse Management System</NavLink>
</li>
<li className="cursor-pointer ">

<NavLink to="/solutions/inventory-management-system/" className={({isActive}) =>
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

<div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 text-black dark:text-white dark:hover:text-blue-600 ">

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
className="absolute left-0 w-64 p-6 space-y-3 font-semibold text-black rounded-lg bg-white/90 dark:bg-black/45 dark:text-white dropdown "
>

<li className="cursor-pointer">
  <NavLink
  to="/industries/banking-finance/"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
>
Finance & Banking</NavLink>
</li>
<li className="cursor-pointer ">
  <NavLink
  to="/industries/it-ites/"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
>
IT / ITES</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/industries/manufacturing/"
   className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Manufacturing</NavLink>
</li>

<li className="cursor-pointer ">
  <NavLink to="/industries/retail-wholesale/"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Retail & Wholesale</NavLink>
</li>
<li className="cursor-pointer">
  <NavLink to="/industries/logistics-supply-chain/"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Logistic Supply Chain</NavLink>
</li>
<li className="cursor-pointer">
  <NavLink to="/industries/healthcare/"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Health Care</NavLink>
</li>
<li className="cursor-pointer ">
  <NavLink to="/industries/education/"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Education Institute</NavLink>
</li>
<li className="cursor-pointer ">
    <NavLink to="/industries/professional-services/"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   > 
Professional Services</NavLink>
</li>
<li className="cursor-pointer ">
    <NavLink to="/industries/hospitality/"
   className={({isActive}) =>
   isActive ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1" : "hover:text-black dark:hover:text-white"}
   >
Hospitality</NavLink>
</li>


</motion.ul>

)}

</AnimatePresence>

</li>

{/* LEARN WITH US */}
<li
  className="relative"
  onMouseEnter={() => setLearnOpen(true)}
  onMouseLeave={() => setLearnOpen(false)}
>
  <div
    className="flex items-center gap-1 cursor-pointer  hover:text-blue-600 text-black dark:text-white dark:hover:text-blue-600 "
    onClick={() => setLearnOpen(!learnOpen)}
  >
    Insights & Resources

    {learnOpen ? (
      <FaChevronUp size={12} />
    ) : (
      <FaChevronDown size={12} />
    )}
  </div>

  <AnimatePresence>
    {learnOpen && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="absolute left-0 w-64 p-6 space-y-3 font-semibold text-black rounded-lg bg-white/90 dark:bg-black/45 dark:text-white dropdown"
      >
        <li className="cursor-pointer">
          <NavLink
            to="/knowledge-and-resources/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1"
                : "hover:text-black dark:hover:text-white"
            }
          >
            Knowledge & Resources
          </NavLink>
        </li>
        <li className="cursor-pointer">
          <NavLink
            to="/blogs/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1"
                : "hover:text-black dark:hover:text-white"
            }
          >
            Blogs & Insights
          </NavLink>
        </li>

        <li className="cursor-pointer">
          <NavLink
            to="/security-privacy/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1"
                : "hover:text-black dark:hover:text-white"
            }
          >
            Security & Privacy
          </NavLink>
        </li>

       {/* <li className="cursor-pointer">
          <NavLink
            to="/internship"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1"
                : "hover:text-black dark:hover:text-white"
            }
          >
            Internship
          </NavLink>
        </li>

        <li className="cursor-pointer">
          <NavLink
            to="/training"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1"
                : "hover:text-black dark:hover:text-white"
            }
          >
            Training
          </NavLink>
        </li>

        <li className="cursor-pointer">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1"
                : "hover:text-black dark:hover:text-white"
            }
          >
            Blogs
          </NavLink>
        </li>

        <li className="cursor-pointer">
          <NavLink
            to="/certifications"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 dark:text-white border-blue-600 pb-1"
                : "hover:text-black dark:hover:text-white"
            }
          >
            Certifications
          </NavLink>
        </li> */}
      </motion.ul>
    )}
  </AnimatePresence>
</li>

{/*

Case Study Nav Desktop

<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/case-studies/"
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
to="/careers/"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
Careers
</NavLink>
</li>
*/}
{/* contact us */}
<li className="cursor-pointer hover:text-blue-600 whitespace-nowrap">
<NavLink
  to="/contact-us/"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-blue-600" :"text-black dark:text-white hover:text-blue-600 dark:hover:"}
>Contact Us</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600 whitespace-nowrap ml-4">

<NavLink
to="/employee-portal/"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-blue-600" :"text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-600"}
>
Login</NavLink>
</li>
</ul>


</div>



</header>
<div className="h-[80px]" aria-hidden="true" />
{
  /* Mobile View */
}
{menu && (

<motion.div initial={{opacity: 0,x: -60 }} whileInView={{opacity: 1, x: 0}} transition={{delay:0.3}} className="fixed z-40 top-20 left-0 right-0 w-full max-h-[calc(100vh-80px)] overflow-y-auto px-6 py-6 pb-10 text-black bg-white border-b border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 lg:hidden">
<ul className="flex flex-col gap-0 text-lg font-semibold">
<li className="cursor-pointer hover:text-blue-600 py-3 border-b border-gray-100 dark:border-gray-700">
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


<li className="relative py-3 border-b border-gray-100 dark:border-gray-700">
<div
onClick={() => setAboutOpen(prev => !prev)}
className="flex items-center cursor-pointer hover:text-blue-600"
>
About Us
</div>

<AnimatePresence>
{aboutOpen && (
<motion.ul
initial={{opacity:0,y:-10}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-10}}
transition={{duration:0.25}}
className="mt-3 ml-4 space-y-3"
>
<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/about-us/"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Company
</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/careers"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Careers
</NavLink>
</li>
</motion.ul>
)}
</AnimatePresence>
</li>

{/* SERVICES MENU */}

<li className="relative py-3 border-b border-gray-100 dark:border-gray-700">

  <div 
    onClick={toggleServices}
    className="flex items-center cursor-pointer hover:text-blue-600"
  >
     Services
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
            to="/dynamics-365-business/"
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
                    to="/power-platform-solutions/"
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
            to="/web-development/"
            className={({isActive}) =>
              isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
          >
            Web Development
          </NavLink>
        </li>

        {/* App */}
        <li className="cursor-pointer hover:text-blue-600">
          <NavLink
            to="/mobile-app-development/"
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
<NavLink to="/solutions/financial-management-system/" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Financial Management System</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/solutions/human-resource-management-system/" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Human Resource Management System</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/solutions/supply-chain-management-system/" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Supply Chain Management System</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/solutions/warehouse-management-system/" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>
Warehouse Management System</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/solutions/inventory-management-system/" className={({isActive}) =>
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
className="relative py-3 border-b border-gray-100 dark:border-gray-700"
>

<div onClick={toggleIndustries} className="flex items-center cursor-pointer hover:text-blue-600">

Industries

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
  to="/industries/banking-finance/"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Finance & Banking</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/industries/it-ites/" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>

IT / ITES</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
  <NavLink
  to="/industries/manufacturing/"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Manufacturing</NavLink>
</li>

<li className="cursor-pointer hover:text-blue-600">
  <NavLink
  to="/industries/retail-wholesale/"
  className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Retail & Wholesale</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/industries/logistics-supply-chain/" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Logistics Supply Chain</NavLink>

</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/industries/hospitality/"
 className={({isActive}) =>
 isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"} 
>
 Hospitality </NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/industries/education/" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Education Institute</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/industries/professional-services/" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
> 
Professional Services</NavLink>
</li>
<li className="cursor-pointer hover:text-blue-600">
<NavLink to="/industries/healthcare/" className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Health Care</NavLink>
</li>


</motion.ul>

)}

</AnimatePresence>

</li>
<li className="w-full py-3 border-b border-gray-100 dark:border-gray-700">
  <button
    onClick={() => setLearnOpen(!learnOpen)}
    className="flex items-center justify-start w-full font-medium"
  >
    <span>Insights & Resources</span>
  </button>

  <AnimatePresence>
    {learnOpen && (
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="ml-5 mt-2 space-y-3 overflow-hidden border-l border-gray-200 pl-4"
      >
        <li className="cursor-pointer hover:text-blue-600">
          <NavLink to="/knowledge-and-resources/" className={({isActive}) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>Knowledge & Resources</NavLink>
        </li>
        <li className="cursor-pointer hover:text-blue-600">
          <NavLink to="/blogs/" className={({isActive}) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>Blogs & Insights</NavLink>
        </li>

       <li className="cursor-pointer hover:text-blue-600">
          <NavLink to="/security-privacy/" className={({isActive}) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>Security & Privacy</NavLink>
        </li>

        {/*

        <li className="cursor-pointer hover:text-blue-600">
          <NavLink to="/training" className={({isActive}) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>Training</NavLink>
        </li>

        <li className="cursor-pointer hover:text-blue-600">
          <NavLink to="/blogs" className={({isActive}) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>Blogs</NavLink>
        </li>

        <li className="cursor-pointer hover:text-blue-600">
          <NavLink to="/certifications" className={({isActive}) => isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}>Certifications</NavLink>
        </li> */}
      </motion.ul>
    )}
  </AnimatePresence>
</li>

{/*

Case Study Navbar Mobile

<li className="cursor-pointer hover:text-blue-600">
<NavLink
to="/case-studies/"
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
to="/careers/"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
Careers
</NavLink>
</li>
*/}
<li className="cursor-pointer hover:text-blue-600 py-3 border-b border-gray-100 dark:border-gray-700">
<NavLink
 to="/contact-us/"
 className={({isActive})=>
 isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Contact Us</NavLink>
</li>


<li className="cursor-pointer hover:text-blue-600 py-3">
<NavLink
to="/employee-portal/"
className={({isActive}) =>
isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
>
Login</NavLink>
</li>



</ul>
</motion.div>

)}
<button
  onClick={toggleDarkMode}
  className="fixed bottom-10 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-black shadow-md"
>
  {darkMode ? (
    <FaMoon className="h-5 w-5 text-white" />
  ) : (
    <FaSun className="h-5 w-5 text-yellow-500" />
  )}
</button>
</div>

)

}