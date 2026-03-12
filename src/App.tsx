import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/ContactUs";
import About from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;