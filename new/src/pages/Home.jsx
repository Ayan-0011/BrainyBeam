import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Layers3, MoveUpRight, Workflow } from "lucide-react";
import { projects, processSteps, services, technologies, faqs } from "../data/site";

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="Illustration of connected product interface panels" role="img">
      <div className="art-orbit art-orbit-one" />
      <div className="art-orbit art-orbit-two" />
      <motion.div className="art-card art-card-main" animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        <div className="flex items-center justify-between border-b border-[#DFE5DF] pb-4">
          <div><p className="text-xs text-[#68736F]">Workspace / Overview</p><p className="mt-1 font-heading text-lg font-semibold">Product pulse</p></div>
          <span className="rounded-full bg-[#E8F3ED] px-3 py-1 text-xs text-[#0E8B72]">Live concept</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[["Clarity", "86%"], ["Delivery", "72%"], ["Focus", "94%"]].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-[#F7F8F4] p-3"><p className="text-[10px] text-[#68736F]">{label}</p><p className="mt-2 font-heading text-lg font-semibold">{value}</p></div>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-[#DFE5DF] p-4">
          <div className="flex items-center justify-between"><p className="text-xs font-semibold">Delivery rhythm</p><p className="text-[10px] text-[#68736F]">Last 6 cycles</p></div>
          <div className="chart-bars mt-4">{[35, 58, 44, 77, 63, 94, 70, 85].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
        </div>
      </motion.div>
      <motion.div className="art-card art-card-code" animate={{ y: [0, 6, 0], rotate: [2, 0, 2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <div className="flex gap-1.5"><i /><i /><i /></div>
        <p className="mt-4 font-mono text-xs text-[#0E8B72]">const product = {"{"}</p>
        <p className="mt-2 pl-3 font-mono text-xs text-[#68736F]">purpose: "make it useful",</p>
        <p className="mt-2 pl-3 font-mono text-xs text-[#68736F]">quality: "built to last"</p>
        <p className="mt-2 font-mono text-xs text-[#0E8B72]">{"}"}</p>
      </motion.div>
      <motion.div className="art-card art-card-note" animate={{ y: [0, -5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D5F36A]"><Check size={17} /></span>
        <div><p className="text-xs font-semibold">A clearer workflow</p><p className="mt-1 text-[10px] text-[#68736F]">From idea to interface</p></div>
      </motion.div>
      <div className="art-node art-node-one" /><div className="art-node art-node-two" />
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.55, ease: "easeOut" } },
  };

  return (
    <>
      <section className="container-shell home-hero">
        <motion.div className="hero-copy" initial={reduceMotion ? false : "hidden"} animate="visible" variants={reveal}>
          <p className="eyebrow"><span className="eyebrow-dot" /> Independent digital engineering studio</p>
          <h1 className="hero-title">We turn complex ideas into <span>digital products</span> that work.</h1>
          <p className="hero-description">We bring product thinking, purposeful design, and dependable engineering together to help teams make their next digital move with confidence.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="button-primary">Start a project <ArrowUpRight size={16} /></Link>
            <Link to="/work" className="button-secondary">Explore our work <ArrowRight size={16} /></Link>
          </div>
          <div className="hero-footnote"><span className="hero-footnote-line" />Built around people, not just technology.</div>
        </motion.div>
        <HeroArtwork />
      </section>

      <section className="container-shell trust-strip">
        <p>One connected approach</p>
        <div><span>Strategy</span><i /><span>Design</span><i /><span>Engineering</span><i /><span>Delivery</span></div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="section-topline"><p className="eyebrow">What we do</p><Link to="/services" className="text-link">All capabilities <ArrowUpRight size={15} /></Link></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <motion.div key={service.slug} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.08, duration: reduceMotion ? 0 : 0.45 }} className="service-card">
                <span className="service-number">{service.number}</span>
                <div className="service-icon">{index === 0 ? <Code2 /> : index === 1 ? <Layers3 /> : <Workflow />}</div>
                <h3>{service.title}</h3><p>{service.description}</p>
                <Link to={`/services/${service.slug}`} className="text-link mt-6">Explore service <ArrowRight size={15} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="section-topline"><div><p className="eyebrow">Selected explorations</p><h2 className="section-heading mt-4">Ideas made tangible.</h2></div><Link to="/work" className="text-link">View all work <ArrowUpRight size={15} /></Link></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link to={`/work/${project.slug}`} key={project.slug} className="project-card group">
                <div className="project-visual" style={{ background: project.color }}>
                  <div className="project-mini-window">
                    <div className="flex items-center justify-between border-b border-[#DFE5DF] pb-3"><span className="font-heading font-semibold">{project.title}</span><MoveUpRight size={16} /></div>
                    <div className="mt-4 grid grid-cols-3 gap-2"><span className="h-16 rounded-lg bg-[#E8F3ED]" /><span className="h-16 rounded-lg bg-[#F7F8F4]" /><span className="h-16 rounded-lg bg-[#D5F36A]" /></div>
                    <div className="mt-3 h-2 w-2/3 rounded bg-[#DFE5DF]" />
                  </div>
                  <span className="concept-tag">Concept project</span>
                </div>
                <div className="pt-5"><p className="text-xs font-semibold text-[#0E8B72]">{project.category}</p><h3 className="mt-2 font-heading text-2xl font-semibold">{project.title}</h3><p className="muted-copy mt-2 text-sm">{project.description}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#14221F] text-white">
        <div className="container-shell">
          <p className="eyebrow text-[#D5F36A]">How we work</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div><h2 className="section-heading">Good work comes from a clear process.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#B3C0B9]">A shared understanding of the problem keeps design and engineering focused on what matters most.</p><Link to="/process" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#D5F36A]">Explore our process <ArrowUpRight size={15} /></Link></div>
            <div className="grid gap-0 sm:grid-cols-2">
              {processSteps.slice(0, 4).map((step) => <div key={step.number} className="border-t border-white/20 py-5 sm:px-5"><p className="text-xs text-[#D5F36A]">{step.number}</p><h3 className="mt-3 font-heading text-xl font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-[#B3C0B9]">{step.description}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="eyebrow">Technology, thoughtfully chosen</p><h2 className="section-heading mt-4">The right tools for the right reasons.</h2><p className="muted-copy mt-4 text-sm">Technology should support the product's needs, not dictate them. We consider capability, complexity, security, and maintainability.</p><Link to="/technology" className="text-link mt-6">Explore technology <ArrowUpRight size={15} /></Link></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {technologies.map((group) => <div key={group.category} className="surface-card p-5"><h3 className="font-heading text-lg font-semibold">{group.category}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.slice(0, 5).map((item) => <span key={item} className="tech-chip">{item}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <p className="eyebrow">Questions, answered</p><h2 className="section-heading mt-4">A few useful things to know.</h2>
          <div className="mt-8 max-w-3xl divide-y divide-[#DFE5DF] border-y border-[#DFE5DF]">
            {faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="cursor-pointer list-none pr-8 font-heading text-lg font-medium marker:content-none">{faq.question}<span className="float-right text-[#0E8B72]">+</span></summary><p className="muted-copy pt-3 text-sm leading-6">{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-24">
        <div className="home-cta">
          <div><p className="eyebrow text-[#D5F36A]">Have a challenge in mind?</p><h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold sm:text-5xl">Let's make the next step clearer.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#B3C0B9]">Start with the problem you're trying to solve. We can work from there.</p></div>
          <Link to="/contact" className="button-lime">Discuss a project <ArrowDownRight size={17} /></Link>
        </div>
      </section>
    </>
  );
}
