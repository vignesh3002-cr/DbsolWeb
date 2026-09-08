import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResourceLibrary from "../../components/Resourcelibrary";
import ERPImplementationProcess from "../../components/ERP";

export default function ResourceLibraryPage() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-500 dark:bg-black">
      <Navbar />
      <div className="pt-20">
        <section className="relative flex items-center justify-center h-[420px] overflow-hidden">
          <img
            src="/images/Knowledge&Resourses.jpg"
            alt="Knowledge & Resources"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 px-4 text-center text-white">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Knowledge & Resources
            </h1>
            <p className="mt-4 text-gray-200">
              <Link className="hover:text-blue-600" to="/">
                Home
              </Link>{" "}
              ➜ <span className="text-blue-600">Knowledge & Resources</span>
            </p>
          </div>
        </section>

        <ERPImplementationProcess />
        <ResourceLibrary />
      </div>
      <Footer />
    </div>
  );
}