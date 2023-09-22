import PrimaryButton from "../Shared/PrimaryButton/PrimaryButton";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
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
          <div className="card-actions justify-center ">
            <PrimaryButton buttonText={"Add To Card"}></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
