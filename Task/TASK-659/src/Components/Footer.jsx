const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold text-red-500">
            ShopEase
          </h2>

          <p className="mt-3 text-gray-300">
            Your one-stop destination for fashion,
            electronics and lifestyle products.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Booking</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Contact
          </h3>

          <p>Email : support@shopease.com</p>
          <p>Phone : +91 9876543210</p>
          <p>Ahmedabad, India</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4">
        © 2026 ShopEase. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;