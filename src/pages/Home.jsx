import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Industries from "../components/Industries"
import Footer from "../components/Footer"
import WhyChooseUs from "../components/WhyChooseUs"
import TrustedClients from "../components/TrustedClient"
import CallToAction from "../components/CallToAction"
import Testimonials from "../components/Testimonial"
import ERPImplementationProcess from "../components/ERP"
import VideoTestimonials from "./VideoTestimonials"
import DataMigrationSection from "./DataMigrationSection"
export default function Home(){

return(

<>

<Navbar/>
<Hero/>
<Services/>
<Industries/>
<ERPImplementationProcess/>
<VideoTestimonials/>
<DataMigrationSection/>
<WhyChooseUs/>
<TrustedClients/>
<Testimonials/>
<CallToAction/>
<Footer/>

</>

)

}