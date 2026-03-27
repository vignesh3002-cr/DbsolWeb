import { motion } from "framer-motion"

export default function ERPImplementationProcess(){

const steps=[

{
title:"Business Analysis",
desc:"Understand client requirements, workflows, and business objectives."
},

{
title:"Solution Design",
desc:"Design the ERP architecture and define modules required for implementation."
},

{
title:"System Development",
desc:"Configure and customize ERP modules based on business needs."
},

{
title:"Integration & Testing",
desc:"Integrate ERP with existing systems and perform complete system testing."
},

{
title:"Deployment",
desc:"Launch the ERP solution in the production environment."
},

{
title:"Training & Support",
desc:"Train employees and provide ongoing system support and maintenance."
}

]

return(

<section className="py-8 bg-gray-100 dark:bg-gray-900">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="mb-16 text-4xl font-bold text-center text-gray-800 dark:text-white">
ERP Implementation Process
</h2>

<div className="relative">

{/* Vertical Line */}

<div className="absolute w-1 h-full transform -translate-x-1/2 bg-blue-500 left-1/2"></div>

{steps.map((step,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:index*0.2}}
className={`flex items-center mb-12 ${
index%2===0 ? "justify-start":"justify-end"
}`}
>

<div className="w-1/2">

<div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">

<h3 className="mb-2 text-xl font-semibold text-blue-600">
{step.title}
</h3>

<p className="text-gray-600 dark:text-gray-300">
{step.desc}
</p>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

)

}