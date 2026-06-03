import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import {
FaUsers,
FaProjectDiagram,
FaGlobe,
FaAward
} from "react-icons/fa"

export default function WhyChooseUs(){

const {ref, inView} = useInView({
triggerOnce:true,
threshold:0.3,
})

const stats = [

{
number:50,
label:"Projects Delivered",
icon:<FaProjectDiagram size={30}/>
},

{
number:30,
label:"Enterprise Clients",
icon:<FaUsers size={30}/>
},

{
number:10,
label:"Industries Served",
icon:<FaGlobe size={30}/>
},

{
number:8,
label:"Years Experience",
icon:<FaAward size={30}/>
}

]

return(

<section ref={ref} className="py-8 text-black dark:text-white dark:bg-gray-900 ">

<div className="px-6 mx-auto max-w-7xl">

{/* TITLE */}

<div className="mb-20 text-center">

<h2 className="mb-4 text-4xl font-bold dark:text-blue-600">

Why Choose DBSol

</h2>

<p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">

Delivering powerful digital transformation solutions that help
businesses scale, innovate and achieve long-term success.

</p>

</div>

{/* COUNTER CARDS */}

<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

{stats.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6, delay:index*0.2}}
whileHover={{scale:1.08}}
className="relative p-10 text-center border shadow-xl bg-white/5 backdrop-blur-md rounded-2xl border-white/10 group"
>

{/* Glow Effect */}

<div className="absolute inset-0 transition opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl"></div>

{/* Icon */}

<div className="flex justify-center mb-6 text-blue-600">

{item.icon}

</div>

{/* Animated Number */}




<h3 className="mb-2 text-4xl font-bold">
  {/*{inView ? (
    <CountUp
      key={item.number}   // ✅ IMPORTANT FIX
      start={0}
      end={Number(item.number || 0)}
      duration={2}
      separator=","
    />
  ) : (
    0
  )}
  +*/}
  {item.number}+
</h3>



{/* Label */}

<p className="text-gray-600 dark:text-gray-200">

{item.label}

</p>

</motion.div>

))}

</div>

</div>

</section>

)

}