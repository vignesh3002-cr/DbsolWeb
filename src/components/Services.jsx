export default function Services() {

const services = [

{
title:"Dynamics 365 F&O Solutions",
desc:"Enterprise ERP implementation, customization and consulting."
},

{
title:"Web Development",
desc:"Responsive websites using modern technologies like React."
},

{
title:"Mobile App Development",
desc:"High performance Android and iOS applications."
}

]

return (

<section className="py-20 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-12">

Our Services

</h2>

<div className="grid md:grid-cols-3 gap-8">

{services.map((service,index)=>(

<div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">

<h3 className="text-xl font-semibold mb-4">

{service.title}

</h3>

<p className="text-gray-600">

{service.desc}

</p>

</div>

))}

</div>

</div>

</section>

)

}