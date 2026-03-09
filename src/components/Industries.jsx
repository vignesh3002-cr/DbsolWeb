export default function Industries(){

const industries = [
"Manufacturing",
"Finance",
"Retail",
"Logistics",
"Healthcare",
"Education"
]

return(

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-12">

Industries We Serve

</h2>

<div className="grid grid-cols-2 md:grid-cols-3 gap-6">

{industries.map((industry,index)=>(

<div key={index} className="border p-6 rounded-xl text-center hover:bg-blue-50">

{industry}

</div>

))}

</div>

</div>

</section>

)

}