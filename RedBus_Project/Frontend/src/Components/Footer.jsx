import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-red-500">
              RedBus
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Book buses across India with ease. Safe journeys,
              affordable prices, and instant booking.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/bus">Bus Booking</a>
              </li>
              <li>
                <a href="/train">Train Booking</a>
              </li>
              <li>
                <a href="/hotel">Hotel Booking</a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-semibold mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              support@busgo.com
            </p>

            <p className="text-gray-400 mt-2">
              +91 98765 43210
            </p>

            
          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} BusGo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;