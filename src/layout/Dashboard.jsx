import { CgMenuHotdog } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosListBox } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdReviews } from "react-icons/md";
import { IoWalletSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Components/Hook/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden my-6"
        >
          <CgMenuHotdog size="30px" color="orange" />
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-orange-300 gap-y-2 font-bold">
          <h1 className="text-2xl font-bold p-4 mb-6 tracking-widest">
            Cozy Comfort <br />
            <span className="tracking-widest w-full">Bites</span>
          </h1>
          <li>
            <NavLink to="/dashboard/userhome">
              <IoMdHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <IoWalletSharp /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <PiShoppingCartFill /> My Cart
              <div className="badge badge-lg">{cart.length}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mybooking">
              <IoIosListBox /> My Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addreview">
              <MdReviews /> Add review
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <IoMdHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <CgMenuGridR /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/salad">
              <FaBagShopping /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="contact">
              <MdEmail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
