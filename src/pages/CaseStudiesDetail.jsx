import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import UATSection from "../components/UAT"


export default function CaseStudyDetail(){

const {id} = useParams()

const cases = {

manufacturing:{
title:"Manufacturing ERP Implementation",
industry:"Manufacturing",
image:"/images/Manufacturing.jpeg",
challenge:"The client faced operational inefficiencies due to disconnected financial and production systems.",
solution:"We implemented Microsoft Dynamics 365 Finance & Operations to unify financial management, production planning, and supply chain processes.",
result:"40% increase in operational efficiency and improved reporting visibility."
},

retail:{
title:"Retail Inventory Optimization",
industry:"Retail",
image:"/images/Retail_1.jpeg",
challenge:"Retail chain struggled with stock management across multiple warehouses.",
solution:"We built an advanced inventory management system integrated with ERP.",
result:"35% reduction in inventory costs and improved stock accuracy."
},

healthcare:{
title:"Healthcare ERP Transformation",
industry:"Healthcare",
image:"/images/healthcare_1.jfif",
challenge:"Healthcare provider had slow financial reporting and manual administrative processes.",
solution:"Implemented ERP automation and financial reporting dashboards.",
result:"50% faster financial reporting and better operational transparency."
},

logistics:{
title:"Logistics Supply Chain Automation",
industry:"Logistics",
image:"/images/Logistics_1.jpeg",
challenge:"Manual logistics operations caused delays in order fulfillment.",
solution:"Implemented supply chain automation with real-time tracking.",
result:"60% faster order processing and improved delivery performance."
}

}

const caseData = cases[id]

if(!caseData){
return <div className="p-20 text-center">Case Study Not Found</div>
}

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}
<section className="relative flex items-center justify-center h-[420px]">   

<img
src={caseData.image}
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

{caseData.title}

</motion.h1>

<p className="mt-4 text-blue-200">

<Link to="/">Home</Link> ➜
<Link to="/case-studies"> Case Studies</Link> ➜
<span> {caseData.industry}</span>

</p>

</div>

</section>
<UATSection></UATSection>

{/* CHALLENGE */}

<section className="py-20">

<div className="max-w-4xl px-6 mx-auto">

<h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
Challenge
</h2>

<p className="text-gray-600 dark:text-gray-300">
{caseData.challenge}
</p>

</div>

</section>


{/* SOLUTION */}

<section className="py-20 bg-gray-100 dark:bg-gray-800">

<div className="max-w-4xl px-6 mx-auto">

<h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
Solution
</h2>

<p className="text-gray-600 dark:text-gray-300">
{caseData.solution}
</p>

</div>

</section>


{/* RESULT */}

<section className="py-20">

<div className="max-w-4xl px-6 mx-auto">

<h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">
Results
</h2>

<p className="text-lg font-semibold text-green-600">
{caseData.result}
</p>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-700 to-indigo-700 dark:from-gray-800 dark:to-gray-900">

<h2 className="mb-6 text-4xl font-bold">
Start Your Own Success Story
</h2>

<p className="mb-8 text-blue-100">
Let us help your business implement powerful ERP and digital transformation solutions.
</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
>

Contact Our Experts

</Link>

</section>

<Footer/>

</div>

)

}