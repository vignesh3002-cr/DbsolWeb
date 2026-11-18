import { FaFacebookF, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logoDark from "../assets/Dbsol logo.dark.png";

const linkGroups = [
  {
    title: "Solutions",
    links: [
      { label: "Dynamics 365 Finance & Operations", to: "/finance-operation/" },
      { label: "Dynamics 365 Business Central", to: "/business-central/" },
      { label: "Dynamics 365 Business", to: "/dynamics-365-business/" },
      { label: "Power Platform Solutions", to: "/power-platform-solutions/" },
      { label: "ERP Implementation & Support", to: "/contact-us/" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", to: "/industries/healthcare/" },
      { label: "Manufacturing", to: "/industries/manufacturing/" },
      { label: "Logistics & Supply Chain", to: "/industries/logistics-supply-chain/" },
      { label: "Banking & Finance", to: "/industries/banking-finance/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about-us/" },
      { label: "Why Choose DBSol", to: "/why-choose-us/" },
      { label: "Careers", to: "/careers/" },
      { label: "Contact Us", to: "/contact-us/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", to: "/case-studies/" },
      { label: "Blogs & Insights", to: "/blogs/" },
      { label: "Knowledge & Resources", to: "/knowledge-and-resources/" },
      { label: "News", to: "/news/" },
      { label: "Security & Privacy", to: "/security-privacy/" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com", Icon: FaFacebookF, hover: "hover:bg-blue-600" },
  { label: "Twitter", href: "https://www.twitter.com", Icon: FaTwitter, hover: "hover:bg-sky-500" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dbsol-technologies-private-limited/",
    Icon: FaLinkedinIn,
    hover: "hover:bg-blue-700",
  },
];

const faqs = [
  {
    q: "Why choose Dynamics 365?",
    a: "Dynamics 365 connects business processes and data in one flexible platform, helping teams work more efficiently and make informed decisions.",
  },
  {
    q: "How long does implementation take?",
    a: "Timelines depend on your project scope, integrations, data, and customizations. We can provide a clearer estimate after learning about your requirements.",
  },
  {
    q: "What industries do you support?",
    a: "We work with organizations in finance, healthcare, education, manufacturing, retail, logistics, hospitality, and professional services.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. Contact our team to discuss post-launch assistance, training, and ongoing improvements for your solution.",
  },
];

const linkClass = "transition-colors hover:text-blue-400";
const headingClass = "mb-2.5 text-sm font-semibold uppercase tracking-wider text-white";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-4">
        {/* Row 1: brand + link columns */}
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-[1.5fr_1.2fr_1fr_1fr_1fr]">
          <div>
            {/* Logo PNG has transparent padding; negative margins pull it up to line up with the column headings */}
            <img
              src={logoDark}
              alt="DBSol Technologies"
              className="-ml-3 -mt-7 -mb-3 h-24 w-auto object-contain"
            />

            <p className="max-w-sm text-sm leading-6 text-gray-400">
              Enterprise digital transformation with Dynamics 365 Finance &amp; Operations, business
              consulting, customer engagement, and web and cross-platform mobile apps.
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt=""
                className="h-4 w-4"
              />
              <a
                href="https://www.microsoft.com/en-us/partner"
                target="_blank"
                rel="noreferrer"
                className={linkClass}
              >
                Microsoft Partner
              </a>
            </div>

            <div className="mt-3 flex gap-2">
              {socials.map(({ label, href, Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`rounded-md bg-gray-800 p-2.5 text-sm transition ${hover}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h3 className={headingClass}>{title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {links.map((link) => (
                  <li key={link.to + link.label}>
                    <NavLink to={link.to} className={linkClass}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Row 2: FAQ + contact */}
        <div className="mt-6 grid gap-6 border-t border-gray-800 pt-5 lg:grid-cols-[2fr_1fr]">
          <section aria-labelledby="footer-faq-heading">
            <h2 id="footer-faq-heading" className={headingClass}>
              Frequently Asked Questions
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group rounded-lg border border-gray-800 p-3 open:border-gray-600">
                  <summary className="cursor-pointer list-none text-sm font-medium text-gray-200 marker:hidden">
                    {q}
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-gray-400">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <section aria-labelledby="footer-contact-heading">
            <h2 id="footer-contact-heading" className={headingClass}>
              Contact
            </h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:aravinth.p@dbsoltechnologies.com" className={linkClass}>
                  ✉ aravinth.p@dbsoltechnologies.com
                </a>
              </li>
              <li>
                <a href="tel:+918667498131" className={linkClass}>
                  📞 +91 8667498131
                </a>
              </li>
              <li>📍 VP Chindhan Ave, Chennai, Tamil Nadu, India</li>
            </ul>

            <div className="mt-3 overflow-hidden rounded-lg">
              <iframe
                title="DBSol Technologies location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332101.68832345324!2d79.94720254802596!3d13.008628940473582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f638bae20f87%3A0x6e87491d6d266f6!2sVP%20Chindhan%20Ave%2C%20Senthil%20Nagar%2C%20Urapakkam%2C%20Tamil%20Nadu%20603210!5e0!3m2!1sen!2sin!4v1774953009145!5m2!1sen!2sin"
                className="h-28 w-full border-0"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-6 py-2 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} DBSol Technologies Pvt Ltd. All rights reserved.</p>
          <p>Designed &amp; developed by DBSol Team</p>
        </div>
      </div>

      <motion.button
        onClick={scrollTop}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-600 p-3 text-white shadow-lg hover:bg-blue-700"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
}
