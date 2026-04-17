import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Industries from "../components/Industries";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import TrustedClients from "../components/TrustedClient";
import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonial";
import ERPImplementationProcess from "../components/ERP";
import DeliveringTailoredSolutions from "../components/Delivering_Tailored_Solutions";
import VideoTestimonials from "./VideoTestimonials";
import DataMigrationSection from "./DataMigrationSection";
import ResourceLibrary from "../components/ResiurceLibrary";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DeliveringTailoredSolutions showNavbar={false} showBackLink={false} />
      <Industries />
      <ERPImplementationProcess />
      <DataMigrationSection />
      <VideoTestimonials />
      <ResourceLibrary />
      <WhyChooseUs />
      <TrustedClients />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
