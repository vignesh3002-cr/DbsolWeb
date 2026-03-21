import { motion } from "framer-motion"

export default function VideoTestimonials(){

const videos = [
{
title:"Migration Rescue - ERP Transformation",
desc:"From legacy AX 2012 to real-time cloud operations",
video:"https://www.youtube.com/embed/9No-FiEInLA"
},
{
title:"Retail Digital Transformation",
desc:"Unified POS, Inventory & ERP systems",
video:"https://www.youtube.com/embed/Ke90Tje7VS0"
},
{
title:"Cloud Migration Success",
desc:"Seamless transition with zero downtime",
video:"https://www.youtube.com/embed/1Rs2ND1ryYc"
}
]

return(

<div className="bg-gray-50 dark:bg-gray-900">

{/* HERO */}

<section className="relative flex items-center justify-center h-[400px]">

<img
src="https://images.unsplash.com/photo-1552664730-d307ca884978"
className="absolute inset-0 object-cover w-full h-full"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 text-center text-white">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
className="text-5xl font-bold"
>
Client Success Stories
</motion.h1>

<p className="mt-4 text-gray-200">
Real businesses. Real transformation. Real results.
</p>

</div>

</section>

{/* MAIN VIDEO (FEATURED STORY) */}

<section className="py-24">

<div className="max-w-5xl px-6 mx-auto text-center">

<h2 className="mb-10 text-4xl font-bold">
The Migration Rescue Story
</h2>

<div className="overflow-hidden shadow-xl rounded-2xl">

<iframe
width="100%"
height="400"
src="https://www.youtube.com/embed/9No-FiEInLA"
title="Migration Rescue"
className="border-0"
allowFullScreen
></iframe>

</div>

{/* Story Content */}

<div className="grid gap-6 mt-12 text-left md:grid-cols-3">

<div className="p-6 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
<h3 className="mb-2 font-semibold text-red-500">The Problem</h3>
<p className="text-sm text-gray-500">
Legacy system was outdated, reporting was unreliable, and operations lacked transparency.
</p>
</div>

<div className="p-6 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
<h3 className="mb-2 font-semibold text-blue-600">The Solution</h3>
<p className="text-sm text-gray-500">
We migrated 20+ years of data and redesigned business workflows without downtime.
</p>
</div>

<div className="p-6 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
<h3 className="mb-2 font-semibold text-green-600">The Result</h3>
<p className="text-sm text-gray-500">
Real-time dashboards, faster decisions, and a single source of truth.
</p>
</div>

</div>

</div>

</section>

{/* VIDEO GRID */}

{/* ULTRA VIDEO CAROUSEL */}

<section className="py-24 bg-gray-100 dark:bg-gray-800">

<div className="px-6 mx-auto max-w-7xl">

<h2 className="mb-16 text-4xl font-bold text-center">
Success Stories in Action
</h2>

{/* SCROLL CONTAINER */}

<motion.div
className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
drag="x"
dragConstraints={{ left: -1000, right: 0 }}
>

{videos.map((item, index) => (

<motion.div
key={index}
whileHover={{ scale: 1.05 }}
className="relative min-w-[300px] md:min-w-[400px] snap-center"
>

{/* VIDEO CARD */}

<div className="relative overflow-hidden shadow-xl rounded-2xl group">

{/* Thumbnail */}
<img
src={`https://img.youtube.com/vi/${item.video.split("/embed/")[1]}/maxresdefault.jpg`}
className="object-cover w-full h-56 transition duration-500 group-hover:scale-110"
/>

{/* Overlay */}
<div className="absolute inset-0 flex items-center justify-center transition bg-black/50 group-hover:bg-black/30">

{/* PLAY BUTTON */}
<div className="flex items-center justify-center w-16 h-16 transition bg-white rounded-full shadow-lg group-hover:scale-110">

▶

</div>

</div>

</div>

{/* TEXT */}

<div className="mt-4">

<h3 className="text-lg font-semibold dark:text-white">
{item.title}
</h3>

<p className="text-sm text-gray-500">
{item.desc}
</p>

</div>

</motion.div>

))}

</motion.div>

</div>

</section>
{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-700 to-indigo-700">

<h2 className="mb-6 text-4xl font-bold">
Ready to Be Our Next Success Story?
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">
Let us transform your business with powerful ERP and digital solutions.
</p>

<a
href="/contact"
className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
>
Start Your Project
</a>

</section>

</div>

)
}