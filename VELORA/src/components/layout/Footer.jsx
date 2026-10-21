import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, Heart, PhoneCall, } from 'lucide-react';
import { FaInstagram, FaLinkedinIn, FaGithub, FaFacebookF, } from 'react-icons/fa';
import Logo from '../common/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/yourusername/',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/company/yourcompany/',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/yourusername',
    },
    {
      name: 'Facebook',
      icon: FaFacebookF,
      href: 'https://www.facebook.com/yourpage/',
    },
  ];
  const linkClass =
    'text-nearblack/70 hover:text-orange transition-colors duration-200';

  const headingClass =
    'font-heading text-xs uppercase tracking-[0.18em] text-nearblack/50 font-bold mb-5';

  return (
    <footer className="relative overflow-hidden bg-cream text-nearblack border-t border-nearblack/10">

      {/* Soft Background Decoration */}
      <div className="absolute -top-32 right-0 w-80 h-80 rounded-full bg-orange/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-sand/50 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 py-14 sm:py-16 lg:py-20 border-b border-nearblack/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />

            <p className="mt-5 text-nearblack/65 text-sm sm:text-base leading-relaxed max-w-sm">
              VELORA is an independent digital technology studio. We unite
              thoughtful design, resilient engineering, and applied
              intelligence to turn bold ideas into meaningful digital
              experiences.
            </p>

            {/* Social Icons */}
            {/* Social Media */}
            <div className="mt-7">
              <p className="mb-4 text-sm font-bold text-nearblack">
                Follow us on social media
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-orange/20 bg-white text-nearblack transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:bg-orange hover:text-white hover:shadow-lg hover:shadow-orange/20"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Studio Navigation */}
          <div>
            <h3 className={headingClass}>Studio</h3>

            <ul className="space-y-3 text-sm">
              <li><Link to="/" className={linkClass}>Home</Link></li>
              <li><Link to="/services" className={linkClass}>Services & Capabilities</Link></li>
              <li><Link to="/work" className={linkClass}>Selected Work</Link></li>
              <li><Link to="/process" className={linkClass}>Our Process</Link></li>
              <li><Link to="/about" className={linkClass}>About the Studio</Link></li>
              <li><Link to="/life-at-company" className={linkClass}>Life at VELORA</Link></li>

              <li>
                <Link
                  to="/careers"
                  className={`inline-flex items-center gap-2 ${linkClass}`} >
                  Careers
                  <span className="rounded-full bg-orange/10 border border-orange/20 px-2 py-0.5 text-[9px] font-bold tracking-wide text-orange">
                    JOIN US
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={headingClass}>Services</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services#web-development" className={linkClass}>
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services#mobile-applications" className={linkClass}>
                  Mobile Products
                </Link>
              </li>
              <li>
                <Link to="/services#custom-software" className={linkClass}>
                  Custom Software & APIs
                </Link>
              </li>
              <li>
                <Link to="/services#ai-automation" className={linkClass}>
                  AI & Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={headingClass}>Let's Connect</h3>

            <p className="text-sm text-nearblack/60 leading-relaxed mb-5">
              Have an idea in mind? Let's build something meaningful together.
            </p>

            <div className="flex items-start gap-3 my-2">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <Mail size={17} />
              </span>
              <div>
                <a href=""
                  className="break-all text-sm font-medium text-nearblack hover:text-orange transition-colors" >
                velorastudio@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <PhoneCall size={17} />
              </span>
              <div>
                <a href=""
                  className="break-all text-sm font-medium text-nearblack hover:text-orange transition-colors" >
                +91 98765 43210
                </a>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white shadow-md shadow-orange/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-hover hover:shadow-lg hover:shadow-orange/20"
            >
              Start a Conversation
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 py-6 text-xs text-nearblack/55">

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
            <span>
              &copy; {currentYear} VELORA Digital Studio. All rights reserved.
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange/20 bg-orange/5 px-2.5 py-1 text-[10px] font-medium text-nearblack/65">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Digital Studio
            </span>
          </div>

          <div className="flex items-center justify-center gap-5 sm:gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-orange transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-orange transition-colors"
            >
              Terms of Service
            </Link>
          </div>

        </div>

        {/* Small Brand Signature */}
        <div className="pb-5 text-center">
          <p className="inline-flex items-center justify-center gap-1.5 text-[10px] tracking-wide text-nearblack/40">
            Crafted with
            <Heart size={11} className="fill-orange text-orange" />
            for the digital future
          </p>
        </div>

      </div>
    </footer>
  );
}
