import { Routes, Route } from "react-router-dom";

import AppShell from "./shell";
import PageFeatures from "./pages/features";
import Contact from "./pages/contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Forget from "./pages/Forget";
import DashBoard from "./pages/Dashboard";
import Amenity from "./pages/Amenity";
import AboutUs from "./pages/About";
import HelpDeskPage from "./pages/HelpDeskPage";
import ProfilePage from "./pages/MyProfile";

export default function AppRoute() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<PageFeatures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<Forget />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/dashboard/amenities/book-amenity/*"
          element={<Amenity />}
        />
        <Route path="/dashboard/helpdesk" element={<HelpDeskPage />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />
      </Routes>
    </AppShell>
  );
}
