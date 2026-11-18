import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/Company";
import Careers from "./pages/AboutUs/Careers";
import CareerForm from "./components/Careers_Form";
import JobDescription from "./components/Jobdescription";
import BPage from "./pages/services/BusinessConsulting";
import Dynamics365Business from "./pages/services/Dynamics365Business";
import BusinessCentral from "./pages/services/BusinessCentral";
import ModulesHub from "./pages/ModulesHub";
import ModuleDetail from "./pages/ModuleDetail";
import FinanceOperations from "./pages/services/FinanceOperations";
import CustomerEngagement from "./pages/services/CustomerEngagement";
import PowerPlatformSolutions from "./pages/services/PowerPlatformSolutions";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import Contact from "./pages/Contact";


import ServicePage from "./components/Delivering_Tailored_Solutions";
import CTASection from "./components/Ctasection";
import ITITES from "./pages/industries/ITITES";
import Manufacturing from "./pages/industries/Manufacturing";
import RetailWholesale from "./pages/industries/RetailWholeSale";
import LogisticsSupplyChain from "./pages/industries/LogisticsSupplyChain";
import FinanceBanking from "./pages/industries/Finance";
import Healthcare from "./pages/industries/HealthCare";
import Education from "./pages/industries/Education";
import Hospitality from "./pages/industries/Hospitality";
import ProfessionalServices from "./pages/industries/ProfessionalServices";

import FinancialManagementSystem from "./pages/solutions/FinancialManagementSystem";
import HumanResourceManagementSystem from "./pages/solutions/HumanResourceManagementSystem";
import SupplyChainManagementSystem from "./pages/solutions/SCMS";
import WarehouseManagementSystem from "./pages/solutions/WMS";
import InventoryManagementSystem from "./pages/solutions/IMS";


import CaseStudies from "./pages/CaseStudy";
import CaseStudyDetail from "./pages/CaseStudiesDetail";
import GlobePage from "./components/Globepage";
import NewsPage from "./components/NewsPage";
import WhyChooseUs from "./components/WhyChooseUs";
import CompanyStats from "./components/CompanyStats";
import ScrollToTop from "./components/ScrollToTop";

import AdminDashboard from "./pages/emp/AdminDashboard";
import ApplyLeave from "./pages/emp/ApplyLeave";
import Dashboard from "./pages/emp/Dashboard";
import Login from "./pages/emp/Login";
import EmployeeMaster from "./pages/emp/EmployeeMaster";
import EmployeeForm from "./pages/emp/EmployeeForm";
import EmployeeDetails from "./pages/emp/EmployeeDetails";

import SecurityPrivacy from "./pages/Insights & Resources/SecurityPrivacy";
import ResourceLibraryPage from "./pages/Insights & Resources/ResourceLibraryPage";
import BlogIndex from "./pages/BlogIndex";
import BlogArticle from "./pages/BlogArticle";

