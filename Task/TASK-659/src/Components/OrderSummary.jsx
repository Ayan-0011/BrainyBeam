const OrderSummary = () => {
  return (
    <div className="bg-white/60 backdrop-blur rounded-3xl p-6 shadow-soft sticky top-24">
      <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-100" />
            <div>
              <div className="font-medium">Nike Air Max</div>
              <div className="text-sm text-gray-500">Size: M • Qty: 1</div>
            </div>
          </div>
          <div className="font-semibold">₹3,999</div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-100" />
            <div>
              <div className="font-medium">Apple Watch</div>
              <div className="text-sm text-gray-500">1 unit</div>
            </div>
          </div>
          <div className="font-semibold">₹25,999</div>
        </div>

        <hr />

        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>₹29,998</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Tax</span>
          <span>₹499</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>₹30,497</span>
        </div>

        <div className="mt-4">
          <input type="text" placeholder="Coupon code" className="w-full p-3 rounded-xl border border-transparent focus:border-indigo-300 outline-none mb-3" />
          <button className="w-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-3 rounded-3xl shadow">Apply & Continue</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
