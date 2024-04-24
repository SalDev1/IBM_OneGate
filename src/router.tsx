import { Routes, Route } from "react-router-dom";

import PageFeatures from "./pages/features";
import Contact from "./pages/contact";
import PageHome from "./pages/home";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/features" element={<PageFeatures />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
