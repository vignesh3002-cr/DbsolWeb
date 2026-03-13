import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaUniversity,
FaChartLine,
FaShieldAlt,
FaMoneyCheckAlt,
FaUserShield,
FaDatabase
} from "react-icons/fa"

export default function FinanceBanking(){

const challenges = [
"Managing regulatory compliance and financial reporting",
"Protecting financial systems against cyber threats and fraud",
"Handling large volumes of financial transactions",
"Delivering secure and seamless digital banking experiences"
]

const solutions = [

{
icon:<FaUniversity/>,
title:"Digital Banking Platforms",
desc:"Implement secure and scalable banking platforms that support modern digital financial services."
},

{
icon:<FaMoneyCheckAlt/>,
title:"Financial Process Automation",
desc:"Automate accounting, reporting, and financial workflows to reduce manual operations."
},

{
icon:<FaChartLine/>,
title:"Financial Analytics",
desc:"Use advanced data analytics to generate insights for financial planning and forecasting."
},

{
icon:<FaShieldAlt/>,
title:"Fraud Detection Systems",
desc:"Implement intelligent monitoring systems to detect and prevent fraudulent transactions."
},

{
icon:<FaUserShield/>,
title:"Regulatory Compliance",
desc:"Ensure compliance with financial regulations using integrated compliance management tools."
},

{
icon:<FaDatabase/>,
title:"Secure Data Management",
desc:"Protect financial data through secure cloud infrastructure and advanced encryption."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg"
alt="finance industry"
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

Finance & Banking Solutions

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Finance</span>

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
Driving Innovation in Financial Services
</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Financial institutions are rapidly adopting digital technologies
to improve operational efficiency, enhance security, and deliver
better services to customers.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our financial solutions enable organizations to modernize their
banking infrastructure, automate financial processes, and
gain real-time insights into their financial operations.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* CHALLENGES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Financial Industry Challenges
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
Our Financial Technology Solutions
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


{/* STATS */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Financial Impact
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"40% Faster Financial Reporting",
"50% Reduced Operational Cost",
"70% Improved Fraud Detection",
"90% Secure Data Compliance"
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
Transform Your Financial Operations
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Modernize financial processes, improve compliance,
and gain intelligent insights with advanced
financial technology solutions.

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