import { HiUsers } from "react-icons/hi"; 
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;
  return (
    <div>
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <AiOutlineDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <AiOutlineShoppingCart className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <AiOutlineUserAdd className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-7" to="/user" className={menuClass}>
              <HiUsers  className="mr-4 text-xl" />
              Users
            </NavLink>
          </li>
          {/* Menu Error Pages */}
          <li>
            <NavLink  id="menu-4" to="/Error400" className={menuClass}>
              <MdErrorOutline className="mr-4 text-xl" />
              Error 400
            </NavLink>
          </li>
          <li>
            <NavLink  id="menu-5" to="/Error401" className={menuClass}>
              <MdErrorOutline className="mr-4 text-xl" />
              Error 401
            </NavLink>
          </li>
          <li>
            <NavLink  id="menu-6" to="/Error403" className={menuClass}>
              <MdErrorOutline className="mr-4 text-xl" />
              Error 403
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
