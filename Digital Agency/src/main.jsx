import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Plus, MoveUpRight, MoveDownRight, Asterisk, MoveRight } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { slug:'north-objects', no:'01', name:'NORTH / OBJECTS', type:'Brand world · E-commerce', year:'2025', style:'north', category:'Brand & digital', line:'Objects for a slower life', intro:'A quieter kind of commerce for objects made to stay.', palette:'Sage / Clay / Chalk' },
  { slug:'afterhours', no:'02', name:'AFTERHOURS', type:'Culture · Digital experience', year:'2025', style:'after', category:'Digital experience', line:'The city after dark', intro:'A new digital home for the people who come alive after hours.', palette:'Vermilion / Ink / Apricot' },
  { slug:'fieldwork', no:'03', name:'FIELDWORK', type:'Strategy · Digital platform', year:'2024', style:'field', category:'Strategy & platform', line:'Made for the outside', intro:'Helping more people find their way back to the wild.', palette:'Moss / Sun / Sky' },
];
const serviceData = [
  { n:'01', title:'Marketing', desc:'Search, paid and social campaigns tuned for qualified pipeline.', items:['SEO Services','Local SEO','Google Ads','Meta Ads','YouTube Ads','Performance strategy','Content marketing','Email campaigns','Conversion optimisation','Analytics & reporting','Social media management','Influencer campaigns','Paid search','Remarketing','Marketing automation'], count:'15 SERVICES' },
  { n:'02', title:'Development', desc:'Fast, conversion-ready websites, stores and web apps.', items:['Website Development','Mobile App Development','E-commerce Development','Landing Pages','Custom Web Apps','Webflow Development','CMS Development','API Integration','Website Maintenance','Performance optimisation'], count:'10 SERVICES' },
  { n:'03', title:'Design & Content', desc:'Brand systems, creative and content that earns attention.', items:['Branding & Logo','UI/UX Design','Graphic Design','Video & Reels Production','Product Photography','Art Direction','Motion Design','Social Creatives','Packaging Design','Brand Guidelines'], count:'10 SERVICES' },
  { n:'04', title:'AI & Automation', desc:'Chatbots, voice agents and workflows that run 24/7.', items:['AI Chatbots','AI Automations','CRM & Sales Automation','Voice AI Agents','Custom GPTs & AI Integration'], count:'5 SERVICES' },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0,0); ScrollTrigger.refresh(); }, [pathname]);
  return null;
}

function Brand({ light=false }) {
  return <Link to="/" className={`wordmark ${light?'wordmark-light':''}`} aria-label="Form Shift home">FORM<span>/</span>SHIFT<sup>®</sup></Link>;
}

