import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { brand } from '../../config/brand.js';
import Brand from '../ui/Brand.jsx';

export default function Footer() {
  return <footer className="footer"><div className="footer-main"><Brand light /><p>Independent thinking.<br />Digital things with feeling.</p><div className="footer-links"><Link to="/work">Work <ArrowUpRight size={13} /></Link><Link to="/about">Studio <ArrowUpRight size={13} /></Link><Link to="/services">Services <ArrowUpRight size={13} /></Link><Link to="/contact">Contact <ArrowUpRight size={13} /></Link></div><a href="#top" className="back-top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {brand.year} {brand.name} STUDIO — CONCEPT BRAND</span><span>BUILT TO BE DIFFERENT. MADE TO WORK.</span><div><Link to="/privacy-policy">PRIVACY</Link><Link to="/terms">TERMS</Link></div></div></footer>;
}
