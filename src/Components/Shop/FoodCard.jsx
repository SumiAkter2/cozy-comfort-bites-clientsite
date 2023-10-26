import { useContext } from "react";
import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCard = (item) => {
    // console.log(item);
    if (user && user.email) {
      const cartItem = {
        // itemId: item._id,
        name,
        price,
        image,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-type": "application/json; ",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json)
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Added.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        text: "Please Log In.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log In",
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
            onClick={() => handleAddToCard(item)}
            className="card-actions justify-center "
          >
            <PrimaryButton buttonText={"Add To Card"}></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
