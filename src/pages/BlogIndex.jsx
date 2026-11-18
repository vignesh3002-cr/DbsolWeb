import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { insightsArticles } from "../data/insightsArticles";

const caseStudies = [
  {
    title: "Manufacturing ERP transformation",
    industry: "Manufacturing",
    image: "/images/Manufacturing.jpg",
    to: "/case-studies/manufacturing/",
  },
  {
    title: "Healthcare ERP implementation",
    industry: "Healthcare",
    image: "/images/Healthcare_1.jpg",
    to: "/case-studies/healthcare/",
  },
  {
    title: "Logistics and supply chain automation",
    industry: "Logistics & Supply Chain",
    image: "/images/Logistics_1.jpg",
    to: "/case-studies/logistics/",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white">
      <Helmet>
        <title>Dynamics 365 ERP Insights | DBSol Technologies</title>
        <meta
          name="description"
          content="Practical guidance on Dynamics 365 selection, ERP migration, implementation costs, manufacturing, and healthcare operations."
        />
      </Helmet>
      <Navbar />
      <main>
        <header className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">
              DBSol Insights
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Practical answers for your ERP decisions
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-md">
              Explore planning and implementation guidance for Microsoft
              Dynamics 365, with industry perspectives for manufacturing and
              healthcare teams.
            </p>
            <Link
              to="/knowledge-and-resources/"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Browse downloadable guides
            </Link>
          </div>
        </header>

        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">Latest articles</h2>
                <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
                  Straightforward guidance to help teams ask better questions
                  before selecting or implementing an ERP system.
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Written by the DBSol ERP Editorial Team
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {insightsArticles.map((article) => (
                <article
                  key={article.slug}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  <img
                    src={article.image}
                    alt=""
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5 sm:p-6">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                      {article.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-snug">
                      <Link
                        to={`/blogs/${article.slug}/`}
                        className="hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/blogs/${article.slug}/`}
                      className="mt-5 inline-flex min-h-11 items-center font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
                    >
                      Read article <span className="ml-2" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <section className="mt-14" aria-labelledby="case-studies-heading">
              <div className="mb-6">
                <h2 id="case-studies-heading" className="text-2xl font-bold sm:text-3xl">
                  ERP case studies by industry
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  See examples of ERP and operational transformation across
                  manufacturing, healthcare, and logistics.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {caseStudies.map((caseStudy) => (
                  <article
                    key={caseStudy.to}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
                  >
                    <img
                      src={caseStudy.image}
                      alt=""
                      loading="lazy"
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-5">
                      <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                        {caseStudy.industry}
                      </p>
                      <h3 className="mt-2 text-lg font-bold">
                        {caseStudy.title}
                      </h3>
                      <Link
                        to={caseStudy.to}
                        className="mt-3 inline-flex min-h-11 items-center font-semibold text-blue-700 hover:underline dark:text-blue-300"
                      >
                        View case study <span className="ml-2" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="mt-12 rounded-2xl bg-blue-50 p-6 dark:bg-gray-900 sm:p-8">
              <h2 className="text-xl font-bold sm:text-2xl">
                Need guidance for your organization?
              </h2>
              <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
                Explore the ERP implementation process and request a
                conversation with the DBSol team.
              </p>
              <Link
                to="/contact-us/"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Contact DBSol
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
