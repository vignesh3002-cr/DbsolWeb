import { useState } from "react";

export default function Navbar() {

const [menu,setMenu] = useState(false)

return (

<nav className="bg-white shadow-md fixed w-full z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<h1 className="text-2xl font-bold text-blue-600">
Dbsol
</h1>

<ul className="hidden md:flex gap-8 font-medium">

<li className="hover:text-blue-600 cursor-pointer">
Home
</li>

<li className="hover:text-blue-600 cursor-pointer">
Services
</li>

<li className="hover:text-blue-600 cursor-pointer">
Industries
</li>

<li className="hover:text-blue-600 cursor-pointer">
Contact
</li>

</ul>

<button
onClick={()=>setMenu(!menu)}
className="md:hidden"
>

☰

</button>

</div>

{menu && (

<div className="md:hidden bg-white px-6 pb-4">

<p className="py-2">Home</p>
<p className="py-2">Services</p>
<p className="py-2">Industries</p>
<p className="py-2">Contact</p>

</div>

)}

</nav>

)

}