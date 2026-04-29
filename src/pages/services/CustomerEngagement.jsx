import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  FaBullhorn,
  FaChartLine,
  FaComments,
  FaHandsHelping,
  FaMobileAlt,
  FaUsers,
} from "react-icons/fa";

const pillars = [
  {
    title: "Sales Automation",
    desc: "Track leads, opportunities, and pipelines in one place so your sales team can move faster and stay aligned.",
    icon: <FaChartLine />,
  },
  {
    title: "Customer Service",
    desc: "Give support teams the tools to manage cases, service levels, and issue resolution with more consistency.",
    icon: <FaHandsHelping />,
  },
  {
    title: "Marketing Journeys",
    desc: "Deliver targeted campaigns, segmented communication, and more relevant engagement across channels.",
    icon: <FaBullhorn />,
  },
  {
    title: "Customer Conversations",
    desc: "Create richer, connected conversations across email, forms, chat, and digital touchpoints.",
    icon: <FaComments />,
  },
  {
    title: "Unified Customer View",
    desc: "Bring customer data together so teams can see history, activity, and next best actions in context.",
    icon: <FaUsers />,
  },
  {
    title: "Mobile Ready Access",
    desc: "Support your field and service teams with responsive interfaces that work across devices.",
    icon: <FaMobileAlt />,
  },
];

const engagementFramework = [
  {
    title: "Communication",
    desc: "Share timely updates and keep every customer interaction clear and consistent.",
  },
  {
    title: "Feedback and Surveys",
    desc: "Collect customer opinions and use them to improve services, support, and experience.",
  },
  {
    title: "Loyalty Programs",
    desc: "Encourage repeat business with meaningful rewards and relationship-building offers.",
  },
  {
    title: "Personalization",
    desc: "Tailor journeys, content, and recommendations using customer needs and behavior.",
  },
  {
    title: "Community Building",
    desc: "Create stronger connections through shared spaces, events, and customer advocacy.",
  },
  {
    title: "Responsiveness",
    desc: "Answer questions quickly and resolve issues with clear ownership and follow-through.",
  },
  {
    title: "Omnichannel Experience",
    desc: "Connect email, web, phone, chat, and service touchpoints into one experience.",
  },
  {
    title: "Continuous Improvement",
    desc: "Review engagement data regularly and refine every stage of the customer journey.",
  },
];

export default function CustomerEngagement() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
        <img
          src="/images/CE-IMG.jpg"
          alt="Customer engagement "
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        
          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
            Customer Engagement
          </h1>
         
          <p className="mt-4 text-gray-300">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
            <span className="mx-2">➜</span>
            <span className="text-blue-400">Customer Engagement </span>
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
             <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
              Customer Engagement Strategies
            </h2>
            <p className="mb-4 text-justify  text-gray-600 dark:text-gray-300 ">
            Customer engagement refers to the interactions and relationships between a business 
            and its customers across various touchpoints. It involves creating meaningful experiences
            that foster loyalty and encourage repeat business.
            </p>
            <p className="text-justify text-gray-600 dark:text-gray-300">
               Effective customer engagement enhances the customer experience and drives long-term brand loyalty, 
               ultimately increasing customer lifetime value (CLV) and overall business growth
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-lg dark:bg-gray-800">
            <img
              src="/images/CE-IMG-1.jpg"
              alt="Microsoft Dynamics 365"
              className="h-[360px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
              Customer Engagement Framework
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Strong customer engagement is built through connected practices
              that keep customers heard, supported, and valued across every
              interaction.
            </p>
          </div>

          <div className="grid gap-8 rounded-2xl bg-gray-50 p-5 shadow-sm dark:bg-gray-900 md:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex min-h-[360px] items-center justify-center rounded-xl bg-white p-4 dark:bg-gray-800">
              <img
                src="/images/CE-IMG-2.jpg"
                alt="Customer engagement cycle showing communication, feedback and surveys, loyalty programs, personalization, community building, responsiveness, omnichannel experience, and continuous improvement"
                className="max-h-[500px] w-full rounded-lg object-contain"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-fr">
              {engagementFramework.map((item) => (
                <div
                  key={item.title}
                  className="flex h-full flex-col rounded-xl border border-gray-200 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800/90"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-800 dark:text-white ">
            Core Customer Engagement Capabilities
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600 dark:text-gray-300">
            These capabilities map the website to the way Dynamics 365 Customer Engagement
            is typically used in a real business environment.
          </p>

          <div className="grid gap-6 text-center md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900"
              >
                <div className="mb-4 text-3xl text-blue-600">{item.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="bg-blue-700 px-6 py-16 text-center text-white dark:bg-gray-800">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to build your Customer Engagement website experience?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-blue-100">
          Create a connected, fast, and responsive website that seamlessly supports your Dynamics 365 customer engagement workflows.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </section>

      <Footer />
    </div>
  );
}
