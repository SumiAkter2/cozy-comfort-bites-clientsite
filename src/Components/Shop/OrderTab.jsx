import FoodCard from "./FoodCard";


const OrderTab = ({items}) => {
    return (
      <div>
        <div className="grid md:grid-cols-3 md:px-16 gap-12 my-6">
          {items.map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    );
};

export default OrderTab;