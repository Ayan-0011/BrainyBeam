import { CreditCard, Landmark, Wallet, Truck } from "lucide-react";

const Booking = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Checkout</h1>
          <p className="text-gray-500 mt-2">
            Complete your order by filling in your details.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">

            {/* Shipping Address */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-semibold mb-6">
                Shipping Address
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-lg p-3 outline-none focus:border-red-500"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-lg p-3 outline-none focus:border-red-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-lg p-3 outline-none focus:border-red-500"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border rounded-lg p-3 outline-none focus:border-red-500"
                />

                <textarea
                  rows="4"
                  placeholder="Full Address"
                  className="md:col-span-2 border rounded-lg p-3 outline-none focus:border-red-500"
                ></textarea>

                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-lg p-3 outline-none focus:border-red-500"
                />

                <input
                  type="text"
                  placeholder="State"
                  className="border rounded-lg p-3 outline-none focus:border-red-500"
                />

                <input
                  type="text"
                  placeholder="Pincode"
                  className="border rounded-lg p-3 outline-none focus:border-red-500"
                />

                <input
                  type="text"
                  placeholder="Country"
                  className="border rounded-lg p-3 outline-none focus:border-red-500"
                />

              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-2xl font-semibold mb-6">
                Delivery Method
              </h2>

              <div className="space-y-4">

                <label className="border rounded-lg p-4 flex justify-between cursor-pointer hover:border-red-500">
                  <div className="flex items-center gap-3">
                    <Truck className="text-red-600" />
                    <div>
                      <h3 className="font-semibold">Standard Delivery</h3>
                      <p className="text-sm text-gray-500">
                        Delivery in 3-5 days
                      </p>
                    </div>
                  </div>

                  <input type="radio" name="delivery" defaultChecked />
                </label>

                <label className="border rounded-lg p-4 flex justify-between cursor-pointer hover:border-red-500">
                  <div className="flex items-center gap-3">
                    <Truck className="text-green-600" />
                    <div>
                      <h3 className="font-semibold">Express Delivery</h3>
                      <p className="text-sm text-gray-500">
                        Delivery in 24 Hours
                      </p>
                    </div>
                  </div>

                  <input type="radio" name="delivery" />
                </label>

              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-2xl font-semibold mb-6">
                Payment Method
              </h2>

              <div className="grid md:grid-cols-3 gap-5">

                <label className="border rounded-xl p-5 flex flex-col items-center gap-3 cursor-pointer hover:border-red-500">

                  <CreditCard size={35} />

                  <span>Credit Card</span>

                  <input type="radio" name="payment" defaultChecked />

                </label>

                <label className="border rounded-xl p-5 flex flex-col items-center gap-3 cursor-pointer hover:border-red-500">

                  <Wallet size={35} />

                  <span>UPI</span>

                  <input type="radio" name="payment" />

                </label>

                <label className="border rounded-xl p-5 flex flex-col items-center gap-3 cursor-pointer hover:border-red-500">

                  <Landmark size={35} />

                  <span>Net Banking</span>

                  <input type="radio" name="payment" />

                </label>

              </div>

            </div>

          </div>

          {/* Right Section */}

          <div>

            <div className="bg-white rounded-xl shadow p-6 sticky top-24">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Nike Air Max</span>
                  <span>₹3,999</span>
                </div>

                <div className="flex justify-between">
                  <span>Apple Watch</span>
                  <span>₹25,999</span>
                </div>

                <hr />

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹29,998</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹499</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹30,497</span>
                </div>

              </div>

              {/* Coupon */}

              <div className="mt-8">

                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border rounded-lg p-3 w-full mb-3 outline-none focus:border-red-500"
                />

                <button className="w-full border border-red-600 text-red-600 py-3 rounded-lg hover:bg-red-600 hover:text-white transition">
                  Apply Coupon
                </button>

              </div>

              {/* Place Order */}

              <button className="w-full bg-red-600 text-white py-4 rounded-lg mt-6 font-semibold hover:bg-red-700 transition">
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Booking;