function Navigation() {
  const [open,setOpen] = useState(false);
  const panelRef = useRef(null);
  const itemsRef = useRef([]);
  const location = useLocation();
  useEffect(()=>{ setOpen(false); },[location.pathname]);
  useEffect(()=>{
    document.body.classList.toggle('menu-open',open);
    const panel=panelRef.current;
    if(!panel) return;
    if(open){
      gsap.set(panel,{autoAlpha:1,clipPath:'inset(0% 0% 100% 0% round 18px)'});
      gsap.timeline()
        .to(panel,{clipPath:'inset(0% 0% 0% 0% round 18px)',duration:.72,ease:'power4.inOut'})
        .fromTo(itemsRef.current.filter(Boolean),{y:38,opacity:0,rotate:2},{y:0,opacity:1,rotate:0,stagger:.075,duration:.55,ease:'power3.out'},'-=.28')
        .fromTo('.menu-meta',{opacity:0,y:12},{opacity:1,y:0,duration:.4},'-=.2');
    } else {
      gsap.to(panel,{clipPath:'inset(0% 0% 100% 0% round 18px)',duration:.48,ease:'power3.inOut',onComplete:()=>gsap.set(panel,{autoAlpha:0})});
    }
    return ()=>document.body.classList.remove('menu-open');
  },[open]);
  const nav=[['01','Work','/work'],['02','Services','/services'],['03','Studio','/about'],['04','Contact','/contact']];
  return <header className="site-nav">
    <Brand/>
    <div className="nav-center"><span>INDEPENDENT DIGITAL STUDIO</span><span>AHMEDABAD · WORKING EVERYWHERE</span></div>
    <div className="nav-actions">
      <Link className="nav-brief" to="/contact">Start a project <ArrowUpRight size={14}/></Link>
      <button className={`menu-button ${open?'menu-button-open':''}`} onClick={()=>setOpen(v=>!v)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>
        <span>{open?'CLOSE':'MENU'}</span><i>{open?<X size={17}/>:<Menu size={17}/>}</i>
      </button>
    </div>
    <div className="menu-panel" ref={panelRef} aria-hidden={!open}>
      <div className="menu-panel-top"><span>FORM/SHIFT® — NAVIGATION</span><span>GOOD IDEAS MOVE PEOPLE.</span><button onClick={()=>setOpen(false)} aria-label="Close menu"><X size={19}/></button></div>
      <div className="menu-panel-body">
        <div className="menu-links">
          {nav.map(([n,label,to],i)=><NavLink key={to} to={to} onClick={()=>setOpen(false)} ref={el=>itemsRef.current[i]=el}><span>{n}</span><b>{label}</b><ArrowUpRight/></NavLink>)}
        </div>
        <div className="menu-aside"><div className="menu-glyph"><div className="glyph-ring"></div><div className="glyph-core">F<span>/</span>S</div><Asterisk className="glyph-star"/></div><div className="menu-meta"><span>INDEPENDENT THINKING.<br/>DIGITAL THINGS WITH FEELING.</span><a href="mailto:hello@formshift.studio">HELLO@FORMSHIFT.STUDIO <ArrowUpRight size={13}/></a><span className="menu-availability"><i/> AVAILABLE FOR SELECT PROJECTS</span></div></div>
      </div>
      <div className="menu-panel-bottom"><span>© FORM/SHIFT 2026</span><span>SCROLL LESS. NOTICE MORE.</span><span>01 — 04</span></div>
    </div>
    {open&&<button className="menu-scrim" onClick={()=>setOpen(false)} aria-label="Close navigation overlay"/>}
  </header>;
}

function Hero() {
  const ref=useRef(null);
  useEffect(()=>{
    const ctx=gsap.context(()=>{
      gsap.from('.hero-kicker > *',{y:18,opacity:0,duration:.7,stagger:.1,ease:'power3.out',delay:.12});
      gsap.from('.hero-word-line',{yPercent:125,rotate:3,opacity:0,duration:1.2,stagger:.12,ease:'power4.out',delay:.18});
      gsap.from('.hero-summary, .hero-sticker, .hero-scroll-cue',{y:24,opacity:0,duration:.8,stagger:.1,ease:'power3.out',delay:.65});
      gsap.to('.hero-emblem',{rotate:360,duration:32,repeat:-1,ease:'none'});
      gsap.to('.emblem-petal',{rotate:90,scale:1.08,duration:4,repeat:-1,yoyo:true,stagger:.25,ease:'sine.inOut'});
      gsap.to('.hero-orbit-a',{rotate:18,x:20,y:-10,scrollTrigger:{trigger:ref.current,start:'top top',end:'bottom top',scrub:1}});
      gsap.to('.hero-orbit-b',{rotate:-28,x:-30,y:30,scrollTrigger:{trigger:ref.current,start:'top top',end:'bottom top',scrub:1}});
      gsap.to('.hero-emblem-wrap',{yPercent:30,scale:.75,opacity:.55,scrollTrigger:{trigger:ref.current,start:'top top',end:'bottom top',scrub:1}});
    },ref);
    return ()=>ctx.revert();
  },[]);
  return <section className="hero" id="top" ref={ref}>
    <div className="hero-kicker"><span>CREATIVE TECHNOLOGY FOR AMBITIOUS PEOPLE</span><span>EST. 2026 — INDEPENDENT BY DESIGN</span></div>
    <div className="hero-composition">
      <div className="hero-emblem-wrap" aria-hidden="true">
        <div className="hero-orbit hero-orbit-a"></div><div className="hero-orbit hero-orbit-b"></div>
        <div className="hero-emblem"><div className="emblem-petal petal-a"></div><div className="emblem-petal petal-b"></div><div className="emblem-petal petal-c"></div><div className="emblem-petal petal-d"></div><div className="emblem-core">F<span>/</span>S</div></div>
        <span className="emblem-note note-a">INDEPENDENT BY DESIGN</span><span className="emblem-note note-b">FIG. 001 / SHIFT THE EXPECTED</span>
      </div>
      <div className="hero-type">
        <h1><span className="hero-word-line">MAKE IT</span><span className="hero-word-line second">MEAN <i>MORE.</i></span></h1>
        <div className="hero-sticker"><span>GOOD WORK</span><b>NO<br/>NOISE</b><ArrowDownRight/></div>
      </div>
    </div>
    <div className="hero-bottom"><p className="hero-summary">We turn sharp thinking into brands, digital experiences and technology people <em>want to spend time with.</em></p><Link className="hero-round-link" to="/work" aria-label="Explore work"><ArrowDownRight/></Link><div className="hero-scroll-cue"><span>SCROLL TO GET THE PICTURE</span><div><i/></div></div></div>
    <div className="hero-index"><span>01 / 05</span><span>KEEP GOING ↓</span></div>
  </section>;
}

function Marquee({children, dark=false}) { return <div className={`marquee ${dark?'marquee-dark':''}`} aria-hidden="true"><div className="marquee-track">{Array.from({length:4},(_,i)=><span key={i}>{children} <b>✳</b></span>)}</div></div>; }

function ProjectArtwork({project}) {
  return <div className={`project-art art-${project.style}`}>
    <div className="art-labels"><span>{project.category.toUpperCase()}</span><span>{project.no} / 03</span></div>
    {project.style==='north'&&<><div className="north-disc"></div><div className="north-block"></div><div className="north-copy">LESS,<br/>BUT<br/><i>BETTER.</i></div><span className="art-caption">N / OBJECTS</span></>}
    {project.style==='after'&&<><div className="after-sphere"></div><div className="after-orbit"></div><div className="after-copy">AFTER<br/><i>HOURS</i></div><span className="art-caption">CITY / 0025</span></>}
    {project.style==='field'&&<><div className="field-sun"></div><div className="field-hill field-hill-a"></div><div className="field-hill field-hill-b"></div><div className="field-copy">GO<br/>OUT<span>↗</span></div><span className="art-caption">F / WILD</span></>}
    <span className="art-big-number">{project.no}</span>
  </div>;
}

function WorkSection({compact=false}) {
  return <section className={`work-section ${compact?'work-compact':''}`} id="work">
    <div className="section-head"><div><span className="eyebrow">A FEW THINGS WE'VE MADE</span><h2>Work that<br/><em>does the talking.</em></h2></div><p>Different challenges.<br/>Different answers.<br/><span>Always made with intent.</span></p></div>
    <div className="project-grid">
      {projects.map(p=><Link className="project-card" to={`/work/${p.slug}`} key={p.slug}><div className="project-visual"><ProjectArtwork project={p}/><span className="project-open"><ArrowUpRight/></span></div><div className="project-meta"><div><span>{p.no} — {p.type}</span><h3>{p.name}</h3></div><span>{p.year}<ArrowUpRight size={14}/></span></div></Link>)}
    </div>
    <div className="work-bottom"><span>SELECTED WORK / 2024—2026</span><Link className="text-link" to="/work">EXPLORE ALL PROJECTS <ArrowUpRight size={15}/></Link></div>
  </section>;
}

function StudioSection() {
  return <section className="studio-section" id="studio">
    <div className="studio-left"><span className="eyebrow">SMALL STUDIO. BIG PICTURE.</span><h2>We make the<br/>complicated feel<br/><em>obvious.</em></h2><div className="studio-seal"><span>INDEPENDENT<br/>THINKING</span><b>↗</b><span>BY DESIGN<br/>SINCE DAY ONE</span></div></div>
    <div className="studio-right"><div className="studio-image"><div className="studio-image-grid"></div><div className="studio-image-type">THINK<br/>THEN<br/><i>MAKE.</i></div><span className="image-note">A GOOD PLACE TO START / 001</span></div><p>We're a deliberately independent digital studio bringing strategy, design and technology into the same room. No layers of account managers. No recycled playbooks. Just a close-knit team, a clear point of view and the right people around the table.</p><Link className="text-link" to="/about">MEET THE STUDIO <ArrowUpRight size={15}/></Link></div>
  </section>;
}

function ServiceAccordion({full=false}) {
  const [active,setActive]=useState(full?0:-1);
  return <div className="service-list">{serviceData.map((s,i)=><div className={`service-row ${active===i?'active':''}`} key={s.n}>
    <button onClick={()=>setActive(active===i?-1:i)} aria-expanded={active===i}><span className="service-no">{s.n}</span><span className="service-title">{s.title}</span><span className="service-plus">{active===i?<X size={17}/>:<Plus size={17}/>}</span></button>
    <div className="service-detail" style={{gridTemplateRows:active===i?'1fr':'0fr'}}><div className="service-detail-inner"><p>{s.desc}</p><div className="service-tags">{(full?s.items:s.items.slice(0,5)).map(item=><span key={item}>{item}<ArrowUpRight size={12}/></span>)}</div><span className="service-count">{s.count}</span></div></div>
  </div>)}</div>;
}

function ServicesSection({full=false}) {
  return <section className={`services-section ${full?'services-full':''}`} id="services"><div className="services-intro"><span className="eyebrow">WHAT WE BRING TO THE TABLE</span><h2>One studio.<br/><em>Many ways in.</em></h2><p>Bring us a problem, a half-formed idea or a very clear ambition. We'll work out what it needs.</p>{!full&&<Link className="text-link" to="/services">ALL SERVICES <ArrowUpRight size={15}/></Link>}</div><ServiceAccordion full={full}/></section>;
}

function Manifesto() {
  const ref=useRef(null);
  useEffect(()=>{const ctx=gsap.context(()=>{gsap.from('.manifesto-word',{yPercent:110,rotate:2,stagger:.13,duration:1,ease:'power4.out',scrollTrigger:{trigger:ref.current,start:'top 70%'}});gsap.to('.manifesto-orb',{rotate:360,ease:'none',scrollTrigger:{trigger:ref.current,start:'top bottom',end:'bottom top',scrub:1}});},ref);return()=>ctx.revert();},[]);
  return <section className="manifesto-section" ref={ref}><div className="manifesto-top"><span className="eyebrow">A POINT OF VIEW</span><span>02 — 04</span></div><div className="manifesto-copy"><span className="manifesto-word">LESS</span><span className="manifesto-word">SAME.</span><span className="manifesto-word manifesto-outline">MORE <i>SOUL.</i></span></div><div className="manifesto-orb"><div></div><span>MAKE<br/>IT MATTER</span></div><p className="manifesto-note">The internet has enough of the expected.<br/>We’re here for the work with a point of view.</p></section>;
}

function ContactForm() {
  const [sent,setSent]=useState(false);
  const [form,setForm]=useState({name:'',email:'',project:''});
  const update=e=>setForm({...form,[e.target.name]:e.target.value});
  return <form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true);}}>
    {sent?<div className="form-success"><span>MESSAGE READY ✓</span><h3>Good start.<br/><em>Let's keep talking.</em></h3><p>This is a prototype. Connect a form service or backend before launch.</p><button type="button" onClick={()=>setSent(false)}>SEND ANOTHER <ArrowRight size={15}/></button></div>:<>
      <label>01 — YOUR NAME<input name="name" value={form.name} onChange={update} placeholder="What should we call you?" required/></label>
      <label>02 — YOUR EMAIL<input name="email" type="email" value={form.email} onChange={update} placeholder="you@somewhere.com" required/></label>
      <label>03 — THE STARTING POINT<textarea name="project" value={form.project} onChange={update} placeholder="A little about what you have in mind..." rows="3" required/></label>
      <button className="submit-btn" type="submit">SEND THE FIRST NOTE <ArrowUpRight size={17}/></button>
    </>}
  </form>;
}

