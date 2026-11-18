import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { insightsArticles, insightsAuthor } from "../data/insightsArticles";

const siteUrl = "https://www.dbsoltechnologies.com";

export default function BlogArticle() {
  const { slug } = useParams();
  const article = insightsArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <Navbar />
        <main className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Article not found
          </h1>
          <Link
            to="/blogs/"
            className="mt-6 inline-flex min-h-12 items-center text-blue-700 hover:underline dark:text-blue-300"
          >
            Back to all articles
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const articleUrl = `${siteUrl}/blogs/${article.slug}/`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: article.title,
    description: article.excerpt,
    image: [`${siteUrl}${article.image}`],
    datePublished: article.published,
    dateModified: article.published,
    author: {
      "@type": "Organization",
      name: insightsAuthor.name,
      description: insightsAuthor.credentials,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "DBSol Technologies",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/DBSOL_Logo.jpg`,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Helmet>
        <title>{article.title} | DBSol Technologies</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={articleUrl} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <header className="relative isolate overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20">
          <img
            src={article.image}
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 to-blue-950/75" />
          <div className="mx-auto max-w-4xl">
            <Link
              to="/blogs/"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-blue-200 hover:text-white"
            >
              ← All articles
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-blue-200">
              {article.category}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-200">
              {article.excerpt}
            </p>
            <div className="mt-7 border-t border-white/20 pt-5 text-sm text-gray-200">
              <p className="font-semibold text-white">{insightsAuthor.name}</p>
              <p className="mt-1 max-w-3xl">{insightsAuthor.credentials}</p>
              <time className="mt-2 block" dateTime={article.published}>
                Published{" "}
                {new Date(`${article.published}T00:00:00`).toLocaleDateString(
                  "en",
                  { year: "numeric", month: "long", day: "numeric" },
                )}
              </time>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <article className="min-w-0">
            {article.sections.map((section) => (
              <section key={section.heading} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-bold leading-snug sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-base leading-7 text-gray-700 dark:text-gray-300"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-gray-700 dark:text-gray-300">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <aside className="mt-10 rounded-2xl bg-blue-50 p-6 dark:bg-gray-900 sm:p-8">
              <h2 className="text-xl font-bold">Discuss your ERP project</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Talk with DBSol about your requirements, migration, or
                implementation planning.
              </p>
              <Link
                to="/contact-us/"
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
              >
                Contact our team
              </Link>
            </aside>
          </article>

          <aside className="h-fit rounded-2xl border border-gray-200 p-5 dark:border-gray-800 sm:p-6">
            <h2 className="text-lg font-bold">Related pages</h2>
            <ul className="mt-4 space-y-3">
              {article.relatedLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex min-h-11 items-center font-medium text-blue-700 hover:underline dark:text-blue-300"
                  >
                    {item.label} <span className="ml-2" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/knowledge-and-resources/"
              className="mt-6 inline-flex min-h-11 items-center border-t border-gray-200 pt-4 font-semibold text-gray-800 hover:text-blue-700 dark:border-gray-700 dark:text-gray-200 dark:hover:text-blue-300"
            >
              Downloadable guides
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
