import { FaFacebookF, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import emailjs from "emailjs-com";
import React, { useRef } from "react";
export default function Footer(){
const form = useRef();
const scrollTop = ()=>{
window.scrollTo({top:0,behavior:"smooth"})
}
const sendEmail = (e) =>{
    e.preventDefault();
 emailjs.sendForm(
        "service_zakxdhu",
        "template_f8if95g",
        form.current,
        "WqsGjD4ltQ3Kgu4PA"
    )
    .then(
        (result)=>{
            console.log(result.text);
            alert("Message sent successfully!");
        },
    (error)=>{
        console.log(error.text);
        alert("Failed to send message.");
    }
    );
 }
return(

<footer className="relative pt-20 text-gray-300 bg-black">

{/* Main Footer */}

<div className="grid w-ful gap-12 px-6 pb-16 mx-auto md:grid-flow-col">

{/* Company Info */}
<div className="inset-0 min-w-auto">
<section className="bg-black">

<div className="max-w-5xl px-6 mx-auto">

<h2 className="mb-4 text-2xl font-bold text-center text-white">
Contact Us
</h2>


<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
<input
type="text"
name="name"
placeholder="Full Name"
className=" border-b-[1px] bg-transparent focus:outline-none text-sm" 
/>

<input
type="email"
name="email"
placeholder="Email Address"
className="border-b-[1px] bg-transparent focus:outline-none text-sm "
/>

<input
type="text"
name="company"
placeholder="Company Name"
className="border-b-[1px] bg-transparent focus:outline-none text-sm"
/>

<input
type="text"
name="phone"
placeholder="Phone Number"
className="border-b-[1px] bg-transparent focus:outline-none text-sm"
/>

<textarea
rows="3"
name="message"
placeholder="Describe your project or requirement..."
className="border-b-[1px] bg-transparent focus:outline-none text-sm"
></textarea>

<button type="submit"
className="py-2 font-semibold text-white transition bg-blue-600 rounded-lg md:col-span-2 hover:bg-blue-700"
>

Send Message

</button>

</form>

</div>

</section>


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
<NavLink to="/"
className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"

}
>Home</NavLink>

</li>

<li className="transition cursor-pointer hover:text-white">
<NavLink
to="/aboutUs"
className={({isActive}) =>
isActive ? "txt-blue-600 border-b-2 border-t-blue-600 pb-1" : "hover:text-blue-600"
}
>
 About Us 
</NavLink>
</li>


<li className="transition cursor-pointer hover:text-white">
<NavLink to="/contact"
className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
  Contact Us
</NavLink>
</li>
  <li className="transition cursor-pointer hover:text-white">
<NavLink to="/Careers"
className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
  Careers
</NavLink>
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