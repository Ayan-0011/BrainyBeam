import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
        <div className="footer-grid">
            <div>
                <h2 className="footer-logo">RedBus</h2>
                <p className="footer-desc">
                    Book buses across India with ease. Safe journeys,
                    affordable prices, and instant booking.
                </p>
            </div>

            <div>
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-list">
                    <li>Home</li>
                    <li>Bus Booking</li>
                    <li>Train Booking</li>
                    <li>Hotel Booking</li>
                </ul>
            </div>

            <div>
                <h3 className="footer-title">Support</h3>
                <ul className="footer-list">
                    <li>Help Center</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>

            <div>
                <h3 className="footer-title">Contact</h3>
                <p className="footer-contact">
                    support@RedBus.com
                </p>
                <p className="footer-contact">
                    +91 98765 43210
                </p>
            </div>
            
        </div>

        <hr className="footer-line" />
        <div className="footer-copy">
            © {new Date().getFullYear()} RedBus. All Rights Reserved.
        </div>
    </div>

</footer>
  );
};

export default Footer;