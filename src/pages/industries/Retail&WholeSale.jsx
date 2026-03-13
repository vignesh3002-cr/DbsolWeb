import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaShoppingCart,
FaStore,
FaTruck,
FaChartLine,
FaUsers,
FaBoxOpen
} from "react-icons/fa"

export default function RetailWholesale(){

const challenges = [
"Managing inventory across multiple retail stores and warehouses",
"Maintaining real-time visibility of product availability",
"Delivering personalized customer shopping experiences",
"Handling complex supply chains and logistics networks"
]

const solutions = [

{
icon:<FaStore/>,
title:"Omnichannel Retail Platforms",
desc:"Integrate online stores, physical retail outlets, and mobile commerce into a unified experience."
},

{
icon:<FaShoppingCart/>,
title:"Smart Inventory Management",
desc:"Maintain real-time visibility of inventory across warehouses and retail stores."
},

{
icon:<FaTruck/>,
title:"Supply Chain Optimization",
desc:"Improve logistics efficiency and reduce delivery delays with integrated supply chain platforms."
},

{
icon:<FaChartLine/>,
title:"Retail Analytics",
desc:"Use advanced analytics to understand customer behavior and sales performance."
},

{
icon:<FaUsers/>,
title:"Customer Experience",
desc:"Deliver personalized shopping experiences through CRM and AI-powered insights."
},

{
icon:<FaBoxOpen/>,
title:"Warehouse Automation",
desc:"Optimize warehouse operations using automation and smart inventory tracking."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO SECTION */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
alt="retail industry"
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

Retail & Wholesale Solutions

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Retail & Wholesale</span>

</p>

</div>

</section>


{/* INDUSTRY OVERVIEW */}

<section className="py-20">

<div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>

<h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">

Transforming Retail & Wholesale Businesses

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Retail and wholesale businesses are evolving rapidly with digital
commerce, customer expectations, and global supply chain demands.

</p>

<p className="text-gray-600 dark:text-gray-300">

We help retail organizations implement intelligent digital
solutions that improve operational efficiency, optimize
inventory management, and enhance customer experiences.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* CHALLENGES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Retail Industry Challenges
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
Our Retail & Wholesale Solutions
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


{/* BENEFITS */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Business Benefits
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"Improved Inventory Visibility",
"Enhanced Customer Experience",
"Optimized Supply Chain",
"Increased Retail Profitability"
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
Empower Your Retail Business with Digital Innovation
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Leverage modern digital platforms and intelligent analytics
to transform retail operations and deliver exceptional
customer experiences.

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