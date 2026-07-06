import { Minus, Plus, Trash2 } from "lucide-react";

const cartItems = [
  {
    id: 1,
    title: "Nike Air Max",
    price: 3999,
    qty: 1,
    image: "https://picsum.photos/150?random=10",
  },
  {
    id: 2,
    title: "Apple Watch",
    price: 25999,
    qty: 1,
    image: "https://picsum.photos/150?random=11",
  },
];

const Cart = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-7xl mx-auto px-5 py-10">

        <h1 className="text-4xl font-bold mb-10">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Items */}

          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-5 flex flex-col md:flex-row gap-5 items-center"
              >
                <img
                  src={item.image}
                  className="w-32 h-32 rounded-lg object-cover"
                />

                <div className="flex-1">

                  <h2 className="font-bold text-xl">
                    {item.title}
                  </h2>

                  <p className="text-red-600 font-bold mt-2">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-4 mt-5">

                    <button className="border p-2 rounded">
                      <Minus size={18} />
                    </button>

                    <span>{item.qty}</span>

                    <button className="border p-2 rounded">
                      <Plus size={18} />
                    </button>

                  </div>

                </div>

                <button className="text-red-600">
                  <Trash2 />
                </button>

              </div>
            ))}

          </div>

          {/* Summary */}

          <div className="bg-white rounded-xl shadow p-6 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>₹29,998</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between mb-6">
              <span>Tax</span>
              <span>₹499</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold my-6">
              <span>Total</span>
              <span>₹30,497</span>
            </div>

            <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
              Proceed To Booking
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Cart;