const MenuItem = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex space-x-2 ">
      <img
        className="w-24 "
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt="Menu-img"
      />

      <div>
        <h3 className="text-xl uppercase">{name} </h3>
        <p>{recipe} </p>
      </div>
      <p className="text-yellow-600 font-semibold">${price} </p>
    </div>
  );
};

export default MenuItem;
