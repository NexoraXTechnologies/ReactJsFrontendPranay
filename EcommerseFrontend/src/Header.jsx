import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          NexoraX Store
        </h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;