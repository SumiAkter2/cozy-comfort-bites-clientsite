import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo1.png";
import Swal from "sweetalert2";
import useCart from "../Hook/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure to sign out?",
      //  text: "You won't be able to add before login!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {})
          .catch((err) => console.log(err));
      }
    });
  };
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/shop/salad">Our Shop</Link>
      </li>
      <li>
        <Link to="/">
          <label tabIndex={0} className="btn btn-ghost btn-circle btn-xs">
            <div className="indicator ">
              <AiOutlineShoppingCart size="25px" />
              <span className="badge badge-sm indicator-item">
                {cart?.length || 0}
              </span>
            </div>
          </label>
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="max-w-screen-xl navbar fixed z-10 opacity-90 bg-black text-white">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-8 bg-white rounded-full"
            />
            Cozy Comfort Bites
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <>
              <span className="font-bold">{user?.displayName}</span>
              <span>{/* <img src={user?.photoURL} alt="user-img" /> */}</span>
              <button onClick={handleLogOut} className="btn btn-ghost">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login">
              {" "}
              <button className="btn btn-warning btn-outline">LogIn </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
