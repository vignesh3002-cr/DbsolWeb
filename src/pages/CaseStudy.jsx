import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function CaseStudies(){

const cases=[

{
id:"manufacturing",
title:"Manufacturing ERP Implementation",
industry:"Manufacturing",
desc:"Implemented Dynamics 365 Finance & Operations...",
result:"40% improvement in operational efficiency",
image:"https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
},

{
id:"retail",
title:"Retail Inventory Optimization",
industry:"Retail",
desc:"Developed an inventory management solution...",
result:"35% reduction in inventory costs",
image:"https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg"
},

{
id:"healthcare",
title:"Healthcare ERP Transformation",
industry:"Healthcare",
desc:"Implemented a healthcare ERP platform...",
result:"50% faster financial reporting",
image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef"
},

{
id:"logistics",
title:"Logistics Supply Chain Automation",
industry:"Logistics",
desc:"Designed an advanced supply chain management system...",
result:"60% faster order fulfillment",
image:"https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg"
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[420px]">

<img
src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
alt="Case Studies"
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

Client Success Stories

</motion.h1>

<p className="mt-4 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Case Studies</span>

</p>

</div>

</section>


{/* CASE STUDIES GRID */}

<section className="py-24">
<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Real Business Impact
</h2>

<div className="grid gap-10 md:grid-cols-2">

{cases.map((item,index)=>(
<Link to={`/case-studies/${item.id}`}>
<motion.div
key={index}
whileHover={{scale:1.03}}
className="overflow-hidden bg-white shadow-lg dark:bg-gray-800 rounded-xl"
>

<img
src={item.image}
className="object-cover w-full h-56"
/>

<div className="p-6">

<h3 className="mb-2 text-xl font-semibold">
{item.title}
</h3>

<p className="mb-2 text-sm text-blue-600">
Industry: {item.industry}
</p>

<p className="mb-4 text-gray-500 dark:text-gray-300">
{item.desc}
</p>

<p className="font-semibold text-green-600">
Result: {item.result}
</p>

</div>

</motion.div>
</Link>
))}

</div>

</div>

</section>


{/* METRICS SECTION */}

<section className="py-24 bg-gray-100 dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Our Impact
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"50+ Projects Delivered",
"10+ Industries Served",
"95% Client Satisfaction",
"30% Average Efficiency Increase"
].map((metric,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-6 bg-white shadow-lg dark:bg-gray-900 rounded-xl"
>

<p className="text-xl font-semibold">
{metric}
</p>

</motion.div>

))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-700 to-indigo-700">

<h2 className="mb-6 text-4xl font-bold">
Want to Become Our Next Success Story?
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Our team helps businesses implement powerful ERP
and digital transformation solutions.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
>

Start Your Project

</Link>

</section>

<Footer/>

</div>

)

}