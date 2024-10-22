import { FaSmile } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <Helmet>
        <title>Chef's Place | User Home</title>
      </Helmet>
      {/* Welcome Message */}
      <div className=" shadow-lg rounded-lg p-8 mt-32 mx-auto max-w-3xl text-center ">
        {" "}
        <h2 className="text-4xl font-semibold text-gray-800 text-center">
          Welcome to Your Dashboard
        </h2>
        <div className="flex gap-5 justify-center items-center my-10">
         <div className="text-yellow-400 animate-pulse text-4xl">   <FaSmile></FaSmile></div>
          <p className="font-bold text-3xl">{user?.displayName ? user.displayName : "."}</p>
        

         
        </div>
        <p className="text-gray-600 mt-4">
          We're happy to have you here! Explore the various sections and get
          started on managing your items, orders, and more.
        </p>
      </div>
    </div>
  );
};

export default UserHome;
