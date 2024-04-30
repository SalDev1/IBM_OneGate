import AmenitySelect from "./AmenitySelect";
import { Route, Routes } from "react-router-dom";
import AmenityDate from "./AmenityDate";
import AmenityTime from "./AmenityTime";
import DSideBar from "../components/DSideBar";

export default function Amenity() {
  return (
    <div>  
        <Routes>
            <Route path="/" element={<AmenitySelect/>} />
            <Route path="/" element={<DSideBar/>} />
            <Route path="/book-amenity-date" element={<AmenityDate/>} />
            <Route path="/book-amenity-time" element={<AmenityTime/>} />
        </Routes>
    </div>

)
}
