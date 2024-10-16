import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/Main">Order Food</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="flex">
            <FaShoppingCart className=""></FaShoppingCart>
            <span className="">+{cart.length}</span>
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-2xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="relative flex items-center">
            <img
              className="w-14 opacity-50"
              src="../../../public/chef.png"
              alt=""
            />
            <Link to="/" className="absolute left-8 uppercase text-xl">
              Chef<span className="text-yellow-500">'s</span>Place
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end flex items-center space-x-4">
          {user ? (
            <>
              <div className="relative group">
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <span className="absolute left-0 -bottom-6 text-sm text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {user?.displayName}
                </span>
              </div>
              <button onClick={handleLogOut} className="btn btn-ghost">
                LogOut
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
