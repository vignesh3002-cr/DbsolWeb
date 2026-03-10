export default function Hero() {

return (

<section className="flex items-center h-screen text-white bg-gradient-to-r from-blue-600 to-indigo-700">

<div className="grid items-center gap-10 px-6 mx-auto max-w-7xl md:grid-cols-2">

<div>

<h1 className="text-4xl font-bold leading-tight md:text-5xl">

Empowering Businesses with  
<span className="text-yellow-300"> Dynamics 365 F&O</span>

</h1>

<p className="mt-6 text-lg">

Dbsol delivers enterprise solutions including Microsoft Dynamics 365 Finance & Operations implementation, modern web development and scalable mobile applications.

</p>

<div className="flex gap-4 mt-8">

<button className="px-6 py-3 text-black bg-yellow-400 rounded-xl">

Explore Services

</button>

<button className="px-6 py-3 border rounded-xl">

Contact Us

</button>

</div>

</div>

<div>

<img
src="https://illustrations.popsy.co/blue/digital-nomad.svg"
alt="business"
className="w-full"
/>

</div>

</div>

</section>

)

}