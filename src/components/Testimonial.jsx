import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Testimonials(){

const testimonials = [

{
name:"Arjun Mehta",
role:"Finance Director",
company:"Enterprise Manufacturing Ltd",
image:"https://randomuser.me/api/portraits/men/32.jpg",
review:"DBSol helped us successfully implement Dynamics 365 Finance & Operations. Their expertise and professionalism significantly improved our financial workflows."
},

{
name:"Sarah Johnson",
role:"IT Manager",
company:"Retail Solutions Group",
image:"https://randomuser.me/api/portraits/women/44.jpg",
review:"The DBSol team delivered a high-quality responsive website and enterprise integrations. Their team understands business requirements perfectly."
},

{
name:"David Chen",
role:"Operations Head",
company:"Global Logistics Corp",
image:"https://randomuser.me/api/portraits/men/65.jpg",
review:"Outstanding consulting services. Their Dynamics 365 implementation streamlined our supply chain and improved operational efficiency."
},

{
name:"Priya Nair",
role:"CEO",
company:"Healthcare Innovations",
image:"https://randomuser.me/api/portraits/women/68.jpg",
review:"Professional team with deep technical expertise. They built our mobile app and enterprise backend perfectly."
}

]

return(

<section className="py-8 bg-gray-50 dark:bg-gray-900">

<div className="px-6 mx-auto max-w-7xl">

{/* Section Title */}

<div className="mb-16 text-center">

<h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
What Our Clients Say
</h2>

<p className="max-w-2xl mx-auto text-gray-500">
Trusted by businesses across industries for delivering reliable
Dynamics 365 solutions, web platforms, and mobile applications.
</p>

</div>

{/* Testimonials Grid */}

<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

{testimonials.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:index*0.1}}
whileHover={{scale:1.05}}
className="relative p-8 overflow-hidden transition bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:shadow-2xl"
>

{/* Quote */}

<p className="mb-6 text-gray-600 dark:text-gray-300">
"{item.review}"
</p>

{/* Stars */}

<div className="flex mb-4 text-yellow-400">

<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>

</div>

{/* Client Info */}

<div className="flex items-center gap-4">

<img
src={item.image}
alt={item.name}
className="object-cover w-12 h-12 rounded-full"
/>

<div>

<h4 className="font-semibold text-gray-800 dark:text-white">
{item.name}
</h4>

<p className="text-sm text-gray-500">
{item.role}
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