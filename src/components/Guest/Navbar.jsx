import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram, AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import { FaGlobe } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full text-gray-800 font-['Rubik']">
      {/* Top Info Bar */}
      <div className="bg-white py-4  shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          {/* Left: Social + Email */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-gray-600 text-lg">
              <AiOutlineTwitter />
              <AiFillFacebook />
              <AiFillInstagram />
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2 text-sm">
              <MdEmail className="text-green-600" />
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="font-medium">info@sedap.com</p>
              </div>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="text-4xl font-bold not-only:font-['Abril_Fatface'] text-black flex items-center gap-1">
            <span className="text-green-600 font-bold">🍃</span> Sedap
          </div>

          {/* Right: Phone + Search + Cart */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <FaPhone className="text-green-600" />
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="font-medium">92 666 888 0000</p>
              </div>
            </div>
            <div className="w-px h-6 bg-gray-300" />
            <div className="flex gap-5 text-xl text-gray-700">
              <BiSearchAlt2 className="cursor-pointer" />
              <AiOutlineShoppingCart className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#f8f8f8]  text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Left: Login/Register */}
          <div className="flex items-center gap-2 text-green-600 cursor-pointer">
            <HiOutlineUser />
            <Link to="/login">Login</Link>/
            <Link to="/register">Register</Link>
          </div>

          {/* Center: Nav Links */}
          <ul className="flex items-center gap-8 font-medium">
            <NavLink to="/home" className={({ isActive }) => isActive ? "text-green-600" : "hover:text-green-600"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-600" : "hover:text-green-600"}>About</NavLink>
            <NavLink to="/testimoni" className={({ isActive }) => isActive ? "text-green-600" : "hover:text-green-600"}>Testimonial</NavLink>
            <NavLink to="/news" className={({ isActive }) => isActive ? "text-green-600" : "hover:text-green-600"}>News</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-600" : "hover:text-green-600"}>Contact</NavLink>
          </ul>

          {/* Right: Language */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="https://flagcdn.com/gb.svg" className="w-5 h-3 rounded-sm" alt="English" />
            <span>English</span>
            <FaGlobe className="text-gray-500 text-sm" />
          </div>
        </div>
      </div>
    </header>
  );
}
