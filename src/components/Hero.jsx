import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Hero(){

const slides = [

{
title:"Microsoft Dynamics 365 Finance & Operations Solutions",
desc:"Empowering enterprises with scalable ERP solutions, seamless financial management, and operational excellence.",
img:"/images/Home1.jpg"
},

{
title:"Professional Web Development",
desc:"Building modern, responsive, and scalable websites for businesses using cutting-edge technologies.",
img:"/images/Home2.jpg"
},

{
title:"Mobile App Development",
desc:"Creating powerful Android and iOS applications designed to deliver exceptional user experiences.",
img:hero3
}

]

const [current,setCurrent] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{

setCurrent((prev)=>(prev+1)%slides.length)

},2500)

return ()=>clearInterval(interval)

},[])

return(

<section className="relative w-full h-screen overflow-hidden">

{/* Background Image */}

<img
src={slides[current].img}
className="absolute object-cover w-full h-full transition-all duration-1000"
/>

{/* Dark overlay */}

<div className="absolute inset-0 bg-black/60"></div>

{/* Content */}

<div className="relative z-10 flex items-center h-full px-6 mx-auto max-w-7xl">

<motion.div
key={current}
initial={{opacity:0, y:40}}
animate={{opacity:1, y:0}}
transition={{duration:0.8}}
className="max-w-2xl text-white"
>

<h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">

{slides[current].title}

</h1>

<p className="mb-8 text-lg text-gray-200">

{slides[current].desc}

</p>

<div className="flex gap-4">

<button className="px-6 py-3 font-semibold transition bg-blue-600 rounded-lg hover:bg-blue-700">

Explore Services

</button>

<button className="px-6 py-3 transition border border-white rounded-lg hover:bg-white hover:text-black">

Contact Us

</button>

</div>

</motion.div>

</div>

{/* Slide Indicators */}

<div className="absolute flex gap-3 -translate-x-1/2 bottom-10 left-1/2">

{slides.map((_,index)=>(

<button
key={index}
onClick={()=>setCurrent(index)}
className={`w-3 h-3 rounded-full ${
current===index ? "bg-white" : "bg-gray-400"
}`}
></button>

))}

</div>

</section>

)

}