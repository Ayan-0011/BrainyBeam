import PageIntro from '../components/ui/PageIntro.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import NotFound from './NotFound.jsx';
import { legalContent } from '../data/legal.js';

export default function Legal({ type }) {
  const data = legalContent[type];
  if (!data) return <NotFound />;

  return <>
    <PageIntro eyebrow="THE IMPORTANT BITS" title={data.title} italic={data.italic} description={data.intro} number="LEGAL / 02" />
    <section className="legal-layout">
      <aside>
        <span className="eyebrow">ON THIS PAGE</span>
        {data.sections.map((s, i) => <a key={s[0]} href={`#legal-${i}`}>{s[0]}</a>)}
      </aside>
      <div className="legal-copy">
        {data.sections.map((s, i) => <article id={`legal-${i}`} key={s[0]}><span>0{i + 1} / POLICY</span><h2>{s[0]}</h2><p>{s[1]}</p></article>)}
      </div>
    </section>
    <ContactSection />
  </>;
}
