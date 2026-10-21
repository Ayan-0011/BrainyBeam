import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services, projects, steps, faqs } from './data.js'
import { Page, Reveal, Btn, CtaBand, Mock, Faq } from './ui.jsx'

const float = (d, y) => ({ animate: { y: [0, y, 0] }, transition: { duration: d, repeat: Infinity, ease: 'easeInOut' } })

function HeroVisual() {
  return (
    <div className="vis" role="img" aria-label="Illustration of a website interface, code panel and connected system diagram">
      <motion.div className="win" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3, duration: .6 }}>
        <motion.div {...float(7, -8)}>
          <div className="dots"><i /><i /><i /></div><strong style={{ fontFamily: 'Space Grotesk' }}>Order overview</strong>
          <div className="blk" style={{ width: '90%' }} /><div className="blk" style={{ width: '65%' }} /><div className="blk hl" />
        </motion.div>
      </motion.div>
      <motion.div className="code" initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5, duration: .6 }}>
        <motion.div {...float(6, 8)}><b>GET</b> /api/orders<br />const rows = <b>await</b> db.query()<br />return <b>json</b>(rows)</motion.div>
      </motion.div>
      <motion.div className="arch" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7, duration: .6 }}>
        <svg viewBox="0 0 300 110" width="100%" aria-hidden="true">
          <g stroke="#182522" strokeWidth="1.5" fill="none"><path d="M70 55h50M180 28l-60 27M180 82l-60-27"/></g>
          <rect x="10" y="38" width="60" height="34" rx="8" fill="#fff" stroke="#182522" strokeWidth="1.5"/>
          <rect x="120" y="38" width="60" height="34" rx="4" fill="#D5F36A" stroke="#182522" strokeWidth="1.5"/>
          <rect x="180" y="10" width="60" height="34" rx="8" fill="#fff" stroke="#182522" strokeWidth="1.5"/>
          <rect x="180" y="66" width="60" height="34" rx="8" fill="#fff" stroke="#182522" strokeWidth="1.5"/>
          <g fontSize="11" fontFamily="Inter" textAnchor="middle" fill="#182522"><text x="40" y="59">App</text><text x="150" y="59">API</text><text x="210" y="31">Data</text><text x="210" y="87">Auth</text></g>
        </svg>
      </motion.div>
    </div>
  )
}

export function Home() {
  const e = (i) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * .1, duration: .5 } })
  return (
    <Page title="Digital engineering studio" desc="Plumbline designs, builds and scales websites, applications and intelligent software for growing businesses.">
      <div className="wrap hero">
        <div className="stack">
          <motion.p className="eyebrow" {...e(0)}>INDEPENDENT DIGITAL ENGINEERING STUDIO</motion.p>
          <motion.h1 {...e(1)}>We turn complex ideas into digital products that work.</motion.h1>
          <motion.p className="lead mut" {...e(2)}>We design, build and scale websites, applications and intelligent software solutions for businesses that need a dependable engineering partner.</motion.p>
          <motion.div className="row" {...e(3)}><Btn to="/contact">Start a Project</Btn><Btn to="/work" kind="">Explore Our Work</Btn></motion.div>
          <motion.p className="mut" style={{ fontSize: '.9rem' }} {...e(4)}>Web · Mobile · APIs · AI automation · UI/UX</motion.p>
        </div>
        <HeroVisual />
      </div>
      <div className="strip"><div className="wrap row"><span>React</span><span>Node.js</span><span>PostgreSQL</span><span>React Native</span><span>Python</span><span>Docker</span></div></div>

      <section><div className="wrap grid2"><Reveal><h2>Small team. Senior engineers. One accountable partner.</h2></Reveal>
        <Reveal delay={.1}><p className="lead mut">You work directly with the people building your product. We keep scope clear, ship in short iterations and explain trade-offs in plain language, so business owners and technical leads can both make good decisions.</p></Reveal></div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap"><Reveal><h2 style={{ marginBottom: 32 }}>What we build</h2></Reveal>
        {services.map((s, i) => <Link key={s.slug} to={`/services/${s.slug}`} className="svc"><span className="n">0{i + 1}</span><h3>{s.title}</h3><p className="mut">{s.summary}</p><ArrowRight aria-hidden="true" /></Link>)}</div></section>

      <section className="dark"><div className="wrap"><h2 style={{ marginBottom: 12 }}>How we work</h2><p className="lead mut" style={{ marginBottom: 36 }}>Five stages, each with something you can review.</p>
        <div className="steps">{steps.map(([t, d], i) => <div key={t}><span>0{i + 1}</span><h3 style={{ margin: '6px 0' }}>{t}</h3><p className="mut">{d}</p></div>)}</div></div></section>

      <section><div className="wrap"><div className="row" style={{ justifyContent: 'space-between', marginBottom: 32 }}><h2>Selected concept work</h2><Btn to="/work" kind="">All projects</Btn></div>
        <div className="grid3">{projects.map(p => <Link key={p.slug} to={`/work/${p.slug}`} className="pj"><Mock p={p} /><h3 style={{ marginTop: 16 }}>{p.name}</h3><p className="mut">{p.summary}</p></Link>)}</div>
        <p className="mut" style={{ marginTop: 20, fontSize: '.9rem' }}>These are fictional concept projects created to show our approach. They are not client engagements.</p></div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap grid2"><h2>Questions, answered</h2><div><Faq items={faqs} /></div></div></section>
      <CtaBand />
    </Page>
  )
}

