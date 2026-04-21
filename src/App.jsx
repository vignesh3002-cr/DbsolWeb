import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PowerAutomate from "./pages/services/Powerplatform/power-automate";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BPage from "./pages/services/BusinessConsulting";
import NewsPage from "./components/NewsPage";
import FinanceOperations from "./pages/services/FinanceOperations";
import Dynamics365Business from "./pages/services/Dynamics365Business";
import WebDevelopment from "./pages/services/Webdevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import ITITES from "./pages/industries/IT&ITES";
import ServicePage from "./components/Delivering_Tailored_Solutions";
import Manufacturing from "./pages/industries/Manufacturing";
import RetailWholesale from "./pages/industries/Retail&WholeSale";
import LogisticsSupplyChain from "./pages/industries/LogisticsSupplyChain";
import FinanceBanking from "./pages/industries/Finance";
import Healthcare from "./pages/industries/HealthCare";
import Education from "./pages/industries/Education";
import Hospitality from "./pages/industries/Hospitality";
import ProfessionalServices from "./pages/industries/ProfessionalServices";
import FinancialManagementSystem from "./pages/solutions/financialManagementSystem";
import HumanResourceManagementSystem from "./pages/solutions/HumanResourceManagementSystem";
import SupplyChainManagementSystem from "./pages/solutions/SCMS";
import WarehouseManagementSystem from "./pages/solutions/WMS";
import InventoryManagementSystem from "./pages/solutions/IMS";
import Careers from "./pages/Careers";
import ContactExperts from "./pages/expert";
import CaseStudies from "./pages/CaseStudy";
import CaseStudyDetail from "./pages/CaseStudiesDetail";
import ScrollToTop from "./components/ScrollToTop";
import CareerForm from "./components/Careers_Form";
import GlobePage from "./components/Globepage";
 function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutUs" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/power-automate" element={<PowerAutomate/>}></Route>
      <Route path="/BusinessConsulting" element={<BPage/>}></Route>
      <Route path="/finance-operation" element={<FinanceOperations/>}></Route>
      <Route path="/Dynamics365Business" element={<Dynamics365Business/>}></Route>
      <Route path="/WebDevelopment" element={<WebDevelopment/>}></Route>
      <Route path="/services/:slug" element={<ServicePage />} />
      <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment/>}></Route>
      <Route path="/IT.ITES" element={<ITITES/>}></Route>
      <Route path="/Manufacturing" element={<Manufacturing/>}></Route>
      <Route path="/news" element={<NewsPage />} />
      <Route path="/Globe" element={<GlobePage/>} />
      <Route path="/Retail&Wholesale" element={<RetailWholesale/>}></Route>
      <Route path="/LogisticsSupplyChain" element={<LogisticsSupplyChain/>}></Route>
      <Route path="/FinanceBanking" element={<FinanceBanking/>}></Route>  
      <Route path="/HealthCare" element={<Healthcare/>}></Route>
      <Route path="/Education" element={<Education/>}></Route>
      <Route path="/Hospitality" element={<Hospitality/>}></Route>
      <Route path="/ProfessionalServices" element={<ProfessionalServices/>}></Route>
      <Route path="/FinancialManagementSystem" element={<FinancialManagementSystem/>}></Route>
      <Route path="/HumanResourceManagementSystem" element={<HumanResourceManagementSystem/>}></Route>
      <Route path="/SCMS" element={<SupplyChainManagementSystem/>}></Route>
      <Route path="/WMS" element={<WarehouseManagementSystem/>}></Route>
      <Route path="/IMS" element={<InventoryManagementSystem/>}></Route>
      <Route path="/careers" element={<Careers/>}></Route>
      <Route path="/CaseStudies" element={<CaseStudies/>}></Route>
      <Route path="/case-studies/:id" element={<CaseStudyDetail/>}></Route>
      <Route path="/ContactExperts" element={<ContactExperts/>}></Route>
      <Route path="/CareerForm/" element={<CareerForm/>}></Route>       
      </Routes>

    </BrowserRouter>
  );
}

export default App;
