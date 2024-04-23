import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/home";
import PageFeatures from "./pages/features";
import Contact from "./pages/contact";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/features" element={<PageFeatures />} />
      <Route path="/contact" element={<Contact/>}/ >
    </Routes>
  );
}