const siteUrl = "https://www.dbsoltechnologies.com";
const pageTitles = {
  "/": "Dynamics 365 F&O Implementation Partner | DBSol Technologies",
  "/about-us/": "About Us | DBSol Technologies",
  "/contact-us/": "Contact Us | DBSol Technologies",
  "/power-platform-solutions/": "Power Platform Solutions | DBSol Technologies",
  "/modules/": "Dynamics 365 Modules | DBSol Technologies",
  "/cta-section/": "Get Started | DBSol Technologies",
  "/business-central/": "Dynamics 365 Business Central Partner | DBSol",
  "/customer-engagement/": "Customer Engagement | DBSol Technologies",
  "/business-consulting/": "Business Consulting | DBSol Technologies",
  "/finance-operation/": "Finance & Operations | DBSol Technologies",
  "/dynamics-365-business/": "Dynamics 365 Business Solutions | DBSol Technologies",
  "/web-development/": "Web Development | DBSol Technologies",
  "/mobile-app-development/": "Mobile App Development | DBSol Technologies",
  "/industries/it-ites/": "IT & ITES | DBSol Technologies",
  "/industries/manufacturing/": "Dynamics 365 for Manufacturing ERP | DBSol",
  "/industries/retail-wholesale/": "Retail & Wholesale | DBSol Technologies",
  "/industries/logistics-supply-chain/": "D365 for Logistics & Supply Chain | DBSol",
  "/industries/banking-finance/": "Dynamics 365 for Banking & Finance | DBSol",
  "/industries/healthcare/": "Dynamics 365 for Healthcare Organisations | DBSol Technologies",
  "/industries/education/": "Education | DBSol Technologies",
  "/industries/hospitality/": "Hospitality | DBSol Technologies",
  "/industries/professional-services/": "Professional Services | DBSol Technologies",
  "/solutions/financial-management-system/": "Financial Management System | DBSol Technologies",
  "/solutions/human-resource-management-system/": "Human Resource Management System | DBSol Technologies",
  "/solutions/supply-chain-management-system/": "Supply Chain Management System | DBSol Technologies",
  "/solutions/warehouse-management-system/": "Warehouse Management System | DBSol Technologies",
  "/solutions/inventory-management-system/": "Inventory Management System | DBSol Technologies",
  "/careers/": "Careers | DBSol Technologies",
  "/careers/apply/": "Apply for a Career | DBSol Technologies",
  "/case-studies/": "Case Studies | DBSol Technologies",
  "/news/": "News | DBSol Technologies",
  "/globe/": "Global Presence | DBSol Technologies",
  "/why-choose-us/": "Why Choose DBSol | DBSol Technologies",
  "/company-stats/": "Company Statistics | DBSol Technologies",
  "/security-privacy/": "Security & Privacy | DBSol Technologies",
  "/knowledge-and-resources/": "Knowledge & Resources | DBSol Technologies",
  "/blogs/": "Dynamics 365 ERP Insights | DBSol Technologies",
  "/employee-portal/": "Employee Portal | DBSol Technologies",
  "/admin-dashboard/": "Admin Dashboard | DBSol Technologies",
  "/apply-leave/": "Apply for Leave | DBSol Technologies",
  "/dashboard/": "Employee Dashboard | DBSol Technologies",
  "/employee-master/": "Employee Master | DBSol Technologies",
  "/employee-form/": "Employee Form | DBSol Technologies",
  "/employee-details/": "Employee Details | DBSol Technologies",
};
const pageDescriptions = {
  "/blogs/": "Practical guidance on Dynamics 365 selection, ERP migration, implementation costs, manufacturing, and healthcare operations.",
  "/business-central/": "Dynamics 365 Business Central implementation, migration and support for growing businesses. Get expert ERP consulting from DBSol.",
  "/industries/healthcare/": "Explore healthcare ERP solutions from DBSol. Connect financial management, procurement, inventory and operational workflows with Microsoft Dynamics 365.",
  "/industries/logistics-supply-chain/": "Improve visibility across warehousing, transport and procurement with Microsoft Dynamics 365 Supply Chain solutions.",
  "/industries/manufacturing/": "Connect production planning, inventory, costing and shop-floor operations with Dynamics 365 ERP for manufacturers.",
  "/industries/banking-finance/": "Streamline financial reporting, compliance and operations with Microsoft Dynamics 365 solutions for financial organisations.",
};

const breadcrumbLabels = {
  "/": "Home",
  "/about-us/": "About Us",
  "/contact-us/": "Contact Us",
  "/power-platform-solutions/": "Power Platform Solutions",
  "/modules/": "Modules",
  "/business-central/": "Business Central",
  "/customer-engagement/": "Customer Engagement",
  "/business-consulting/": "Business Consulting",
  "/finance-operation/": "Finance & Operations",
  "/dynamics-365-business/": "Dynamics 365 Business",
  "/web-development/": "Web Development",
  "/mobile-app-development/": "Mobile App Development",
  "/industries/it-ites/": "IT & ITES",
  "/industries/manufacturing/": "Manufacturing",
  "/industries/retail-wholesale/": "Retail & Wholesale",
  "/industries/logistics-supply-chain/": "Logistics & Supply Chain",
  "/industries/banking-finance/": "Banking & Finance",
  "/industries/healthcare/": "Healthcare",
  "/industries/education/": "Education",
  "/industries/hospitality/": "Hospitality",
  "/industries/professional-services/": "Professional Services",
  "/solutions/financial-management-system/": "Financial Management System",
  "/solutions/human-resource-management-system/": "Human Resource Management System",
  "/solutions/supply-chain-management-system/": "Supply Chain Management System",
  "/solutions/warehouse-management-system/": "Warehouse Management System",
  "/solutions/inventory-management-system/": "Inventory Management System",
  "/careers/": "Careers",
  "/careers/apply/": "Career Application",
  "/case-studies/": "Case Studies",
  "/news/": "News",
  "/globe/": "Global Presence",
  "/why-choose-us/": "Why Choose DBSol",
  "/company-stats/": "Company Statistics",
  "/security-privacy/": "Security & Privacy",
  "/knowledge-and-resources/": "Knowledge & Resources",
  "/blogs/": "Blogs & Insights",
  "/employee-portal/": "Employee Portal",
  "/admin-dashboard/": "Admin Dashboard",
  "/apply-leave/": "Apply for Leave",
  "/dashboard/": "Employee Dashboard",
  "/employee-master/": "Employee Master",
  "/employee-form/": "Employee Form",
  "/employee-details/": "Employee Details",
};

