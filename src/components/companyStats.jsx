import { Briefcase, Users, Building2, Award } from "lucide-react";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"


export default function CompanyStats() {
  const {ref} = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  const stats = [
    {
      icon: <Briefcase size={44} strokeWidth={2} />,
      number: 50,
      label: "Projects Delivered",
    },
    {
      icon: <Users size={44} strokeWidth={2} />,
      number: 30,
      label: "Enterprise Clients",
    },
    {
      icon: <Building2 size={44} strokeWidth={2} />,
      number: 10,
      label: "Industries Served",
    },
    {
      icon: <Award size={44} strokeWidth={2} />,
      number: 8,
      label: "Years Experience",
    },
  ];

  
return(

<section className="py-4 md:py-8 lg:py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">

<div className="px-6 mx-auto max-w-[1750px]">

{/* TITLE */}

<div className="mb-16 md:mb-20 text-center">
  
   <span className="text-sm sm:text- uppercase tracking-[0.2em] text-blue-600 font-semibold">
            Company Statistics
          </span>
<h2 className="mt-3 mb-5 text-4xl sm:text-3xl font-bold leading-tight dark:text-white">

 Trusted Technology Partner

</h2>
<p className="max-w-2xl mx-auto mb-20 text-lg text-gray-600 dark:text-gray-300">
          Delivering ERP, cloud, and digital transformation solutions that drive business growth and operational excellence.
          </p>

</div>
        {/* COUNTER CARDS */}

<div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">

{stats.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6, delay:index*0.2}}
whileHover={{scale:1.08}}
className="relative min-h-[300px] px-8 py-10 flex flex-col items-center justify-center text-center border border-gray-100 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.10)] rounded-2xl group dark:border-gray-700 dark:bg-gray-800"
>

{/* Icon */}

<div className="flex justify-center mb-6 text-blue-600">

{item.icon}

</div>

{/* Animated Number */}




<h3 className="mb-3 text-5xl sm:text-3xl font-bold leading-none">
  {item.number}<span>+</span>
</h3>



{/* Label */}

<p className="text-lg sm:text-mdtext-gray-600 dark:text-gray-200">

{item.label}

</p>

</motion.div>

))}

</div>

</div>

</section>

)

}