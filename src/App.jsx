import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
