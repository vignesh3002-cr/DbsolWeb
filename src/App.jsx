import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/Company";
import Contact from "./pages/Contact";

import PowerPlatformSolutions from "./pages/services/PowerPlatformSolutions";
import ModulesHub from "./pages/ModulesHub";
import ModuleDetail from "./pages/ModuleDetail";
import BusinessCentral from "./pages/services/BusinessCentral";
import CustomerEngagement from "./pages/services/CustomerEngagement";
import BPage from "./pages/services/BusinessConsulting";
import FinanceOperations from "./pages/services/FinanceOperations";
import Dynamics365Business from "./pages/services/Dynamics365Business";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import ServicePage from "./components/Delivering_Tailored_Solutions";

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

import ContactExperts from "./pages/expert";
import CaseStudies from "./pages/CaseStudy";
import CaseStudyDetail from "./pages/CaseStudiesDetail";
import Careers from "./pages/AboutUs/Careers";
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

import SecurityPrivacy from "./pages/LearnWithUs/SecurityPrivacy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
   \

        <Route
          path="/power-platform-solutions"
          element={<PowerPlatformSolutions />}
        />
        <Route
          path="/power-automate"
          element={<Navigate to="/power-platform-solutions" replace />}
        />

        <Route path="/modules" element={<ModulesHub />} />
       
        <Route path="/modules/:slug" element={<ModuleDetail />} />

        <Route path="/BusinessCentral" element={<BusinessCentral />} />
        <Route path="/CustomerEngagement" element={<CustomerEngagement />} />
        <Route path="/BusinessConsulting" element={<BPage />} />
        <Route path="/finance-operation" element={<FinanceOperations />} />
        <Route path="/Dynamics365Business" element={<Dynamics365Business />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment />} />
        <Route path="/services/:slug" element={<ServicePage />} />

        <Route path="/IT-ITES" element={<ITITES />} />
        <Route path="/Manufacturing" element={<Manufacturing />} />
        <Route path="/Retail-Wholesale" element={<RetailWholesale />} />
        <Route
          path="/LogisticsSupplyChain"
          element={<LogisticsSupplyChain />}
        />
        <Route path="/FinanceBanking" element={<FinanceBanking />} />
        <Route path="/HealthCare" element={<Healthcare />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Hospitality" element={<Hospitality />} />
        <Route
          path="/ProfessionalServices"
          element={<ProfessionalServices />}
        />

        <Route
          path="/FinancialManagementSystem"
          element={<FinancialManagementSystem />}
        />
        <Route
          path="/HumanResourceManagementSystem"
          element={<HumanResourceManagementSystem />}
        />
        <Route path="/SCMS" element={<SupplyChainManagementSystem />} />
        <Route path="/WMS" element={<WarehouseManagementSystem />} />
        <Route path="/IMS" element={<InventoryManagementSystem />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/ContactExperts" element={<ContactExperts />} />
        <Route path="/CaseStudies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
      

        <Route path="/news" element={<NewsPage />} />
        <Route path="/Globe" element={<GlobePage />} />
        <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
        <Route path="/CompanyStats" element={<CompanyStats />} />
        <Route path="/security-privacy" element={<SecurityPrivacy />} />

        <Route path="/emp-portal" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/apply-leave" element={<ApplyLeave />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-master" element={<EmployeeMaster />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path="/employee-details" element={<EmployeeDetails />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;