import { Search, SlidersHorizontal, Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Nike Air Max",
    category: "Shoes",
    price: 3999,
    image: "https://th.bing.com/th/id/OIP.gOEeKHGX7wA08--042bygwHaFM?w=230&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 2,
    title: "Apple Watch",
    category: "Electronics",
    price: 25999,
    image: "https://th.bing.com/th/id/OIP.kS2MtH1CEapq8MHmvtFA0gHaHa?w=167&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 3,
    title: "Leather Jacket",
    category: "Fashion",
    price: 2999,
    image: "https://th.bing.com/th/id/OIP.MaTOURQm_pE-IUPGriZzOAHaJg?w=167&h=215&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 4,
    title: "Headphones",
    category: "Electronics",
    price: 1999,
    image: "https://th.bing.com/th/id/OIP.pgzU33CxcqL3NvDutVnJTgHaI0?w=159&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    id: 5,
    title: "Backpack",
    category: "Accessories",
    price: 1499,
    image: "data:image/webp;base64,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",
  },
  {
    id: 6,
    title: "Smart Phone",
    category: "Electronics",
    price: 18999,
    image: "https://th.bing.com/th/id/OIP.RVnKW8KZn59HspDwrBO5RQHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

const Products = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Banner */}

      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500  py-12 text-center text-white">
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
                <div key={item.id}
                  className="bg-white hover:scale-102 rounded-xl shadow hover:shadow-xl transition overflow-hidden" >
                  <div className="relative">

                    <img  src={item.image} className="h-64 w-full object-cover" />

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