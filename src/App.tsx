// src/App.tsx

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout"; // Import Layout component
import CallToAction from "./components/CallToAction"; // Import CallToAction component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing
import HowItWorks from "./components/HowItWorks";

// Import the pages for navigation
import PrivacyPolicy from "./pages/PrivacyPolicy";// Assuming you want to navigate to Privacy Policy
import TermsandConditions from "./pages/TermsandConditions";
import GrievanceRedressalPolicy from "./pages/GrievanceRedressalPolicy";
import GetDemo from "./pages/GetDemo";
import AboutUs from "./pages/AboutUs";

// Add other pages if needed like Pricing, About, etc.

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#ffffff] flex justify-center">
        <Layout>
          <Navbar />
          
          {/* Define the routes inside Layout */}
          <Routes>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsandConditions />} />
            <Route path="/grievance" element={<GrievanceRedressalPolicy />} />
            <Route path="/get-demo" element={<GetDemo />} />
            <Route path="/about-us" element={<AboutUs />} />

            
            {/* Add more routes as necessary */}
          </Routes>
          <HowItWorks />
          <CallToAction />
          <Footer />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
