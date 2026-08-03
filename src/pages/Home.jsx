import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MissionVisionSection from "../components/MissionVisionSection";
import Industries from "../components/Industries";
import NewsPage from "../components/NewsPage";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import CompanyStats from "../components/CompanyStats";
import TrustedClients from "../components/TrustedClient";
import Testimonials from "../components/Testimonial";
import ERPImplementationProcess from "../components/ERP";
import DeliveringTailoredSolutions from "../components/Delivering_Tailored_Solutions";
import VideoTestimonials from "./VideoTestimonials";
import ResourceLibrary from "../components/ResiurceLibrary";
import CTASection from "../components/Ctasection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionVisionSection />
      <CompanyStats />
      <DeliveringTailoredSolutions showNavbar={false} showBackLink={false} />
      <WhyChooseUs />
      <Industries />
      <ERPImplementationProcess />
      <VideoTestimonials />
      <ResourceLibrary />
      <TrustedClients />
      <NewsPage />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}