function ContactSection() {
  return <section className="contact-section" id="contact"><div className="contact-top"><span className="eyebrow">GOT SOMETHING GOOD?</span><span>LET'S MAKE IT REAL ↘</span></div><div className="contact-layout"><div className="contact-heading"><h2>Have a<br/>good <em>one.</em></h2><p>Tell us what you're thinking. Big brief, small question, or just a feeling that something could be better.</p><a href="mailto:hello@formshift.studio">HELLO@FORMSHIFT.STUDIO <ArrowUpRight size={15}/></a></div><ContactForm/></div><div className="contact-graphic" aria-hidden="true"><div className="contact-graphic-ring"></div><span>GOOD<br/>THINGS<br/><i>START</i><br/>HERE.</span></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="footer-main"><Brand light/><p>Independent thinking.<br/>Digital things with feeling.</p><div className="footer-links"><Link to="/work">Work <ArrowUpRight size={13}/></Link><Link to="/about">Studio <ArrowUpRight size={13}/></Link><Link to="/services">Services <ArrowUpRight size={13}/></Link><Link to="/contact">Contact <ArrowUpRight size={13}/></Link></div><a href="#top" className="back-top" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}}>BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© 2026 FORM/SHIFT STUDIO — CONCEPT BRAND</span><span>BUILT TO BE DIFFERENT. MADE TO WORK.</span><div><Link to="/privacy-policy">PRIVACY</Link><Link to="/terms">TERMS</Link></div></div></footer>;
}