function PageMetadata() {
  const { pathname } = useLocation();
  const canonicalPath = pathname.toLowerCase() === "/"
    ? "/"
    : `${pathname.toLowerCase().replace(/\/+$/, "")}/`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const pageName = canonicalPath
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
  const title = pageTitles[canonicalPath]
    ?? `${pageName ?? "DBSol Technologies"} | DBSol Technologies`;
  const description = pageDescriptions[canonicalPath]
    ?? "DBSol Technologies delivers Dynamics 365 F&O implementation, migration and support to help businesses modernise ERP and streamline operations. Talk to our experts.";

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DBSol Technologies" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/images/DBSOL_Logo.jpg`} />
      <meta property="og:image:alt" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DBSolTech" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/images/DBSOL_Logo.jpg`} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
}

function SiteBreadcrumbStructuredData() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = [{ label: "Home", path: "/" }];
  let currentPath = "";

  segments.forEach((segment) => {
    currentPath += `/${segment}`;
    const fullPath = `${currentPath}/`;

    crumbs.push({
      label: breadcrumbLabels[fullPath] ?? segment.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
      path: fullPath,
    });
  });

  const schemaBreadcrumbs = crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.label,
    item: `${siteUrl}${crumb.path}`,
  }));

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: schemaBreadcrumbs,
          })}
        </script>
      </Helmet>
    </>
  );
}

