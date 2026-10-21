import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { nav, services } from './data.js'

export const Logo = () => (
  <Link to="/" className="logo" aria-label="Plumbline home">
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="#14221F"/><path d="M16 4v14" stroke="#F7F8F4" strokeWidth="2.4" strokeLinecap="round"/><circle cx="16" cy="22" r="5" fill="#D5F36A"/></svg>
    Plumbline
  </Link>
)

export function Page({ title, desc, children }) {
  useEffect(() => {
    document.title = `${title} — Plumbline Studio`
    document.querySelector('meta[name=description]')?.setAttribute('content', desc)
    window.scrollTo(0, 0)
  }, [title, desc])
  return <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>{children}</motion.main>
}

export const Reveal = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay }}>{children}</motion.div>
)

export const Btn = ({ to, kind = 'p', children, ...r }) => <Link to={to} className={`btn ${kind}`} {...r}>{children}</Link>

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return (
    <header className="top"><div className="wrap bar">
      <Logo />
      <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={`links ${open ? 'open' : ''}`} aria-label="Main">
        {nav.map(n => <NavLink key={n.to} to={n.to} className={({ isActive }) => (isActive ? 'active' : '')}>{n.label}</NavLink>)}
        <Btn to="/contact" kind="l">Start a project</Btn>
      </nav>
    </div></header>
  )
}

export const Footer = () => (
  <footer><div className="wrap">
    <div className="fgrid">
      <div className="stack"><Logo /><p className="mut" style={{ color: '#A9B5B0', maxWidth: '34ch' }}>An independent digital engineering studio. Websites, applications and intelligent software.</p></div>
      <div><h3>Studio</h3>{nav.map(n => <Link key={n.to} to={n.to}>{n.label}</Link>)}<Link to="/contact">Contact</Link></div>
      <div><h3>Services</h3>{services.map(s => <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}</div>
    </div>
    <p style={{ color: '#A9B5B0', marginTop: 40, fontSize: '.9rem' }}>© {new Date().getFullYear()} Plumbline Studio. A fictional brand created for this demo website.</p>
  </div></footer>
)

export const CtaBand = () => (
  <section className="dark"><div className="wrap grid2" style={{ alignItems: 'center' }}>
    <h2>Have something complicated to build?</h2>
    <div className="stack"><p className="lead mut">Send a short brief. We will reply with questions and a suggested first step.</p><Btn to="/contact" kind="l">Start a project <ArrowRight size={18} /></Btn></div>
  </div></section>
)

export const Mock = ({ p }) => (
  <div className="mock" style={{ background: p.hue, color: '#fff' }} role="img" aria-label={`Illustrative interface mockup for the concept project ${p.name}`}>
    <div className="pane"><strong>{p.name}</strong><div className="blk" /><div className="blk" style={{ width: '70%' }} /><span className="pill">{p.features[0]}</span></div>
  </div>
)

export const Faq = ({ items }) => items.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)