function HomePage() {
  return <><Hero/><Marquee>INDEPENDENT BY DESIGN</Marquee><WorkSection compact/><StudioSection/><ServicesSection/><Manifesto/><ContactSection/></>;
}

function PageIntro({eyebrow,title,italic,description,number='01 — 04'}) {
  return <section className="page-intro"><div className="page-intro-top"><span className="eyebrow">{eyebrow}</span><span>{number}</span></div><h1>{title}<br/><em>{italic}</em></h1>{description&&<p>{description}</p>}<div className="page-intro-glyph"><div className="glyph-ring"></div><div className="glyph-core">F<span>/</span>S</div></div></section>;
}

function WorkPage() {
  return <><PageIntro eyebrow="SELECTED PROJECTS / 2024—2026" title="Proof over" italic="promises." description="A few collaborations, each with a different question to answer and a point of view worth protecting."/><WorkSection/><Marquee>GOOD WORK TRAVELS</Marquee><ContactSection/></>;
}

function CaseStudyPage() {
  const {slug}=useParams();
  const project=projects.find(p=>p.slug===slug);
  if(!project) return <NotFound/>;
  return <><section className={`case-hero case-${project.style}`}><div className="case-kicker"><span>CASE STUDY / {project.no}</span><span>{project.year} · {project.category}</span></div><h1>{project.name.split(' / ')[0]}<br/><em>{project.name.includes('/')?project.name.split('/')[1]:project.style==='after'?'After dark':'Field notes'}.</em></h1><p>{project.intro}</p><div className="case-art-wrap"><ProjectArtwork project={project}/></div><div className="case-bottom"><span>ART DIRECTION / DIGITAL / STRATEGY</span><span>SCROLL TO EXPLORE ↓</span></div></section><section className="case-story"><div><span className="eyebrow">THE BRIEF</span><h2>Make it feel<br/><em>like nothing else.</em></h2></div><div><p>{project.intro} We worked across strategy, art direction and digital experience to build a distinct world with a clear purpose and a memorable point of view.</p><div className="case-facts"><span>DISCIPLINES</span><b>{project.type}</b><span>PALETTE</span><b>{project.palette}</b><span>OUTCOME</span><b>A sharper story and a more useful digital home.</b></div></div></section><div className="case-next"><span className="eyebrow">MORE GOOD WORK</span><Link to="/work">BACK TO ALL PROJECTS <ArrowUpRight/></Link></div><ContactSection/></>;
}

