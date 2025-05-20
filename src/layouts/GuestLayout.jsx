import { Outlet } from "react-router-dom";
import Navbar from "../components/Guest/Navbar";
import Footer from "../components/Guest/Footer";

export default function GuestLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div
        id="main-content"
        className="flex-1 p-6 bg-white shadow-inner overflow-auto">
        <Outlet/>
        <Footer />
      </div>
    </div>
  )
}