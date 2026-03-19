import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import {
FaGraduationCap,
FaChalkboardTeacher,
FaLaptopCode,
FaUserGraduate,
FaDatabase,
FaChartLine
} from "react-icons/fa"

export default function Education(){

const challenges = [
"Managing large numbers of students and academic records",
"Delivering engaging digital learning experiences",
"Maintaining secure student data and academic information",
"Providing real-time insights into student performance"
]

const solutions = [

{
icon:<FaGraduationCap/>,
title:"Learning Management Systems",
desc:"Implement modern LMS platforms that enable digital learning, course management, and student engagement."
},

{
icon:<FaChalkboardTeacher/>,
title:"Digital Classrooms",
desc:"Create virtual classrooms that support remote learning, video sessions, and collaborative learning tools."
},

{
icon:<FaLaptopCode/>,
title:"E-Learning Platforms",
desc:"Develop scalable e-learning platforms for universities, schools, and corporate training institutions."
},

{
icon:<FaUserGraduate/>,
title:"Student Management Systems",
desc:"Centralize academic records, admissions, attendance, and performance tracking."
},

{
icon:<FaDatabase/>,
title:"Education Data Platforms",
desc:"Securely store and manage student data with advanced data management systems."
},

{
icon:<FaChartLine/>,
title:"Student Analytics",
desc:"Use advanced analytics to monitor student performance and improve educational outcomes."
}

]

return(

<div className="bg-gray-50 dark:bg-gray-900">

<Navbar/>

{/* HERO */}

<section className="relative flex items-center justify-center h-[380px]">

<img
src="/images/ET_1.jpeg"
alt="education technology"
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

Education Technology Solutions

</motion.h1>

<p className="mt-3 text-gray-200">

<Link to="/" className="hover:text-blue-400">Home</Link>

<span className="mx-2">➜</span>

<span className="text-blue-400">Education</span>

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

Digital Transformation in Education

</h2>

<p className="mb-4 text-gray-600 dark:text-gray-300">

Educational institutions are rapidly adopting digital
technologies to enhance learning experiences and improve
academic management systems.

</p>

<p className="text-gray-600 dark:text-gray-300">

Our education technology solutions enable schools,
universities, and training organizations to modernize
learning platforms, manage academic data, and improve
student engagement.

</p>

</motion.div>

<motion.img
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
src="/images/ET_2.jpeg"
className="shadow-xl rounded-xl"
/>

</div>

</section>


{/* CHALLENGES */}

<section className="py-20 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto">

<h2 className="text-4xl font-bold text-center text-gray-800 mb-14 dark:text-white">
Education Industry Challenges
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
Our Education Technology Solutions
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


{/* IMPACT STATS */}

<section className="py-24 bg-white dark:bg-gray-800">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-12 text-4xl font-bold text-gray-800 dark:text-white">
Education Impact
</h2>

<div className="grid gap-10 md:grid-cols-4">

{[
"60% Improved Student Engagement",
"50% Faster Academic Administration",
"70% Better Data Management",
"80% Enhanced Learning Experience"
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
Transform Education with Digital Learning
</h2>

<p className="max-w-2xl mx-auto mb-10 text-blue-100">

Empower schools and universities with digital learning
platforms, advanced analytics, and modern education
technology solutions.

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