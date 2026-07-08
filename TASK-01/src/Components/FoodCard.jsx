const FoodCard = ({ food }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      <img src={food.image}  alt={food.name} className="w-full h-48 object-cover"/>

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">
          {food.name}
        </h2>

        <p className="text-gray-500 mt-1">
          {food.category}
        </p>

        <p className="text-green-600 font-semibold mt-3">
          ₹{food.price}
        </p>
      </div>

    </div>
  );
};

export default FoodCard;