export const Services = () => (
  <Page title="Services" desc="Websites, custom software, mobile apps, AI integration and UI/UX design from Plumbline Studio.">
    <section><div className="wrap stack"><h1>Services</h1><p className="lead mut">Pick one capability or combine several. Each service page explains the problems we solve, what you receive and the technology we use.</p></div></section>
    <div className="wrap" style={{ paddingBottom: 80 }}>{services.map((s, i) => <Link key={s.slug} to={`/services/${s.slug}`} className="svc"><span className="n">0{i + 1}</span><h3>{s.title}</h3><p className="mut">{s.summary}</p><ArrowRight aria-hidden="true" /></Link>)}</div>
    <CtaBand />
  </Page>
)

export function ServiceDetail() {
  const s = services.find(x => x.slug === useParams().slug)
  if (!s) return <Navigate to="/404" replace />
  return (
    <Page title={s.title} desc={s.summary}>
      <section><div className="wrap stack"><Link to="/services" className="eyebrow">ALL SERVICES</Link><h1>{s.title}</h1><p className="lead mut">{s.summary}</p><Btn to="/contact">Discuss this service</Btn></div></section>
      <section className="sm"><div className="wrap grid2">
        <div className="card"><h3>Problems this solves</h3><ul className="tick">{s.solves.map(x => <li key={x}>{x}</li>)}</ul></div>
        <div className="card"><h3>What you receive</h3><ul className="tick">{s.delivers.map(x => <li key={x}>{x}</li>)}</ul></div></div></section>
      <section className="sm"><div className="wrap"><h3 style={{ marginBottom: 16 }}>Technology we typically use</h3>{s.stack.map(t => <span className="tag" key={t}>{t}</span>)}
        <p className="mut" style={{ marginTop: 12, maxWidth: '62ch' }}>Quality checks, accessibility review and security basics are part of every delivery, and we choose tools to match your team's ability to maintain them.</p></div></section>
      <section className="sm"><div className="wrap grid2"><h2>Common questions</h2><div><Faq items={s.faq} /></div></div></section>
      <CtaBand />
    </Page>
  )
}

export const Work = () => (
  <Page title="Work" desc="Concept projects that show how Plumbline approaches product design and engineering.">
    <section><div className="wrap stack"><h1>Work</h1><p className="lead mut">Three fictional concept projects that demonstrate our process. They are demonstrations, not completed client engagements.</p></div></section>
    <div className="wrap grid2" style={{ paddingBottom: 80 }}>{projects.map(p => <Link key={p.slug} to={`/work/${p.slug}`} className="pj"><Mock p={p} /><p className="mut" style={{ marginTop: 14, fontSize: '.9rem' }}>{p.type}</p><h3>{p.name}</h3><p className="mut">{p.summary}</p></Link>)}</div>
    <CtaBand />
  </Page>
)

export function CaseStudy() {
  const i = projects.findIndex(x => x.slug === useParams().slug)
  if (i < 0) return <Navigate to="/404" replace />
  const p = projects[i], next = projects[(i + 1) % projects.length]
  return (
    <Page title={p.name} desc={p.summary}>
      <section><div className="wrap stack"><Link to="/work" className="eyebrow">ALL WORK</Link><h1>{p.name}</h1><p className="lead mut">{p.summary}</p><p className="mut">{p.type}. Fictional concept, not a client engagement.</p></div></section>
      <div className="wrap"><Mock p={p} /></div>
      <section><div className="wrap grid2"><div className="stack"><h2>The problem</h2><p className="mut">{p.problem}</p><h2>The solution</h2><p className="mut">{p.solution}</p></div>
        <div className="stack"><div className="card"><h3>Key features</h3><ul className="tick">{p.features.map(f => <li key={f}>{f}</li>)}</ul></div><div>{p.stack.map(t => <span className="tag" key={t}>{t}</span>)}</div></div></div></section>
      <section className="sm dark"><div className="wrap row" style={{ justifyContent: 'space-between' }}><h2>Next: {next.name}</h2><Btn to={`/work/${next.slug}`} kind="l">View project <ArrowUpRight size={18} /></Btn></div></section>
      <CtaBand />
    </Page>
  )
}

