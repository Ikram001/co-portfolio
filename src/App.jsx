import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Layout includes Navbar
import Home from "./assets/pages_temp/Home";
import AboutMe from "./assets/pages_temp/AboutMe";
import Projects from "./assets/pages_temp/Projects";
import ContactMe from "./assets/pages_temp/ContactMe";
import TechStackSection from "./assets/pages_temp/TechStack"; // Import your TechStackSection

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* These pages will all show the Navbar from Layout */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactMe />} />
          {/* Add the Tech Stack route */}
          <Route path="techstack" element={<TechStackSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
