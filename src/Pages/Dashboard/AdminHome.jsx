import { FaUsers, FaHamburger, FaShoppingCart, FaDollarSign, FaSmile } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure"; // Add this hook for secure requests

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure(); // Initialize axiosSecure

  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    }
  });

  return (
    <div className="">
      <Helmet>
        <title>Chef's Place | Admin Home</title>
      </Helmet>

      {/* Welcome Message */}
      <div className=" shadow-lg rounded-lg p-8 mx-auto max-w-4xl  text-center mt-28">
        <h2 className="text-lg font-semibold text-gray-800 text-center">
          Welcome to Your Dashboard
        </h2>
        <div className="flex gap-5 justify-center items-center my-5">
        <div className="text-yellow-400 animate-pulse text-4xl">   <FaSmile></FaSmile></div>
          <p className="font-bold text-3xl">{user?.displayName ? user.displayName : "Admin"}</p>
        </div>
        <p className="text-gray-600 mt-4">
          We're happy to have you here! Explore the various sections and get started on managing your items, orders, and more.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Users */}
          <div className="stat bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <div className="stat-figure text-primary">
              <FaUsers className="text-xl text-blue-500" />
            </div>
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-primary">{stats?.users || 0}</div>
          </div>

          {/* Menu Items */}
          <div className="stat bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <div className="stat-figure text-secondary">
              <FaHamburger className="text-xl text-yellow-400" />
            </div>
            <div className="stat-title">Menu Items</div>
            <div className="stat-value text-accent">{stats?.menuItems || 0}</div>
          </div>

          {/* Orders */}
          <div className="stat bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <div className="stat-figure text-accent">
              <FaShoppingCart className="text-xl text-green-500" />
            </div>
            <div className="stat-title">Total Orders</div>
            <div className="stat-value text-primary">{stats?.orders || 0}</div>
          </div>

          {/* Revenue */}
          <div className="stat bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="text-xl text-red-500" />
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value text-accent">${stats?.revenue?.toLocaleString() || "0"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
