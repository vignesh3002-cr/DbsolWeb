import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Target,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { d365Modules, getD365Module } from "../data/d365Modules";

export default function ModuleDetail() {
  const { slug } = useParams();
  const module = slug ? getD365Module(slug) : undefined;
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!module) {
      return undefined;
    }

    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(hash);
        }, 80);
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    module.sections.forEach((section) => {
      const element = document.getElementById(section.slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      observer.disconnect();
    };
  }, [module]);

  if (!module) {
    return <Navigate to="/modules" replace />;
  }

  const otherModules = d365Modules.filter((item) => item.slug !== module.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans'] text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <header
        className="relative overflow-hidden border-b border-slate-200 pt-16 dark:border-white/10"
        style={{
          background: `linear-gradient(135deg, hsl(${module.accent} / 0.18) 0%, rgba(255, 255, 255, 0.98) 72%)`,
        }}
      >
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background: `linear-gradient(135deg, hsl(${module.accent}) 0%, rgba(2, 6, 23, 0.95) 72%)`,
          }}
        />
        <div className="absolute inset-0 opacity-40 dark:opacity-30">
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/60 blur-3xl dark:bg-white/15" />
          <div className="absolute -bottom-16 right-0 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-300/15" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Link
            to="/modules"
            className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-900 dark:text-white/80 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All modules
          </Link>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-cyan-200 bg-white/75 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:border-white/15 dark:bg-white/10 dark:text-cyan-100">
                Dynamics 365 Module
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {module.title}
              </h1>
              <p className="mt-4 text-base text-slate-700 dark:text-white/85 md:text-lg">{module.tagline}</p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-white/75">{module.description}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={module.docHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
              >
                Microsoft Docs
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-200">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white md:text-2xl">What we deliver to clients</h2>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {module.clientValue.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-200">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white md:text-2xl">How clients use it</h2>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {module.usage.map((item) => (
                <li key={item} className="flex gap-3">
                  <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                On this page
              </p>
              <nav className="flex flex-col gap-2 border-l border-slate-200 dark:border-white/10">
                {module.sections.map((section) => {
                  const isActive = activeSection === section.slug;

                  return (
                    <a
                      key={section.slug}
                      href={`#${section.slug}`}
                      className={`-ml-px border-l-2 py-1.5 pl-4 text-sm transition ${
                        isActive
                          ? "border-cyan-500 text-cyan-700 dark:border-cyan-300 dark:text-cyan-100"
                          : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900 dark:text-slate-400 dark:hover:border-white/20 dark:hover:text-white"
                      }`}
                    >
                      {section.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Capabilities</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Deep-dive into the sub-modules that make up {module.title}.
              </p>
            </div>

            <div className="space-y-8">
              {module.sections.map((section, index) => (
                <article
                  key={section.slug}
                  id={section.slug}
                  className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold"
                      style={{
                        backgroundColor: `hsl(${module.accent} / 0.18)`,
                        color: `hsl(${module.accent})`,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white md:text-2xl">{section.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{section.summary}</p>
                    </div>
                  </div>

                  <div className="mb-5 grid gap-3 sm:grid-cols-2">
                    {section.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-white/8 dark:bg-white/[0.04] dark:text-slate-200"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ color: `hsl(${module.accent})` }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={section.docHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100"
                  >
                    <BookOpen className="h-4 w-4" />
                    Read the official documentation
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Explore other modules</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Keep navigating through the rest of the Dynamics reference guide.
              </p>
            </div>
            <Link to="/modules" className="text-sm font-semibold text-cyan-700 transition hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100">
              Back to hub
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {otherModules.map((item) => (
              <Link
                key={item.slug}
                to={`/module/${item.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-300 hover:bg-cyan-50 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-cyan-300/40 dark:hover:bg-slate-900"
              >
                <div className={`mb-3 inline-flex rounded-2xl p-3 ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
