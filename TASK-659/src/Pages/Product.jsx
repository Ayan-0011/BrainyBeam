import { Search, SlidersHorizontal, Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Nike Air Max",
    category: "Shoes",
    price: 3999,
    image: "https://picsum.photos/300?random=1",
  },
  {
    id: 2,
    title: "Apple Watch",
    category: "Electronics",
    price: 25999,
    image: "https://picsum.photos/300?random=2",
  },
  {
    id: 3,
    title: "Leather Jacket",
    category: "Fashion",
    price: 2999,
    image: "https://picsum.photos/300?random=3",
  },
  {
    id: 4,
    title: "Headphones",
    category: "Electronics",
    price: 1999,
    image: "https://picsum.photos/300?random=4",
  },
  {
    id: 5,
    title: "Backpack",
    category: "Accessories",
    price: 1499,
    image: "https://picsum.photos/300?random=5",
  },
  {
    id: 6,
    title: "Smart Phone",
    category: "Electronics",
    price: 18999,
    image: "https://picsum.photos/300?random=6",
  },
];

const Products = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Banner */}

      <div className="bg-red-600 py-12 text-center text-white">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="mt-2">Find your favorite products at the best price.</p>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-10">

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}

          <aside className="bg-white rounded-xl shadow p-5 h-fit">

            <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
              <SlidersHorizontal size={20} />
              Filters
            </h2>

            <div className="space-y-3">
              <label className="flex gap-2">
                <input type="checkbox" />
                Fashion
              </label>

              <label className="flex gap-2">
                <input type="checkbox" />
                Electronics
              </label>

              <label className="flex gap-2">
                <input type="checkbox" />
                Shoes
              </label>

              <label className="flex gap-2">
                <input type="checkbox" />
                Accessories
              </label>
            </div>

          </aside>

          {/* Product Section */}

          <div className="lg:col-span-3">

            {/* Search */}

            <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">

              <div className="relative w-full">

                <Search
                  className="absolute left-4 top-3 text-gray-500"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Search Product..."
                  className="w-full border rounded-lg py-3 pl-12 pr-4 outline-none focus:border-red-500"
                />

              </div>

              <select className="border rounded-lg px-4 py-3">
                <option>Newest</option>
                <option>Price Low</option>
                <option>Price High</option>
              </select>

            </div>

            {/* Cards */}

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
                >
                  <div className="relative">

                    <img
                      src={item.image}
                      className="h-64 w-full object-cover"
                    />

                    <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                      <Heart size={18} />
                    </button>

                  </div>

                  <div className="p-5">

                    <p className="text-sm text-red-600">
                      {item.category}
                    </p>

                    <h2 className="font-bold text-lg mt-2">
                      {item.title}
                    </h2>

                    <div className="flex justify-between items-center mt-5">

                      <span className="font-bold text-xl text-red-600">
                        ₹{item.price}
                      </span>

                      <button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700">
                        <ShoppingCart size={18} />
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Products;