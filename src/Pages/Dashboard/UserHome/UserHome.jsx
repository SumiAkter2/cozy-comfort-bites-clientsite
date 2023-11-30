import { IoWalletSharp } from "react-icons/io5";
import { AiFillShop } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import img from "../../../../src/assets/contact/emo.png";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-2xl font-bold p-4 mb-6 tracking-widest  mx-4">
        HI! WELCOME BACK!
      </h1>

      <div className="grid lg:grid-cols-3 gap-4 lg:mx-8 mx-6 font-bold">
        <div className="card  bg-gradient-to-r from-pink-500 to-pink-300   rounded-sm">
          <div className="p-12 flex justify-center items-center text-white">
            <IoWalletSharp size="55px" />
            <div className="ml-6">
              <h1 className="text-xl font-bold">606</h1>
              <p>Menu</p>
            </div>
          </div>
        </div>
        <div className="card  bg-gradient-to-r from-orange-400 to-orange-200   rounded-sm">
          <div className="p-12 flex justify-center items-center text-white">
            <AiFillShop size="60px" />
            <div className="ml-6">
              <h1 className="text-xl font-bold">606</h1>
              <p>Shop</p>
            </div>
          </div>
        </div>
        <div className="card  bg-gradient-to-r from-purple-500 to-purple-200   rounded-sm">
          <div className="p-12 flex justify-center items-center text-white">
            <FaPhoneAlt size="50px" />
            <div className="ml-6">
              <h1 className="text-xl font-bold">606</h1>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-center items-center  lg:mx-8 mx-6 font-bold my-12 ">
        <div className="bg-orange-200 text-center w-[300px] lg:w-[400px] mx-auto lg:h-[250px] mt-6">
          <div className="p-12 ">
            <div className="flex justify-center items-center">
              <img
                src={img}
                className="w-24 rounded-full border-2 border-purple-500 p-2"
                alt="user-img"
              />
            </div>
            <h1 className="text-2xl font-bold my-4">{user?.displayName}</h1>
          </div>
        </div>

        <div className="bg-pink-200 text-start w-[300px] lg:w-[400px] mx-auto lg:border-l-2 border-red-700 lg:h-[250px] mt-6">
          <div className="p-6">
            <h1 className="text-2xl  my-4">Your Activities</h1>
            <div className="ml-4">
              <p className="text-purple-600 mb-2">Order: 44</p>
              <p className="text-pink-600 mb-2">Review: 44</p>
              <p className="text-orange-600 mb-2">Booking: 44</p>
              <p className="text-green-600 mb-2">Payment: 44</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
