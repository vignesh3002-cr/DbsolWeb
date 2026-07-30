import { Link } from "react-router-dom";

const CTASection = () => {
  return (
   <section className="bg-indigo-700 px-6 py-4 md:py-8 lg:py-16 text-center text-white dark:bg-gray-800">

       <h2 className="mb-4 text-3xl font-bold">
            Ready to Transform Your Business?
          </h2>

           <p className="mx-auto mb-6 max-w-2xl text-base text-blue-100">
            Partner with DBSOL Technologies to modernize finance, supply chain,
            manufacturing, warehousing, and customer operations through
            Microsoft Dynamics 365, Azure, Power Platform, and intelligent
            enterprise solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/contact"
             className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
            >
              Contact Our Experts
            </Link>

            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
            >
              View Success Stories
            </Link>
          </div>
        
    
    </section>
  );
};

export default CTASection;