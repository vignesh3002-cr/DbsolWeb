import { FaFacebookF, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import emailjs from "emailjs-com";
import React, { useRef } from "react";
import logoDark from "../assets/Dbsol logo.dark.png";

export default function Footer() {
const form = useRef();
const scrollTop = ()=>{
window.scrollTo({top:0,behavior:"smooth"})
}
const sendEmail = (e) =>{
    e.preventDefault();
 emailjs.sendForm(
        "service_0vgpqhl",
        "template_ynlyhlp",
        form.current,
        "tR4NHJObJtf9X3WOW"
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

<footer className="relative pt-12 text-gray-300 bg-black">

<div className="grid max-w-7xl mx-auto gap-8 px-6 pb-8 md:grid-cols-2 lg:grid-cols-5 items-start">

  {/* Company Info */}
  <div>

    {/* ✅ Logo (visible in BOTH light & dark mode) */}
    <img
      src={logoDark}
      alt="Dbsol Technologies"
      className="-mt-8 -ml-4 mb-4 h-28 object-contain"
    />

<div className="flex items-center gap-2 mb-2">

<img
src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
className="w-5"
/>

<span className="text-sm text-gray-400">
Microsoft Partner
</span>

</div>

<p className="text-sm leading-7  text-gray-400 max-w-xs hover:text-gray-300">

We specialize in enterprise digital transformation services, including Dynamics 365 Finance & Operations, strategic Business Consulting, Customer Engagement solutions, and advanced web and cross-platform mobile application development.

</p>

{/* Social icons */}

<div className="flex gap-4 mt-6">

<a className="p-3 transition bg-gray-800 rounded-lg hover:bg-blue-600">
<FaFacebookF/>
</a>

<a className="p-3 transition bg-gray-800 rounded-lg hover:bg-blue-500">
<FaTwitter/>
</a>

<a href="https://www.linkedin.com/company/dbsol-technologies-private-limited/" target="_blank" rel="noopener noreferrer" className="p-3 transition bg-gray-800 rounded-lg hover:bg-blue-700">
<FaLinkedinIn/>
</a>

</div>

</div>

{/* Quick Links */}

<div className="w-fit">

<h3 className="mb-4 font-semibold text-white">
Quick Links
</h3>

<ul className="space-y-3 text-sm">

<li className="transition cursor-pointer  hover:text-white">
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
isActive ? "txt-blue-600 border-b-2  border-t-blue-600 pb-1" : "hover:text-blue-600"
}
>
 AboutUs 
</NavLink>
</li>


<li className="transition cursor-pointer hover:text-white">
<NavLink to="/contact"
className={({isActive}) =>
  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"
}
>
  ContactUs
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

{/* Services and Resources */}

<div className="space-y-8">

<div>
<h3 className="mb-4 font-semibold text-white">
Services
</h3>

<ul className="space-y-3 text-sm text-gray-400">
<li><NavLink className="transition-colors hover:text-blue-400" to="/Dynamics365Business">Dynamics 365</NavLink></li>
<li><NavLink className="transition-colors hover:text-blue-400" to="/BusinessCentral">Business Central</NavLink></li>
<li><NavLink className="transition-colors hover:text-blue-400" to="/services/erp">ERP Solutions</NavLink></li>
</ul>
</div>

<div>
<h3 className="mb-4 font-semibold text-white">
Resources
</h3>

<ul className="space-y-3 text-sm text-gray-400">
<li><NavLink className="transition-colors hover:text-blue-400" to="/news">Blogs</NavLink></li>
<li><NavLink className="transition-colors hover:text-blue-400" to="/CaseStudies">Case Studies</NavLink></li>
<li><NavLink className="transition-colors hover:text-blue-400" to="/contact">FAQs</NavLink></li>
</ul>
</div>

</div>

{/* Contact */}

<div>

<h3 className="mb-4 font-semibold text-white">
Contact Us
</h3>

<ul className="space-y-3 text-sm text-gray-400 ">
<a href="mailto:aravinth.p@dbsoltechnologies.com">
<li className="hover:text-gray-300">
✉ aravinth.p@dbsoltechnologies.com
</li></a>
<li className="hover:text-gray-300">
📞 +91 9884016853
</li>
<li className="hover:text-gray-300">
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
<div className="inset-0 min-w-auto">
<section className="bg-black">

<div className="max-w-5xl mx-auto">

<h3 className="mb-4 font-semibold text-white">
Get-in-touch
</h3>


<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
<input
type="text"
name="name"
placeholder="Full Name"
className=" border-b-[1px] bg-transparent focus:outline-none text-sm pb-2" 
/>

<input
type="email"
name="email"
placeholder="Email Address"
className="border-b-[1px] bg-transparent focus:outline-none text-sm pb-2 "
/>

<input
type="text"
name="company"
placeholder="Company Name"
className="border-b-[1px] bg-transparent focus:outline-none text-sm pb-2"
/>

<textarea
rows="3"
name="message"
placeholder="Describe your project or requirement..."
className="border-b-[1px] bg-transparent focus:outline-none text-sm pb-2"
></textarea>

<button type="submit"
className="py-2 font-semibold text-white transition bg-blue-600 rounded-lg md:col-span-2 hover:bg-blue-700"
>

Submit

</button>

</form>

</div>

</section>


</div>
</div>

{/* Frequently Asked Questions */}

<section
  aria-labelledby="footer-faq-heading"
  className="max-w-7xl mx-auto px-6 pb-10"
>
  <h2 id="footer-faq-heading" className="mb-5 text-xl font-semibold text-white">
    Frequently Asked Questions
  </h2>

  <div className="grid gap-4 md:grid-cols-2">
    <details className="rounded-lg border border-gray-700 p-4">
      <summary className="cursor-pointer font-medium text-gray-200">
        Why choose Dynamics 365?
      </summary>
      <p className="mt-3 text-sm leading-6 text-gray-400">
        Dynamics 365 connects business processes and data in one flexible
        platform, helping teams work more efficiently and make informed
        decisions.
      </p>
    </details>

    <details className="rounded-lg border border-gray-700 p-4">
      <summary className="cursor-pointer font-medium text-gray-200">
        How long does implementation take?
      </summary>
      <p className="mt-3 text-sm leading-6 text-gray-400">
        Timelines depend on your project scope, integrations, data, and
        customizations. We can provide a clearer estimate after learning about
        your requirements.
      </p>
    </details>

    <details className="rounded-lg border border-gray-700 p-4">
      <summary className="cursor-pointer font-medium text-gray-200">
        What industries do you support?
      </summary>
      <p className="mt-3 text-sm leading-6 text-gray-400">
        We work with organizations in industries including finance, healthcare,
        education, manufacturing, retail, logistics, hospitality, and
        professional services.
      </p>
    </details>

    <details className="rounded-lg border border-gray-700 p-4">
      <summary className="cursor-pointer font-medium text-gray-200">
        Do you provide post-launch support?
      </summary>
      <p className="mt-3 text-sm leading-6 text-gray-400">
        Contact our team to discuss post-launch assistance, training, and
        ongoing improvements for your solution.
      </p>
    </details>
  </div>
</section>

{/* Bottom Bar */}

<div className="py-4 border-t border-gray-700">

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