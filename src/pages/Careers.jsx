import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
FaUsers,
FaLaptopCode,
FaChartLine,
FaGraduationCap
} from "react-icons/fa"

export default function Careers(){

const benefits=[

{
icon:<FaUsers/>,
title:"Collaborative Culture",
desc:"Work with talented professionals in a supportive and innovative environment."
},

{
icon:<FaLaptopCode/>,
title:"Cutting Edge Technologies",
desc:"Build solutions using modern technologies including ERP, cloud, and web platforms."
},

{
icon:<FaChartLine/>,
title:"Career Growth",
desc:"Opportunities for continuous learning and career advancement."
},

{
icon:<FaGraduationCap/>,
title:"Learning Programs",
desc:"Access training and mentorship programs to upgrade your skills."
}

]

const jobs=[

{
title:"Dynamics 365 Finance & Operations Consultant",
location:"Chennai / Remote",
type:"Full Time"
},

{
title:"Full Stack Developer (React + Node.js)",
location:"Remote",
type:"Full Time"
},

{
title:"ERP Implementation Specialist",
location:"Chennai",
type:"Full Time"
},

{
title:"UI/UX Designer",
location:"Remote",
type:"Contract"
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[420px]">

<img
src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
alt="Careers"
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

Join Our Team

</motion.h1>

<p className="mt-4 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Careers</span>

</p>

</div>

</section>


{/* WHY WORK WITH US */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="text-4xl font-bold text-gray-800 mb-14 dark:text-white">
Why Work With Us
</h2>

<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

{benefits.map((item,index)=>(

<motion.div
key={index}
whileHover={{scale:1.05}}
className="p-8 bg-white shadow-lg rounded-xl dark:bg-gray-800"
>

<div className="mb-4 text-3xl text-blue-600">
{item.icon}
</div>

<h3 className="mb-2 font-semibold">
{item.title}
</h3>

<p className="text-sm text-gray-500 dark:text-gray-300">
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</section>


{/* OPEN POSITIONS */}

<section className="py-24 bg-gray-100 dark:bg-gray-800">

<div className="max-w-5xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Open Positions
</h2>

<div className="space-y-6">

{jobs.map((job,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
className="flex items-center justify-between p-6 bg-white shadow-lg rounded-xl dark:bg-gray-900"
>

<div>

<h3 className="text-lg font-semibold">
{job.title}
</h3>

<p className="text-sm text-gray-500">
{job.location} • {job.type}
</p>

</div>

<Link
to="/CareerForm"
className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
>

Apply

</Link>

</motion.div>

))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-700 to-indigo-700">

<h2 className="mb-6 text-4xl font-bold">
Don't See the Right Role?
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

We are always looking for talented professionals.
Send us your resume and we will get in touch
when a suitable role becomes available.

</p>

<Link
to="/CareerForm"
className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-100"
>

Submit Your Resume

</Link>

</section>

<Footer/>

</div>

)

}