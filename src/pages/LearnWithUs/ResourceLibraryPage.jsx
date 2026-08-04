import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResourceLibrary from "../../components/Resourcelibrary";

export default function ResourceLibraryPage() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-500 dark:bg-black">
      <Navbar />
      <div className="pt-20">
        <ResourceLibrary />
      </div>
      <Footer />
    </div>
  );
}