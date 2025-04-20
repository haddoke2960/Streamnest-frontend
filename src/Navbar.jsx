import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">StreamNest</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </div>
    </nav>
  );
}