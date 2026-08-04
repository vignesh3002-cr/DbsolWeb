import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const jobs = [
  {
    id: "sales-executive",
    title: "Sales Executive",
    location: "On-site",
    type: "Full Time",

    about:
      "DBSol Technologies is a Microsoft Dynamics 365 specialist with 18 years of collective implementation and support experience across Finance, Supply Chain, Warehouse Management, and Retail. Based in Chennai, we work with mid-market manufacturers, distributors, and retailers across India and internationally delivering D365 F&O and Business Central implementations, enterprise-wide mobile applications, and AI-powered solutions with an impeccable delivery track record.",

    lookingFor: "What are we looking for?",

    qualifications: [
      "Bachelor's (Required) - Master would be an added advantage",
      "Sales Experience: 1-2 years (Required) Software Sales would be an added advantage",
      "Good Communication skills in English",
      "Go-Getter and quick learner",
      "Positive, professional attitude, passion for selling",
      "Excellent customer handling skills, outgoing, motivational, and friendly",
      "Ability to deal with pressure in meeting sales quota"
    ],

    jobDescriptionTitle: "Job Description",

    roleTitle: "Sales Executive :",

    responsibilitiesTitle: "Responsibilities and Duties",

    responsibilities: [
      "The responsibility of the candidate is to achieve his / her personal agreed monthly sales targets in line with company objectives.",
      "Actively build a network of contacts through prospecting, referrals and calls.",
      "Generate leads through the company's network, online campaigns, calls and events and involve in end-end sales to corporates and communities, following up and leading to the closure.",
      "Responsible to run sales campaigns and reaching out to prospects.",
      "Being a first point of contact to prospects, setting up and Participating in sales Meetings with detailed tracking.",
      "Maintaining and achieving monthly sales targets/forecasts and reporting."
    ],

    jobType: "Full-time",

    jobLocation: "Urappakkam, Chennai",

    payTypes: ["Performance incentive bonus"],

    travel: "As per job demands"
  },
  {
    id: "d365-finance-operations-consultant",
    title: "Dynamics 365 Finance & Operations Consultant",
    location: "On-site",
    type: "Full Time",
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer (React + Node.js)",
    location: "On-site",
    type: "Full Time",
  },
  {
    id: "erp-implementation-specialist",
    title: "ERP Implementation Specialist",
    location: "On-site",
    type: "Full Time",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    location: "On-site",
    type: "Full Time",
  },
];

export default function Jobdescription() {
  const { id } = useParams();
  const { state } = useLocation();

  const job = jobs.find((j) => j.id === id) || state?.job;

  if (!job) {
    return (
      <div className="py-20 text-center">
        Job not found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl p-8 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">

          <h1 className="mb-4 text-4xl font-bold dark:text-white">
            {job.title}
          </h1>

          <p className="mb-8 text-gray-500">
            {job.location} • {job.type}
          </p>

          {job.about && (
            <>
              <h2 className="mb-3 text-2xl font-bold dark:text-white">
                About Us
              </h2>

              <p className="mb-8 leading-8 text-gray-600 dark:text-gray-300">
                {job.about}
              </p>
            </>
          )}

          {job.lookingFor && (
            <h2 className="mb-3 text-2xl font-bold dark:text-white">
              {job.lookingFor}
            </h2>
          )}

          {job.qualifications && (
            <>
              <h2 className="mb-4 text-2xl font-bold dark:text-white">
                Qualifications
              </h2>

              <ul className="mb-8 ml-6 space-y-2 list-disc text-gray-600 dark:text-gray-300">
                {job.qualifications.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </>
          )}

          {job.jobDescriptionTitle && (
            <h2 className="mb-3 text-2xl font-bold dark:text-white">
              {job.jobDescriptionTitle}
            </h2>
          )}

          {job.roleTitle && (
            <h3 className="mb-3 text-xl font-bold dark:text-white">
              {job.roleTitle}
            </h3>
          )}

          {job.responsibilitiesTitle && (
            <h3 className="mb-3 text-lg font-semibold dark:text-white">
              {job.responsibilitiesTitle}
            </h3>
          )}

          {job.responsibilities && (
            <ul className="mb-8 ml-6 space-y-2 list-disc text-gray-600 dark:text-gray-300">
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          )}

          <Link
            to="/CareerForm"
            className="px-8 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Apply for this Job
          </Link>

          <h2 className="mt-10 mb-4 text-2xl font-bold dark:text-white">
            Job Details
          </h2>

          <p className="mb-2 dark:text-gray-300">
            <strong>Job Type:</strong> {job.jobType || job.type}
          </p>

          <p className="mb-2 dark:text-gray-300">
            <strong>Job Location:</strong> {job.jobLocation || job.location}
          </p>

          {job.payTypes && (
            <>
              <p className="mb-2 dark:text-gray-300">
                <strong>Supplemental pay types:</strong>
              </p>

              <ul className="mb-2 ml-6 space-y-1 list-disc text-gray-600 dark:text-gray-300">
                {job.payTypes.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </>
          )}

          <p className="mb-10 dark:text-gray-300">
            <strong>Travel requirement:</strong> {job.travel || "As per job demands"}
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
