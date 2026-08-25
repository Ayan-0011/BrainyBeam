import { useState } from "react";
import SearchBar from "./Components/SerchBar";
import FoodCard from "./Components/FoodCard";


const foods = [
  {
    id: 1,
    name: "Pizza",
    price: 299,
    category: "Fast Food",
    image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
  },
  {
    id: 2,
    name: "Burger",
    price: 199,
    category: "Fast Food",
    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 3,
    name: "Pasta",
    price: 249,
    category: "Italian",
    image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500",
  },
  {
    id: 4,
    name: "Salad",
    price: 149,
    category: "Healthy",
    image:"https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500",
  },
  {
    id:5,
    name:"Samosa",
    price:50,
    category:"Fast Food",
    image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fHww"
  },
  {
    id:6,
    name:"Dosa",
    price:90,
    category:"Fast Food",
    image:"https://images.unsplash.com/photo-1694849789325-914b71ab4075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:7,
    name:"Biryani",
    price:150,
    category:"Healthy",
    image:"https://images.unsplash.com/photo-1697155406055-2db32d47ca07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:8,
    name:"Noodles",
    price:100,
    category:"Fast Food",
    image:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:9,
    name:"Panner",
    price:150,
    category:"Healthy",
    image:"https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZWVyfGVufDB8fDB8fHww"
  },
];

const Home = () => {

  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

//console.log(search);
  

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-8">
         Food Search
      </h1>

      <SearchBar search={search} setSearch={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-xl">
            No Food Found 
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;