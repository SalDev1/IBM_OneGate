import { Routes, Route } from "react-router-dom";

import PageFeatures from "./pages/features";
import Contact from "./pages/contact";
import AppShell from "./shell";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Forget from "./pages/Forget"
import DashBoard from "./pages/Dashboard";
import Amenity from "./pages/Amenity";

export default function AppRoute() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<PageFeatures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<Forget />} />
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/amenities/book-amenity/*" element={<Amenity />}/>
      </Routes>
    </AppShell>
  );
}
