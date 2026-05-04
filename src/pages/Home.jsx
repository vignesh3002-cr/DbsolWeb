import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Industries from "../components/Industries";
import NewsPage from "../components/NewsPage";
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
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <div className="pt-20">
        <div className="mx-auto flex max-w-6xl justify-end px-6 py-3">
          <Link
            to="/emp-portal"
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            EMP Portal Login
          </Link>
        </div>
      </div>
     <Hero />
      <DeliveringTailoredSolutions showNavbar={false} showBackLink={false} />
      <Industries />
      <NewsPage />
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
