import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { d365Modules } from "../data/d365Modules";

const quickLinks = [
  {
    label: "What's New",
    href: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/fin-ops/get-started/whats-new-home-page",
  },
  {
    label: "Admin Guide",
    href: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/sysadmin/system-administration-home-page",
  },
  {
    label: "Developer Reference",
    href: "https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/dev-tools/developer-home-page",
  },
];

export default function Modules() {
  const featuredModules = d365Modules.slice(0, 6);

  return (
    <section className="bg-white py-20 font-['Plus_Jakarta_Sans'] text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200">
              Dynamics 365 Reference
            </span>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Explore export-ready Dynamics module pages
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Browse detailed module pages, jump into official Microsoft Learn resources,
              and explore structured module data.
            </p>
          </div>

          <Link
            to="/modules"
            className="inline-flex items-center gap-2 self-start rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Open full documentation hub
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-300/50 dark:hover:bg-white/10"
            >
              <span>{link.label}</span>

              {/* Hover icon */}
              <ExternalLink className="h-4 w-4 text-cyan-600 opacity-0 group-hover:opacity-100 transition" />
            </a>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {featuredModules.map((mod) => (
            <article
              key={mod.slug}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-black/20"
            >
              {/* Top */}
              <div className="mb-4 flex items-start gap-4">
                <div className={`rounded-2xl p-3 ${mod.color}`}>
                  <mod.icon className="h-6 w-6" />
                </div>

                <div>
                  <Link
                    to={`/module/${mod.slug}`}
                    className="block text-lg font-semibold hover:text-cyan-700"
                  >
                    {mod.title}
                  </Link>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {mod.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mb-5 text-sm text-slate-600 dark:text-slate-300">
                {mod.description}
              </p>

              {/* Sections */}
              <div className="mb-6 flex flex-wrap gap-2">
                {mod.sections.slice(0, 4).map((section) => (
                  <Link
                    key={section.slug}
                    to={`/module/${mod.slug}#${section.slug}`}
                    className="rounded-full border px-3 py-1 text-xs hover:border-cyan-300 hover:text-cyan-700"
                  >
                    {section.title}
                  </Link>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-auto flex items-center justify-between">

                <Link
                  to={`/module/${mod.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:gap-3"
                >
                  Open module
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* External docs button */}
                <button
                  onClick={() => window.open(mod.docHref, "_blank")}
                  className="text-xs text-gray-500 hover:text-cyan-600 flex items-center gap-1"
                >
                  Docs
                  <ExternalLink className="w-3 h-3" />
                </button>

              </div>
            </article>
          ))}

          {/* ✅ SHOW MORE CARD */}
          <Link
            to="/modules"
            className="flex h-1/6 w-full mt-10 items-center justify-center  rounded-3xl border-2 ring-offset-border-soft border-cyan-100 bg-cyan-50 p-6 text-center transition hover:bg-cyan-100 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:hover:bg-cyan-400/20"
          >
              <div className="mt-2 flex items-center justify-center gap-2 text-sm text-cyan-600">
                Show All Modules
                <ArrowRight className="w-4 h-4" />
              </div>
          </Link>

        </div>
      </div>
    </section>
  );
}