function SiteStructuredData() {
  const { pathname } = useLocation();
  const canonicalPath = pathname.toLowerCase() === "/"
    ? "/"
    : `${pathname.toLowerCase().replace(/\/+$/, "")}/`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DBSol Technologies",
    url: siteUrl,
    logo: `${siteUrl}/favicon.png?v=2`,
    description: "DBSol Technologies delivers Microsoft Dynamics 365 implementation, consulting, ERP, Power Platform and digital transformation services.",
    sameAs: [
      "https://www.linkedin.com/company/dbsol-technologies-private-limited/",
      "https://www.microsoft.com/en-us/partner",
    ],
    contactPoint: [{
      "@type": "ContactPoint",
      contactType: "sales",
      email: "aravinth.p@dbsoltechnologies.com",
      areaServed: "IN",
      availableLanguage: ["English"],
    }],
    address: {
      "@type": "PostalAddress",
      streetAddress: "VP Chindhan Ave, Senthil Nagar, Urapakkam",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "603210",
      addressCountry: "IN",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DBSol Technologies",
    url: siteUrl,
    inLanguage: "en",
    about: {
      "@type": "Organization",
      name: "DBSol Technologies",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "DBSol Technologies",
      url: siteUrl,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const servicePages = [
    "/business-central/",
    "/finance-operation/",
    "/power-platform-solutions/",
    "/industries/logistics-supply-chain/",
    "/industries/banking-finance/",
    "/industries/manufacturing/",
    "/industries/healthcare/",
  ];

  const serviceSchema = servicePages.includes(canonicalPath)
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: pageTitles[canonicalPath]?.replace(/ \| DBSol Technologies$/, "") || "DBSol Technologies Service",
        provider: {
          "@type": "Organization",
          name: "DBSol Technologies",
          url: siteUrl,
        },
        areaServed: "Worldwide",
        url: `${siteUrl}${canonicalPath}`,
        description: pageDescriptions[canonicalPath] || "DBSol Technologies delivers Microsoft Dynamics 365 implementation and digital transformation services.",
      }
    : null;

  const structuredData = [organizationSchema, websiteSchema, ...(serviceSchema ? [serviceSchema] : [])];

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PageMetadata />
      <SiteStructuredData />
      <SiteBreadcrumbStructuredData />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/" element={<AboutUs />} />
        <Route path="/contact-us/" element={<Contact />} />
   

        <Route
          path="/power-platform-solutions/"
          element={<PowerPlatformSolutions />}
        />
        <Route
          path="/power-automate/"
          element={<Navigate to="/power-platform-solutions/" replace />}
        />

        <Route path="/modules/" element={<ModulesHub />} />
        <Route path="/cta-section/" element={<CTASection />} />
        <Route path="/modules/:slug/" element={<ModuleDetail />} />

        <Route path="/business-central/" element={<BusinessCentral />} />
        <Route path="/customer-engagement/" element={<CustomerEngagement />} />
        <Route path="/business-consulting/" element={<BPage />} />
        <Route path="/finance-operation/" element={<FinanceOperations />} />
        <Route path="/dynamics-365-business/" element={<Dynamics365Business />} />
        <Route path="/web-development/" element={<WebDevelopment />} />
        <Route path="/mobile-app-development/" element={<MobileAppDevelopment />} />
        <Route path="/services/:slug/" element={<ServicePage />} />

        <Route path="/industries/it-ites/" element={<ITITES />} />
        <Route path="/industries/manufacturing/" element={<Manufacturing />} />
        <Route path="/industries/retail-wholesale/" element={<RetailWholesale />} />
        <Route
          path="/industries/logistics-supply-chain/"
          element={<LogisticsSupplyChain />}
        />
        <Route
          path="/industries/banking-finance/"
          element={<FinanceBanking />}
        />
        <Route path="/industries/healthcare/" element={<Healthcare />} />
        <Route path="/industries/education/" element={<Education />} />
        <Route path="/industries/hospitality/" element={<Hospitality />} />
        <Route
          path="/industries/professional-services/"
          element={<ProfessionalServices />}
        />

        <Route
          path="/solutions/financial-management-system/"
          element={<FinancialManagementSystem />}
        />
        <Route
          path="/solutions/human-resource-management-system/"
          element={<HumanResourceManagementSystem />}
        />
        <Route
          path="/solutions/supply-chain-management-system/"
          element={<SupplyChainManagementSystem />}
        />
        <Route
          path="/solutions/warehouse-management-system/"
          element={<WarehouseManagementSystem />}
        />
        <Route
          path="/solutions/inventory-management-system/"
          element={<InventoryManagementSystem />}
        />

        <Route path="/careers/" element={<Careers />} />
        <Route path="/careers/apply/" element={<CareerForm />} />
        <Route path="/jobs/:id/" element={<JobDescription />} />
       
        <Route path="/case-studies/" element={<CaseStudies />} />
        <Route path="/case-studies/:id/" element={<CaseStudyDetail />} />
      

        <Route path="/news/" element={<NewsPage />} />
        <Route path="/globe/" element={<GlobePage />} />
        <Route path="/why-choose-us/" element={<WhyChooseUs />} />
        <Route path="/company-stats/" element={<CompanyStats />} />
        <Route path="/security-privacy/" element={<SecurityPrivacy />} />
        <Route path="/knowledge-and-resources/" element={<ResourceLibraryPage />} />
        <Route path="/blogs/" element={<BlogIndex />} />
        <Route path="/blogs/:slug/" element={<BlogArticle />} />
    
        <Route path="/employee-portal/" element={<Login />} />
        <Route path="/admin-dashboard/" element={<AdminDashboard />} />
        <Route path="/apply-leave/" element={<ApplyLeave />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/employee-master/" element={<EmployeeMaster />} />
        <Route path="/employee-form/" element={<EmployeeForm />} />
        <Route path="/employee-details/" element={<EmployeeDetails />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
