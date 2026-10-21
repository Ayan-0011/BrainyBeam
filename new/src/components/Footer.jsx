import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="grid gap-10 py-12 md:grid-cols-[1.3fr_0.7fr_0.7fr] md:py-16">
          <div>
            <Link to="/" className="brand-lockup text-white">
              <span className="brand-mark" aria-hidden="true"><span /></span>
              <span className="brand-name">veyora<span>labs</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#B3C0B9]">
              Thoughtful design and dependable engineering for digital products that make work clearer.
            </p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D5F36A]">
              Start a conversation <ArrowUpRight size={15} />
            </Link>
          </div>
          <div>
            <p className="footer-heading">Explore</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#B3C0B9]">
              <Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/work">Work</Link><Link to="/process">Process</Link><Link to="/technology">Technology</Link>
            </div>
          </div>
          <div>
            <p className="footer-heading">More</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#B3C0B9]">
              <Link to="/insights">Insights</Link><Link to="/careers">Careers</Link><Link to="/contact">Contact</Link><Link to="/privacy-policy">Privacy policy</Link><Link to="/terms">Terms</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/15 py-5 text-xs text-[#B3C0B9] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Veyora Labs. Fictional brand concept.</p>
          <p>Designed with clarity. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
