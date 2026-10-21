import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="container-shell nav-inner" aria-label="Main navigation">
        <Link to="/" onClick={close} className="brand-lockup" aria-label="Veyora Labs home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-name">veyora<span>labs</span></span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="button-primary hidden md:inline-flex">
          Start a project <ArrowUpRight size={15} />
        </Link>

        <button
          type="button"
          className="mobile-menu-button md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="mobile-nav md:hidden">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={close} className={({ isActive }) => `mobile-nav-link ${isActive ? "text-[#0E8B72]" : ""}`}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={close} className="button-primary mt-3">Start a project <ArrowUpRight size={15} /></Link>
        </div>
      )}
    </header>
  );
}
