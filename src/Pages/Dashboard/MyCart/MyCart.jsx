import { Helmet } from "react-helmet-async";
import { MdDeleteForever } from "react-icons/md";
import useCart from "../../../Components/Hook/useCart";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const initialValue = 0;
  const totalPrice = cart.reduce((sum, item) => item.price + sum, initialValue);

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Deleted!",
                showConfirmButton: false,
                timer: 1000,
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <div className="lg:w-2/3 mx-6">
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
            {cart.map((item, index) => (
              <tr className="font-bold hover" key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="w-12 rounded-sm"
                    src={item.image}
                    alt="image"
                  />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="btn btn-ghost"
                    onClick={() => {
                      handleDeleteItem(item);
                    }}
                  >
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