function ServicesPage() {
  return <><PageIntro eyebrow="OUR CAPABILITIES" title="The right" italic="kind of help." description="No off-the-shelf packages. We bring the right mix of strategy, craft and technology to the problem in front of us." number="02 — 04"/><ServicesSection full/><div className="services-note"><span className="eyebrow">NOT SURE WHERE TO START?</span><h2>That's a good<br/><em>place to start.</em></h2><Link className="text-link" to="/contact">TELL US ABOUT IT <ArrowUpRight size={15}/></Link></div><ContactSection/></>;
}

function AboutPage() {
  return <><PageIntro eyebrow="A LITTLE ABOUT US" title="Independent" italic="by design." description="A small, curious studio for people who want to make a difference — not just make more noise." number="03 — 04"/><section className="about-statement"><span className="eyebrow">OUR POINT OF VIEW</span><h2>We believe the best work happens when <em>clear thinking</em> meets brave making.</h2><div className="about-orbit"><div className="glyph-core">F<span>/</span>S</div></div></section><section className="about-values"><article><span>01 / CURIOSITY</span><h3>Ask better<br/><em>questions.</em></h3><p>We start by listening, looking closer and getting to the heart of what actually needs to change.</p></article><article><span>02 / CRAFT</span><h3>Care about<br/><em>the details.</em></h3><p>Every choice earns its place. From the big idea to the tiny interaction someone feels but may never notice.</p></article><article><span>03 / COLLABORATION</span><h3>Better, <em>together.</em></h3><p>Good partnerships make good work. We keep the team close, the conversations honest and the process human.</p></article></section><Marquee dark>MAKE IT MATTER</Marquee><ContactSection/></>;
}

function ContactPage() {
  return <><PageIntro eyebrow="LET'S START SOMETHING" title="Have a" italic="good one." description="A first conversation doesn't need a perfect brief. Just tell us what you're thinking." number="04 — 04"/><ContactSection/></>;
}

