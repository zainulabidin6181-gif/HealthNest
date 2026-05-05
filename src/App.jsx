import { Routes, Route } from "react-router-dom";

import ServicesPage from "./pages/services/ServicesPage";
import Navbar from "./layout/header/Header";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import Footer from "./layout/footer/Footer";
import DepartmentPage from "./pages/department/DepartmentPage";
import DoctorsPage from "./pages/doctors/DoctorsPage";
import ContactPages from "./pages/contact/ContactPages";
import ScrollToTop from "./component/scroll-top/ScrollToTop";
import RobotChatBox from "./component/robot/RobotChatBox";

function App() {
  return (
    <div className="dark:bg-gray-950">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/contact" element={<ContactPages  />} />
      </Routes>
      <Footer />
      <RobotChatBox />
    </div>
  );
}

export default App;
