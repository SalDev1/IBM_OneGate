import { Routes, Route, NavLink, Link } from "react-router-dom";

import PageFeatures from "./pages/features";
import Contact from "./pages/contact";
import AppShell from "./shell";

export default function AppRoute() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<PageFeatures />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppShell>
  );
}
