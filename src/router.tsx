import { Routes, Route } from "react-router-dom";

import PageFeatures from "./pages/features";
import  BackgroundImage from "./pages/home";
import App from "./App";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/home" element={<App/>} />
      <Route path="/features" element={<PageFeatures />} />
    </Routes>
  );
}
