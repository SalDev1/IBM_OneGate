import { Routes, Route } from "react-router-dom";

import PageFeatures from "./pages/features";
import BackgroundImage from "./pages/home";
import Contact from "./pages/contact";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/home" element={<App/>} />
      <Route path="/features" element={<PageFeatures />} />
      <Route path="/contact" element={<Contact/>}/ >
    </Routes>
  );
}
