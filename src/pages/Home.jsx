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
import DeliveringTailoredSolutions from "../components/Delivering_Tailored_Solutions";
import VideoTestimonials from "./VideoTestimonials";
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
      <VideoTestimonials />
      <TrustedClients />
      <NewsPage />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}