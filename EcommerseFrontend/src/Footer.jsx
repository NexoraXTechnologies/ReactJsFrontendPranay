import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            NexoraX Store
          </h2>
          <p className="text-sm">
            Your one-stop destination for the latest fashion, electronics, and lifestyle products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white">Products</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white">Cart</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white">Login</Link>
            </li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Help & Support</li>
            <li>Returns & Refunds</li>
            <li>Shipping Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <p className="text-sm">Email: info@nexoraxtechnologies.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <p className="text-sm">Nagpur, India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} NexoraX Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;