export const Process = () => (
  <Page title="Process" desc="How Plumbline takes a project from discovery to launch and ongoing support.">
    <section><div className="wrap stack"><h1>How we work</h1><p className="lead mut">A clear path from first conversation to a product in use.</p></div></section>
    <div className="wrap" style={{ paddingBottom: 80 }}>{steps.map(([t, d], i) => <Reveal key={t}><div className="svc" style={{ gridTemplateColumns: '60px 1fr 2fr' }}><span className="n">0{i + 1}</span><h3>{t}</h3><p className="mut">{d}</p></div></Reveal>)}</div>
    <CtaBand />
  </Page>
)

export const About = () => (
  <Page title="About" desc="Plumbline is an independent digital engineering studio focused on dependable software.">
    <section><div className="wrap grid2"><div className="stack"><h1>Built straight, built to last.</h1></div>
      <div className="stack"><p className="lead mut">A plumb line is the simplest tool for checking that something is true. That idea guides our work: clear requirements, honest estimates and software that holds up after launch.</p>
        <p className="mut">Plumbline is a fictional studio created for this demo. Replace this page with your real story, team and values before publishing.</p></div></div></section>
    <section className="sm dark"><div className="wrap grid3">{[['Technical expertise', 'Modern, maintainable engineering.'], ['Reliability', 'Clear scope and dependable delivery.'], ['Business focus', 'Every feature ties back to a goal.']].map(([t, d]) => <div key={t}><h3>{t}</h3><p className="mut">{d}</p></div>)}</div></section>
    <CtaBand />
  </Page>
)

export function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [errs, setErrs] = useState({})
  const [status, setStatus] = useState('idle')
  const mail = import.meta.env.VITE_CONTACT_EMAIL
  const submit = (ev) => {
    ev.preventDefault()
    const e = {}
    if (!f.name.trim()) e.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email address.'
    if (f.message.trim().length < 10) e.message = 'Describe your project in at least 10 characters.'
    setErrs(e)
    if (Object.keys(e).length) return
    if (!mail) return setStatus('unconfigured')
    window.location.href = `mailto:${mail}?subject=${encodeURIComponent('Project enquiry from ' + f.name)}&body=${encodeURIComponent(f.message + '\n\nReply to: ' + f.email)}`
    setStatus('opened')
  }
  const field = (k, label, Tag = 'input', extra = {}) => (
    <div><label htmlFor={k}>{label}</label><Tag id={k} value={f[k]} onChange={ev => setF({ ...f, [k]: ev.target.value })} aria-invalid={!!errs[k]} aria-describedby={errs[k] ? k + '-e' : undefined} {...extra} />{errs[k] && <p className="err" id={k + '-e'}>{errs[k]}</p>}</div>
  )
  return (
    <Page title="Contact" desc="Tell Plumbline about your project and get a reply with questions and a suggested first step.">
      <section><div className="wrap grid2"><div className="stack"><h1>Start a project</h1><p className="lead mut">Share what you want to build and who it is for. A few sentences is enough.</p></div>
        <form className="stack card" onSubmit={submit} noValidate>
          {field('name', 'Your name', 'input', { autoComplete: 'name' })}
          {field('email', 'Email', 'input', { type: 'email', autoComplete: 'email' })}
          {field('message', 'About your project', 'textarea', { rows: 5 })}
          <button className="btn p" type="submit">Send enquiry</button>
          {status === 'unconfigured' && <p className="bad" role="alert">The contact destination is not configured. Set VITE_CONTACT_EMAIL in your .env file (see .env.example), then rebuild.</p>}
          {status === 'opened' && <p className="ok" role="status">Your email app should open with this message ready. Nothing is sent until you send it there.</p>}
        </form></div></section>
    </Page>
  )
}

export const NotFound = () => (
  <Page title="Page not found" desc="The page you requested could not be found.">
    <section><div className="wrap stack"><h1>We could not find that page.</h1><p className="lead mut">The link may be old or mistyped.</p><Btn to="/">Back to home</Btn></div></section>
  </Page>
)
