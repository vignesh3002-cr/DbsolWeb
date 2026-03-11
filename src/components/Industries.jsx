import { motion } from "framer-motion"
import {
FaUniversity,
FaIndustry,
FaShoppingBag,
FaTruck,
FaHeartbeat,
FaGraduationCap,
FaHotel,
FaLaptopCode,
FaBriefcase
} from "react-icons/fa"

export default function Industries(){

const industries = [

{title:"Finance", icon:<FaUniversity size={28}/>},
{title:"Manufacturing", icon:<FaIndustry size={28}/>},
{title:"Retail", icon:<FaShoppingBag size={28}/>},
{title:"Logistics", icon:<FaTruck size={28}/>},
{title:"Healthcare", icon:<FaHeartbeat size={28}/>},
{title:"Education", icon:<FaGraduationCap size={28}/>},
{title:"Hospitality", icon:<FaHotel size={28}/>},
{title:"IT / ITES", icon:<FaLaptopCode size={28}/>},
{title:"Professional Services", icon:<FaBriefcase size={28}/>}

]

return(

<section className="py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">

<div className="px-6 mx-auto max-w-7xl">

{/* Title */}

<div className="mb-20 text-center">

<h2 className="mb-4 text-4xl font-bold">

Industries We Empower

</h2>

<p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">

Delivering intelligent enterprise solutions across diverse industries
with powerful digital transformation strategies.

</p>

</div>


{/* Industry Grid */}

<div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 justify-items-center">

{industries.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0, y:40}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.5, delay:index*0.1}}
whileHover={{scale:1.1}}
className="flex flex-col items-center cursor-pointer group"
>

{/* Circle Icon */}

<div className="relative flex items-center justify-center w-20 h-20 transition bg-white rounded-full shadow-lg dark:bg-gray-800 group-hover:shadow-2xl">

{/* Glow Effect */}

<div className="absolute inset-0 transition rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>

<div className="z-10 text-blue-600 transition group-hover:scale-110">

{item.icon}

</div>

</div>

{/* Label */}

<p className="mt-4 text-sm font-semibold text-center">

{item.title}

</p>

</motion.div>

))}

</div>

</div>

</section>

)

}