export default function Hero() {

return (

<section className="h-screen flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

<div>

<h1 className="text-4xl md:text-5xl font-bold leading-tight">

Empowering Businesses with  
<span className="text-yellow-300"> Dynamics 365 F&O</span>

</h1>

<p className="mt-6 text-lg">

DBSol delivers enterprise solutions including Microsoft Dynamics 365 Finance & Operations implementation, modern web development and scalable mobile applications.

</p>

<div className="mt-8 flex gap-4">

<button className="bg-yellow-400 text-black px-6 py-3 rounded-xl">

Explore Services

</button>

<button className="border px-6 py-3 rounded-xl">

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