import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/home";
import PageFeatures from "./pages/features";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/features" element={<PageFeatures />} />
    </Routes>
  );
}
