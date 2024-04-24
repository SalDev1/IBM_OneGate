import { Link } from "react-router-dom";

export default function PageHome() {
  return <div className="flex p-5 items-center bg-white shadow-xl justify-between">
    <h1>Hello, World!</h1>
    <div className="flex gap-4">
      <Link className="font-medium text-blue-700 hover:text-blue-500" to="/features">Features</Link>
      <Link className="font-medium text-blue-700 hover:text-blue-500" to="/contact">Contact Us</Link>
    </div>
  </div>
}