const legalContent = {
  'privacy-policy': {title:'Privacy', italic:'without surprises.', intro:'Last updated: October 2026', sections:[['01. What we collect','If you contact us, we may receive the information you choose to share, such as your name, email address and project details.'],['02. How we use it','We use enquiry details to respond, discuss potential work and operate this website. We do not sell personal information.'],['03. Cookies & analytics','This prototype does not intentionally set analytics cookies. If analytics or third-party embeds are added, this policy should be updated to explain them.'],['04. Data retention','We keep enquiry information only as long as reasonably necessary for communication, business operations or legal requirements.'],['05. Your choices','You can request access to, correction of or deletion of personal information by contacting hello@formshift.studio.'],['06. Contact','For privacy questions, email hello@formshift.studio. This draft must be reviewed for the actual business and applicable laws before launch.']] },
  'terms': {title:'Terms &', italic:'conditions.', intro:'Last updated: October 2026', sections:[['01. Website information','This website is a concept prototype. Content, portfolio examples and service descriptions may be illustrative and should not be treated as a binding offer.'],['02. Services & proposals','Project scope, deliverables, timelines, fees and payment terms should be agreed in a written proposal or contract before work begins.'],['03. Intellectual property','Unless otherwise agreed in writing, website design, text and original artwork are protected by applicable intellectual property laws.'],['04. Third-party links','Links to third-party websites are provided for convenience. We are not responsible for their content, security or privacy practices.'],['05. Liability','To the extent permitted by law, use of this concept website is at your own discretion. Final terms should be reviewed by a qualified professional.'],['06. Contact','Questions about these terms can be sent to hello@formshift.studio. These draft terms should be replaced with terms appropriate to the operating business.']] }
};

function LegalPage({type}) {
  const data=legalContent[type];
  return <><PageIntro eyebrow="THE IMPORTANT BITS" title={data.title} italic={data.italic} description={data.intro} number="LEGAL / 02"/><section className="legal-layout"><aside><span className="eyebrow">ON THIS PAGE</span>{data.sections.map((s,i)=><a key={s[0]} href={`#legal-${i}`}>{s[0]}</a>)}</aside><div className="legal-copy">{data.sections.map((s,i)=><article id={`legal-${i}`} key={s[0]}><span>0{i+1} / POLICY</span><h2>{s[0]}</h2><p>{s[1]}</p></article>)}</div></section><ContactSection/></>;
}

function NotFound() {
  return <section className="not-found"><span className="eyebrow">404 / WRONG TURN</span><h1>Nothing<br/><em>here. Yet.</em></h1><Link className="text-link" to="/">BACK TO THE START <ArrowUpRight size={15}/></Link></section>;
}

function MotionRefresh() {
  const {pathname}=useLocation();
  useLayoutEffect(()=>{
    window.scrollTo(0,0);
    const ctx=gsap.context(()=>{
      gsap.fromTo('.page-intro h1, .case-hero h1, .not-found h1',{y:70,opacity:0,rotate:1},{y:0,opacity:1,rotate:0,duration:1,ease:'power4.out'});
      gsap.utils.toArray('.page-intro > p, .page-intro-top, .case-kicker, .case-hero > p').forEach(el=>gsap.from(el,{y:18,opacity:0,duration:.7,delay:.15,ease:'power3.out'}));
      gsap.utils.toArray('.project-card, .about-values article, .legal-copy article').forEach((el,i)=>gsap.from(el,{y:30,opacity:0,duration:.7,delay:(i%3)*.08,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}}));
      gsap.utils.toArray('.case-art-wrap, .about-statement h2, .services-note').forEach(el=>gsap.from(el,{scale:.96,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 82%'}}));
    });
    return ()=>ctx.revert();
  },[pathname]);
  return null;
}

function AppShell() {
  const location=useLocation();
  useEffect(()=>{
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce) return;
    const lenis=new Lenis({duration:1.15,smoothWheel:true,wheelMultiplier:.9,touchMultiplier:1.25});
    lenis.on('scroll',ScrollTrigger.update);
    const tick=time=>lenis.raf(time*1000);
    gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0);
    return ()=>{gsap.ticker.remove(tick);lenis.destroy();};
  },[]);
  return <><ScrollToTop/><MotionRefresh/><Navigation/><main>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/work" element={<WorkPage/>}/>
      <Route path="/work/:slug" element={<CaseStudyPage/>}/>
      <Route path="/services" element={<ServicesPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/privacy-policy" element={<LegalPage type="privacy-policy"/>}/>
      <Route path="/terms" element={<LegalPage type="terms"/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </main><Footer/></>;
}

createRoot(document.getElementById('root')).render(<BrowserRouter><AppShell/></BrowserRouter>);
