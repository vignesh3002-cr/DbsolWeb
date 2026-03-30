import { motion } from "framer-motion"
export default function Integration(){
const steps = [
{
  title: "Legacy Systems",
  desc: "AX 2012 / Custom ERP",
  img:"/images/Legacy.png"
},
{
  title: "Data Migration",
  desc: "Secure Transfer",
  img: "/images/Data_Migration.png"
},
{
  title: "Dynamics 365",
  desc: "Finance & Operations",
  img: "/images/Dynamics.png"
},
{
  title: "Azure APIs",
  desc: "Integration Layer",
  img: "/images/API's.png"
},
{
  title: "3rd Party Apps",
  desc: "CRM / Payment",
  img: "/images/3rdParty.png"
},
{
  title: "Analytics",
  desc: "Power BI",
  img: "/images/Analytics.png"
}
]
return(
 <>
{/* INTEGRATION ARCHITECTURE */}

<section className="py-28 bg-gray-50 dark:bg-gray-900">

<div className="max-w-6xl px-6 mx-auto text-center">

<h2 className="mb-6 text-4xl font-bold">
How We Integrate With Your Existing Systems
</h2>

<p className="max-w-2xl mx-auto mb-16 text-gray-500">
We seamlessly connect Microsoft Dynamics 365 with your legacy systems,
third-party tools, and cloud infrastructure for a unified business ecosystem.
</p>

<div className="grid items-center gap-6 md:grid-cols-3">

{steps.map((item, index) => (

  <div key={index} className="flex flex-col items-center gap-4 f md:flex-row">

    {/* Card */}
    <div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-[clamp(180px,20vw,1000px)] h-[clamp(100px,10vw,300px)] p-6 overflow-hidden bg-white shadow-lg rounded-xl"
    >

      {/* Background Image */}
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative text-white">
      </div>

    </motion.div>
    <div>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm">{item.desc}</p>
    </div>
    </div>
    <div className="hidden md:inline-block">
    {/* Arrow (only if not last item) */}
    {index !== steps.length - 1 && index!==2 && (
      <div><img className="rotate-90 w-[clamp(44px,6vw,52px)] h-[clamp(44px,6vw,52px)] md:rotate-0"src="/images/right.png" deg/></div>
    )}
    </div>
    <div className="inline-block md:hidden">
          {/* Arrow (only if not last item) */}
    {index !== steps.length - 1 && (
      <div><img className="rotate-90 w-[clamp(44px,6vw,52px)] h-[clamp(44px,6vw,52px)] md:rotate-0"src="/images/right.png" deg/></div>
    )}
    </div>
  
  </div>

))}

</div>

</div>

</section>

</>
)

}