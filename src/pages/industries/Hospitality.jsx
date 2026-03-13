import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaHotel,
FaConciergeBell,
FaUtensils,
FaCalendarCheck,
FaChartLine,
FaUserFriends
} from "react-icons/fa"

export default function Hospitality(){

const challenges = [
"Managing reservations and guest experiences across multiple platforms",
"Handling seasonal demand fluctuations and occupancy management",
"Maintaining personalized guest services and loyalty programs",
"Integrating booking platforms with internal hotel management systems"
]

const solutions = [

{
icon:<FaHotel/>,
title:"Hotel Management Systems",
desc:"Implement integrated hotel management platforms that streamline reservations, housekeeping, and guest services."
},

{
icon:<FaCalendarCheck/>,
title:"Online Booking Platforms",
desc:"Develop secure and scalable online booking platforms for hotels, resorts, and travel companies."
},

{
icon:<FaConciergeBell/>,
title:"Guest Experience Platforms",
desc:"Enhance guest experiences through personalized services, loyalty programs, and smart hospitality solutions."
},

{
icon:<FaUtensils/>,
title:"Restaurant & Service Management",
desc:"Manage restaurant operations, food services, and guest dining experiences efficiently."
},

{
icon:<FaUserFriends/>,
title:"Customer Relationship Management",
desc:"Track guest preferences and deliver personalized hospitality services."
},

{
icon:<FaChartLine/>,
title:"Hospitality Analytics",
desc:"Leverage analytics to monitor occupancy rates, customer behavior, and operational performance."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO SECTION */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
alt="hospitality industry"
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

Hospitality Technology Solutions

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>



<span className="text-blue-400">Hospitality</span>

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
Digital Transformation in Hospitality
</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

The hospitality industry is evolving rapidly as hotels,
resorts, and travel companies adopt digital technologies
to enhance guest experiences and improve operational efficiency.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our hospitality technology solutions enable organizations
to modernize booking systems, streamline hotel operations,
and deliver personalized services to guests.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* CHALLENGES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Hospitality Industry Challenges
</h2>

<div className="grid gap-8 md:grid-cols-2">

{challenges.map((item,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-8 shadow-lg rounded-xl bg-gray-50 dark:bg-gray-900"
>

<p className="text-gray-600 dark:text-gray-300">
{item}
</p>

</motion.div>
))}

</div>

</div>

</section>


{/* SOLUTIONS */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Our Hospitality Technology Solutions
</h2>

<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

{solutions.map((item,index)=>(
<motion.div
key={index}
whileHover={{scale:1.05}}
className="p-8 text-center bg-white shadow-lg rounded-xl dark:bg-gray-800"
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


{/* IMPACT */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Hospitality Impact
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"50% Faster Reservation Management",
"60% Improved Guest Satisfaction",
"40% Increased Operational Efficiency",
"70% Better Customer Insights"
].map((item,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-6 shadow-lg bg-gray-50 rounded-xl dark:bg-gray-900"
>

<p className="font-semibold">{item}</p>

</motion.div>
))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700">

<h2 className="mb-6 text-4xl font-bold">
Transform Hospitality Experiences with Technology
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Empower hotels and hospitality businesses with advanced
digital platforms that enhance guest experiences and
optimize hospitality operations.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-gray-100"
>

Talk to Our Experts

</Link>

</section>

<Footer/>

</div>

)

}