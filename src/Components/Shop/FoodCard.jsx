import { useContext } from "react";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../Hook/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        foodId: item._id,
        name: item.name,
        price: item.price,
        image: item.image,
        email: user.email,
      };
      console.log(cartItem);
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //  refetch= update the cart length in navbar cart
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully added.",
              showConfirmButton: false,
              timer: 800,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login first",
        text: "You won't be able to add before login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Food Image" />
        </figure>
        <p className="absolute  right-3 bg-slate-700 px-2 py-1 rounded-sm m-2 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div
            onClick={() => handleAddToCart(item)}
            className="card-actions justify-center "
          >
            <PrimaryButton buttonText={"Add To Cart"}></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
