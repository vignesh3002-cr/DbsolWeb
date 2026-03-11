import { motion } from "framer-motion"

export default function TrustedClients(){

const clients = [

"https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",

"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",

"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",

"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",

"https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",

"https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",

"https://upload.wikimedia.org/wikipedia/commons/5/5e/Adobe_Corporate_logo.svg",

"https://upload.wikimedia.org/wikipedia/commons/c/cd/SAP_logo.svg"

]

return(

<section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">

<div className="max-w-7xl mx-auto px-6">

{/* Title */}

<div className="text-center mb-16">

<h2 className="text-4xl font-bold mb-4">

Trusted By Leading Companies

</h2>

<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">

Businesses across multiple industries trust our expertise in delivering
enterprise technology solutions and digital transformation services.

</p>

</div>

{/* Scrolling Logos */}

<div className="relative overflow-hidden">

<motion.div
className="flex gap-16"
animate={{ x:["0%","-100%"] }}
transition={{
repeat:Infinity,
duration:20,
ease:"linear"
}}
>

{[...clients,...clients].map((logo,index)=>(

<div
key={index}
className="flex items-center justify-center min-w-[150px]"
>

<img
src={logo}
className="h-10 grayscale hover:grayscale-0 transition duration-300"
/>

</div>

))}

</motion.div>

</div>

</div>

</section>

)

}
