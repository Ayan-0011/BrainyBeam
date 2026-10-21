import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers', badge: 'Hiring' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md border-b border-sand-border/60 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-sand/40 border border-sand-border/50 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-inner">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium tracking-tight transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-nearblack/80 hover:text-nearblack hover:bg-sand/60'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 bg-nearblack rounded-full -z-10 shadow-sm"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider ${
                          isActive ? 'bg-orange text-white' : 'bg-orange/20 text-orange'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Action / Contact CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button to="/contact" size="sm" variant="primary" icon="upRight">
                Start a project
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button to="/contact" size="sm" variant="primary" icon="none" className="text-xs px-3 py-1.5 sm:px-4 sm:py-2">
                Contact
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-sand/70 text-nearblack hover:bg-sand transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-nearblack" /> : <Menu className="w-5 h-5 text-nearblack" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-nearblack/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-cream z-50 p-6 flex flex-col justify-between border-l border-sand-border shadow-2xl overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-sand-border">
                  <Logo />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-sand/70 text-nearblack hover:bg-sand transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.path === '/'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl font-heading text-lg font-bold transition-all ${
                          isActive
                            ? 'bg-nearblack text-cream pl-5'
                            : 'text-nearblack hover:bg-sand/60'
                        }`
                      }
                    >
                      <span className="flex items-center gap-2">
                        {link.name}
                        {link.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange text-white uppercase tracking-wider">
                            {link.badge}
                          </span>
                        )}
                      </span>
                      <ArrowRight className="w-4 h-4 text-orange" />
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-sand-border mt-8">
                <p className="text-xs text-muted uppercase tracking-wider font-bold mb-3">
                  Let's Build Something Bold
                </p>
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  icon="upRight"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start a project
                </Button>
                <div className="mt-4 text-center">
                  <p className="text-xs text-muted">
                    hello@velora-studio.demo (Fictional Demo)
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
