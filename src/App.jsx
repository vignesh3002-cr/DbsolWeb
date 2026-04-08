import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.jsx";
import Contact from "./pages/Contact";
import FinanceOperations from "./pages/services/Finanace-operation";
import Dynamics365Business from "./pages/services/Dynamics365Business";
import WebDevelopment from "./pages/services/Webdevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import ITITES from "./pages/industries/IT&ITES";
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
import ContactExperts from "./pages/expert.jsx";
import CaseStudies from "./pages/CaseStudy";
import CaseStudyDetail from "./pages/CaseStudiesDetail";
import ScrollToTop from "./components/ScrollToTop";
import CareerForm from "./components/Careers_Form.jsx";
 function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutUs" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/finance-operation" element={<FinanceOperations/>}></Route>
      <Route path="/Dynamics365Business" element={<Dynamics365Business/>}></Route>
      <Route path="/Webdevelopment" element={<WebDevelopment/>}></Route>
      <Route path="/MobileAppDevelopment" element={<MobileAppDevelopment/>}></Route>
      <Route path="/IT.ITES" element={<ITITES/>}></Route>
      <Route path="/Manufacturing" element={<Manufacturing/>}></Route>
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
      <Route path="/ContactPage" element={<ContactPage/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;