import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaBriefcase,
FaUsers,
FaProjectDiagram,
FaHandshake,
FaChartPie,
FaFileInvoiceDollar
} from "react-icons/fa"

export default function ProfessionalServices(){

const challenges = [
"Managing multiple client projects simultaneously",
"Tracking billable hours and service profitability",
"Maintaining strong client relationships",
"Handling large volumes of documents and contracts"
]

const solutions = [

{
icon:<FaBriefcase/>,
title:"Project & Engagement Management",
desc:"Manage consulting projects, track deliverables, and ensure timely completion of client engagements."
},

{
icon:<FaUsers/>,
title:"Client Relationship Management",
desc:"Centralize client data, communication history, and engagement details to improve client satisfaction."
},

{
icon:<FaProjectDiagram/>,
title:"Resource Planning",
desc:"Efficiently allocate consultants and team members across multiple projects."
},

{
icon:<FaFileInvoiceDollar/>,
title:"Billing & Invoicing Systems",
desc:"Automate time tracking, billing, and financial reporting for consulting services."
},

{
icon:<FaHandshake/>,
title:"Collaboration Platforms",
desc:"Enable seamless collaboration across teams and clients using digital tools."
},

{
icon:<FaChartPie/>,
title:"Business Analytics",
desc:"Gain actionable insights into project performance, revenue, and operational efficiency."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
alt="professional services"
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

Professional Services Technology Solutions

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Professional Services</span>

</p>

</div>

</section>


{/* OVERVIEW */}

<section className="py-20">

<div className="grid items-center max-w-6xl gap-12 px-6 mx-auto md:grid-cols-2">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
>

<h2 className="mb-6 text-4xl font-bold text-gray-800 dark:text-white">

Digital Transformation for Professional Services

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Professional service firms rely on efficient project
management, collaboration, and data-driven decision making
to deliver exceptional value to clients.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our technology solutions help consulting firms, legal
organizations, and service providers streamline operations,
improve client engagement, and enhance business performance.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* CHALLENGES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Professional Services Challenges
</h2>

<div className="grid gap-8 md:grid-cols-2">

{challenges.map((item,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-8 shadow-lg rounded-xl bg-gray-50 dark:bg-gray-900"
>

<p className="text-gray-600 dark:text-gray-300">
{item}
</p>

</motion.div>
))}

</div>

</div>

</section>


{/* SOLUTIONS */}

<section className="py-24">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Our Professional Services Solutions
</h2>

<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

{solutions.map((item,index)=>(
<motion.div
key={index}
whileHover={{scale:1.05}}
className="p-8 text-center bg-white shadow-lg rounded-xl dark:bg-gray-800"
>

<div className="mb-4 text-3xl text-blue-600">
{item.icon}
</div>

<h3 className="mb-2 text-lg font-semibold">
{item.title}
</h3>

<p className="text-sm text-gray-500">
{item.desc}
</p>

</motion.div>
))}

</div>

</div>

</section>


{/* IMPACT */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Business Impact
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"45% Faster Project Delivery",
"60% Improved Client Satisfaction",
"50% Better Resource Utilization",
"70% Enhanced Business Insights"
].map((item,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className="p-6 shadow-lg bg-gray-50 rounded-xl dark:bg-gray-900"
>

<p className="font-semibold">{item}</p>

</motion.div>
))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700">

<h2 className="mb-6 text-4xl font-bold">
Empower Your Professional Services Business
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Transform your consulting or professional services firm
with digital platforms that streamline operations,
improve collaboration, and enhance client engagement.

</p>

<Link
to="/contact"
className="px-8 py-4 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-gray-100"
>

Talk to Our Experts

</Link>

</section>

<Footer/>

</div>

)

}