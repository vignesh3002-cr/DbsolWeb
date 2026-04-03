import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaHospital,
FaUserMd,
FaHeartbeat,
FaShieldAlt,
FaDatabase,
FaChartLine
} from "react-icons/fa"

export default function Healthcare(){

const challenges = [
"Managing large volumes of patient data securely",
"Ensuring regulatory compliance and healthcare standards",
"Improving operational efficiency in hospitals",
"Providing seamless digital healthcare services to patients"
]

const solutions = [

{
icon:<FaHospital/>,
title:"Hospital Management Systems",
desc:"Implement integrated hospital management systems to streamline operations and improve patient care."
},

{
icon:<FaUserMd/>,
title:"Digital Patient Records",
desc:"Securely manage electronic health records (EHR) to provide real-time access to patient information."
},

{
icon:<FaHeartbeat/>,
title:"Remote Healthcare Services",
desc:"Enable telemedicine platforms and remote healthcare monitoring systems."
},

{
icon:<FaShieldAlt/>,
title:"Healthcare Data Security",
desc:"Protect sensitive medical data using advanced security and compliance frameworks."
},

{
icon:<FaDatabase/>,
title:"Healthcare Data Platforms",
desc:"Centralize healthcare data for improved accessibility and analytics."
},

{
icon:<FaChartLine/>,
title:"Medical Analytics",
desc:"Use advanced analytics to improve treatment planning and healthcare operations."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="/images/HC_1.jpeg"
alt="healthcare technology"
className="absolute inset-0 object-cover w-full h-full"
/>"
<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 text-center text-white">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.7}}
className="text-5xl font-bold"
>

Healthcare Technology Solutions

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Healthcare</span>

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

Digital Transformation in Healthcare

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Healthcare organizations are rapidly adopting digital technologies
to improve patient care, streamline hospital operations,
and manage healthcare data more efficiently.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our healthcare technology solutions enable hospitals and healthcare
providers to improve operational efficiency, enhance patient
experiences, and maintain secure healthcare data management.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="/images/HC_2.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* CHALLENGES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-4 dark:text-white">
Healthcare Industry Challenges
</h2>
<p className="text-gray-600 dark:text-gray-300 text-center mb-20 max-w-2xl mx-auto">Healthcare providers often lack access to real-time analytics for decision-making. This restricts the full potential of Dynamics 365’s reporting and AI-driven insights.</p>

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

<h2 className="text-4xl font-bold text-center text-gray-800 mb-4 dark:text-white">
Our Healthcare Technology Solutions
</h2>
<p className="text-gray-600 dark:text-gray-300 text-center mb-20 max-w-2xl mx-auto">Enhance clinical and operational workflows with AI-driven insights, helping providers deliver personalized and timely patient care through automated processes.</p>

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

<h3 className="mb-2 text-lg font-semibold dark:text-gray-300">
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


{/* IMPACT STATS */}

<section className="py-24 bg-white dark:bg-gray-700">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Healthcare Impact
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"50% Faster Patient Data Access",
"40% Improved Operational Efficiency",
"70% Enhanced Data Security",
"60% Better Patient Experience"
].map((item,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.2}}
className={`p-6 shadow-lg ${index%2==0?"bg-gradient-to-r from-yellow-500 to-yellow-800 dark:from-gray-800 dark:to-gray-800":"bg-gradient-to-r from-green-400 to-green-700 dark:from-gray-800 dark:to-gray-800"} dark:bg-gray-800 rounded-xl`}
>

<p className=" text-white text-lg font-serif">{item}</p>

</motion.div>
))}

</div>

</div>

</section>


{/* CTA */}

<section className="py-24 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-gray-800 dark:to-gray-800 text-blue-600 dark:text-blue-600">

<h2 className="mb-6 text-4xl font-bold">
Transform Healthcare with Digital Innovation
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Empower hospitals and healthcare providers with secure
technology solutions that improve patient care and
streamline healthcare operations.

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