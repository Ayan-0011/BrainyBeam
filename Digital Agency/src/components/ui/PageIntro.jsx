export default function PageIntro({ eyebrow, title, italic, description, number = '01 — 04' }) {
  return (
    <section className="page-intro">
      <div className="page-intro-top"><span className="eyebrow">{eyebrow}</span><span>{number}</span></div>
      <h1>
        <span className="pi-line"><span>{title}</span></span>
        <span className="pi-line"><em>{italic}</em></span>
      </h1>
      {description && <p>{description}</p>}
      <div className="page-intro-glyph"><div className="glyph-ring" /><div className="glyph-core">F<span>/</span>S</div></div>
    </section>
  );
}
