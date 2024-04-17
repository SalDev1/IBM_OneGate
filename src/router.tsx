import { Routes, Route } from "react-router-dom";
import PageHome from "./pages/home";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
    </Routes>
  );
}
