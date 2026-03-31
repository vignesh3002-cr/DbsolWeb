import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaIndustry,
FaCogs,
FaBoxes,
FaChartLine,
FaRobot,
FaTruck
} from "react-icons/fa"

export default function Manufacturing(){

const challenges = [
"Managing complex supply chains across global operations",
"Maintaining real-time visibility into production and inventory",
"Reducing operational costs while improving productivity",
"Integrating legacy systems with modern digital platforms"
]

const solutions = [

{
icon:<FaIndustry/>,
title:"Smart Factory Solutions",
desc:"Implement digital manufacturing platforms that enhance operational efficiency and automation."
},

{
icon:<FaCogs/>,
title:"Production Optimization",
desc:"Streamline production workflows using intelligent planning and automation technologies."
},

{
icon:<FaBoxes/>,
title:"Inventory Management",
desc:"Improve inventory accuracy and reduce operational waste through real-time tracking."
},

{
icon:<FaChartLine/>,
title:"Predictive Analytics",
desc:"Use advanced analytics to forecast demand and optimize production strategies."
},

{
icon:<FaRobot/>,
title:"Automation Integration",
desc:"Integrate robotics and automation technologies into manufacturing operations."
},

{
icon:<FaTruck/>,
title:"Supply Chain Optimization",
desc:"Enhance supply chain visibility and efficiency with integrated digital solutions."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="/images/MIS_1.jpeg"
alt="manufacturing industry"
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

Manufacturing Industry Solutions

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Manufacturing</span>

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

Empowering Digital Manufacturing

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

The manufacturing sector is evolving rapidly with the adoption of
digital technologies such as IoT, automation, and advanced analytics.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our solutions help manufacturers optimize production,
streamline supply chains, and gain real-time insights into
their operations for better decision-making.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="/images/MIS_2.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* INDUSTRY CHALLENGES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-4 dark:text-white">
Manufacturing Challenges
</h2>
<p className="text-center mb-20 max-w-2xl mx-auto">Inefficient Production Scheduling, Lack of Real-Time Shop Floor Visibility, Difficulty Managing Demand Fluctuations.</p>
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

<h2 className="text-4xl font-bold text-center text-gray-800 mb-4 dark:text-white">
Our Manufacturing Solutions
</h2>
<p className="text-center mb-20 max-w-2xl mx-auto">Advanced Production Scheduling with Dynamics 365, Real-Time Shop Floor Monitoring, Demand-Driven Production Planning.</p>
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


{/* BENEFITS */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Key Benefits
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"Improved Production Efficiency",
"Optimized Supply Chain",
"Real-Time Operational Insights",
"Reduced Operational Costs"
].map((item,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className={`p-6 shadow-lg ${index%2==0?"bg-gradient-to-r from-yellow-400 to-gray-600":"bg-gradient-to-r from-green-400 to-pink-600"} dark:bg-gray-800 rounded-xl`}
>

<p className=" text-white text-lg font-serif">{item}</p>

</motion.div>
))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700">
S
<h2 className="mb-6 text-4xl font-bold">
Transform Your Manufacturing Operations
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Leverage digital transformation solutions to improve efficiency,
reduce costs, and drive innovation in manufacturing.

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