import { FaFacebookF, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer(){

const scrollTop = ()=>{
window.scrollTo({top:0,behavior:"smooth"})
}

return(

<footer className="relative pt-20 text-gray-300 bg-black">

{/* Main Footer */}

<div className="grid w-full gap-12 px-6 pb-16 mx-auto md:grid-flow-col">

{/* Company Info */}
<div className="inset-0 min-w-56">

<video
  src="/images/Solution_System.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="object-cover w-full h-full"
></video>

</div>

<div>

<h2 className="mb-4 text-2xl font-bold text-white">
DBSol
</h2>

<div className="flex items-center gap-2 mb-4">

<img
src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
className="w-5"
/>

<span className="text-sm text-gray-400">
Microsoft Partner
</span>

</div>

<p className="text-sm leading-relaxed text-gray-400">

We provide enterprise digital transformation solutions including
Dynamics 365 Finance & Operations, responsive web development,
and cross-platform mobile applications.

</p>

{/* Social icons */}

<div className="flex gap-4 mt-6">

<a className="p-3 transition bg-gray-800 rounded-lg hover:bg-blue-600">
<FaFacebookF/>
</a>

<a className="p-3 transition bg-gray-800 rounded-lg hover:bg-blue-500">
<FaTwitter/>
</a>

<a className="p-3 transition bg-gray-800 rounded-lg hover:bg-blue-700">
<FaLinkedinIn/>
</a>

</div>

</div>

{/* Quick Links */}

<div className="w-fit">

<h3 className="mb-6 font-semibold text-white">
Quick Links
</h3>

<ul className="space-y-3 text-sm">

<li className="transition cursor-pointer hover:text-white">
Home
</li>

<li className="transition cursor-pointer hover:text-white">
About Us
</li>

<li className="transition cursor-pointer hover:text-white">
Services
</li>

<li className="transition cursor-pointer hover:text-white">
Industries
</li>

<li className="transition cursor-pointer hover:text-white">
Contact
</li>

</ul>

</div>

{/* Contact */}

<div>

<h3 className="mb-6 font-semibold text-white">
Contact Us
</h3>

<ul className="space-y-3 text-sm text-gray-400">
<li>
✉ jayakumar.k@dbsoltechnologies.com
</li>
<li>
📞 +91 9994883682
</li>
<li>
📍 VP Chindhan Ave
Chennai, Tamil Nadu, India
</li>
<li>
  <div className="overflow-hidden shadow-lg rounded-lg">

<iframe
title="company location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332101.68832345324!2d79.94720254802596!3d13.008628940473582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f638bae20f87%3A0x6e87491d6d266f6!2sVP%20Chindhan%20Ave%2C%20Senthil%20Nagar%2C%20Urapakkam%2C%20Tamil%20Nadu%20603210!5e0!3m2!1sen!2sin!4v1774953009145!5m2!1sen!2sin%22"
width="100%"
height="150"
className="border-0"
></iframe>

</div>
</li>

</ul>

</div>

</div>

{/* Bottom Bar */}

<div className="py-6 border-t border-gray-700">

<div className="flex flex-col items-center justify-between gap-4 px-6 mx-auto max-w-7xl md:flex-row">

<p className="text-sm text-gray-400">

© {new Date().getFullYear()} DBSol Technologies Pvt Ltd.
All Rights Reserved.

</p>

<p className="text-sm text-gray-500">

Designed & Developed by DBSol Team

</p>

</div>

</div>

{/* Back To Top Button */}

<motion.button
onClick={scrollTop}
whileHover={{scale:1.1}}
className="fixed p-4 text-white bg-blue-600 rounded-full shadow-lg bottom-8 right-8 hover:bg-blue-700"
>

<FaArrowUp/>

</motion.button>

</footer>

)

}