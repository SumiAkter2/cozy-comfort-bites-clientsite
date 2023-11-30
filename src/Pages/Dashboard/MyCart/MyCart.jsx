import { Helmet } from "react-helmet-async";
import { MdDeleteForever } from "react-icons/md";
import useCart from "../../../Components/Hook/useCart";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart] = useCart();
  const initialValue = 0;
  const totalPrice = cart.reduce((sum, item) => item.price + sum, initialValue);

  console.log(totalPrice);

  return (
    <div>
      <Helmet>
        <title>Cozy Comfort | My Cart</title>
      </Helmet>

      <div className="mx-auto text-center uppercase my-8 w-1/2">
        <p className="text-yellow-500 ">-----My Cart-----</p>
        <h2 className="md:text-3xl text-2xl mt-2 border-y-4 py-2">
          Wanna Add More?
        </h2>
      </div>

      <div className="flex justify-between items-center gap-6 font-bold text-black my-12 ">
        <h1 className="text-2xl ">Total Order: {cart.length}</h1>
        <h1 className="text-2xl ">Total Price: $ {totalPrice}</h1>
        <Link to="/dashboard/payment">
          <button className="btn btn-warning btn-sm">Pay</button>
        </Link>
      </div>

      <div className="overflow-x-auto mt-4 mb-12 ">
        <table className="table">
          <thead className="text-xl text-black bg-orange-300">
            <tr>
              <th>No</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((c, index) => (
              <tr className="font-bold " key={c._id}>
                <th>{index + 1}</th>
                <td>
                  <img className="w-12 rounded-sm" src={c.image} alt="image" />
                </td>
                <td>{c.name}</td>
                <td>${c.price}</td>
                <td>
                  <button className="btn btn-ghost">
                    <MdDeleteForever size="30px" color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
