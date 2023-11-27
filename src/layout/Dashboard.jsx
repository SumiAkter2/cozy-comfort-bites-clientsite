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

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open py-24 lg:py-0">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden absolute right-3"
          >
            <CgMenuHotdog size="30px" />
          </label>
        </div>
        <div className="drawer-side bg-orange-300">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* user */}
          <h1 className="text-2xl font-bold p-4 mb-6">Cozy comfort bites</h1>
          <ul className="menu p-4 w-80 min-h-full  ">
            {/* Sidebar content here */}

            <li>
              <NavLink>
                <IoMdHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink>
                <IoWalletSharp /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink>
                <FaCalendarAlt /> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink>
                <PiShoppingCartFill /> My Cart
              </NavLink>
            </li>
            <li>
              <NavLink>
                <IoIosListBox /> My Booking
              </NavLink>
            </li>
            <li>
              <NavLink>
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
          <ul className="menu p-4 w-80 min-h-full bg-gray-300 text-base-content  ">
            {/* Sidebar content here */}
            <li>
              <NavLink>
                <IoMdHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink>
                <MdFastfood /> Add Items
              </NavLink>
            </li>
            <li>
              <NavLink>
                <TfiMenuAlt /> Manage Items
              </NavLink>
            </li>
            <li>
              <NavLink>
                <IoIosListBox /> Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink>
                <FaUsers /> All Users
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink>
                <IoMdHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink>
                <CgMenuGridR /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink>
                <FaBagShopping /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink>
                <MdEmail /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
