import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isAdmin] = useAdmin();

  const handleLinkClick = () => {
    setSidebarOpen(false); // Close sidebar on link click
  };

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-gray-200">
      {/* Mobile Menu Toggle Button */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)} 
        className="md:hidden p-4 text-gray-800 z-50"
      >
        <FaHome className="text-2xl" /> {/* You can replace this with a hamburger icon */}
      </button>

      {/* Overlay for mobile when the sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Dashboard Sidebar */}
      <div 
        className={`w-64 bg-white shadow-lg rounded-lg p-6 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:block fixed md:relative z-50`}
      >
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Dashboard</h1>
        <ul className="space-y-4">
          {
            isAdmin ? <>
            <li>
            <NavLink
              to="/dashboard/adminHome"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick} // Close sidebar when clicking a link
            >
              <FaHome className="text-xl mr-3" />
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addItems"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaUtensils className="text-xl mr-3" />
              Add Items
            </NavLink>
          </li>
         
          <li>
            <NavLink
              to="/dashboard/manageItems"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaList className="text-xl mr-3" />
             Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manageBookings"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaBook className="text-xl mr-3" />
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/allUsers"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaUsers className="text-xl mr-3" />
             All Users
            </NavLink>
          </li>
          
            </>
            :
            <>
           {/* Not Admin */}
           <li>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaShoppingCart className="text-xl mr-3" />
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaSearch className="text-xl mr-3" />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaEnvelope className="text-xl mr-3" />
              Contact
            </NavLink>
          </li>
            </>
          }

           {/*Shared Navlinks  */}
           <div className="divider my-4" />
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaHome className="text-xl mr-3" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaSearch className="text-xl mr-3" />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 bg-yellow-500 text-white rounded-lg transition"
                  : "flex items-center p-2 hover:bg-yellow-300 rounded-lg transition"
              }
              onClick={handleLinkClick}
            >
              <FaEnvelope className="text-xl mr-3" />
              Contact
            </NavLink>
          </li>
          
          
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
