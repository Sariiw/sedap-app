import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-20 pb-10 font-['Rubik']">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-green-500">S</span>edap
          </h2>
          <p className="text-sm text-gray-300">
            Restaurant yang memberikan kenyamanan dari segi pelayanaan dan sedapnya makanan
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <MdPhone className="text-green-500 mt-1" />
              666 888 0000
            </li>
            <li className="flex items-start gap-2">
              <MdMail className="text-green-500 mt-1" />
              info@company.com
            </li>
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-green-500 mt-1" />
              66 top broklyn street. New York
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Top Sellers</li>
            <li>Shopping</li>
            <li>About Store</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>New Products</li>
            <li>My Account</li>
            <li>Support</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-sm text-white mb-2"
          />
          <button className="w-full bg-green-500 text-white font-semibold py-3 rounded-sm hover:bg-green-600">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="mt-10 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 text-sm text-gray-400">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
        </div>
        <p>© Copyright 2025 by Company.com</p>
      </div>
    </footer>
  );
}
