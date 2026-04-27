import { Search, ArrowRight, BookOpen, Database, ExternalLink, Globe, Settings, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { d365Modules } from "../data/d365Modules";

const quickLinks = [
  {
    label: "What's New",
    href: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/get-started/whats-new-home-page",
    icon: Zap,
  },
  {
    label: "Admin Guide",
    href: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/sysadmin/system-administration-home-page",
    icon: Settings,
  },
  {
    label: "Security & Compliance",
    href: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/sysadmin/role-based-security",
    icon: Shield,
  },
  {
    label: "Data Management",
    href: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/data-entities-data-packages",
    icon: Database,
  },
  {
    label: "Integration Guide",
    href: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/data-entities/integration-overview",
    icon: Globe,
  },
  {
    label: "Developer Reference",
    href: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/dev-tools/developer-home-page",
    icon: BookOpen,
  },
];

export default function ModulesHub() {
  const [search, setSearch] = useState("");
  const query = search.trim().toLowerCase();

  const filteredModules = d365Modules.filter(
    (module) =>
      module.title.toLowerCase().includes(query) ||
      module.description.toLowerCase().includes(query) ||
      module.sections.some(
        (section) =>
          section.title.toLowerCase().includes(query) ||
          section.summary.toLowerCase().includes(query)
      )
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <header className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.38),_transparent_28%),linear-gradient(135deg,_#eff6ff_0%,_#ffffff_50%,_#e0f2fe_100%)] pt-16 font-['Plus_Jakarta_Sans'] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.28),_transparent_28%),linear-gradient(135deg,_#082f49_0%,_#020617_50%,_#0f172a_100%)]">
        <div className="absolute inset-0 opacity-60 dark:opacity-40">
          <div className="absolute left-8 top-10 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-300/20" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-500/20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
          <span className="inline-flex rounded-full border border-cyan-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:border-white/15 dark:bg-white/10 dark:text-cyan-100">
            Dynamics 365 Reference
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Documentation hub for Dynamics 365 modules
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-200">
            Browse module overviews, drill into business capabilities, and jump directly to official
            Microsoft Learn content from one place inside DBSol Web.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/95 p-2 shadow-2xl shadow-cyan-950/30">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search modules, capabilities, or features"
                className="h-14 w-full rounded-xl border-0 bg-transparent pl-12 pr-4 text-base text-slate-900 outline-none placeholder:text-slate-500"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12 font-['Plus_Jakarta_Sans']">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/40 dark:hover:bg-white/10"
            >
              <link.icon className="h-5 w-5 text-cyan-600 dark:text-cyan-200" />
              <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{link.label}</span>
              <ExternalLink className="ml-auto h-4 w-4 text-slate-400 transition group-hover:text-cyan-600 dark:group-hover:text-cyan-100" />
            </a>
          ))}
        </section>

        <section className="mt-12">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Modules</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {filteredModules.length} of {d365Modules.length} modules match your search.
              </p>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Each module page includes client value, usage scenarios, deeper capability sections, and
              a JSON export for quick handoff or reuse.
            </p>
          </div>

          {filteredModules.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center text-slate-500 dark:border-white/15 dark:bg-white/[0.03] dark:text-slate-400">
              No modules match your search right now.
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredModules.map((module) => (
                <article
                  key={module.slug}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:border-cyan-300 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20 dark:hover:border-cyan-300/40"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div className={`rounded-2xl p-3 ${module.color}`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <Link
                        to={`/module/${module.slug}`}
                        className="block text-lg font-semibold leading-tight text-slate-900 transition hover:text-cyan-700 dark:text-white dark:hover:text-cyan-100 md:text-xl"
                      >
                        {module.title}
                      </Link>
                      <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {module.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{module.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {module.sections.map((section) => (
                      <Link
                        key={section.slug}
                        to={`/module/${module.slug}#${section.slug}`}
                        className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 transition hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:text-slate-200 dark:hover:border-cyan-300/50 dark:hover:text-cyan-100"
                      >
                        {section.title}
                      </Link>
                    ))}
                  </div>

                  <Link
                    to={`/module/${module.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:gap-3 hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100"
                  >
                    Open module page
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
